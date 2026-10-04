export interface ServicePillar {
  number: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  iconShape: "torus" | "cube" | "sphere" | "knot" | "dodecahedron";
}

export const SERVICES: ServicePillar[] = [
  {
    number: "01 /",
    slug: "cro",
    title: "Conversion Rate Optimization",
    tagline: "Turn window shoppers into high-LTV buyers with data-backed UI/UX redesigns.",
    description: "Systematic CRO audits, PDP and slide-out cart redesigns, checkout friction removal, speed and Core Web Vitals rescue, plus GA4 / GTM event analytics tracking.",
    features: [
      "A/B testing & hypothesis validation",
      "PDP & slide-out cart UX redesign",
      "Checkout extensibility optimization",
      "Speed & Core Web Vitals optimization",
      "GA4, GTM & Meta Pixel conversion tracking",
    ],
    techStack: ["Google Optimize / VWO", "GA4 / GTM", "Liquid", "Core Web Vitals", "PostHog"],
    iconShape: "torus",
  },
  {
    number: "02 /",
    slug: "custom-development",
    title: "Custom Shopify Development",
    tagline: "Bespoke Liquid themes & headless Hydrogen storefronts built for scale.",
    description: "From custom Liquid themes from scratch to Online Store 2.0 modular section schemas, custom Shopify Functions for dynamic pricing, Checkout Extensibility, and headless Hydrogen (Remix / Storefront API) apps.",
    features: [
      "Liquid themes from scratch (OS 2.0)",
      "Custom Shopify Functions (discounts, delivery, payment)",
      "Checkout Extensibility widgets",
      "Headless Hydrogen & Remix storefronts",
      "Custom app & third-party integrations",
    ],
    techStack: ["Liquid", "Hydrogen / Remix", "GraphQL Storefront API", "Shopify CLI", "Tailwind CSS"],
    iconShape: "knot",
  },
  {
    number: "03 /",
    slug: "large-catalog-data",
    title: "Large Catalog & Data Handling",
    tagline: "Architected for 10k+ SKU inventories, multi-platform migrations, and sub-second filtering.",
    description: "Specialized in 10,000+ SKU stores. Bulk data operations via GraphQL Admin API, custom Metafields & Metaobjects schema design, ERP/PIM/inventory real-time synchronization, and lightning-fast collection performance.",
    features: [
      "10k+ SKU store architecture",
      "Bulk GraphQL Admin API scripts",
      "Metafields & Metaobjects database architecture",
      "ERP, PIM & warehouse inventory sync",
      "Platform migrations (Magento, WooCommerce, BigCommerce to Shopify)",
    ],
    techStack: ["GraphQL Admin API", "Node.js", "Metaobjects", "Matrixify", "Klaviyo / ERP Connectors"],
    iconShape: "cube",
  },
  {
    number: "04 /",
    slug: "shopify-seo",
    title: "Shopify SEO",
    tagline: "Dominate search rankings without compromising site speed or design integrity.",
    description: "Technical SEO audits, structured data & JSON-LD schema implementation, collection and product hierarchy planning, bulletproof 301 URL redirect strategies, and zero-traffic-loss platform migrations.",
    features: [
      "Technical SEO & crawl efficiency",
      "JSON-LD structured data (Product, Offer, Breadcrumb, FAQ)",
      "Collection & tag URL hierarchy optimization",
      "Migration 301 mapping without ranking drops",
      "Site speed & Core Web Vitals alignment",
    ],
    techStack: ["Google Search Console", "Screaming Frog", "JSON-LD", "Ahrefs", "Shopify Redirect API"],
    iconShape: "sphere",
  },
  {
    number: "05 /",
    slug: "problem-solving-support",
    title: "Problem Solving & Ongoing Support",
    tagline: "Emergency bug fixes, app conflict resolutions, and dedicated monthly retainer support.",
    description: "When standard agencies throw up their hands, I step in to fix broken checkouts, JS app conflicts, theme corruptions, and custom feature breakdowns with fast SLA response times.",
    features: [
      "Emergency bug fixes & checkout rescue",
      "App conflict & duplicate script cleanup",
      "Performance rescue & code refactoring",
      "Monthly retainer support & developer on-call",
      "Codebase security & theme version control",
    ],
    techStack: ["Git / GitHub", "Shopify Theme Inspector", "Sentry", "Shopify CLI", "Liquid"],
    iconShape: "dodecahedron",
  },
  {
    number: "06 /",
    slug: "project-store-management",
    title: "E-Commerce & Project Management",
    tagline: "End-to-end store management, technical project oversight, vendor coordination, and operations.",
    description: "Beyond hands-on code development, I provide complete e-commerce project management and store operations support. From leading sprint cycles and managing third-party app vendors to overseeing catalog rollouts and technical strategy, I ensure your store runs efficiently and stress-free.",
    features: [
      "Technical project management & sprint planning",
      "E-commerce store operations & vendor management",
      "Third-party app & design team leadership",
      "Catalog management & launch rollout oversight",
      "Technical roadmap & strategic client consulting",
    ],
    techStack: ["Jira / Asana", "Shopify Admin", "Agile / Sprint Planning", "Slack / Loom", "Notion"],
    iconShape: "torus",
  },
  {
    number: "07 /",
    slug: "workflow-bot-automations",
    title: "Workflow & Bot Automations",
    tagline: "n8n AI bots, custom webhooks, and REST/GraphQL API bridges that eliminate manual work.",
    description: "Architecting automated workflow engines using n8n and custom API middleware. From intelligent n8n customer & inventory bots to custom webhook bridges connecting Shopify, CRMs, ERPs, and internal Slack/email notifications.",
    features: [
      "Custom n8n workflow automation & AI bots",
      "Custom API bridges & REST/GraphQL middleware",
      "Real-time webhook routing (Shopify, ERP, CRM)",
      "Automated multi-platform data synchronization",
      "Payload transformation & error-recovery pipelines",
    ],
    techStack: ["n8n", "Node.js / Express", "Webhooks", "Shopify Webhooks", "REST / GraphQL", "Python Middleware"],
    iconShape: "cube",
  },
  {
    number: "08 /",
    slug: "crm-lead-reengagement",
    title: "CRM & Pipeline Lead Re-Engagement",
    tagline: "Re-activate cold leads from stagnant sales pipelines with automated win-back workflows.",
    description: "Transforming dormant leads into high-converting sales opportunities. We design automated lead re-engagement triggers across HubSpot, Klaviyo, GoHighLevel, and Pipedrive pipelines—reactivating old contacts through multi-channel SMS & email drip sequences.",
    features: [
      "Re-engaging old leads from stagnant pipelines",
      "Automated deal stage triggers & lead scoring",
      "Multi-channel SMS & Email win-back sequences",
      "HubSpot, Klaviyo & CRM pipeline architecture",
      "Lead lifecycle reporting & conversion tracking",
    ],
    techStack: ["HubSpot", "Klaviyo", "GoHighLevel", "ActiveCampaign", "Pipedrive", "n8n CRM Triggers"],
    iconShape: "sphere",
  },
];

