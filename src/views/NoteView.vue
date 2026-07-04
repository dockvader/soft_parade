<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import MarkdownIt from 'markdown-it'
import { notes } from '../data/notes'

const route = useRoute()
const note = computed(() => notes.find(n => n.id === route.params.id))

const md = new MarkdownIt({ html: false, linkify: true, typographer: true })
const rendered = computed(() => (note.value ? md.render(note.value.body) : ''))
</script>

<template>
  <div v-if="note" class="min-h-screen pt-32 md:pt-40 pb-24">
    <article class="max-w-3xl mx-auto px-5 md:px-8">
      <RouterLink to="/#notes" class="text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
        &lt;- Notes
      </RouterLink>

      <header class="mt-10 mb-12">
        <p class="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)]">{{ note.dateLabel }}</p>
        <h1 class="font-heading text-4xl md:text-7xl leading-[1.05] mt-5">{{ note.title }}</h1>
        <p v-if="note.description" class="text-lg md:text-xl text-white/65 leading-8 mt-6">{{ note.description }}</p>
      </header>

      <div class="note-body" v-html="rendered"></div>
    </article>
  </div>
  <div v-else class="min-h-screen pt-40 pb-24 text-center">
    <p class="text-white/60">找不到這篇雜記。</p>
    <RouterLink to="/" class="mt-6 inline-block text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">回首頁 -></RouterLink>
  </div>
</template>

<style scoped>
.note-body {
  color: rgba(255, 255, 255, 0.72);
  line-height: 2;
  font-size: 1.05rem;
}

.note-body :deep(h2) {
  font-family: var(--font-heading, serif);
  font-size: 1.9rem;
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.92);
  margin: 2.5rem 0 1rem;
}

.note-body :deep(h3) {
  font-size: 1.35rem;
  color: rgba(255, 255, 255, 0.88);
  margin: 2rem 0 0.75rem;
}

.note-body :deep(p) {
  margin: 1.1rem 0;
}

.note-body :deep(a) {
  color: var(--color-gold, #c9a96b);
  border-bottom: 1px solid rgba(201, 169, 107, 0.4);
  transition: color 0.2s ease, border-color 0.2s ease;
}

.note-body :deep(a:hover) {
  color: #fff;
  border-color: #fff;
}

.note-body :deep(blockquote) {
  border-left: 2px solid var(--color-gold, #c9a96b);
  padding-left: 1.25rem;
  margin: 1.75rem 0;
  color: rgba(255, 255, 255, 0.55);
  font-style: italic;
}

.note-body :deep(ul),
.note-body :deep(ol) {
  padding-left: 1.5rem;
  margin: 1.1rem 0;
}

.note-body :deep(ul) {
  list-style: disc;
}

.note-body :deep(ol) {
  list-style: decimal;
}

.note-body :deep(li) {
  margin: 0.4rem 0;
}

.note-body :deep(img) {
  max-width: 100%;
  border-radius: 20px;
  margin: 2rem 0;
}

.note-body :deep(hr) {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  margin: 2.5rem auto;
  width: 40%;
}

.note-body :deep(code) {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  padding: 0.15em 0.4em;
  font-size: 0.9em;
}

.note-body :deep(pre) {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.25rem;
  overflow-x: auto;
  margin: 1.75rem 0;
}

.note-body :deep(pre code) {
  background: none;
  padding: 0;
}
</style>
