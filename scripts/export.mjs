import { spawnSync } from 'node:child_process'
import { join } from 'node:path'
import { existsSync } from 'node:fs'
import { discoverPresentations, ROOT, PRESENTATIONS_DIR } from './catalog.mjs'

const slug = process.argv[2]
const format = process.argv[3] || 'pdf'

if (!slug) {
  console.error('Usage: pnpm export <slug> [pdf|png|pptx]')
  process.exit(1)
}

const slides = join(PRESENTATIONS_DIR, slug, 'slides.md')
if (!existsSync(slides)) {
  console.error(`Not found: presentations/${slug}/slides.md`)
  console.error('Available:', discoverPresentations({ includeDrafts: true }).map((d) => d.slug).join(', '))
  process.exit(1)
}

const result = spawnSync(
  'pnpm',
  ['exec', 'slidev', 'export', slides, '--format', format, '--output', join(PRESENTATIONS_DIR, slug, `export.${format === 'png' ? 'png' : format}`)],
  { stdio: 'inherit', cwd: ROOT, shell: process.platform === 'win32' },
)

process.exit(result.status ?? 1)
