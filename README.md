# POPINI Consults Website

![POPINI Consults Logo](public/logo.png) <!-- Assuming a logo will be here based on the assets -->

**Built for Legacy.** A premium, Next.js-powered web application for POPINI Consults, delivering world‑class architectural and strategic design consultancy to Africa’s evolving urban and commercial landscape.

## 🌟 Design Philosophy

The POPINI Consults digital experience is crafted to feel **Calm, Premium, Confident, Intentional, and Architectural.** 

The interface relies on precise typography, generous whitespace, constrained luxury brand colors, and structural micro-interactions. The motion philosophy avoids anything flashy or bouncy, instead preferring soft easings, subtle fades, gentle slides, and architectural camera-like movements.

## 🛠 Tech Stack

This project is built with a modern, high-performance React ecosystem tailored for elite visual fidelity and SEO:

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion & Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scrolling:** [Lenis](https://lenis.darkroom.engineering/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

## 📂 Project Structure

```text
src/
├── app/                  # Next.js App Router pages
│   ├── about/            # Brand Story & Core Values
│   ├── consultancy/      # Strategic Focus & Process
│   ├── contact/          # Forms & WhatsApp Integration
│   ├── projects/         # Filterable Selected Works Gallery
│   ├── services/         # Architectural & Consultancy Pillars
│   ├── globals.css       # Global structural styles & Lenis config
│   └── layout.tsx        # Root layout with fonts & wrappers
├── components/           
│   └── layout/           # Global structural components
│       ├── Footer.tsx
│       ├── Navbar.tsx
│       ├── PageTransition.tsx  # Framer Motion page wrapper
│       └── SmoothScroll.tsx    # Lenis initialization wrapper
└── lib/                  # Utility functions (e.g., tailwind-merge)
```

## ✨ Core Features

- **Architectural Motion System:** Utilizing a custom cubic-bezier easing (`0.16, 1, 0.3, 1`) globally via Framer Motion to ensure all transforms, fades, and scale events mimic premium cinematic movement.
- **Buttery Smooth Scrolling:** Lenis is implemented globally to hijack native scrolling, replacing it with momentum-based, fluid vertical tracking.
- **Dynamic Routing Transitions:** `AnimatePresence` manages page unmounts and mounts, executing soft, upward-sliding fades to prevent harsh page loads.
- **Responsive "Slide-In" Navigation:** Mobile menus avoid standard dropdowns in favor of a full-screen, 100vh charcoal overlay with staggered link appearances.
- **Context-Aware Interactions:** For the Nigerian market, a highly prominent WhatsApp floating prompt sits alongside the Contact form for rapid response times.

## 🚀 Getting Started

First, ensure you have Node.js installed. Then, clone the repository and install the dependencies:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Theme Configuration

The aesthetic constraints are strictly enforced via custom properties injected directly into the Tailwind `@theme` directive inside `src/app/globals.css`:

```css
@theme inline {
  --color-brand-charcoal: #232528;
  --color-brand-indigo: #2a2a72;
  --color-brand-sky: #089efc;
  --color-brand-gold: #fea403;
  --color-brand-soft: #eafbff;
  --font-heading: var(--font-manrope);
  --font-sans: var(--font-inter);
  --ease-architectural: cubic-bezier(0.16, 1, 0.3, 1);
}
```

## 📈 SEO & Performance

- Fully statically generated (SSG) via Next.js where possible for maximum speed and indexing.
- Semantic HTML tags (`<section>`, `<nav>`, `<main>`) utilized thoroughly.
- Next.js Fonts optimize `Manrope` and `Inter` at build time, preventing layout shifts.

## 📄 License
Copyright © POPINI Consults. All rights reserved.
