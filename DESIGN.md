# Project Design Guide

This document outlines the design principles, color palette, typography, and component styles for this project, inspired by the aesthetic of Anduril Industries.

## Key Decisions

### Theme: Dark vs. Light

- **Inspiration:** Anduril's website uses a cinematic, futuristic dark theme with a black background (`#000000`).
- **Proposal:** The initial proposal suggested a light theme with neutral backgrounds (`#F5F5F5` / `#E5E5E5`).
- **Decision:** To most accurately capture the Anduril aesthetic, we will proceed with a **dark theme**. The primary background will be black, with white text.

---

## Design Inspiration

- **Source:** Anduril Industries (www.anduril.com)
- **Aesthetic:** Minimal, clean, and modern with a focus on clarity, sophistication, and a futuristic, cinematic feel.

## Color Scheme

-   **Primary:**
    -   `#000000` (Black) - Primary background.
    -   `#FFFFFF` (White) - Primary text and foreground elements.
-   **Accent:**
    -   `#FF6200` (Orange) - Used sparingly for key interactive elements like buttons, highlights, or graphical overlays.
-   **Description:** A high-contrast, monochromatic scheme with a single, vibrant accent color to draw user attention deliberately.

## Typography

-   **Font Family:** `Helvetica Now`, sans-serif. If unavailable, a close alternative like "Inter" will be used.
-   **Font Weights:**
    -   Regular: `400`
    -   Bold: `700`
-   **Typographic Scale:**
    -   `h1`: `2.5rem` (40px)
    -   `h2`: `2rem` (32px)
    -   `h3`: `1.5rem` (24px)
    -   `body`: `1rem` (16px)
    -   `small`: `0.875rem` (14px)
-   **Description:** The typography is a core design element, using a modern, authoritative font to create a strong visual hierarchy.

## Mobile-First Responsive Design

### **Design Philosophy**
- **Mobile-First Approach:** All designs start with mobile and scale up to larger screens
- **Touch-Friendly:** Minimum 44px touch targets for interactive elements
- **Performance:** Optimized loading and rendering on mobile devices
- **Accessibility:** Readable and usable across all device sizes

### **Breakpoint Strategy**
- **Mobile:** `0px - 639px` (default, no prefix)
- **Small:** `640px+` (`sm:` prefix)
- **Medium:** `768px+` (`md:` prefix) 
- **Large:** `1024px+` (`lg:` prefix)
- **Extra Large:** `1280px+` (`xl:` prefix)

### **Typography Scaling**
- **Headings:** 
  - Mobile: `text-xl sm:text-2xl` → Desktop: `md:text-3xl lg:text-4xl`
  - Progressive scaling ensures readability without overwhelming small screens
- **Body Text:**
  - Mobile: `text-sm sm:text-base` → Desktop: `md:text-lg`
  - Compact but readable on mobile, comfortable on desktop
- **Descriptions:**
  - Mobile: `text-xs sm:text-sm` → Desktop: `md:text-base`

### **Navigation**
- **Mobile:** Hamburger menu with slide-out drawer
- **Desktop:** Horizontal navigation bar with hover effects
- **Touch Targets:** Minimum 44px for mobile tap areas
- **Smooth Scrolling:** `scroll-behavior: smooth` for anchor navigation

### **Layout & Spacing**
- **Sections:** 
  - Mobile: `py-12` (48px vertical)
  - Tablet: `sm:py-16` (64px vertical)
  - Desktop: `md:py-20` (80px vertical)
- **Grid Systems:**
  - Mobile: `grid-cols-1` (single column)
  - Tablet: `sm:grid-cols-2` (two columns)
  - Desktop: `md:grid-cols-3` (three columns)
- **Containers:** Responsive padding with `px-4` on mobile, scaling up

### **Component Adaptations**
- **Cards:**
  - Mobile: Compact padding, smaller images (h-32)
  - Desktop: Standard padding, larger images (h-48)
- **Buttons:**
  - Mobile: Full-width or stacked vertically
  - Desktop: Inline horizontal layout
  - Shortened text on mobile when necessary
- **Images:**
  - Mobile: 128px height placeholders
  - Tablet: 160px height
  - Desktop: 192px height

### **Content Strategy**
- **Concise Mobile Copy:** Shorter sentences and paragraphs for mobile
- **Progressive Disclosure:** Show essential information first on mobile
- **Readable Line Length:** Max 65 characters per line across devices
- **White Space:** Generous spacing prevents cramped feeling on mobile

### **Performance Considerations**
- **Image Optimization:** Responsive images with appropriate sizes
- **Fast Loading:** Minimal animation on mobile to preserve battery
- **Smooth Interactions:** 60fps animations where used
- **Touch Responsiveness:** Immediate visual feedback for taps

### **Testing Requirements**
- **Device Testing:** iPhone SE (375px) to large desktop (1920px+)
- **Orientation:** Both portrait and landscape on tablets
- **Touch Testing:** All interactive elements accessible via touch
- **Performance:** Fast loading on 3G connections

## Layout & Components

-   **Structure:** Clean, grid-based layouts with generous use of negative (dark) space to create a focused, uncluttered, and immersive experience.
-   **Spacing:** Consistent padding and margins will be applied using Tailwind's spacing scale (e.g., `p-6`, `m-4`, `space-y-6`).
-   **Core Components:**
    -   **Hero Section:** Full-screen, featuring a bold headline and minimal text over a high-quality visual.
    -   **Cards:** For modular content blocks.
    -   **Buttons:** Minimalist design with subtle hover effects.
    -   **Navigation:** Unobtrusive, simple, and bold links.

## Visual Elements & Animation

-   **Images:** High-quality, professional photography or abstract visuals, often with a moody, cinematic tone.
-   **Animations:** Transitions will be minimal and smooth (e.g., fades, subtle scales on hover) to enhance the user experience without causing distraction.

---

## References

-   [Anduril Industries Website](https://www.anduril.com)
-   [Fonts In Use: Anduril Industries](https://fontsinuse.com/uses/32662/anduril-industries)
-   [Reddit: Anduril Promotional Video Style](https://www.reddit.com/r/Anduril/comments/1idnd0p/the_visual_effects_of_andurils_promotional_videos/) 