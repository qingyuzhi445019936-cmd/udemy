<template>
  <div class="bg-white border border-gray-200 p-4 sm:p-6">
    <h2 class="text-xl sm:text-2xl font-bold mb-6">More Courses by <a class="text-xl sm:text-2xl font-bold mb-6 text-purple-700">Dr. Angela Yu, Developer and Lead Instructor</a></h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Course 1 -->
      <div class="border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
        <img
          src="https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg"
          alt="Web Development Bootcamp"
          class="w-full h-auto"
        />
        <div class="p-3">
          <h3 class="font-bold text-sm mb-2 line-clamp-2">The Complete 2025 Web Development Bootcamp</h3>
          <div class="flex items-center gap-2 mb-2">
            <span class="font-bold text-sm">4.7</span>
            <div class="flex">
              <svg v-for="i in 5" :key="i" class="h-3 w-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            </div>
            <span class="text-xs text-gray-600">(458,922)</span>
          </div>
          <div class="text-xs text-gray-600 mb-2">
            62 total hours • 559 lectures • All Levels
          </div>
          <div class="font-bold text-base">$99.99</div>
        </div>
      </div>

      <!-- Course 2 -->
      <div class="border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
        <img
          src="https://img-c.udemycdn.com/course/240x135/1778502_f4b9_12.jpg"
          alt="iOS Development"
          class="w-full h-auto"
        />
        <div class="p-3">
          <h3 class="font-bold text-sm mb-2 line-clamp-2">iOS & Swift - The Complete iOS App Development Bootcamp</h3>
          <div class="flex items-center gap-2 mb-2">
            <span class="font-bold text-sm">4.6</span>
            <div class="flex">
              <svg v-for="i in 5" :key="i" class="h-3 w-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            </div>
            <span class="text-xs text-gray-600">(95,808)</span>
          </div>
          <div class="text-xs text-gray-600 mb-2">
            59.5 total hours • 566 lectures • All Levels
          </div>
          <div class="font-bold text-base">$119.99</div>
        </div>
      </div>

      <!-- Course 3 -->
      <div class="border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
        <img
          src="https://img-c.udemycdn.com/course/240x135/1778502_f4b9_12.jpg"
          alt="Flutter Development"
          class="w-full h-auto"
        />
        <div class="p-3">
          <h3 class="font-bold text-sm mb-2 line-clamp-2">The Complete Flutter Development Bootcamp with Dart</h3>
          <div class="flex items-center gap-2 mb-2">
            <span class="font-bold text-sm">4.5</span>
            <div class="flex">
              <svg v-for="i in 4" :key="i" class="h-3 w-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <svg class="h-3 w-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="half-star">
                    <stop offset="50%" stop-color="#FBBF24"/>
                    <stop offset="50%" stop-color="#D1D5DB"/>
                  </linearGradient>
                </defs>
                <path fill="url(#half-star)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            </div>
            <span class="text-xs text-gray-600">(78,534)</span>
          </div>
          <div class="text-xs text-gray-600 mb-2">
            27.5 total hours • 202 lectures • All Levels
          </div>
          <div class="font-bold text-base">$89.99</div>
        </div>
      </div>
    </div>

    <!-- Report Abuse -->
    <div class="mt-6 p-2 border border-purple-700 justify-center flex">
      <button class="text-udemy-purple font-bold hover:text-purple-700">
        Report abuse
      </button>
    </div>
  </div>
</template>

<script setup>
</script>
