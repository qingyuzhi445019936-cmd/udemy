<template>
  <div class="min-h-screen bg-gray-50">
    <Header />
    <HeroSection />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 relative">
        <!-- Sidebar - Show first on mobile, floats up on desktop -->
        <div class="lg:col-span-1 lg:order-2 lg:-mt-80">
          <CourseSidebar />
        </div>

        <!-- Main Content -->
        <div class="lg:col-span-2 lg:order-1 space-y-4 sm:space-y-6 lg:space-y-8">
          <PremiumBanner />
          <CourseDescription />
          <CourseContent />
          <RelatedCourses />
          <CompleteProgrammer />
          <InstructorSection />
          <ReviewsSection />
          <MoreCoursesByInstructor />
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />

    <!-- Mobile Sticky Bottom Bar -->
    <StickyBottomBar />
  </div>
</template>

<script setup>
</script>
