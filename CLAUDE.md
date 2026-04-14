# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run Next.js linter
```

No test framework is configured.

## Architecture

Single-page portfolio built with **Next.js 14 App Router** and **Tailwind CSS**, deployed to Netlify.

**Component flow:**
```
layout.js → page.js → Header, Maincontent, About, Experience, Projects, Bottom
```

All components live in `src/app/components/`. Navigation is anchor-link based (no client-side routing between pages). `Header.js` is the only `"use client"` component — it uses the `useScrollDirection` hook in `src/app/components/hooks/` to hide/show itself on scroll.

**Styling:** Hybrid of Tailwind utilities and custom classes defined in `src/app/css/index.css`. Global styles and dark mode are in `src/app/css/globals.css`. The color palette uses black background (`#000000`) with white text and pink/red accents (`#FA2D48`, `#f8c0d2`).

**Assets:** Images (`memoji.png`, `bmlaptop.png`) are in `src/app/images/` and served via Next.js `<Image>`. The resume PDF (`Dwight_Carter_Resume.pdf`) lives in `public/` and is also handled via a webpack `file-loader` rule in `next.config.mjs` (outputs to `/_next/static/files/`).

**Path alias:** `@/*` resolves to `./src/*` (configured in `jsconfig.json`).

**Deployment:** Netlify via `@netlify/plugin-nextjs` (see `netlify.toml`). No environment variables required.
