<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import { journals } from './data/journals'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const featuredStories = journals.slice(0, 2)

const contactEmail = ref('')
const contactSubject = ref('')
const contactMessage = ref('')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const openContactDraft = () => {
  const lines = []

  if (contactEmail.value.trim()) {
    lines.push(`Sender email: ${contactEmail.value.trim()}`, '')
  }

  if (contactMessage.value.trim()) {
    lines.push(contactMessage.value.trim())
  }

  const subject = contactSubject.value.trim() || 'Hello from A LONG VACATION'
  const body = encodeURIComponent(lines.join('\n'))
  const mailto = `mailto:great@a-long-vacation.com?subject=${encodeURIComponent(subject)}&body=${body}`

  window.location.href = mailto
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-sans selection:bg-[var(--color-ink)] selection:text-[var(--color-bg)] overflow-x-hidden">
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-5 md:px-10 py-5 flex items-center justify-between"
      :class="isScrolled ? 'bg-[rgba(15,12,8,0.86)] backdrop-blur-xl border-b border-white/10 py-4' : ''"
    >
      <RouterLink to="/" class="flex flex-col leading-none hover:opacity-80 transition-opacity">
        <span class="font-heading text-xl md:text-3xl tracking-[0.22em]">A LONG VACATION</span>
        <span class="text-[10px] md:text-xs uppercase tracking-[0.42em] text-white/50 mt-2">Travel Journal</span>
      </RouterLink>

      <div class="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.28em] text-white/70">
        <a href="/#stories" class="hover:text-white transition-colors">Stories</a>
        <a href="/#archive" class="hover:text-white transition-colors">Archive</a>
        <a href="/#ads" class="hover:text-white transition-colors">Advertising</a>
        <a href="/#contact" class="hover:text-white transition-colors">Contact</a>
      </div>

      <button
        @click="isMenuOpen = !isMenuOpen"
        class="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm z-50 transition-all duration-300 hover:border-[var(--color-gold-soft)]"
        :aria-expanded="isMenuOpen"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
      >
        <span
          class="absolute block h-0.5 w-5 bg-white transition-all duration-300"
          :class="isMenuOpen ? 'rotate-45' : '-translate-y-1.5'"
        ></span>
        <span
          class="absolute block h-0.5 w-5 bg-white transition-all duration-300"
          :class="isMenuOpen ? '-rotate-45' : 'translate-y-1.5 w-3.5'"
        ></span>
      </button>
    </nav>

    <div
      class="fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(196,171,122,0.12),_transparent_38%),linear-gradient(180deg,#100c08_0%,#050505_100%)] z-40 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] flex items-center justify-center"
      :class="isMenuOpen ? 'translate-y-0' : '-translate-y-full'"
    >
      <div class="flex flex-col space-y-8 text-center">
        <RouterLink
          to="/"
          class="text-4xl md:text-6xl font-heading tracking-[0.08em] hover:text-[var(--color-gold)] transition-colors"
          @click="isMenuOpen = false"
        >
          HOME
        </RouterLink>
        <a
          href="/#stories"
          class="text-4xl md:text-6xl font-heading tracking-[0.08em] hover:text-[var(--color-gold)] transition-colors"
          @click="isMenuOpen = false"
        >
          STORIES
        </a>
        <a
          href="/#archive"
          class="text-4xl md:text-6xl font-heading tracking-[0.08em] hover:text-[var(--color-gold)] transition-colors"
          @click="isMenuOpen = false"
        >
          ARCHIVE
        </a>
        <a
          href="/#contact"
          class="text-lg uppercase tracking-[0.35em] text-white/60 hover:text-white transition-colors"
          @click="isMenuOpen = false"
        >
          CONTACT
        </a>
      </div>

      <div class="absolute bottom-12 left-5 right-5 md:left-10 md:right-10 grid md:grid-cols-2 gap-4 text-left">
        <RouterLink
          v-for="story in featuredStories"
          :key="story.id"
          :to="{ name: 'Journal', params: { id: story.id } }"
          class="border border-white/10 bg-white/5 p-5 hover:border-[var(--color-gold)] transition-colors"
          @click="isMenuOpen = false"
        >
          <div class="text-[10px] uppercase tracking-[0.35em] text-white/50 mb-3">{{ story.country }} / {{ story.season }}</div>
          <div class="text-2xl font-heading">{{ story.title }}</div>
        </RouterLink>
      </div>
    </div>

    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="border-t border-white/10 px-5 md:px-10 py-14 bg-[rgba(8,7,5,0.9)]">
      <div class="max-w-7xl mx-auto grid gap-10 md:grid-cols-[1fr_1.1fr_0.9fr]">
        <div>
          <p class="text-xs uppercase tracking-[0.35em] text-white/45 mb-4">A LONG VACATION</p>
          <p class="max-w-xl text-white/70 leading-7">
            A travel journal about long roads, city nights, favorite photos, and the kind of trips that stay with you after the bags are unpacked.
          </p>
        </div>
        <div id="contact">
          <p class="text-xs uppercase tracking-[0.35em] text-white/45 mb-4">Contact</p>
          <form class="space-y-4" @submit.prevent="openContactDraft">
            <input
              v-model="contactEmail"
              type="email"
              inputmode="email"
              placeholder="Your email"
              class="w-full rounded-[20px] border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-white/30 outline-none transition-colors focus:border-[var(--color-gold-soft)]"
            >
            <input
              v-model="contactSubject"
              type="text"
              placeholder="Subject"
              class="w-full rounded-[20px] border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-white/30 outline-none transition-colors focus:border-[var(--color-gold-soft)]"
            >
            <textarea
              v-model="contactMessage"
              rows="5"
              placeholder="Write your message here"
              class="w-full rounded-[24px] border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-white/30 outline-none transition-colors focus:border-[var(--color-gold-soft)] resize-y"
            ></textarea>
            <button
              type="submit"
              class="inline-flex items-center justify-center rounded-full border border-[var(--color-gold-soft)] px-6 py-3 text-sm uppercase tracking-[0.28em] text-[var(--color-ink)] transition-colors hover:border-[var(--color-gold)] hover:text-white"
            >
              Send Message
            </button>
          </form>
        </div>
        <div id="ads">
          <p class="text-xs uppercase tracking-[0.35em] text-white/45 mb-4">Future Ad Slot</p>
          <div class="rounded-[28px] border border-dashed border-[var(--color-gold-soft)] bg-[rgba(255,255,255,0.03)] p-5 text-sm text-white/60 leading-6">
            Reserved for Google Ads or sponsor placements. The layout is ready for a responsive ad unit without breaking the reading flow.
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-xs uppercase tracking-[0.28em] text-white/35">
        2026 A LONG VACATION
      </div>
    </footer>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
