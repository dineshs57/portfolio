# Dinesh S — Portfolio

Personal portfolio for Dinesh S (B.Tech IT, St. Joseph's College of Engineering, Chennai).
Built with React 19, TanStack Start (Vite), Tailwind CSS v4 and Lucide icons.

## Project structure

```
public/Dinesh_S_Resume.pdf     Downloadable resume (served at /Dinesh_S_Resume.pdf)
public/favicon.svg             Site icon
src/data/profile.ts            All portfolio content — edit this to update text, links, skills
src/components/portfolio/      Navbar, Hero, Section, Reveal and all page sections
src/routes/index.tsx           Home page + SEO metadata (title, description, JSON-LD)
src/routes/__root.tsx          HTML shell, fonts (Geist), favicon
src/styles.css                 Design tokens (colors, fonts) and small utilities
```

To replace the resume, overwrite `public/Dinesh_S_Resume.pdf` with a file of the same name.

## Run locally

Requires Node.js 20+ (or Bun).

```bash
npm install        # or: bun install
npm run dev        # starts the dev server (URL is printed in the terminal)
npm run build      # production build
npm test           # runs the tests
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, click **Add New → Project** and import the repository.
3. Framework preset: **Other**. Build command: `npm run build`. Leave the output directory empty.
4. Under **Environment Variables**, add `NITRO_PRESET` = `vercel`
   (the build otherwise targets Cloudflare Workers by default).
5. Click **Deploy**.

Alternatively, from your machine: `npm i -g vercel`, then `NITRO_PRESET=vercel vercel deploy`.

The site can also be published directly from Lovable with one click.
