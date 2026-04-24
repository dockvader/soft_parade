const journalModules = import.meta.glob('../../content/journals/*.json', {
  eager: true,
  import: 'default'
})

const normalizeJournal = (journal) => ({
  ...journal,
  highlights: journal.highlights || [],
  stats: journal.stats || [],
  gallery: journal.gallery || [],
  days: (journal.days || []).map((day) => ({
    ...day,
    stops: (day.stops || []).map((stop) => ({
      ...stop,
      description: stop.description || [],
      links: stop.links || []
    }))
  }))
})

export const journals = Object.values(journalModules)
  .map(normalizeJournal)
  .sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER))
