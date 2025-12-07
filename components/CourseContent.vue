<template>
  <div class="bg-white border border-gray-200 p-4 sm:p-6">
    <h2 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Course content</h2>

    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm text-gray-600 mb-4">
      <span>19 sections • 226 lectures • 64h 2m total length</span>
      <button @click="toggleAllSections" class="text-udemy-purple font-bold hover:text-purple-700 whitespace-nowrap">
        {{ allExpanded ? 'Collapse all sections' : 'Expand all sections' }}
      </button>
    </div>

    <div class="space-y-2">
      <!-- Section 1 -->
      <div class="border border-gray-200">
        <button
          @click="toggleSection(0)"
          class="w-full flex items-center justify-between p-3 sm:p-4 hover:bg-gray-50 text-left"
        >
          <div class="flex items-center gap-2 sm:gap-3">
            <svg
              class="h-4 w-4 flex-shrink-0 transform transition-transform"
              :class="{ 'rotate-90': openSections.includes(0) }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
            <div>
              <h3 class="font-bold text-sm sm:text-base">Day 1 - Beginner - Working with Variables in Python to Manage Data</h3>
              <p class="text-xs sm:text-sm text-gray-600">12 lectures • 1hr 12min</p>
            </div>
          </div>
        </button>
        <div v-if="openSections.includes(0)" class="border-t border-gray-200 bg-gray-50">
          <div class="divide-y divide-gray-200">
            <!-- Lecture 1 -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">What you're going to get from this course</span>
              </div>
              <div class="flex items-center gap-3">
                <button class="text-udemy-purple text-sm font-bold hover:text-purple-700">Preview</button>
                <span class="text-sm text-gray-600">03:27</span>
              </div>
            </div>

            <!-- Lecture 2 -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">START HERE</span>
              </div>
              <span class="text-sm text-gray-600">02:53</span>
            </div>

            <!-- Lecture 3 -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Downloadable Resources and Tips for Taking the Course</span>
              </div>
              <div class="flex items-center gap-3">
                <button class="text-udemy-purple text-sm font-bold hover:text-purple-700">Preview</button>
                <span class="text-sm text-gray-600">04:22</span>
              </div>
            </div>

            <!-- Lecture 4 -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Day 1 Goals: what we will make by the end of the day</span>
              </div>
              <span class="text-sm text-gray-600">02:30</span>
            </div>

            <!-- Lecture 5 - Article -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <span class="text-sm text-gray-700">DO NOT SKIP - Download and Setup PyCharm for Learning</span>
              </div>
              <span class="text-sm text-gray-600">01:36</span>
            </div>

            <!-- Lecture 6 -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Printing to the Console in Python</span>
              </div>
              <span class="text-sm text-gray-600">11:25</span>
            </div>

            <!-- Lecture 7 - Practice -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                <span class="text-sm text-gray-700">Printing Practice</span>
              </div>
              <span class="text-sm text-gray-600">1 question</span>
            </div>

            <!-- Lecture 8 -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">String Manipulation and Code Intelligence</span>
              </div>
              <span class="text-sm text-gray-600">09:13</span>
            </div>

            <!-- Lecture 9 - Practice -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                <span class="text-sm text-gray-700">Debugging Practice</span>
              </div>
              <span class="text-sm text-gray-600">1 question</span>
            </div>

            <!-- Lecture 10 -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">The Python Input Function</span>
              </div>
              <span class="text-sm text-gray-600">12:35</span>
            </div>

            <!-- Lecture 11 -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Python Variables</span>
              </div>
              <span class="text-sm text-gray-600">13:02</span>
            </div>

            <!-- Lecture 12 - Practice -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                <span class="text-sm text-gray-700">Variables</span>
              </div>
              <span class="text-sm text-gray-600">1 question</span>
            </div>

            <!-- Lecture 13 -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Variable Naming</span>
              </div>
              <span class="text-sm text-gray-600">04:23</span>
            </div>

            <!-- Lecture 14 - Quiz -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Variable Naming Quiz</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="h-3 w-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
                <span class="text-sm text-gray-600">3 questions</span>
              </div>
            </div>

            <!-- Lecture 15 -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Day 1 Project: Band Name Generator</span>
              </div>
              <span class="text-sm text-gray-600">05:32</span>
            </div>

            <!-- Lecture 16 -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Congratulations! Well done!</span>
              </div>
              <span class="text-sm text-gray-600">00:52</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2 -->
      <div class="border border-gray-200">
        <button
          @click="toggleSection(1)"
          class="w-full flex items-center justify-between p-3 sm:p-4 hover:bg-gray-50 text-left"
        >
          <div class="flex items-center gap-2 sm:gap-3">
            <svg
              class="h-4 w-4 flex-shrink-0 transform transition-transform"
              :class="{ 'rotate-90': openSections.includes(1) }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
            <div>
              <h3 class="font-bold text-sm sm:text-base">Day 2 - Beginner - Understanding Data Types and How to Manipulate Strings</h3>
              <p class="text-xs sm:text-sm text-gray-600">12 lectures • 1hr 12min</p>
            </div>
          </div>
        </button>
        <div v-if="openSections.includes(1)" class="border-t border-gray-200 bg-gray-50">
          <div class="divide-y divide-gray-200">
            <!-- Lecture 1 -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">What you're going to get from this course</span>
              </div>
              <div class="flex items-center gap-3">
                <button class="text-udemy-purple text-sm font-bold hover:text-purple-700">Preview</button>
                <span class="text-sm text-gray-600">03:27</span>
              </div>
            </div>

            <!-- Lecture 2 -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">START HERE</span>
              </div>
              <span class="text-sm text-gray-600">02:53</span>
            </div>

            <!-- Lecture 3 -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Downloadable Resources and Tips for Taking the Course</span>
              </div>
              <div class="flex items-center gap-3">
                <button class="text-udemy-purple text-sm font-bold hover:text-purple-700">Preview</button>
                <span class="text-sm text-gray-600">04:22</span>
              </div>
            </div>

            <!-- Lecture 4 -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Day 2 Goals: what we will make by the end of the day</span>
              </div>
              <span class="text-sm text-gray-600">02:30</span>
            </div>

            <!-- Lecture 5 - Article -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <span class="text-sm text-gray-700">DO NOT SKIP - Download and Setup PyCharm for Learning</span>
              </div>
              <span class="text-sm text-gray-600">01:36</span>
            </div>

            <!-- Lecture 6 -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Printing to the Console in Python</span>
              </div>
              <span class="text-sm text-gray-600">11:25</span>
            </div>

            <!-- Lecture 7 - Practice -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                <span class="text-sm text-gray-700">Printing Practice</span>
              </div>
              <span class="text-sm text-gray-600">1 question</span>
            </div>

            <!-- Lecture 8 -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">String Manipulation and Code Intelligence</span>
              </div>
              <span class="text-sm text-gray-600">09:13</span>
            </div>

            <!-- Lecture 9 - Practice -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                <span class="text-sm text-gray-700">Debugging Practice</span>
              </div>
              <span class="text-sm text-gray-600">1 question</span>
            </div>

            <!-- Lecture 10 -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">The Python Input Function</span>
              </div>
              <span class="text-sm text-gray-600">12:35</span>
            </div>

            <!-- Lecture 11 -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Python Variables</span>
              </div>
              <span class="text-sm text-gray-600">13:02</span>
            </div>

            <!-- Lecture 12 - Practice -->
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                <span class="text-sm text-gray-700">Variables</span>
              </div>
              <span class="text-sm text-gray-600">1 question</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 3 -->
      <div class="border border-gray-200">
        <button
          @click="toggleSection(2)"
          class="w-full flex items-center justify-between p-3 sm:p-4 hover:bg-gray-50 text-left"
        >
          <div class="flex items-center gap-2 sm:gap-3">
            <svg
              class="h-4 w-4 flex-shrink-0 transform transition-transform"
              :class="{ 'rotate-90': openSections.includes(2) }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
            <div>
              <h3 class="font-bold text-sm sm:text-base">Day 3 - Beginner - Control Flow and Logical Operators</h3>
              <p class="text-xs sm:text-sm text-gray-600">12 lectures • 1hr 12min</p>
            </div>
          </div>
        </button>
        <div v-if="openSections.includes(2)" class="border-t border-gray-200 bg-gray-50">
          <div class="divide-y divide-gray-200">
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">What you're going to get from this course</span>
              </div>
              <div class="flex items-center gap-3">
                <button class="text-udemy-purple text-sm font-bold hover:text-purple-700">Preview</button>
                <span class="text-sm text-gray-600">03:27</span>
              </div>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">START HERE</span>
              </div>
              <span class="text-sm text-gray-600">02:53</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Downloadable Resources and Tips for Taking the Course</span>
              </div>
              <div class="flex items-center gap-3">
                <button class="text-udemy-purple text-sm font-bold hover:text-purple-700">Preview</button>
                <span class="text-sm text-gray-600">04:22</span>
              </div>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Day 3 Goals: what we will make by the end of the day</span>
              </div>
              <span class="text-sm text-gray-600">02:30</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <span class="text-sm text-gray-700">DO NOT SKIP - Download and Setup PyCharm for Learning</span>
              </div>
              <span class="text-sm text-gray-600">01:36</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Printing to the Console in Python</span>
              </div>
              <span class="text-sm text-gray-600">11:25</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                <span class="text-sm text-gray-700">Printing Practice</span>
              </div>
              <span class="text-sm text-gray-600">1 question</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">String Manipulation and Code Intelligence</span>
              </div>
              <span class="text-sm text-gray-600">09:13</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                <span class="text-sm text-gray-700">Debugging Practice</span>
              </div>
              <span class="text-sm text-gray-600">1 question</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">The Python Input Function</span>
              </div>
              <span class="text-sm text-gray-600">12:35</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Python Variables</span>
              </div>
              <span class="text-sm text-gray-600">13:02</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                <span class="text-sm text-gray-700">Variables</span>
              </div>
              <span class="text-sm text-gray-600">1 question</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 4 -->
      <div class="border border-gray-200">
        <button
          @click="toggleSection(3)"
          class="w-full flex items-center justify-between p-3 sm:p-4 hover:bg-gray-50 text-left"
        >
          <div class="flex items-center gap-2 sm:gap-3">
            <svg
              class="h-4 w-4 flex-shrink-0 transform transition-transform"
              :class="{ 'rotate-90': openSections.includes(3) }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
            <div>
              <h3 class="font-bold text-sm sm:text-base">Day 4 - Beginner - Randomisation and Python Lists</h3>
              <p class="text-xs sm:text-sm text-gray-600">12 lectures • 1hr 12min</p>
            </div>
          </div>
        </button>
        <div v-if="openSections.includes(3)" class="border-t border-gray-200 bg-gray-50">
          <div class="divide-y divide-gray-200">
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">What you're going to get from this course</span>
              </div>
              <div class="flex items-center gap-3">
                <button class="text-udemy-purple text-sm font-bold hover:text-purple-700">Preview</button>
                <span class="text-sm text-gray-600">03:27</span>
              </div>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">START HERE</span>
              </div>
              <span class="text-sm text-gray-600">02:53</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Downloadable Resources and Tips for Taking the Course</span>
              </div>
              <div class="flex items-center gap-3">
                <button class="text-udemy-purple text-sm font-bold hover:text-purple-700">Preview</button>
                <span class="text-sm text-gray-600">04:22</span>
              </div>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Day 4 Goals: what we will make by the end of the day</span>
              </div>
              <span class="text-sm text-gray-600">02:30</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <span class="text-sm text-gray-700">DO NOT SKIP - Download and Setup PyCharm for Learning</span>
              </div>
              <span class="text-sm text-gray-600">01:36</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Printing to the Console in Python</span>
              </div>
              <span class="text-sm text-gray-600">11:25</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                <span class="text-sm text-gray-700">Printing Practice</span>
              </div>
              <span class="text-sm text-gray-600">1 question</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">String Manipulation and Code Intelligence</span>
              </div>
              <span class="text-sm text-gray-600">09:13</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                <span class="text-sm text-gray-700">Debugging Practice</span>
              </div>
              <span class="text-sm text-gray-600">1 question</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">The Python Input Function</span>
              </div>
              <span class="text-sm text-gray-600">12:35</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Python Variables</span>
              </div>
              <span class="text-sm text-gray-600">13:02</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                <span class="text-sm text-gray-700">Variables</span>
              </div>
              <span class="text-sm text-gray-600">1 question</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 5 -->
      <div class="border border-gray-200">
        <button
          @click="toggleSection(4)"
          class="w-full flex items-center justify-between p-3 sm:p-4 hover:bg-gray-50 text-left"
        >
          <div class="flex items-center gap-2 sm:gap-3">
            <svg
              class="h-4 w-4 flex-shrink-0 transform transition-transform"
              :class="{ 'rotate-90': openSections.includes(4) }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
            <div>
              <h3 class="font-bold text-sm sm:text-base">Day 5 - Beginner - Python Loops</h3>
              <p class="text-xs sm:text-sm text-gray-600">12 lectures • 1hr 12min</p>
            </div>
          </div>
        </button>
        <div v-if="openSections.includes(4)" class="border-t border-gray-200 bg-gray-50">
          <div class="divide-y divide-gray-200">
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">What you're going to get from this course</span>
              </div>
              <div class="flex items-center gap-3">
                <button class="text-udemy-purple text-sm font-bold hover:text-purple-700">Preview</button>
                <span class="text-sm text-gray-600">03:27</span>
              </div>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">START HERE</span>
              </div>
              <span class="text-sm text-gray-600">02:53</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Downloadable Resources and Tips for Taking the Course</span>
              </div>
              <div class="flex items-center gap-3">
                <button class="text-udemy-purple text-sm font-bold hover:text-purple-700">Preview</button>
                <span class="text-sm text-gray-600">04:22</span>
              </div>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Day 5 Goals: what we will make by the end of the day</span>
              </div>
              <span class="text-sm text-gray-600">02:30</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <span class="text-sm text-gray-700">DO NOT SKIP - Download and Setup PyCharm for Learning</span>
              </div>
              <span class="text-sm text-gray-600">01:36</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Printing to the Console in Python</span>
              </div>
              <span class="text-sm text-gray-600">11:25</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                <span class="text-sm text-gray-700">Printing Practice</span>
              </div>
              <span class="text-sm text-gray-600">1 question</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">String Manipulation and Code Intelligence</span>
              </div>
              <span class="text-sm text-gray-600">09:13</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                <span class="text-sm text-gray-700">Debugging Practice</span>
              </div>
              <span class="text-sm text-gray-600">1 question</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">The Python Input Function</span>
              </div>
              <span class="text-sm text-gray-600">12:35</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm text-gray-700">Python Variables</span>
              </div>
              <span class="text-sm text-gray-600">13:02</span>
            </div>
            <div class="flex items-center justify-between py-2 px-4 sm:px-6 hover:bg-gray-100">
              <div class="flex items-center gap-3 flex-1">
                <svg class="h-4 w-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                <span class="text-sm text-gray-700">Variables</span>
              </div>
              <span class="text-sm text-gray-600">1 question</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Show More -->
      <button class="w-full py-4 text-center text-udemy-purple font-bold border border-gray-200 hover:bg-gray-50">
        14 more sections
      </button>
    </div>

        <!-- Requirements -->
    <div class="py-4">
      <h2 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Requirements</h2>
      <ul class="space-y-2">
        <li class="flex items-start space-x-2">
          <span class="text-gray-600">•</span>
          <span class="text-sm">No programming experience needed - I'll teach you everything you need to know</span>
        </li>
        <li class="flex items-start space-x-2">
          <span class="text-gray-600">•</span>
          <span class="text-sm">A Mac or PC computer with access to the internet</span>
        </li>
        <li class="flex items-start space-x-2">
          <span class="text-gray-600">•</span>
          <span class="text-sm">No paid software required</span>
        </li>
        <li class="flex items-start space-x-2">
          <span class="text-gray-600">•</span>
          <span class="text-sm">I'll walk you through, step-by-step how to get all the software installed and set up</span>
        </li>
      </ul>
    </div>

    <!-- Description -->
    <div class="py-4">
      <h2 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Description</h2>
      <div class="space-y-4 text-sm" :class="{ 'line-clamp-6': !showFullDescription }">
        <p>
          Welcome to the <strong>100 Days of Code - The Complete Python Pro Bootcamp</strong>, the only course you need to learn to code with Python. With over 500,000 5 STAR reviews and a 4.8 average, my courses are some of the HIGHEST RATED courses in the history of Udemy!
        </p>
        <p>
          <strong>100 days, 1 hour per day, learn to build 1 project per day, this is how you master Python.</strong>
        </p>
        <p>
          At 60+ hours, this Python course is without a doubt the most comprehensive Python course available anywhere online. Even if you have zero programming experience, this course will take you from beginner to professional. Here's why:
        </p>
        <ul class="list-disc pl-5 space-y-2">
          <li>The course is taught by the lead instructor at the App Brewery, London's best in-person programming Bootcamp.</li>
          <li>The course has been updated to be 2024 ready and you'll be learning the latest tools and technologies used at large companies such as Apple, Google and Netflix.</li>
          <li>This course doesn't cut any corners, there are beautiful animated explanation videos and tens of real-world projects which you will get to build.</li>
          <li>The curriculum was developed over a period of 2 years, with comprehensive student testing and feedback.</li>
          <li>We've taught over 600,000 students how to code and many have gone on to change their lives by becoming professional developers or starting their own tech startup.</li>
          <li>You'll save yourself over $12,000 by enrolling, and still get access to the same teaching materials and learn from the same instructor and curriculum as our in-person programming Bootcamp.</li>
          <li>The course is constantly updated with new content, with new projects and modules determined by students - that's you!</li>
        </ul>
      </div>
      <button
        @click="showFullDescription = !showFullDescription"
        class="text-udemy-purple font-bold mt-4 hover:text-purple-700"
      >
        {{ showFullDescription ? 'Show less' : 'Show more' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const openSections = ref([])
const allExpanded = ref(false)

const toggleSection = (index) => {
  const idx = openSections.value.indexOf(index)
  if (idx > -1) {
    openSections.value.splice(idx, 1)
  } else {
    openSections.value.push(index)
  }
}

const toggleAllSections = () => {
  if (allExpanded.value) {
    openSections.value = []
  } else {
    openSections.value = [0, 1, 2, 3, 4]
  }
  allExpanded.value = !allExpanded.value
}
</script>
