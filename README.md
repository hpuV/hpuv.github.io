# hpuv.github.io

Personal portfolio website — projects, CV, highlights and contact information.

**Live site:** https://hpuv.github.io/

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- Motion (animations), Lucide (icons), React Router

## Project Structure

```
src/
├── App.tsx            # App entry and routing
├── main.tsx           # React bootstrap
├── index.css          # Global styles (Tailwind)
├── components/        # Navbar, Hero, Highlights, Projects, CV, Contact, Footer, theme toggle…
└── assets/
    ├── images/        # Portrait and project screenshots
    └── files/         # Resume and project reports / presentations (PDF)
```

## Run Locally

**Prerequisites:** Node.js 20+

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build to ./dist
npm run preview  # preview the production build
npm run lint     # type-check
```

## Deployment

Every push to `main` is built and deployed to GitHub Pages automatically by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Copyright

Copyright © 2026 CALiu. **All rights reserved.**

This repository is public only so the website can be hosted on GitHub Pages.
No license is granted. You may **not** copy, modify, redistribute, reuse, or
create derivative works from any part of this repository — including the source
code, design, text, images, resume, reports, and other documents — without
prior written permission from the author.
