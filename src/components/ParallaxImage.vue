<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: 'h-96' // Default height class
  }
})

const imageRef = ref(null)
const containerRef = ref(null)

const handleScroll = () => {
  if (!containerRef.value || !imageRef.value) return
  
  const rect = containerRef.value.getBoundingClientRect()
  const windowHeight = window.innerHeight
  
  // Only animate if in view
  if (rect.top < windowHeight && rect.bottom > 0) {
    const scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height)
    // Move image slightly based on scroll
    const offset = Math.min(Math.max(scrollPercent * 30, -20), 50) 
    imageRef.value.style.transform = `translateY(${offset}px) scale(1.1)`
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial calc
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div ref="containerRef" :class="['relative overflow-hidden w-full rounded-2xl shadow-lg mb-8', height]">
    <img 
      ref="imageRef"
      :src="src" 
      :alt="alt" 
      class="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-100 ease-out will-change-transform"
      style="transform: scale(1.1);"
    >
    <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
    <div class="absolute bottom-4 left-6 text-white font-bold text-lg drop-shadow-md z-10">
      <slot></slot>
    </div>
  </div>
</template>
