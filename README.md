# Rifat Hossain — Portfolio

Ultra-premium personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui conventions. Dark-only, glassmorphism, aurora gradient background, animated particles, spotlight hover cards, and a custom mouse-follower.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Editing content

- **Hero / About / Contact copy** — `components/hero.tsx`, `components/about.tsx`, `components/contact.tsx`
- **Skills** — `components/skills.tsx` (edit the `skills` array)
- **Projects** — `components/projects.tsx` (the `projects` array is sample content — replace with your real work)
- **Experience timeline** — `components/experience.tsx` (the `timeline` array is sample content — replace with your real milestones)
- **Colors** — `tailwind.config.ts` (`blue`, `violet`, `cyan`, `base`)
- **Fonts** — Geist Sans/Mono are loaded via the `geist` package in `app/layout.tsx`

## Deploy

The project is ready to deploy on Vercel: push to a GitHub repo, import it at vercel.com/new, and it builds with zero config.

## Notes

- Motion respects `prefers-reduced-motion`.
- The particle field and mouse-follower are disabled automatically on touch devices where they don't make sense.
- Metadata in `app/layout.tsx` uses a placeholder domain (`rifathossain.dev`) — update `SITE_URL` once you have a real domain, and update `app/sitemap.ts` to match.
