<template>
  <div class="bg-white border border-gray-200 p-4 sm:p-6">
    <h2 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Frequently Bought Together</h2>

    <div class="flex flex-col lg:flex-row gap-6">
      <!-- Course Cards Container -->
      <div class="flex-1">
        <div class="flex flex-col sm:flex-row gap-4">
          <!-- Main Course (Current) -->
          <div class="flex-1 border border-gray-200 p-3 bg-gray-50">
            <div class="flex gap-3">
              <div class="w-20 h-20 flex-shrink-0 bg-gray-200">
                <img
                  src="https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg"
                  alt="100 Days of Code"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="font-bold text-sm mb-1 line-clamp-2">
                  100 Days of Code: The Complete Python Pro Bootcamp
                </h3>
                <div class="flex items-center gap-1 text-xs mb-1">
                  <span class="font-bold">4.7</span>
                  <div class="flex">
                    <svg v-for="i in 5" :key="i" class="h-3 w-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  </div>
                </div>
                <p class="text-xs text-gray-600">Dr. Angela Yu</p>
              </div>
            </div>
          </div>

          <!-- Plus Icon -->
          <div class="hidden sm:flex items-center justify-center text-gray-400">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
          </div>

          <!-- Bundle Course -->
          <div class="flex-1 border border-gray-200 p-3">
            <div class="flex gap-3">
              <div class="w-20 h-20 flex-shrink-0 bg-gray-200">
                <img
                  src="https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg"
                  alt="Python Data Science"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="font-bold text-sm mb-1 line-clamp-2">
                  Python for Data Science and Machine Learning Bootcamp
                </h3>
                <div class="flex items-center gap-1 text-xs mb-1">
                  <span class="font-bold">4.6</span>
                  <div class="flex">
                    <svg v-for="i in 5" :key="i" class="h-3 w-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  </div>
                </div>
                <p class="text-xs text-gray-600">Jose Portilla</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Total Price (Mobile) -->
        <div class="lg:hidden mt-4 pt-4 border-t">
          <div class="flex items-center justify-between mb-3">
            <span class="text-gray-600">Total:</span>
            <div class="flex items-baseline gap-2">
              <span class="text-2xl font-bold">$27.98</span>
              <span class="text-sm text-gray-500 line-through">$169.98</span>
            </div>
          </div>
          <button class="w-full bg-udemy-purple hover:bg-purple-700 text-white font-bold py-3 px-4 transition-colors">
            Add both to cart
          </button>
        </div>
      </div>

      <!-- Price and CTA (Desktop) -->
      <div class="hidden lg:block w-64 flex-shrink-0">
        <div class="border border-gray-200 p-4">
          <div class="mb-4">
            <div class="text-sm text-gray-600 mb-2">Total:</div>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-bold">$27.98</span>
              <span class="text-sm text-gray-500 line-through">$169.98</span>
            </div>
          </div>
          <button class="w-full bg-udemy-purple hover:bg-purple-700 text-white font-bold py-3 px-4 transition-colors mb-2">
            Add both to cart
          </button>
          <p class="text-xs text-center text-gray-600">Save $141.00 (83% off)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
