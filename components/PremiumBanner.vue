<template>
  <div class="relative -mt-8 lg:-mt-12 mb-4 rounded-md" data-premium-banner>
    <!-- Premium Banner with shadow and border -->
    <div class="bg-white border-2 border-gray-200 shadow-lg rounded-md">
      <div class="flex flex-col lg:flex-row items-stretch lg:items-stretch">
        <!-- Left: Premium Badge and Text -->
        <div class="flex items-stretch gap-3 sm:gap-4 flex-shrink-0 w-full lg:w-auto">
          <div class="bg-udemy-purple text-white flex flex-col items-center justify-center gap-2 flex-shrink-0 px-4 py-5 sm:px-6 sm:py-6">
            <svg class="h-6 w-6 sm:h-7 sm:w-7 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
            <div class="font-bold text-base sm:text-lg whitespace-nowrap text-center">Premium</div>
          </div>

          <!-- Description Text - shown next to badge on mobile -->
          <div class="flex-1 lg:hidden flex items-center px-3">
            <p class="text-sm text-gray-700 leading-relaxed">
              Access 26,000+ top-rated courses with a Udemy plan.
              <a href="#" class="text-udemy-purple font-bold underline hover:no-underline">See Plans & Pricing</a>
            </p>
          </div>
        </div>

        <!-- Center: Description Text - Desktop only -->
        <div class="hidden lg:flex flex-1 items-center px-4 lg:px-6">
          <p class="text-sm text-gray-700 leading-relaxed">
            Access 26,000+ top-rated courses with a Udemy plan.
            <a href="#" class="text-udemy-purple font-bold underline hover:no-underline">See Plans & Pricing</a>
          </p>
        </div>

        <!-- Right: Rating and Stats -->
        <div class="flex items-center gap-4 sm:gap-6 lg:gap-8 flex-shrink-0 w-full lg:w-auto justify-start lg:justify-end border-t lg:border-t-0 pt-4 lg:pt-0 px-4 lg:pr-6">
          <!-- Rating -->
          <div class="flex flex-col items-center">
            <div class="flex items-center gap-2 mb-1">
              <span class="font-bold text-lg sm:text-xl">4.7</span>
              <div class="flex">
                <svg v-for="i in 5" :key="'star-' + i" class="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              </div>
            </div>
            <a href="#" class="text-xs text-gray-600 underline hover:text-udemy-purple whitespace-nowrap">402,996 ratings</a>
          </div>

          <!-- Divider -->
          <div class="hidden sm:block h-10 w-px bg-gray-300"></div>

          <!-- Learners -->
          <div class="flex flex-col items-center">
            <div class="flex items-center gap-2 mb-1">
              <svg class="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span class="font-bold text-sm sm:text-base">1,701,438</span>
            </div>
            <span class="text-xs text-gray-600 whitespace-nowrap">learners</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
