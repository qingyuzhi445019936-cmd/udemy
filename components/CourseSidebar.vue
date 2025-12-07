<template>
  <div :class="sidebarClass">
    <!-- Tabs - Show above when sticky -->
    <div v-if="isSticky" class="border-b border-gray-200 bg-white shadow-lg">
      <div class="flex">
        <button
          @click="activeTab = 'personal'"
          :class="activeTab === 'personal' ? 'border-b-2 border-gray-900 font-bold' : 'text-gray-600'"
          class="flex-1 py-3 text-sm transition-colors bg-white"
        >
          Personal
        </button>
        <button
          @click="activeTab = 'teams'"
          :class="activeTab === 'teams' ? 'border-b-2 border-gray-900 font-bold' : 'text-gray-600'"
          class="flex-1 py-3 text-sm transition-colors bg-white"
        >
          Teams
        </button>
      </div>
    </div>

    <div class="bg-white border border-gray-200 shadow-lg overflow-hidden" :class="{ 'border-t-0': isSticky }">
      <!-- Preview Video - Hidden when sticky -->
      <div v-if="!isSticky" class="relative bg-gray-900 aspect-video">
        <img
          src="https://img-c.udemycdn.com/course/750x422/2776760_f176_10.jpg"
          alt="Course preview"
          class="w-full h-full object-cover"
        />
        <button class="absolute inset-0 flex items-center justify-center group">
          <div class="bg-white rounded-full p-5 group-hover:scale-110 transition-transform shadow-lg">
            <svg class="h-10 w-10 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </button>
        <span class="absolute bottom-4 left-4 bg-white text-xs font-bold px-2 py-1 rounded">Preview this course</span>
      </div>

      <!-- Tabs - Show normally when not sticky -->
      <div v-if="!isSticky" class="border-b border-gray-200">
        <div class="flex">
          <button
            @click="activeTab = 'personal'"
            :class="activeTab === 'personal' ? 'border-b-2 border-gray-900 font-bold' : 'text-gray-600'"
            class="flex-1 py-3 text-sm transition-colors"
          >
            Personal
          </button>
          <button
            @click="activeTab = 'teams'"
            :class="activeTab === 'teams' ? 'border-b-2 border-gray-900 font-bold' : 'text-gray-600'"
            class="flex-1 py-3 text-sm transition-colors"
          >
            Teams
          </button>
        </div>
      </div>

      <!-- Content -->
      <div class="p-4 sm:p-6">
        <!-- Premium Badge -->
        <div v-if="activeTab === 'personal'" class="mb-4">
          <div class="flex items-start gap-2 text-sm mb-4">
            <svg class="h-5 w-5 text-udemy-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
            <span class="text-gray-700">This Premium course is included in plans</span>
          </div>

          <!-- Subscribe Section -->
          <div class="mb-4">
            <h3 class="font-bold text-base mb-2">Subscribe to Udemy's top courses</h3>
            <p class="text-sm text-gray-700 mb-3">
              Get this course, plus 26,000+ of our top-rated courses, with Personal Plan.
              <a href="#" class="text-udemy-purple underline font-bold">Learn more</a>
            </p>
            <button class="w-full bg-udemy-purple hover:bg-purple-700 text-white font-bold py-3 px-4 transition-colors mb-2">
              Try Personal Plan for free
            </button>
            <p class="text-xs text-gray-600 text-center">
              Starting at $13.00 per month after trial<br/>
              Cancel anytime
            </p>
          </div>

          <div class="text-center text-sm text-gray-600 mb-3">or</div>
        </div>

        <!-- Teams Tab Content -->
        <div v-if="activeTab === 'teams'">
          <!-- Udemy Business Logo and Description -->
          <div class="mb-4">
            <div class="mb-3">
              <span class="text-2xl font-bold text-gray-900">udemy</span>
              <span class="text-2xl font-bold text-purple-600"> business</span>
            </div>
            <p class="text-sm text-gray-700 mb-4">
              Get your team access to 30,000+ top Udemy courses anytime, anywhere.
            </p>
            <button class="w-full bg-udemy-purple hover:bg-purple-700 text-white font-bold py-3 px-4 transition-colors mb-4">
              Try Udemy Business
            </button>
          </div>

          <!-- Features List -->
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <svg class="h-5 w-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-sm text-gray-700">For teams of 2 or more users</span>
            </div>
            <div class="flex items-start gap-3">
              <svg class="h-5 w-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-sm text-gray-700">30,000+ fresh & in-demand courses</span>
            </div>
            <div class="flex items-start gap-3">
              <svg class="h-5 w-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-sm text-gray-700">Learning Engagement tools</span>
            </div>
            <div class="flex items-start gap-3">
              <svg class="h-5 w-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-sm text-gray-700">SSO and LMS integrations</span>
            </div>
          </div>
        </div>

        <!-- Price (only show for Personal tab) -->
        <div v-if="activeTab === 'personal'" class="mb-4">
          <div class="text-3xl sm:text-4xl font-bold mb-1">$109.99</div>
        </div>

        <!-- CTA Buttons (only show for Personal tab) -->
        <div v-if="activeTab === 'personal'" class="space-y-3 mb-4">
          <button class="w-full bg-white border-2 border-gray-900 hover:bg-gray-100 text-gray-900 font-bold py-3 px-4 transition-colors">
            Add to cart
          </button>
          <button class="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-4 transition-colors">
            Buy now
          </button>
        </div>

        <div v-if="activeTab === 'personal'" class="text-center text-sm text-gray-700 mb-4 font-medium">
          30-Day Money-Back Guarantee
        </div>

        <!-- Action Links (only for Personal tab) -->
        <div v-if="activeTab === 'personal'" class="border-t border-gray-200 pt-4 mt-4">
          <div class="flex items-center justify-center gap-3 text-sm font-bold">
            <button class="hover:text-udemy-purple transition-colors underline">Share</button>
            <button class="hover:text-udemy-purple transition-colors underline">Gift this course</button>
            <button class="hover:text-udemy-purple transition-colors underline">Apply Coupon</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const activeTab = ref('personal')
const scrollY = ref(0)
const premiumBannerTop = ref(0)
const isSticky = ref(false)

const sidebarClass = computed(() => {
  // Always use sticky on desktop after scrolling past PremiumBanner
  if (isSticky.value) {
    return 'lg:sticky lg:top-6 lg:z-50'
  }
  // Default positioning before reaching PremiumBanner
  return ''
})

const handleScroll = () => {
  scrollY.value = window.scrollY

  // Calculate PremiumBanner position if not set
  if (premiumBannerTop.value === 0) {
    const premiumBanner = document.querySelector('[data-premium-banner]')
    if (premiumBanner) {
      const rect = premiumBanner.getBoundingClientRect()
      premiumBannerTop.value = rect.top + window.scrollY - 80 // Subtract header height
    }
  }

  // Enable sticky when scrolled past PremiumBanner
  if (premiumBannerTop.value > 0) {
    isSticky.value = scrollY.value >= premiumBannerTop.value
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    // Recalculate on resize
    window.addEventListener('resize', () => {
      premiumBannerTop.value = 0 // Reset to recalculate
      handleScroll()
    })
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>
