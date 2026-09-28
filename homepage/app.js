const grid = document.getElementById('grid')
const meta = document.getElementById('meta')
const empty = document.getElementById('empty')
const searchInput = document.getElementById('search')
const filtersEl = document.getElementById('filters')

let presentations = []
let activeCategory = 'all'
let query = ''

async function loadCatalog() {
  const res = await fetch('./catalog.json', { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to load catalog.json')
  const data = await res.json()
  presentations = data.presentations || []
  renderFilters()
  render()
}

function categories() {
  const set = new Set(presentations.map((p) => p.category || 'uncategorized'))
  return ['all', ...[...set].sort()]
}

function renderFilters() {
  filtersEl.innerHTML = ''
  for (const cat of categories()) {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'filter-btn'
    btn.role = 'tab'
    btn.textContent = cat === 'all' ? 'All' : labelCategory(cat)
    btn.setAttribute('aria-selected', String(cat === activeCategory))
    btn.addEventListener('click', () => {
      activeCategory = cat
      renderFilters()
      render()
    })
    filtersEl.appendChild(btn)
  }
}

function labelCategory(cat) {
  return cat
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function filtered() {
  const q = query.trim().toLowerCase()
  return presentations.filter((p) => {
    if (activeCategory !== 'all' && p.category !== activeCategory) return false
    if (!q) return true
    const hay = [p.title, p.description, p.slug, ...(p.tags || [])].join(' ').toLowerCase()
    return hay.includes(q)
  })
}

function render() {
  const list = filtered()
  meta.textContent = `${list.length} topic${list.length === 1 ? '' : 's'}`
  empty.classList.toggle('hidden', list.length > 0)
  grid.innerHTML = ''

  for (const deck of list) {
    const card = document.createElement('a')
    card.className = 'card'
    card.href = deck.href
    card.setAttribute('aria-label', `Open ${deck.title} in presentation mode`)

    // Same-tab navigation keeps the user-gesture chain so fullscreen can start.
    card.addEventListener('click', (event) => {
      // Allow modified clicks (new tab) to behave normally.
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return

      // Local homepage (`pnpm dev`) only serves the catalog — decks run via `pnpm dev <slug>`.
      if (location.port === '3000') {
        event.preventDefault()
        const url = `http://localhost:3030/?present=1`
        const ok = window.confirm(
          `Start this deck in another terminal:\n\npnpm dev ${deck.slug}\n\nOpen ${url} now?`,
        )
        if (ok) window.open(url, '_blank', 'noopener')
        return
      }

      event.preventDefault()
      window.location.assign(deck.href)
    })

    const tags = (deck.tags || [])
      .slice(0, 4)
      .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
      .join('')

    card.innerHTML = `
      <div class="card-top">
        <span class="badge ${escapeHtml(deck.category)}">${escapeHtml(labelCategory(deck.category))}</span>
        ${deck.level ? `<span class="level">${escapeHtml(deck.level)}</span>` : ''}
      </div>
      <h2>${escapeHtml(deck.title)}</h2>
      <p>${escapeHtml(deck.description || 'Open this session deck.')}</p>
      <div class="card-meta">
        ${deck.duration ? `<span>${escapeHtml(deck.duration)}</span>` : ''}
        ${tags}
      </div>
      <span class="cta">Open presentation →</span>
    `

    grid.appendChild(card)
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

searchInput.addEventListener('input', () => {
  query = searchInput.value
  render()
})

const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = String(new Date().getFullYear())

loadCatalog().catch((err) => {
  meta.textContent = 'Could not load catalog. Run `pnpm catalog` or `pnpm build`.'
  console.error(err)
})
