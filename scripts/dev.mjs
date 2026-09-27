import { createServer } from 'node:http'
import { readFileSync, existsSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'
import { spawn } from 'node:child_process'
import { discoverPresentations, writeCatalogJson, ROOT, PRESENTATIONS_DIR } from './catalog.mjs'

const args = process.argv.slice(2)
const homeOnly = args.includes('--home')
const slugArg = args.find((a) => !a.startsWith('-'))

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
}

function startHomepage(port = 3000) {
  const decks = discoverPresentations({ includeDrafts: true })
  writeCatalogJson(decks)

  const homepageDir = join(ROOT, 'homepage')

  const server = createServer((req, res) => {
    const url = new URL(req.url || '/', `http://localhost:${port}`)
    let filePath = join(homepageDir, url.pathname === '/' ? 'index.html' : url.pathname)

    // Refresh catalog on each request so new decks show up without restart
    if (url.pathname === '/catalog.json') {
      const fresh = discoverPresentations({ includeDrafts: true })
      writeCatalogJson(fresh)
    }

    if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
      res.writeHead(404).end('Not found')
      return
    }

    const type = MIME[extname(filePath)] || 'application/octet-stream'
    res.writeHead(200, { 'Content-Type': type })
    res.end(readFileSync(filePath))
  })

  server.listen(port, () => {
    console.log(`\n  Homepage  http://localhost:${port}`)
    console.log(`  Topics    ${decks.length} presentation(s) discovered\n`)
    if (!homeOnly && !slugArg) {
      console.log('  Tip: run `pnpm dev <slug>` in another terminal to open a deck.')
      console.log('      Example: pnpm dev git-fundamentals\n')
    }
  })
}

function startDeck(slug, port = 3030) {
  const slides = join(PRESENTATIONS_DIR, slug, 'slides.md')
  if (!existsSync(slides)) {
    console.error(`Presentation not found: presentations/${slug}/slides.md`)
    console.error('\nAvailable:')
    for (const deck of discoverPresentations({ includeDrafts: true })) {
      console.error(`  - ${deck.slug}`)
    }
    process.exit(1)
  }

  console.log(`\n  Starting Slidev: ${slug}`)
  console.log(`  http://localhost:${port}/?present=1\n`)

  const child = spawn(
    'pnpm',
    ['exec', 'slidev', slides, '--open', '--port', String(port)],
    { stdio: 'inherit', cwd: ROOT, shell: process.platform === 'win32' },
  )

  child.on('exit', (code) => process.exit(code ?? 0))
}

if (slugArg) {
  startDeck(slugArg)
} else {
  startHomepage()
}
