export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Deep Technical Audit",
    subtitle: "/ DISCOVERY & AUDIT",
    description: "I profile your Liquid theme code, Core Web Vitals, app dependency graph, tracking tags, and GraphQL API bottlenecks.",
    deliverables: ["Lighthouse & CWV report", "App bloat analysis", "SEO redirect audit"],
  },
  {
    step: "02",
    title: "Architecture & Blueprint",
    subtitle: "/ STRATEGY & ROADMAP",
    description: "Creating a zero-bloat architecture plan. Defining custom Metaobjects schemas, Liquid section specs, or Hydrogen headless routes.",
    deliverables: ["Technical spec sheet", "UI/UX wireframes", "API schema blueprint"],
  },
  {
    step: "03",
    title: "Precision Development",
    subtitle: "/ BUILD & INTEGRATION",
    description: "Clean, modular code written from scratch. OS 2.0 sections, Shopify Functions, custom slide-out carts, and high-performance WebGL features.",
    deliverables: ["Staging preview theme", "Shopify Functions code", "CI/CD GitHub repo"],
  },
  {
    step: "04",
    title: "CRO & Speed Optimization",
    subtitle: "/ POLISH & BENCHMARK",
    description: "Stress testing across mobile devices, minifying assets, configuring web worker analytics scripts, and tuning LCP under 1.5 seconds.",
    deliverables: ["Sub-1.5s LCP verification", "Cross-browser QA", "A/B test launch"],
  },
  {
    step: "05",
    title: "Launch & Retainer Support",
    subtitle: "/ LAUNCH & EVOLVE",
    description: "Zero-downtime deployment, DNS / domain cutover monitoring, post-launch analytics tracking validation, and ongoing SLA maintenance.",
    deliverables: ["Zero-downtime cutover", "GA4 / GTM verification", "Monthly retainer support"],
  },
];
