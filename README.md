# Award-Level 3D Shopify Developer Portfolio

A dark, cinematic, award-level 3D portfolio website built for a freelance Shopify Expert ("The all-in-one Shopify partner"). Designed to win high-value e-commerce clients and digital agencies.

## 🌟 Positioning & Value Proposition
- **Title**: Shopify Expert, "The all-in-one Shopify partner"
- **Experience**: 7+ years delivering high-converting storefronts for agencies & direct merchants.
- **The 5 Pillars**:
  1. **01 / Conversion Rate Optimization (CRO)** — A/B testing, slide-out cart redesign, checkout extensibility, speed & Core Web Vitals rescue.
  2. **02 / Custom Shopify Development** — Liquid OS 2.0 themes, Shopify Functions, headless Hydrogen (Remix / Storefront API).
  3. **03 / Large Catalog & Data Handling** — 10k+ SKU store architecture, bulk GraphQL Admin API scripts, Metaobjects database design, ERP/PIM syncs.
  4. **04 / Shopify SEO** — Technical SEO audits, JSON-LD structured data, 301 URL redirect strategy without organic traffic loss.
  5. **05 / Problem Solving & Support** — Emergency bug fixes, app conflict resolutions, and monthly retainer SLA support.

---

## 🛠️ Technology Stack
- **Framework**: Next.js 15 (App Router) + TypeScript + Tailwind CSS
- **3D Graphics & WebGL**: Three.js + `@react-three/fiber` + `@react-three/drei` + `@react-three/postprocessing`
- **Animations**: GSAP + ScrollTrigger + Framer Motion (`framer-motion`)
- **Smooth Scroll**: Lenis (`lenis`) synced with GSAP ticker
- **Forms & Validation**: `react-hook-form` + `zod`
- **Typography**: Google Fonts (`Bebas Neue`, `Space Grotesk`, `Inter`, `Instrument Serif`) via `next/font`
- **Analytics & Deploy**: `@vercel/analytics`, Vercel target

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ or 20+
- npm, pnpm, or yarn

### 2. Installation
```bash
npm install
```

### 3. Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
```bash
npm run build
npm run start
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SITE_URL=https://shopify-developer.portfolio
RESEND_API_KEY=re_123456789_your_key_here
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with fonts, Lenis scroll, 3D WebGL Canvas
│   ├── page.tsx           # Home page assembling all 9 sections
│   ├── work/              # Works gallery index page & /work/[slug] case study route
│   ├── expertise/         # 5 pillars breakdown page
│   ├── about/             # Biography, positioning, and resume action
│   ├── contact/           # Brief form & Calendly booking page
│   ├── sitemap.ts         # Automated XML sitemap
│   └── robots.ts          # Technical SEO crawler directives
├── components/
│   ├── canvas/            # 3D R3F Canvas components & GLSL shaders
│   ├── ui/                # Navbar, MenuOverlay, CustomCursor, MagneticButton, Preloader, ContactForm
│   └── sections/          # HeroSection, ServicesSection, WorkSection, WhyMeSection, ProcessSection, etc.
└── data/
    ├── projects.ts        # 6 realistic typed e-commerce case studies
    ├── services.ts        # 5 service pillars content
    ├── testimonials.ts    # Agency reviews & metrics
    └── process.ts         # 5-step methodology
```

---

## 🖼️ How to Add or Modify Case Studies

Edit `src/data/projects.ts`:
```ts
{
  slug: "your-project-slug",
  title: "Brand Name",
  client: "Client / Agency Name",
  url: "https://example.com",
  categories: ["CRO", "Custom Dev"],
  year: "2024",
  tags: ["Liquid", "Shopify Functions", "GA4"],
  summary: "Brief project overview...",
  problem: "The technical bottleneck...",
  solution: "Engineering execution...",
  results: [
    { label: "Core Web Vitals LCP", value: "1.1s" },
    { label: "Conversion Lift", value: "+38%" }
  ],
  coverImage: "https://images.unsplash.com/...",
  gallery: ["https://images.unsplash.com/..."],
  featured: true
}
```

---

## 🚀 Deployment to Vercel

1. Push your repository to GitHub / GitLab.
2. Import the project in your Vercel Dashboard.
3. Next.js App Router preset will automatically detect build settings (`npm run build`).
4. Set environment variables if using Resend for email notifications.
