<template>
  <div class="bg-white border border-gray-200 p-4 sm:p-6">
    <h2 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Instructor</h2>

    <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
      <!-- Instructor Image -->
      <div class="flex-shrink-0 mx-auto sm:mx-0">
        <img
          src="https://img-c.udemycdn.com/user/200_H/31334738_a13c_2.jpg"
          alt="Dr. Angela Yu"
          class="w-24 h-24 sm:w-32 sm:h-32 rounded-full"
        />
      </div>

      <!-- Instructor Info -->
      <div class="flex-1 w-full">
        <a href="#" class="text-lg sm:text-xl font-bold text-udemy-purple hover:text-purple-700 underline">Dr. Angela Yu</a>
        <p class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Developer and Lead Instructor</p>

        <!-- Stats -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 text-xs sm:text-sm">
          <div class="flex items-center space-x-2">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
            </svg>
            <span>4.7 Instructor Rating</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
            <span>1,503,008 Reviews</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
            <span>5,799,202 Students</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>7 Courses</span>
          </div>
        </div>

        <!-- Bio -->
        <div class="text-sm" :class="{ 'line-clamp-4': !showFullBio }">
          <p class="mb-4">
            I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees.
          </p>
          <p class="mb-4">
            My first foray into programming was when I was just 12 years old, wanting to build my own Space Invader game. Since then, I've made hundred of websites, apps and games. But most importantly, I realised that my greatest passion is teaching.
          </p>
          <p>
            I spend most of my time researching how to make learning to code fun and make hard concepts easy to understand. I apply everything I discover into my bootcamp courses. In my courses, you'll find lots of geeky humour but also lots of explanations and animations to make sure everything is easy to understand.
          </p>
        </div>
        <button
          @click="showFullBio = !showFullBio"
          class="text-udemy-purple font-bold mt-4 hover:text-purple-700"
        >
          {{ showFullBio ? 'Show less' : 'Show more' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showFullBio = ref(false)
</script>
