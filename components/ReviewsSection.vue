<template>
  <div class="bg-white border border-gray-200 p-4 sm:p-6">
    <!-- Reviews Header -->
    <div class="flex items-center gap-2 mb-6">
      <svg class="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
      </svg>
      <h2 class="text-xl font-bold">4.7 course rating</h2>
      <span class="text-gray-600">• 403K ratings</span>
    </div>

    <!-- Reviews -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Review 1 -->
      <div class="border-b border-gray-200 pb-6 lg:border-b-0 lg:border-r lg:pr-6">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0">
            <div class="w-10 h-10 bg-udemy-dark text-white rounded-full flex items-center justify-center font-bold text-sm">
              MA
            </div>
          </div>
          <div class="flex-1">
            <div class="flex items-start justify-between mb-2">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <h4 class="font-bold text-sm">Mohd Kashif A.</h4>
                </div>
                <div class="flex">
                  <svg v-for="i in 5" :key="i" class="h-3 w-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  <p class="text-xs text-gray-600 ml-2">3 weeks ago</p>
                </div>
              </div>
              <button class="p-1 hover:bg-gray-100 rounded">
                <svg class="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </button>
            </div>
            <p class="text-sm text-gray-900 mb-3">
              This is the best Python course I've taken! Angela's teaching style is incredibly clear and engaging. The 100 days challenge keeps you motivated and the projects are really practical. I've learned so much and feel confident in my Python skills now.
            </p>
            <div class="flex items-center gap-3 text-xs">
              <span class="text-gray-600">Helpful?</span>
              <button class="p-1 hover:bg-gray-100 rounded">
                <svg class="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                </svg>
              </button>
              <button class="p-1 hover:bg-gray-100 rounded">
                <svg class="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Review 2 -->
      <div class="border-b border-gray-200 pb-6 lg:border-b-0">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0">
            <div class="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              AJ
            </div>
          </div>
          <div class="flex-1">
            <div class="flex items-start justify-between mb-2">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <h4 class="font-bold text-sm">Aime J.</h4>
                </div>
                <div class="flex">
                  <svg v-for="i in 5" :key="i" class="h-3 w-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  <p class="text-xs text-gray-600 ml-2">a month ago</p>
                </div>
              </div>
              <button class="p-1 hover:bg-gray-100 rounded">
                <svg class="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </button>
            </div>
            <p class="text-sm text-gray-900 mb-3">
              I had zero programming experience before starting this course. Angela breaks everything down in a way that's easy to understand. The projects are fun and challenging. I'm only on Day 40 but I've already built some cool stuff I'm proud of!
            </p>
            <div class="flex items-center gap-3 text-xs">
              <span class="text-gray-600">Helpful?</span>
              <button class="p-1 hover:bg-gray-100 rounded">
                <svg class="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                </svg>
              </button>
              <button class="p-1 hover:bg-gray-100 rounded">
                <svg class="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Review 3 -->
      <div class="border-b border-gray-200 pb-6 lg:border-b-0 lg:border-r lg:pr-6">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0">
            <div class="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              PZ
            </div>
          </div>
          <div class="flex-1">
            <div class="flex items-start justify-between mb-2">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <h4 class="font-bold text-sm">Priyanka Z.</h4>
                </div>
                <div class="flex">
                  <svg v-for="i in 5" :key="i" class="h-3 w-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  <p class="text-xs text-gray-600 ml-2">2 months ago</p>
                </div>
              </div>
              <button class="p-1 hover:bg-gray-100 rounded">
                <svg class="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </button>
            </div>
            <p class="text-sm text-gray-900 mb-3">
              Great course overall. Very comprehensive and well-structured. Some of the later projects can be quite challenging, but that's a good thing. The only minor issue is that some lectures could be a bit shorter, but the content is excellent.
            </p>
            <div class="flex items-center gap-3 text-xs">
              <span class="text-gray-600">Helpful?</span>
              <button class="p-1 hover:bg-gray-100 rounded">
                <svg class="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                </svg>
              </button>
              <button class="p-1 hover:bg-gray-100 rounded">
                <svg class="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Review 4 -->
      <div class="pb-6 lg:pb-0">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0">
            <div class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              JD
            </div>
          </div>
          <div class="flex-1">
            <div class="flex items-start justify-between mb-2">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <h4 class="font-bold text-sm">Jesse D.</h4>
                </div>
                <div class="flex">
                  <svg v-for="i in 4" :key="i" class="h-3 w-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  <svg class="h-3 w-3 text-gray-300 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  <p class="text-xs text-gray-600 ml-2">3 months ago</p>
                </div>
              </div>
              <button class="p-1 hover:bg-gray-100 rounded">
                <svg class="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </button>
            </div>
            <p class="text-sm text-gray-900 mb-3">
              Solid Python course with good project variety. The pace is generally well-balanced, though some sections move a bit fast for complete beginners. Overall would recommend for anyone wanting to learn Python from scratch.
            </p>
            <div class="flex items-center gap-3 text-xs">
              <span class="text-gray-600">Helpful?</span>
              <button class="p-1 hover:bg-gray-100 rounded">
                <svg class="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                </svg>
              </button>
              <button class="p-1 hover:bg-gray-100 rounded">
                <svg class="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="w-full py-3 border border-udemy-dark font-bold hover:bg-gray-100 mt-6 text-sm">
      Show all reviews
    </button>
  </div>
</template>

<script setup>
</script>
