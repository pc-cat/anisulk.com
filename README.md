# Anisul | Visual Poetry

A premium, production-grade web portfolio for a videographer/photographer, built with modern web technologies to emphasize deep aesthetics, smooth interactions, and performant delivery.

## ✨ Features

- **Next.js 15+ (App Router):** Leveraging server components and fast routing.
- **Tailwind CSS v4:** Modern utility-first styling for complex, responsive, grid-based layouts.
- **Framer Motion:** High-end stagger animations and scroll reveals for dynamic user feedback.
- **Glassmorphism & Theming:** Custom color palettes (pure black, white, and vibrant deep purple accents).
- **Responsive Architecture:** Graceful scaling between mobile, tablet, and ultra-wide monitor displays.
- **Quality of Life Navigation:** Floating pill navigation, animated mobile hamburger menu, global native smooth scrolling, and custom selection highlights.
- **Inter Typography:** Leveraging variable font configurations for a highly editorial feel.

## 🚀 Getting Started

First, ensure you have the dependencies installed:

```bash
npm install
```

Then, run the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or whichever port is assigned) with your browser to see the result.

## 📁 Project Structure

`src/app/page.tsx` is the primary entrypoint assembling the various sections.
All sub-sections reside in `src/app/components/`:
- **Navbar:** Floating glass pill / Animated interactive mobile menu
- **Hero:** Animated staggering initial entry
- **About:** Engaging typography-driven biography
- **Portfolio:** CSS Grid image gallery
- **Projects / Marquee:** Auto-scrolling infinite text displays
- **Footer:** Immersive final section featuring an interactive back-to-top interaction

## 🖼️ Working with Images

Image integration is natively supported through Next.js `<Image/>` tags.
To swap in your own artwork:
1. Place standard `.jpg`, `.png`, or `.webp` files in `public/images/`.
2. Locate the corresponding `<Image>` tag in a `src/app/components/` file.
3. Update the `src="/images/filename.extension"` property to match your image.
