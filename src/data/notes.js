const noteModules = import.meta.glob('../../content/notes/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
})

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/

const parseFrontmatter = (block) => {
  const data = {}
  for (const line of block.split(/\r?\n/)) {
    const match = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/)
    if (!match) continue
    let value = match[2].trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    data[match[1]] = value
  }
  return data
}

const formatDateLabel = (value) => {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value || ''
  const pad = (n) => String(n).padStart(2, '0')
  return `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())}`
}

export const notes = Object.entries(noteModules)
  .map(([path, raw]) => {
    const match = raw.match(FRONTMATTER_RE)
    const meta = match ? parseFrontmatter(match[1]) : {}
    const body = match ? raw.slice(match[0].length) : raw
    const fileId = path.split('/').pop().replace(/\.md$/, '')
    return {
      id: meta.id || fileId,
      title: meta.title || fileId,
      date: meta.date || '',
      dateLabel: formatDateLabel(meta.date),
      description: meta.description || '',
      body
    }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))
