<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { journals } from '../data/journals'
import ParallaxImage from '../components/ParallaxImage.vue'

const route = useRoute()

const journal = computed(() => journals.find(j => j.id === route.params.id))
const day = computed(() => {
  if (!journal.value) return null
  return journal.value.days.find(d => d.dayNumber === parseInt(route.params.day))
})

const getTypeIcon = (type) => {
  switch (type) {
    case 'flight': return 'FLIGHT'
    case 'transport': return 'MOVE'
    case 'hotel': return 'STAY'
    case 'food': return 'MEAL'
    case 'sight': return 'VIEW'
    case 'shopping': return 'SHOP'
    default: return 'NOTE'
  }
}
</script>

<template>
  <div v-if="day" class="min-h-screen relative pb-24">
    <ParallaxImage
      v-if="day.coverImage"
      :src="day.coverImage"
      :alt="day.title"
      height="h-[64vh]"
      class="!rounded-none !mb-0"
    >
      <div class="max-w-6xl mx-auto px-5 md:px-10 h-full flex flex-col justify-end pb-12">
        <div class="flex items-center space-x-2 mb-4 text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/65">
          <RouterLink :to="{ name: 'Journal', params: { id: journal.id } }" class="hover:text-white transition-colors border-b border-transparent hover:border-white">
            {{ journal.title }}
          </RouterLink>
          <span>/</span>
          <span>Day {{ day.dayNumber }}</span>
        </div>
        <h1 class="font-heading text-5xl md:text-8xl leading-[0.9]">
          {{ day.title }}
        </h1>
        <p class="max-w-2xl text-lg md:text-2xl leading-8 text-white/75 mt-4">{{ day.note }}</p>
      </div>
    </ParallaxImage>
    <div v-else class="h-48 pt-32 px-6 container mx-auto">
      <h1 class="font-heading text-6xl">{{ day.title }}</h1>
    </div>

    <div class="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-20">
      <div class="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] mb-12">
        <div class="editorial-card rounded-[28px] p-6">
          <p class="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] mb-4">Chapter Note</p>
          <p class="text-white/70 leading-8">
            {{ day.note }}
          </p>
        </div>
        <div class="ad-slot rounded-[28px] p-6">
          <p class="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] mb-3">Future Ad Placement</p>
          <p class="text-white/62 leading-7">
            This chapter page also has room for a mid-article Google ad unit if you want monetization inside story pages later.
          </p>
        </div>
      </div>

      <div v-for="(stop, index) in day.stops" :key="index" class="group relative pl-8 md:pl-0 md:grid md:grid-cols-12 md:gap-10 pb-16 last:pb-0" data-aos="fade-up">
        <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
        <div class="hidden md:block absolute left-1/2 top-2 w-3 h-3 bg-[var(--color-gold)] rounded-full -translate-x-1/2 ring-4 ring-[var(--color-bg)]"></div>

        <div class="md:hidden absolute left-2 top-2 bottom-0 w-px bg-white/10"></div>
        <div class="md:hidden absolute left-[5px] top-3 w-2 h-2 bg-[var(--color-gold)] rounded-full"></div>

        <div class="md:col-span-4 md:text-right mb-4 md:mb-0">
          <div class="inline-flex items-center border border-white/10 px-3 py-2 rounded-full bg-white/5 backdrop-blur-sm">
            <span class="text-[10px] uppercase tracking-[0.3em] text-[var(--color-gold)]">{{ getTypeIcon(stop.type) }}</span>
          </div>
        </div>

        <div class="md:col-span-2"></div>

        <div class="md:col-span-6 pt-1">
          <h2 class="font-heading text-3xl md:text-5xl leading-none mb-4 group-hover:text-[var(--color-ink)] transition-colors">
            {{ stop.title }}
          </h2>

          <div class="text-white/68 leading-8 space-y-3 text-lg">
            <p v-for="(desc, i) in (stop.description || [])" :key="i">{{ desc }}</p>
          </div>

          <div v-if="stop.links" class="mt-6 flex flex-wrap gap-4">
            <a v-for="link in stop.links" :key="link.url" :href="link.url" target="_blank" class="text-xs uppercase tracking-[0.28em] border-b border-[var(--color-gold)] pb-1 text-[var(--color-ink)] hover:text-white hover:border-white transition-colors">
              {{ link.label }} ->
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed bottom-12 left-5 right-5 md:left-12 md:right-12 z-40 flex justify-between pointer-events-none">
      <RouterLink
        v-if="day.dayNumber > 1"
        :to="{ name: 'Day', params: { id: journal.id, day: day.dayNumber - 1 } }"
        class="pointer-events-auto flex items-center space-x-4 bg-[rgba(15,12,8,0.84)] backdrop-blur text-white px-6 py-4 border border-white/10 hover:border-[var(--color-gold-soft)] transition-all group rounded-full"
      >
        <span class="text-xl"><-</span>
        <div class="text-left hidden md:block">
          <div class="text-[10px] uppercase tracking-[0.28em] opacity-60">Previous</div>
          <div class="text-sm uppercase tracking-[0.18em]">Day {{ day.dayNumber - 1 }}</div>
        </div>
      </RouterLink>
      <div v-else></div>

      <RouterLink
        v-if="journal.days.find(d => d.dayNumber === day.dayNumber + 1)"
        :to="{ name: 'Day', params: { id: journal.id, day: day.dayNumber + 1 } }"
        class="pointer-events-auto flex items-center space-x-4 bg-[rgba(15,12,8,0.84)] backdrop-blur text-white px-6 py-4 border border-white/10 hover:border-[var(--color-gold-soft)] transition-all group rounded-full"
      >
        <div class="text-right hidden md:block">
          <div class="text-[10px] uppercase tracking-[0.28em] opacity-60">Next</div>
          <div class="text-sm uppercase tracking-[0.18em]">Day {{ day.dayNumber + 1 }}</div>
        </div>
        <span class="text-xl">-></span>
      </RouterLink>
    </div>
  </div>
</template>
