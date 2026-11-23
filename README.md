# Halcyon Studio — Design Agency Homepage

A responsive design-agency homepage built with **Next.js 15 (App Router)**, **TypeScript** and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

## Sections

| Section   | Highlights |
|-----------|-----------|
| Hero      | Agency name, tagline, "Get Started" / "View Work" CTAs, animated gradient background |
| Services  | 4 cards (UI/UX, Web Development, Branding, Digital Marketing), each with an icon, title, description and tags |
| Portfolio | 6-project responsive grid using `next/image`, with image zoom and overlay on hover |
| Contact   | Name / email / message form, client + server validation, loading state, success message |

## Bonus features

- **Tailwind CSS** for all styling (no UI templates or component libraries)
- **Animations**: hero fade-in, floating gradient blobs, cards that fade in on scroll (IntersectionObserver), hover effects. Turned off when the user prefers reduced motion
- **SEO**: Metadata API (title template, description, Open Graph, Twitter), `robots.txt` and `sitemap.xml`
- **Dark mode toggle**: class-based, saved in `localStorage`, follows the OS setting by default, with no flash on load
- **Image optimisation** using `next/image` with responsive `sizes`
- **Accessibility**: semantic landmarks, labelled inputs, `aria-invalid` / `aria-describedby` on errors, visible focus styles, a keyboard-friendly mobile menu

## Folder structure

```
src/
├── app/
│   ├── api/contact/route.ts   # POST handler, validates input on the server
│   ├── layout.tsx             # fonts, metadata, theme bootstrap
│   ├── page.tsx               # puts the sections together
│   ├── robots.ts, sitemap.ts  # SEO routes
│   └── globals.css            # Tailwind theme, keyframes, dark variant
├── components/
│   ├── layout/                # Navbar, Footer
│   ├── sections/              # Hero, Services, Portfolio, Contact, ContactForm
│   └── ui/                    # Reveal, SectionHeading, ThemeToggle, Icon
├── data/                      # services.ts, projects.ts (content kept apart from markup)
└── lib/                       # site config, shared validation
```

Components are server components by default. Only the parts that need interactivity (`Navbar`, `ThemeToggle`, `Reveal`, `ContactForm`) are client components.

Portfolio images come from [Unsplash](https://unsplash.com).
