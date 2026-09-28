import { cpSync, mkdirSync, rmSync, writeFileSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'
import { discoverPresentations, writeCatalogJson, ROOT, DIST_DIR } from './catalog.mjs'

function run(command, args, opts = {}) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
    ...opts,
  })
  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

const decks = discoverPresentations({ includeDrafts: false })
if (decks.length === 0) {
  console.error('No presentations found under presentations/*/slides.md')
  process.exit(1)
}

writeCatalogJson(decks)
console.log(`Building ${decks.length} presentation(s)...`)

rmSync(DIST_DIR, { recursive: true, force: true })
mkdirSync(DIST_DIR, { recursive: true })

// Optional root prefix for GitHub project pages, e.g. BASE_PATH=/session-slides
const baseRoot = (process.env.BASE_PATH || '').replace(/\/$/, '')

for (const deck of decks) {
  const outDir = join(DIST_DIR, deck.slug)
  const base = `${baseRoot}/${deck.slug}/`
  console.log(`\n→ ${deck.slug} (base ${base})`)
  run('pnpm', [
    'exec',
    'slidev',
    'build',
    deck.path,
    '--out',
    outDir, // absolute — Slidev resolves relative --out from the entry file dir
    '--base',
    base,
  ], { cwd: ROOT })
}

// Homepage
const homepageSrc = join(ROOT, 'homepage')
const catalog = JSON.parse(readFileSync(join(homepageSrc, 'catalog.json'), 'utf8'))

cpSync(join(homepageSrc, 'index.html'), join(DIST_DIR, 'index.html'))
cpSync(join(homepageSrc, 'styles.css'), join(DIST_DIR, 'styles.css'))
cpSync(join(homepageSrc, 'app.js'), join(DIST_DIR, 'app.js'))
cpSync(join(homepageSrc, 'catalog.json'), join(DIST_DIR, 'catalog.json'))
for (const asset of ['mentorbridge-logo.jpg', 'favicon.svg']) {
  const src = join(homepageSrc, asset)
  if (existsSync(src)) cpSync(src, join(DIST_DIR, asset))
}
if (existsSync(join(ROOT, 'public'))) {
  cpSync(join(ROOT, 'public'), DIST_DIR, { recursive: true })
}

// Helpful SPA fallback note file for static hosts that need it
writeFileSync(
  join(DIST_DIR, '_redirects'),
  `/:deck/*  /:deck/index.html  200\n`,
)

console.log(`\nDone. Open dist/index.html or run: pnpm preview`)
console.log(`Homepage lists ${catalog.count} topic(s).`)
