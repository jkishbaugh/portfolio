Personal Portfolio
This is a simple, modern developer portfolio website built with Next.js 14, Tailwind CSS, and Markdown-powered blog posts.

Features
Fast, lightweight, and optimized (Next.js + Turbopack)

Mobile-first responsive design

Blog functionality with Markdown content

Easy to expand and maintain

Built for quick iteration and future improvements

Project Structure
arduino
Copy
Edit
/app
  /blog
    /[slug]        // Dynamic route for individual posts
    page.tsx       // Blog index page
/components
  Header.tsx       // Site header with mobile menu
  Hero.tsx         // Landing page hero section
/lib
  posts.ts         // Markdown reading utilities
/posts
  my-first-post.md // Example markdown blog post
/public
  favicon.ico      // Site favicon
README.md
tailwind.config.ts // Tailwind CSS configuration
next.config.mjs    // Next.js configuration
Tech Stack
Next.js 14 (App Router)

Tailwind CSS

TypeScript

Gray-Matter for Markdown frontmatter parsing

Remark for Markdown-to-HTML conversion

Getting Started
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio
2. Install dependencies
bash
Copy
Edit
npm install
or

bash
Copy
Edit
pnpm install
or

bash
Copy
Edit
yarn install
3. Start the development server
bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser to view the site.

Adding New Blog Posts
Create a new Markdown (.md) file inside the /posts directory.

Use the following frontmatter template at the top of the file:

markdown
Copy
Edit
---
title: "My New Blog Post"
date: "2025-04-28"
summary: "A short description of the post."
---

Write your Markdown content below the frontmatter.
Posts will automatically appear on the /blog page.

Customization
Update colors and fonts in tailwind.config.ts

Modify the Hero section in /components/Hero.tsx

Update site metadata and SEO settings where needed

Deployment
You can deploy this portfolio easily to platforms like:

Vercel (recommended for Next.js)

Netlify

Render

Deploying to Vercel
Install the Vercel CLI if you don't already have it:

bash
Copy
Edit
npm install -g vercel
Then deploy:

bash
Copy
Edit
npx vercel
Follow the CLI prompts to complete deployment.

Future Improvements
Support for MDX-based blog posts

Tag and category system

Dark/light theme toggle

RSS feed generation

Enhanced SEO metadata

License
This project is open source and available under the MIT License.

Acknowledgements
Built using Next.js and Tailwind CSS. Inspired by simple, clean personal websites for developers.
