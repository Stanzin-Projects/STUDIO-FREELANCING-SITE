# Nakpo Studio — Design & Architecture

A single-page portfolio website built with **React + Vite + Tailwind CSS**,
cloned from the design of [micasa-design.com](https://www.micasa-design.com/)
and rebranded for **Nakpo Studio** as a freelancing portfolio.

## Features (mirroring the original site)

- Full-screen hero with a muted Vimeo background video, brand wordmark and an
  animated scroll-down arrow (arrow fades in 2s after load, bounces on hover)
- Sticky navbar: transparent gradient over the hero at the top, solid and fixed
  once you scroll past it
- Mobile full-screen overlay menu with staggered fade
- Portfolio grid with mixed column spans (1/3, 1/2, 2/3) and the same
  Bootstrap-style card shadows
- Hover **video loops** on every work card (desktop only, ≥992px), exactly like
  the original
- Gray "curtain" **scroll-reveal** animation: each card fades in as it enters
  the viewport (with the 0.25s delay on alternate cards)
- Footer with contact blocks, social icons and a grayscale Google-map strip

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build
```

## Customize it for your own work

1. **Projects** — edit `src/data/projects.js`: each entry has `title`,
   `category`, `span` (4/6/8 = column width), `shadow`, `image` and `video`.
   Drop your own posters in `public/images/work/` and your own clips anywhere
   (e.g. `/videos/my-project.mp4`).
2. **Contact info** — the phone numbers, email, addresses and social links are
   placeholders in `src/components/Navbar.jsx` (mobile menu) and
   `src/components/Footer.jsx`. Replace the `#` social hrefs with your real
   profiles.
3. **Brand name** — "Nakpo Studio" appears in `index.html` (title/meta), the
   hero wordmark (`src/components/Hero.jsx`), the navbar, the mobile menu and
   the footer.
4. **Hero video** — the showreel is a Vimeo background iframe in
   `src/components/Hero.jsx`; swap the video ID for your own (set
   `background=1` to keep it muted/looping).
5. **Map** — the footer map embed in `src/components/Footer.jsx` is a neutral
   placeholder; replace `src` with your own Google Maps embed.

> Note: the current project images/posters are the original studio's published
> work, used only to demonstrate the layout. Replace them with your own
> projects before going live.
