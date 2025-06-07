# Personal Portfolio

Hi, I’m Justin, a software engineer focused on building scalable, reliable web applications. This is my personal portfolio site, where I share my work, blog about things I’m learning, and track my growth as a developer.

## Overview

This project is a developer portfolio built with:

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- Markdown for blog posts

It’s optimized for fast iteration, content-driven updates, and clean responsive design.

## Running Locally

```bash
git clone https://github.com/jkishbugh/portfolio.git
cd portfolio
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site.

## Writing Blog Posts

Add new Markdown files to the `/posts` folder. Use frontmatter like this:

```markdown
---
title: "Post Title"
date: "2025-04-28"
summary: "A short post summary."
---
```

Posts will be listed automatically on the `/blog` page.

## Deployment

This project is designed to deploy instantly to [Vercel](https://vercel.com), the official platform for Next.js:

```bash
npx vercel
```

## License

MIT
