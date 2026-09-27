import { mkdirSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { PRESENTATIONS_DIR } from './catalog.mjs'

const slug = process.argv[2]
const title = process.argv.slice(3).join(' ') || slug?.replace(/-/g, ' ')

if (!slug) {
  console.error('Usage: pnpm new <slug> [Title words...]')
  console.error('Example: pnpm new react-hooks "React Hooks Deep Dive"')
  process.exit(1)
}

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error('Slug must be kebab-case (e.g. git-fundamentals)')
  process.exit(1)
}

const dir = join(PRESENTATIONS_DIR, slug)
if (existsSync(dir)) {
  console.error(`Already exists: presentations/${slug}`)
  process.exit(1)
}

mkdirSync(dir, { recursive: true })

const displayTitle = title
  .split(/[\s-]+/)
  .filter(Boolean)
  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
  .join(' ')

const template = `---
theme: default
title: ${displayTitle}
info: |
  Short description of this session for the homepage catalog.
author: Mentor Bridge
category: technical
tags: []
duration: 45m
level: beginner
transition: slide-left
mdc: true
---

# ${displayTitle}

Session slides for Mentor Bridge engineering students

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: default
---

# Agenda

- Topic 1
- Topic 2
- Topic 3
- Q & A

---

# Key takeaways

1. Point one
2. Point two
3. Point three

---
layout: center
class: text-center
---

# Thank you

Questions?

<SessionFooter />
`

writeFileSync(join(dir, 'slides.md'), template)
console.log(`Created presentations/${slug}/slides.md`)
console.log(`Start it with: pnpm dev ${slug}`)
