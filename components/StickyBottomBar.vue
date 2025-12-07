<template>
  <!-- Mobile sticky bottom bar - only visible on mobile/tablet -->
  <div class="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 safe-area-bottom">
    <div class="px-4 py-3">
        <!-- CTA Buttons -->
        <div class="flex gap-2 flex-1">
          <button class="flex-1 px-4 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold whitespace-nowrap text-sm transition-colors">
            Buy now
          </button>
        </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.safe-area-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
