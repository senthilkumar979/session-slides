import { readdirSync, readFileSync, existsSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
export const ROOT = join(__dirname, '..')
export const PRESENTATIONS_DIR = join(ROOT, 'presentations')
export const DIST_DIR = join(ROOT, 'dist')

/**
 * Minimal YAML-ish frontmatter parser for catalog fields.
 * Supports: strings, numbers, booleans, inline arrays, and `|` / `>` blocks.
 */
export function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}

  const raw = match[1]
  const data = {}
  const lines = raw.split(/\r?\n/)
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (!kv) {
      i++
      continue
    }

    const key = kv[1]
    let value = kv[2]

    if (value === '|' || value === '>') {
      const block = []
      i++
      while (i < lines.length && (lines[i].startsWith('  ') || lines[i].startsWith('\t') || lines[i] === '')) {
        block.push(lines[i].replace(/^\s{2}|\t/, ''))
        i++
      }
      data[key] = block.join('\n').trim()
      continue
    }

    if (value === '') {
      data[key] = ''
    } else if (value === 'true' || value === 'false') {
      data[key] = value === 'true'
    } else if (/^-?\d+(\.\d+)?$/.test(value)) {
      data[key] = Number(value)
    } else if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean)
    } else {
      data[key] = value.replace(/^['"]|['"]$/g, '')
    }
    i++
  }

  return data
}

export function discoverPresentations({ includeDrafts = false } = {}) {
  if (!existsSync(PRESENTATIONS_DIR)) return []

  const entries = readdirSync(PRESENTATIONS_DIR, { withFileTypes: true })
  const decks = []

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith('_') || entry.name.startsWith('.')) continue

    const slidesPath = join(PRESENTATIONS_DIR, entry.name, 'slides.md')
    if (!existsSync(slidesPath)) continue

    const markdown = readFileSync(slidesPath, 'utf8')
    const meta = parseFrontmatter(markdown)

    if (meta.draft && !includeDrafts) continue

    decks.push({
      slug: entry.name,
      title: meta.title || entry.name,
      description: meta.info || meta.description || '',
      category: (meta.category || 'uncategorized').toLowerCase(),
      tags: Array.isArray(meta.tags) ? meta.tags : [],
      duration: meta.duration || '',
      level: meta.level || '',
      author: meta.author || 'Mentor Bridge',
      theme: meta.theme || 'default',
      draft: Boolean(meta.draft),
      path: slidesPath,
      href: `${(process.env.BASE_PATH || '').replace(/\/$/, '')}/${entry.name}/?present=1`,
    })
  }

  return decks.sort((a, b) => a.title.localeCompare(b.title))
}

export function writeCatalogJson(decks, outFile = join(ROOT, 'homepage', 'catalog.json')) {
  mkdirSync(dirname(outFile), { recursive: true })
  const payload = {
    generatedAt: new Date().toISOString(),
    count: decks.length,
    presentations: decks.map(({ path, ...rest }) => rest),
  }
  writeFileSync(outFile, `${JSON.stringify(payload, null, 2)}\n`)
  return payload
}

// CLI: `node scripts/catalog.mjs`
const isCli = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]
if (isCli) {
  const decks = discoverPresentations({ includeDrafts: true })
  const catalog = writeCatalogJson(decks)
  console.log(`Catalog: ${catalog.count} presentation(s)`)
  for (const deck of decks) {
    console.log(`  - ${deck.slug} [${deck.category}]${deck.draft ? ' (draft)' : ''}`)
  }
}
