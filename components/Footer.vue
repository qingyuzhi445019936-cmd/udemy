<template>
  <footer class="bg-udemy-dark text-white mt-16">
    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
        <!-- Column 1 -->
        <div>
          <h3 class="font-bold mb-3 text-sm lg:text-base">Udemy Business</h3>
          <ul class="space-y-2 text-xs lg:text-sm text-gray-300">
            <li><a href="#" class="hover:underline">Teach on Udemy</a></li>
            <li><a href="#" class="hover:underline">Get the app</a></li>
            <li><a href="#" class="hover:underline">About us</a></li>
            <li><a href="#" class="hover:underline">Contact us</a></li>
          </ul>
        </div>

        <!-- Column 2 -->
        <div>
          <h3 class="font-bold mb-3 text-sm lg:text-base">Careers</h3>
          <ul class="space-y-2 text-xs lg:text-sm text-gray-300">
            <li><a href="#" class="hover:underline">Blog</a></li>
            <li><a href="#" class="hover:underline">Help and Support</a></li>
            <li><a href="#" class="hover:underline">Affiliate</a></li>
            <li><a href="#" class="hover:underline">Investors</a></li>
          </ul>
        </div>

        <!-- Column 3 -->
        <div>
          <h3 class="font-bold mb-3 text-sm lg:text-base">Terms</h3>
          <ul class="space-y-2 text-xs lg:text-sm text-gray-300">
            <li><a href="#" class="hover:underline">Privacy policy</a></li>
            <li><a href="#" class="hover:underline">Cookie settings</a></li>
            <li><a href="#" class="hover:underline">Sitemap</a></li>
            <li><a href="#" class="hover:underline">Accessibility statement</a></li>
          </ul>
        </div>

        <!-- Language Selector -->
        <div class="col-span-2 md:col-span-1">
          <button class="flex items-center gap-2 border border-white px-3 py-2 hover:bg-gray-800 transition-colors text-sm">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>English</span>
          </button>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <svg class="h-8 w-auto text-white" viewBox="0 0 91 34" fill="currentColor">
            <path d="M14.05 8.112L7.024 4.056 0 8.112v4.555l7.024 4.056 7.026-4.056V8.112zm-1.186 3.316l-5.84 3.372-5.84-3.372V9.476l5.84-3.372 5.84 3.372v1.952z"/>
            <path d="M28.966 21.426c-.5.78-1.187 1.404-2.05 1.87-.86.468-1.833.7-2.92.7-1.086 0-2.06-.232-2.92-.7-.86-.466-1.55-1.09-2.05-1.87-.5-.78-.75-1.66-.75-2.64v-8.593h2.537v8.424c0 1.022.327 1.83.98 2.416.654.587 1.474.88 2.46.88.984 0 1.805-.293 2.458-.88.654-.586.98-1.394.98-2.416V10.193h2.538v8.593c0 .98-.25 1.86-.75 2.64M37.984 21.665c-.763.78-1.81 1.17-3.144 1.17h-4.24V10.192h2.537v10.29h1.704c.763 0 1.347-.18 1.754-.54.406-.36.61-.904.61-1.632v-8.118h2.537v8.285c0 1.37-.253 2.4-.76 3.186M53.958 13.856c-.31-.804-.795-1.462-1.458-1.973-.662-.51-1.57-.766-2.727-.766h-3.92v11.72h-2.538v-11.72h-3.92c-1.155 0-2.065.256-2.727.766-.663.51-1.148 1.17-1.458 1.974-.31.803-.465 1.76-.465 2.872v8.847H37.3v-8.68c0-.593.125-1.11.374-1.552.248-.44.6-.786 1.052-1.035.453-.25.99-.374 1.61-.374.762 0 1.39.224 1.883.672.492.448.738 1.057.738 1.828v9.142h2.537v-9.142c0-.771.246-1.38.738-1.828.493-.448 1.12-.672 1.883-.672.62 0 1.157.125 1.61.374.452.25.804.596 1.052 1.035.248.442.374.96.374 1.552v8.68h2.556v-8.847c0-1.113-.156-2.07-.466-2.872M66.43 22.836h-8.225v-2.393l6.07-7.95h-5.733v-2.3h7.888v2.392l-6.07 7.95h6.07v2.3zM75.394 16.398l3.458 6.438h-2.79l-2.76-5.19-2.76 5.19h-2.79l3.458-6.438-3.29-6.205h2.79l2.592 4.887 2.593-4.887h2.79l-3.29 6.205z"/>
          </svg>
        </div>

        <!-- Copyright -->
        <div class="text-xs sm:text-sm text-gray-400">
          © 2025 Udemy, Inc.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
