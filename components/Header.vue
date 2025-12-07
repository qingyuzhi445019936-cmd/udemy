<template>
  <div>
    <!-- Main Navigation Header -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Mobile Menu Button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden p-2 hover:bg-gray-100 rounded">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

          <!-- Logo -->
          <div class="flex items-center space-x-3 sm:space-x-6">
            <div class="flex-shrink-0">
              <img class="h-6 sm:h-8 w-auto text-udemy-purple" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"></img>
            </div>
            <button class="hidden md:block text-sm font-medium hover:text-udemy-purple">Categories</button>
          </div>

          <!-- Search Bar - Hidden on mobile, shown on md+ -->
          <div class="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
            <div class="relative w-full">
              <input
                type="text"
                placeholder="Search for anything"
                class="w-full pl-10 lg:pl-12 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-udemy-purple focus:border-transparent text-sm"
              />
              <svg class="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>

          <!-- Search Icon for Mobile -->
          <button class="md:hidden p-2 hover:bg-gray-100 rounded">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>

          <!-- Right Side Menu -->
          <div class="flex items-center space-x-2 sm:space-x-4">
            <button class="hidden xl:block text-sm font-medium hover:text-udemy-purple whitespace-nowrap">Udemy Business</button>
            <button class="hidden xl:block text-sm font-medium hover:text-udemy-purple whitespace-nowrap">Teach on Udemy</button>
            <button class="hidden sm:block p-2 hover:text-udemy-purple">
              <svg class="h-5 w-5 lg:h-6 lg:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </button>
            <button class="hidden lg:block px-3 lg:px-4 py-2 border border-gray-900 text-sm font-bold hover:bg-gray-100">Log in</button>
            <button class="px-3 lg:px-4 py-2 bg-gray-900 text-white text-xs sm:text-sm font-bold hover:bg-gray-800">Sign up</button>
            <button class="hidden lg:block p-2 border border-gray-900 hover:bg-gray-100">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <div v-if="mobileMenuOpen" class="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" @click="mobileMenuOpen = false">
        <div class="bg-white w-80 h-full p-6" @click.stop>
          <button @click="mobileMenuOpen = false" class="mb-6">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <nav class="space-y-4">
            <a href="#" class="block text-lg font-medium hover:text-udemy-purple">Categories</a>
            <a href="#" class="block text-lg font-medium hover:text-udemy-purple">Udemy Business</a>
            <a href="#" class="block text-lg font-medium hover:text-udemy-purple">Teach on Udemy</a>
            <div class="pt-4 border-t">
              <button class="w-full px-4 py-2 border border-gray-900 text-sm font-bold hover:bg-gray-100 mb-2">Log in</button>
              <button class="w-full px-4 py-2 bg-gray-900 text-white text-sm font-bold hover:bg-gray-800">Sign up</button>
            </div>
          </nav>
        </div>
      </div>
    </header>

    <!-- Course Info Sticky Bar - Only shown when scrolling down -->
    <div v-if="showCourseBar" class="bg-gray-900 text-white border-b border-gray-800 fixed top-0 left-0 right-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-14 sm:h-16">
          <!-- Left: Course Title and Info -->
          <div class="flex-1 min-w-0 pr-4">
            <h1 class="text-xs sm:text-sm lg:text-base font-bold truncate">100 Days of Code™: The Complete Python Pro Bootcamp</h1>
            <div class="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
              <span class="bg-yellow-400 text-gray-900 text-xs font-bold px-1.5 sm:px-2 py-0.5">Bestseller</span>
              <div class="flex items-center gap-0.5 sm:gap-1">
                <span class="text-yellow-400 font-bold text-xs">4.7</span>
                <div class="flex">
                  <svg class="h-2.5 w-2.5 sm:h-3 sm:w-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                </div>
                <span class="text-xs text-purple-300 underline hidden sm:inline">(402,996)</span>
              </div>
              <span class="text-xs text-gray-300 hidden md:inline">1,701,438 students</span>
            </div>
          </div>

          <!-- Mobile Buy Button - only show on small screens when scrolled -->
          <div class="sm:hidden">
            <button class="px-3 py-1.5 bg-udemy-purple hover:bg-purple-700 text-white text-xs font-bold whitespace-nowrap transition-colors">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const activeTab = ref('personal')
const showCourseBar = ref(false)

const handleScroll = () => {
  showCourseBar.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
