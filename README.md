# POPINI Consults Website - Build & Architecture Documentation

![POPINI Consults Logo](public/logo.png)

This document is the definitive guide to the **build process**, **architecture**, and **technical stack** for the POPINI Consults web application. It is tailored for developers and CI/CD operations managing the deployment.

---

## 🛠 Tech Stack Overview

The project relies on a modern, high-performance React ecosystem utilizing the Next.js App Router:

- **Core Framework:** [Next.js](https://nextjs.org/) (v16.1.6)
- **UI & Components:** [React](https://react.dev/) & React-DOM (v19.2.3)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS integration (`@tailwindcss/postcss`)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (v12.34.3)
- **Fluid Scrolling:** [Lenis](https://lenis.darkroom.engineering/) (v1.3.17)
- **Icons:** [Lucide React](https://lucide.dev/) (v0.575.0)
- **Utility:** `clsx` and `tailwind-merge` for dynamic classes
- **Language:** TypeScript 5+

---

## ⚙️ The Build Process

The application is configured to deploy seamlessly on **Netlify**. Everything related to routing, static generation, and the build pipeline is tailored for this environment.

### Build Configuration (`netlify.toml`)

Netlify serves as our primary host. The core build instructions define the sequence in our `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

- **Build Command:** `npm run build` uses the internal Next.js compiler.
- **Publish Directory:** The `.next` folder contains the compiled, production-ready assets.
- **Next.js Plugin:** The `@netlify/plugin-nextjs` package is essential. It provisions Netlify edge functions and handlers to correctly serve Next.js App Router features, Server Actions, and dynamic rendering.

### Next.js Image Optimization (`next.config.ts`)

During the build and runtime, image optimization relies on the Next.js `<Image>` component. To prevent untrusted sources and allow external mockups/assets, `images.unsplash.com` is explicitly whitelisted.

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
```

---

## 🚀 Local Environment Setup & Build Steps

To compile and verify the build on a local machine, execute the following:

1. **Install Dependencies:**
   Ensure Node 20+ is active, then run:
   ```bash
   npm install
   ```
2. **Start the Development Server:**
   This utilizes Hot Module Replacement for rapid iteration:
   ```bash
   npm run dev
   ```
   > Environment available at [http://localhost:3000](http://localhost:3000)

3. **Execute a Production Build Locally:**
   It is highly recommended to test the compiler and type-checker before pushing to the Netlify CI:
   ```bash
   npm run lint
   npm run build
   ```
4. **Test the Production Build:**
   To guarantee the site operates as expected after the `.next` output directory is generated:
   ```bash
   npm run start
   ```

---

## 📂 Build Structure & Logic

When modifying the build or logic, keep the project architecture in mind:

```text
src/
├── app/                  # Primary Next.js App Router topology
│   ├── globals.css       # Tailwind v4 configuration engine
│   └── layout.tsx        # High-order providers (Lenis, Motion Hooks)
├── components/layout/    
│   ├── PageTransition.tsx  # Framer Motion page wrapper (`AnimatePresence`)
│   └── SmoothScroll.tsx    # Initialization wrapper for Lenis
└── lib/                  # Centralized logic (`clsx` + `tailwind-merge`)
```

### Note on Styling in v4 Build

Since this application utilizes **Tailwind CSS v4**, constraints are written inline utilizing the `@theme inline` directive within `src/app/globals.css`. Ensure build scripts do not rely on looking for a legacy `tailwind.config.ts`.

---

## 📄 License
Copyright © POPINI Consults. All rights reserved.
