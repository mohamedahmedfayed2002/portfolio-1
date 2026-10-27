# Mohamed Ahmed — DevOps Engineer Portfolio

A premium, modern, fully responsive portfolio website for Mohamed Ahmed, a DevOps Engineer specializing in Cloud Computing, Linux Administration, Containerization, and Infrastructure Automation.

## Tech Stack

- **React.js** (with TypeScript)
- **Vite** (build tool & dev server)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Features

- Premium dark technology aesthetic with glassmorphism and glowing accents
- Sticky responsive navbar with scroll-spy active highlighting
- Mobile hamburger menu
- Animated hero with live terminal window and network-node background
- Skills organized into categories with icon cards
- Featured project cards with tech badges and GitHub/Docs/Demo links
- Certifications & Education section with placeholder cards
- Centralized GitHub & Documentation resource links
- Contact form with client-side validation (opens email client)
- SEO metadata (Open Graph + Twitter cards)
- Smooth scrolling and accessible, semantic HTML

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Type-check
npm run typecheck

# Lint
npm run lint
```

## Customization

All personal information and external links are centralized in:

- `src/data/config.ts` — name, title, about text, email, education, and all external URLs (GitHub, LinkedIn, Google Drive, CV, project docs, live demos)
- `src/data/skills.ts` — skill categories and items
- `src/data/projects.ts` — project details, technologies, and links

### What to update

1. **Links**: Replace the placeholder URLs in `src/data/config.ts` with your real GitHub, LinkedIn, Google Drive, and CV links.
2. **Profile image**: Replace the image URL in `src/components/Hero.tsx` with your professional photo.
3. **Project images**: Replace the image URLs in `src/components/Projects.tsx` with your project screenshots.
4. **Certifications**: Update `src/components/Certifications.tsx` with your earned certificates (remove placeholders).
5. **Live demos**: Set the `liveDemo` field in `src/data/projects.ts` to a URL when a demo is available.

## Deployment

This is a static site — deploy the `dist/` folder (created by `npm run build`) to any static host:

- **Vercel**: Import the repo and deploy; Vercel auto-detects Vite.
- **Netlify**: Build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: Build and push `dist/` to a `gh-pages` branch.
- **Cloudflare Pages**: Build command `npm run build`, output directory `dist`.

## License

Personal portfolio. All rights reserved © Mohamed Ahmed.
