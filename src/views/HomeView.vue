<script setup>
import { computed } from 'vue'
import { journals } from '../data/journals'
import { site } from '../data/site'
import { RouterLink } from 'vue-router'

const plannedTrips = computed(() => journals.filter((j) => j.homepageSection === 'planning'))
const completedTrips = computed(() => journals.filter((j) => j.homepageSection === 'completed'))
const heroStory = computed(() => completedTrips.value[0] || journals[0])
</script>

<template>
  <div>
    <header v-if="heroStory" class="relative min-h-screen overflow-hidden pt-28 md:pt-32">
      <div class="absolute inset-0">
        <img
          :src="heroStory.coverImage"
          :alt="heroStory.title"
          class="w-full h-full object-cover opacity-35"
        >
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,169,107,0.20),_transparent_30%),linear-gradient(180deg,rgba(15,12,8,0.28),rgba(15,12,8,0.94))]"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-5 md:px-10 pb-20 md:pb-28">
        <div class="max-w-5xl" data-aos="fade-up">
          <div class="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/65">
            <span>{{ site.heroEyebrow }}</span>
            <span class="text-[var(--color-gold)]">{{ site.heroBadge }}</span>
          </div>
          <h1 class="font-heading text-[56px] leading-[0.88] md:text-[128px] max-w-5xl mt-8 text-balance">
            {{ site.heroTitle }}
          </h1>
          <p class="max-w-2xl text-lg md:text-2xl text-white/72 leading-8 mt-8">
            {{ site.heroDescription }}
          </p>
        </div>

        <div class="mt-14 grid gap-6 lg:grid-cols-[1.4fr_0.8fr] items-end">
          <RouterLink
            :to="{ name: 'Journal', params: { id: heroStory.id } }"
            class="editorial-card rounded-[32px] p-6 md:p-8 block hover:-translate-y-1 transition-transform"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <div class="flex flex-wrap items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.32em] text-white/55">
              <span>{{ heroStory.country }}</span>
              <span>{{ heroStory.dates }}</span>
              <span>{{ heroStory.readTime }}</span>
            </div>
            <div class="grid gap-6 md:grid-cols-[1.1fr_0.9fr] mt-6">
              <div>
                <p class="text-[var(--color-gold)] uppercase tracking-[0.35em] text-xs mb-3">{{ site.featuredLabel }}</p>
                <h2 class="font-heading text-4xl md:text-6xl leading-none">{{ heroStory.title }}</h2>
                <p class="text-white/70 text-lg leading-8 mt-5">{{ heroStory.subtitle }}</p>
                <p class="text-white/60 leading-7 mt-5">{{ heroStory.intro }}</p>
              </div>
              <div class="overflow-hidden rounded-[24px] min-h-[260px] md:min-h-[340px]">
                <img :src="heroStory.gallery[1] || heroStory.gallery[0] || heroStory.coverImage" :alt="heroStory.title" class="w-full h-full object-cover">
              </div>
            </div>
          </RouterLink>

          <div class="grid gap-6" data-aos="fade-up" data-aos-delay="160">
            <div class="editorial-card rounded-[28px] p-6">
              <p class="text-xs uppercase tracking-[0.35em] text-white/45 mb-4">{{ site.changeLogTitle }}</p>
              <ul class="space-y-3 text-white/75 leading-7">
                <li v-for="item in site.changeLogItems" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div class="ad-slot rounded-[28px] p-6">
              <p class="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] mb-3">{{ site.homeAdTitle }}</p>
              <p class="text-white/65 leading-7">
                {{ site.homeAdBody }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="stories" class="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p class="text-xs uppercase tracking-[0.38em] text-[var(--color-gold)] mb-4">{{ site.completedEyebrow }}</p>
          <h2 class="font-heading text-4xl md:text-6xl">{{ site.completedHeading }}</h2>
        </div>
        <p class="max-w-xl text-white/60 leading-7">
          {{ site.completedDescription }}
        </p>
      </div>

      <div class="grid gap-8">
        <RouterLink
          v-for="journal in completedTrips"
          :key="journal.id"
          :to="{ name: 'Journal', params: { id: journal.id } }"
          class="group grid gap-6 lg:grid-cols-[1.1fr_0.9fr] editorial-card rounded-[32px] p-6 md:p-8 hover:-translate-y-1 transition-transform"
          data-aos="fade-up"
        >
          <div>
            <div class="flex flex-wrap gap-3 text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/50">
              <span>{{ journal.country }}</span>
              <span>{{ journal.season }}</span>
              <span>{{ journal.readTime }}</span>
            </div>
            <h3 class="font-heading text-4xl md:text-6xl leading-none mt-5">{{ journal.title }}</h3>
            <p class="text-xl text-white/72 mt-4 leading-8">{{ journal.subtitle }}</p>
            <p class="text-white/60 leading-7 mt-5">{{ journal.description }}</p>
            <div class="flex flex-wrap gap-3 mt-6">
              <span
                v-for="tag in journal.highlights"
                :key="tag"
                class="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/55"
              >
                {{ tag }}
              </span>
            </div>
            <div class="mt-8 text-sm uppercase tracking-[0.28em] text-[var(--color-gold)] group-hover:translate-x-1 transition-transform">
              Open Journal ->
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="overflow-hidden rounded-[22px] h-64 md:h-80">
              <img :src="journal.gallery[0] || journal.coverImage" :alt="journal.title" class="w-full h-full object-cover">
            </div>
            <div class="grid gap-3">
              <div class="overflow-hidden rounded-[22px] h-[152px] md:h-[188px]">
                <img :src="journal.gallery[2] || journal.gallery[1] || journal.coverImage" :alt="journal.title" class="w-full h-full object-cover">
              </div>
              <div class="overflow-hidden rounded-[22px] h-[152px] md:h-[188px]">
                <img :src="journal.gallery[4] || journal.gallery[0] || journal.coverImage" :alt="journal.title" class="w-full h-full object-cover">
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </section>

    <section id="archive" class="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
        <div>
          <p class="text-xs uppercase tracking-[0.38em] text-[var(--color-gold)] mb-4">{{ site.archiveEyebrow }}</p>
          <h2 class="font-heading text-4xl md:text-6xl leading-none">{{ site.archiveHeading }}</h2>
          <p class="text-white/62 leading-7 mt-6 max-w-lg">
            {{ site.archiveDescription }}
          </p>
        </div>

        <div class="grid gap-6">
          <RouterLink
            v-for="journal in plannedTrips"
            :key="journal.id"
            :to="{ name: 'Journal', params: { id: journal.id } }"
            class="group rounded-[32px] overflow-hidden border border-white/10 bg-[rgba(255,255,255,0.04)]"
            data-aos="fade-up"
          >
            <div class="relative min-h-[420px]">
              <img :src="journal.coverImage" :alt="journal.title" class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-[rgba(15,12,8,0.98)] via-[rgba(15,12,8,0.35)] to-transparent"></div>
              <div class="relative p-6 md:p-8 flex min-h-[420px] flex-col justify-end">
                <div class="flex flex-wrap gap-3 text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/55">
                  <span>{{ journal.country }}</span>
                  <span>{{ journal.dates }}</span>
                  <span>{{ journal.readTime }}</span>
                </div>
                <h3 class="font-heading text-4xl md:text-6xl leading-none mt-5">{{ journal.title }}</h3>
                <p class="text-lg text-white/72 leading-8 mt-4 max-w-2xl">{{ journal.subtitle }}</p>
                <div class="grid gap-4 md:grid-cols-3 mt-7">
                  <div v-for="stat in journal.stats" :key="stat.label" class="rounded-[20px] bg-black/25 border border-white/10 p-4">
                    <div class="text-[10px] uppercase tracking-[0.3em] text-white/40">{{ stat.label }}</div>
                    <div class="text-xl mt-2">{{ stat.value }}</div>
                  </div>
                </div>
                <div class="mt-8 text-sm uppercase tracking-[0.28em] text-[var(--color-gold)]">
                  Open Planning File ->
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
