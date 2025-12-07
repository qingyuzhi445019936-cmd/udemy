# Udemy Course Page Clone - 100 Days of Code

A 1:1 recreation of the Udemy course page for "100 Days of Code: The Complete Python Pro Bootcamp" using Nuxt 3 and Tailwind CSS.

## Features

- **Header Navigation** - Fully responsive header with mobile menu, search, categories, and user actions
- **Hero Section** - Course title, breadcrumbs, rating, and metadata with mobile-optimized text sizes
- **Course Sidebar** - Sticky sidebar (desktop) with pricing, preview video, and course features
- **What You'll Learn** - Responsive grid layout showcasing course benefits
- **Frequently Bought Together** - Bundle recommendation section with pricing calculator
- **Course Content** - Expandable accordion for course curriculum with mobile-friendly touch targets
- **Requirements & Description** - Detailed course information with expandable sections
- **Instructor Profile** - Instructor bio with stats and expandable content, mobile-optimized layout
- **Student Reviews** - Rating breakdown and individual reviews with responsive charts
- **Students Also Bought** - Related course recommendations with cards
- **Footer** - Complete footer with links and branding
- **Sticky Bottom Bar** - Mobile-only sticky purchase bar for easy checkout
- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop devices
  - Mobile: Hamburger menu, vertical layouts, optimized spacing, sticky bottom bar
  - Tablet: Adaptive layouts with proper breakpoints
  - Desktop: Full sidebar, horizontal layouts, sticky positioning

## Tech Stack

- **Nuxt 3** - Vue.js framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vue 3** - Composition API

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
udemy-course-clone/
├── components/
│   ├── Header.vue                    # Top navigation bar with mobile menu
│   ├── HeroSection.vue               # Course title and metadata
│   ├── CourseSidebar.vue             # Pricing and course features
│   ├── CourseDescription.vue         # What you'll learn, requirements, description
│   ├── FrequentlyBoughtTogether.vue  # Bundle recommendation section
│   ├── CourseContent.vue             # Curriculum accordion
│   ├── InstructorSection.vue         # Instructor profile
│   ├── ReviewsSection.vue            # Student feedback and reviews
│   ├── RelatedCourses.vue            # Students also bought section
│   ├── Footer.vue                    # Footer with links
│   └── StickyBottomBar.vue           # Mobile sticky purchase bar
├── assets/
│   └── css/
│       └── main.css            # Tailwind CSS imports
├── app.vue                     # Main application layout
├── nuxt.config.ts              # Nuxt configuration
├── tailwind.config.js          # Tailwind configuration
└── package.json
```

## Responsive Breakpoints

The project uses Tailwind CSS default breakpoints for responsive design:

| Breakpoint | Min Width | Description |
|------------|-----------|-------------|
| `sm` | 640px | Small devices (landscape phones) |
| `md` | 768px | Medium devices (tablets) |
| `lg` | 1024px | Large devices (desktops) |
| `xl` | 1280px | Extra large devices |

### Mobile Optimizations

- **Header**: Hamburger menu, collapsed search, minimal buttons
- **Hero Section**: Smaller text sizes, condensed breadcrumbs, wrapped content
- **Sidebar**: Appears first on mobile, non-sticky positioning
- **Content Sections**: Reduced padding, single-column grids, flexible layouts
- **Typography**: Scaled down headings and body text for readability
- **Spacing**: Optimized gaps and margins for smaller screens
- **Touch Targets**: Larger clickable areas for better mobile UX

## Customization

### Colors

The project uses Udemy's brand colors defined in `tailwind.config.js`:

- **udemy-purple**: #5624d0
- **udemy-dark**: #1c1d1f

### Components

All components are modular and can be easily customized:

- Edit component files in the `components/` directory
- Modify styles using Tailwind utility classes
- Update content directly in the component templates

## Features Implemented

### Core Course Page Components
- ✅ Responsive navigation header with mobile hamburger menu
- ✅ Course hero section with breadcrumbs and responsive typography
- ✅ Sticky pricing sidebar (desktop only)
- ✅ What you'll learn responsive grid (1 column mobile, 2 columns desktop)
- ✅ Frequently Bought Together bundle section
- ✅ Expandable course content accordion with mobile-optimized touch targets
- ✅ Requirements and description sections with expandable content
- ✅ Instructor profile with responsive stats grid
- ✅ Rating breakdown visualization with responsive charts
- ✅ Student reviews with mobile-friendly layouts
- ✅ Students Also Bought recommendations section
- ✅ Complete footer with navigation links
- ✅ Mobile sticky bottom purchase bar

### Responsive Design Features
- ✅ Full mobile-responsive design (320px - 1920px+)
- ✅ Mobile-first approach with Tailwind breakpoints (sm, md, lg, xl)
- ✅ Hover states and smooth transitions
- ✅ Optimized spacing and typography for all screen sizes
- ✅ Touch-friendly interactive elements on mobile devices
- ✅ Adaptive layouts for all breakpoints
- ✅ Safe area support for notched devices (bottom bar)

## License

This is a clone project for educational purposes.
