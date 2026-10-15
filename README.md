# She Beauty Parlour & Fancy

Responsive React + Vite website for She Beauty Parlour & Fancy in Vinjamur, Andhra Pradesh.

## Features

- Home, Services, Gallery, About Us and Contact pages
- Poster-inspired burgundy, blush, ivory and gold styling
- Official grand-opening poster included at `public/grand-opening-poster.jpg`
- Nine service categories from the supplied poster; service prices are intentionally hidden
- WhatsApp enquiry link configured for +91 6301427005
- Click-to-call links for +91 6301427005 and +91 8328499854
- Map embed/search using the provided Medplus Pharmacy, Main Road, Vinjamur landmark
- Responsive navigation, motion effects and social profile link where configured

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Vite outputs the production site to `dist/`.

## Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Base directory: leave blank when `package.json` is in the repository root

Netlify is connected to GitHub. Commit and push changes to the configured branch to trigger a deployment. Check the Netlify Deploys page and confirm the latest deployment is Published.

## Owner-confirmation notes

- The poster says “Grand Opening on Saturday” but does not show a calendar date, so the site does not invent a specific date.
- Address landmark supplied: Medplus Pharmacy, opposite street, Main Road, Vinjamur, Andhra Pradesh 524228. The embedded map is a search for this landmark and should be checked against the exact shop pin before relying on it for navigation.
- Service prices are intentionally not displayed.
- The supplied grand-opening poster is official. Other gallery images are temporary sample inspiration images, not verified parlour work.
- Instagram link is configured from the existing project setting. Facebook and YouTube are not linked because confirmed profile URLs were not provided.
- Confirm the primary WhatsApp number is the preferred number before sharing widely.


## Responsive layout

The site includes responsive layouts for desktop, tablet, and mobile widths (including narrow 320–360px screens), a mobile navigation menu, fluid poster sizing, responsive service/gallery grids, and reduced-motion support. The grand-opening image in `public/grand-opening-poster.jpg` is the clean poster crop without Instagram Story controls.
