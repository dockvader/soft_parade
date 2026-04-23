<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { journals } from '../data/journals'

const route = useRoute()
const journal = computed(() => journals.find(j => j.id === route.params.id))
</script>

<template>
  <div v-if="journal" class="pb-24">
    <header class="relative min-h-[72vh] md:min-h-[82vh] overflow-hidden flex items-end">
      <img :src="journal.coverImage" :alt="journal.title" class="absolute inset-0 w-full h-full object-cover opacity-45">
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,12,8,0.18),rgba(15,12,8,0.94))]"></div>

      <div class="relative max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-24 w-full">
        <div class="max-w-4xl" data-aos="fade-up">
          <div class="flex flex-wrap gap-3 text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/55">
            <span>{{ journal.country }}</span>
            <span>{{ journal.dates }}</span>
            <span>{{ journal.readTime }}</span>
          </div>
          <h1 class="font-heading text-5xl md:text-[110px] leading-[0.9] mt-6">{{ journal.title }}</h1>
          <p class="text-xl md:text-3xl text-white/76 max-w-3xl leading-[1.45] mt-6">{{ journal.subtitle }}</p>
          <p class="text-white/62 leading-8 max-w-2xl mt-6">{{ journal.intro }}</p>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-5 md:px-10 pt-16 md:pt-20">
      <section class="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] items-start">
        <div class="space-y-6">
          <div class="editorial-card rounded-[28px] p-6">
            <p class="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] mb-4">Overview</p>
            <p class="text-white/70 leading-8">{{ journal.description }}</p>
          </div>
          <div class="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            <div v-for="stat in journal.stats" :key="stat.label" class="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <div class="text-[10px] uppercase tracking-[0.32em] text-white/40">{{ stat.label }}</div>
              <div class="text-2xl mt-2">{{ stat.value }}</div>
            </div>
          </div>
          <div class="ad-slot rounded-[28px] p-6">
            <p class="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] mb-3">Sponsor Placement</p>
            <p class="text-white/62 leading-7">
              Ideal position for a responsive Google ad unit between the journal intro and the itinerary cards.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="overflow-hidden rounded-[28px] h-64 md:h-[360px] col-span-2">
            <img :src="journal.gallery[0]" :alt="journal.title" class="w-full h-full object-cover">
          </div>
          <div
            v-for="image in journal.gallery.slice(1, 5)"
            :key="image"
            class="overflow-hidden rounded-[24px] h-40 md:h-52"
          >
            <img :src="image" :alt="journal.title" class="w-full h-full object-cover">
          </div>
        </div>
      </section>

      <section class="mt-20">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div>
            <p class="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] mb-3">Itinerary</p>
            <h2 class="font-heading text-4xl md:text-6xl">Day by Day</h2>
          </div>
          <p class="text-white/55 uppercase tracking-[0.28em] text-xs">{{ journal.days.length }} chapters</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <RouterLink
            v-for="day in journal.days"
            :key="day.dayNumber"
            :to="{ name: 'Day', params: { id: journal.id, day: day.dayNumber } }"
            class="group rounded-[30px] overflow-hidden border border-white/10 bg-white/5 hover:border-[var(--color-gold-soft)] transition-colors"
            data-aos="fade-up"
          >
            <div class="relative min-h-[340px]">
              <img v-if="day.coverImage" :src="day.coverImage" :alt="day.title" class="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-[rgba(15,12,8,0.96)] via-[rgba(15,12,8,0.48)] to-transparent"></div>
              <div class="relative p-6 md:p-7 flex min-h-[340px] flex-col justify-between">
                <div class="flex items-start justify-between">
                  <span class="text-[10px] uppercase tracking-[0.35em] text-white/45">Day {{ day.dayNumber.toString().padStart(2, '0') }}</span>
                  <span class="text-[10px] uppercase tracking-[0.35em] text-[var(--color-gold)]">Open</span>
                </div>
                <div>
                  <h3 class="font-heading text-3xl md:text-4xl leading-none">{{ day.title }}</h3>
                  <p class="text-white/65 leading-7 mt-4">{{ day.note }}</p>
                  <div class="flex flex-wrap gap-2 mt-5">
                    <span
                      v-for="stop in day.stops.slice(0, 3)"
                      :key="stop.title"
                      class="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/50"
                    >
                      {{ stop.title }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </section>
    </main>
  </div>
</template>
