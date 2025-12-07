<template>
  <div class="bg-white border border-gray-200 p-4 sm:p-6">
    <h2 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">The Complete Programmer</h2>

    <div class="space-y-4">
      <!-- Course 1 -->
      <div class="flex gap-4 py-4 border-b border-gray-200">
        <img
          src="https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg"
          alt="100 Days of Code"
          class="w-24 h-16 flex-shrink-0 object-cover"
        />
        <div class="flex-1 min-w-0">
          <h3 class="font-bold text-sm mb-1 line-clamp-2">100 Days of Code™: The Complete Python Pro Bootcamp</h3>
          <p class="text-xs text-gray-600 mb-1">Dr. Angela Yu, Developer and Lead Instructor</p>
          <div class="flex items-center gap-2 mb-2">
            <span class="font-bold text-sm text-yellow-600">4.7</span>
            <div class="flex">
              <svg v-for="i in 5" :key="i" class="h-3 w-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            </div>
            <span class="text-xs text-gray-600">(402,874)</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="bg-udemy-purple text-white text-xs font-bold px-2 py-1">Premium</span>
            <span class="bg-teal-500 text-white text-xs font-bold px-2 py-1">Bestseller</span>
          </div>
        </div>
        <div class="flex flex-col items-end justify-between">
          <button class="p-2 hover:bg-gray-100 rounded-full">
            <svg class="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4v16m8-8H4"/>
            </svg>
          </button>
          <span class="font-bold text-base">$109.99</span>
        </div>
      </div>

      <!-- Course 2 -->
      <div class="flex gap-4 py-4 border-b border-gray-200">
        <img
          src="https://img-c.udemycdn.com/course/240x135/1778502_f4b9_12.jpg"
          alt="iOS Development"
          class="w-24 h-16 flex-shrink-0 object-cover"
        />
        <div class="flex-1 min-w-0">
          <h3 class="font-bold text-sm mb-1 line-clamp-2">iOS & Swift - The Complete iOS App Development Bootcamp</h3>
          <p class="text-xs text-gray-600 mb-1">Dr. Angela Yu, Developer and Lead Instructor</p>
          <div class="flex items-center gap-2 mb-2">
            <span class="font-bold text-sm text-yellow-600">4.6</span>
            <div class="flex">
              <svg v-for="i in 5" :key="i" class="h-3 w-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            </div>
            <span class="text-xs text-gray-600">(95,808)</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="bg-udemy-purple text-white text-xs font-bold px-2 py-1">Premium</span>
            <span class="bg-teal-500 text-white text-xs font-bold px-2 py-1">Bestseller</span>
          </div>
        </div>
        <div class="flex flex-col items-end justify-between">
          <button class="p-2 hover:bg-gray-100 rounded-full">
            <svg class="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4v16m8-8H4"/>
            </svg>
          </button>
          <span class="font-bold text-base">$119.99</span>
        </div>
      </div>

      <!-- Course 3 -->
      <div class="flex gap-4 py-4">
        <img
          src="https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg"
          alt="Web Development"
          class="w-24 h-16 flex-shrink-0 object-cover"
        />
        <div class="flex-1 min-w-0">
          <h3 class="font-bold text-sm mb-1 line-clamp-2">The Complete Full-Stack Web Development Bootcamp</h3>
          <p class="text-xs text-gray-600 mb-1">Dr. Angela Yu, Developer and Lead Instructor</p>
          <div class="flex items-center gap-2 mb-2">
            <span class="font-bold text-sm text-yellow-600">4.7</span>
            <div class="flex">
              <svg v-for="i in 5" :key="i" class="h-3 w-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            </div>
            <span class="text-xs text-gray-600">(458,922)</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="bg-udemy-purple text-white text-xs font-bold px-2 py-1">Premium</span>
            <span class="bg-teal-500 text-white text-xs font-bold px-2 py-1">Bestseller</span>
          </div>
        </div>
        <div class="flex flex-col items-end justify-between">
          <button class="p-2 hover:bg-gray-100 rounded-full">
            <svg class="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4v16m8-8H4"/>
            </svg>
          </button>
          <span class="font-bold text-base">$99.99</span>
        </div>
      </div>
    </div>

    <!-- Total and Add to Cart -->
    <div class="flex items-center justify-between pt-4 mt-4 border-t border-gray-200">
      <div class="flex items-center gap-2">
        <span class="text-gray-600">Total:</span>
        <span class="text-2xl font-bold">$329.97</span>
      </div>
      <button class="bg-udemy-purple hover:bg-purple-700 text-white font-bold py-3 px-8 transition-colors">
        Add all to cart
      </button>
    </div>
  </div>
</template>

<script setup>
</script>
