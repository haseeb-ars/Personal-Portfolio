export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  liveUrl: string;
  url: string;
  industry: string;
  categories: ("CRO" | "Custom Dev" | "Large Catalog" | "SEO" | "Headless" | "Automations" | "CRM")[];
  year?: string;
  tags: string[];
  oneLineOutcome: string;
  summary: string;
  problem: string;
  solution: string;
  results: Metric[];
  techUsed: string[];
  coverImage: string;
  coverVideo?: string;
  gallery: string[];
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "n8n-bot-api-bridges",
    title: "n8n Bot & Custom API Bridges",
    client: "OmniChannel Retail & Operations",
    liveUrl: "https://n8n.io/",
    url: "https://n8n.io/",
    industry: "E-Commerce Operations & Automated Workflows",
    categories: ["Automations", "Custom Dev"],
    tags: ["AUTOMATIONS", "N8N", "API BRIDGES", "BOTS"],
    oneLineOutcome: "Engineered n8n bot & API bridges automating 12,000+ monthly workflow tasks across Shopify & ERP",
    summary: "Built automated n8n workflows, a custom customer & inventory bot, and REST/GraphQL API bridges connecting Shopify, ERP, and internal notification channels.",
    problem: "Manual order verification, inventory sync delays across multiple fulfillment centers, and repetitive customer support queries were consuming 15+ developer and operations hours per week.",
    solution: "Architected self-hosted n8n automation pipelines with custom Node.js webhook bridges. Created an automated n8n bot to query real-time stock levels, handle order status verification, and trigger instant Slack & email notifications.",
    results: [
      { label: "Monthly automated tasks", value: "12,000+" },
      { label: "Inventory sync latency", value: "< 2 sec" },
      { label: "Weekly manual hours saved", value: "15+ hrs" },
    ],
    techUsed: ["n8n", "Node.js / Express", "Shopify Webhooks", "REST & GraphQL API Bridges", "Slack Webhooks"],
    coverImage: "/work/almach/cover.webp",
    gallery: [
      "/work/almach/cover.webp",
      "/work/almach/gallery-1.webp",
      "/work/almach/mobile.webp",
    ],
    featured: true,
  },
  {
    slug: "crm-lead-reengagement-pipeline",
    title: "CRM Pipeline Lead Re-Engagement",
    client: "B2B & High-Ticket D2C Brand",
    liveUrl: "https://hubspot.com/",
    url: "https://hubspot.com/",
    industry: "High-Ticket E-Commerce & Lead Generation",
    categories: ["CRM", "Automations"],
    tags: ["CRM", "LEAD RE-ENGAGEMENT", "PIPELINES", "AUTOMATIONS"],
    oneLineOutcome: "Re-engaged 18,500+ dormant leads from old pipelines generating €140,000+ in recovered revenue",
    summary: "Built automated lead re-engagement pipelines in HubSpot and Klaviyo, leveraging n8n webhook triggers to reactivate cold leads from past sales pipelines.",
    problem: "Over 18,500 qualified leads from old sales pipelines had gone cold due to a lack of structured, automated follow-ups, leaving massive unrealized revenue.",
    solution: "Architected dynamic CRM pipeline workflows that segmented dormant leads by deal stage, intent signals, and past interactions—deploying personalized multi-channel SMS & email re-engagement drip triggers.",
    results: [
      { label: "Dormant leads re-engaged", value: "18,500+" },
      { label: "Recovered pipeline revenue", value: "€140,000+" },
      { label: "Pipeline conversion lift", value: "+3.4%" },
    ],
    techUsed: ["HubSpot CRM", "Klaviyo", "n8n Webhook Triggers", "Custom API Bridges", "ActiveCampaign"],
    coverImage: "/work/carrera-world/cover.webp",
    gallery: [
      "/work/carrera-world/cover.webp",
      "/work/carrera-world/gallery-1.webp",
      "/work/carrera-world/mobile.webp",
    ],
    featured: true,
  },

  {
    slug: "tormino",
    title: "Tormino",
    client: "Tormino E-Commerce",
    liveUrl: "https://tormino.com/",
    url: "https://tormino.com/",
    industry: "Multi-Category E-Commerce & Outdoor/Bicycle Gear",
    categories: ["Custom Dev", "CRO", "Large Catalog"],
    tags: ["CUSTOM", "CRO", "CATALOG"],
    oneLineOutcome: "Conversion rate 0.6% → 2.7% in one month (≈ +€500,000 projected annual revenue)",
    summary: "Full store redesign including all category pages, plus ongoing catalog management for CRO across a massive catalog of 912,000+ SKUs.",
    problem: "Low conversion rate (0.6%) across a large product catalog with underperforming category pages and slow product discovery.",
    solution: "Redesigned the entire store including category page architecture, streamlined filtering and PDP hierarchy, and managed the catalog on an ongoing basis with conversion optimization as the primary goal.",
    results: [
      { label: "Conversion rate before", value: "0.6%" },
      { label: "Conversion rate after (1 month)", value: "2.7%" },
      { label: "Projected annual revenue impact", value: "+€500,000" },
    ],
    techUsed: ["Shopify Plus", "Liquid OS 2.0", "Catalog Optimization", "Custom Filtering", "CRO Analytics"],
    coverImage: "/work/tormino/cover.webp",
    gallery: [
      "/work/tormino/cover.webp",
      "/work/tormino/gallery-1.webp",
      "/work/tormino/mobile.webp",
    ],
    featured: true,
  },
  {
    slug: "carrera-world",
    title: "Carrera World",
    client: "Carrera Eyewear UK",
    liveUrl: "https://en.carreraworld.com/",
    url: "https://en.carreraworld.com/",
    industry: "Eyewear & Fashion Accessories",
    categories: ["Custom Dev", "CRO"],
    tags: ["CUSTOM", "CRO"],
    oneLineOutcome: "Full store redesign with CRO improvements and ongoing support",
    summary: "Full custom store redesign for Italian luxury & sport eyewear brand Carrera, focused on conversion rate optimization and ongoing retainer support.",
    problem: "Legacy store structure failed to showcase Carrera's heritage eyewear craftsmanship and created friction during product discovery and frame selection.",
    solution: "Engineered an elevated custom Liquid OS 2.0 theme with high-performance media rendering, interactive lens & frame selectors, and persistent optimization retainers.",
    results: [],
    techUsed: ["Shopify OS 2.0", "Liquid", "Broadcast Theme", "JavaScript", "CRO Retainer"],
    coverImage: "/work/carrera-world/cover.webp",
    gallery: [
      "/work/carrera-world/cover.webp",
      "/work/carrera-world/gallery-1.webp",
      "/work/carrera-world/mobile.webp",
    ],
    featured: true,
  },
  {
    slug: "drink-gravity",
    title: "Drink Gravity",
    client: "Gravity Drinks Co.",
    liveUrl: "https://drinkgravity.com.au/",
    url: "https://drinkgravity.com.au/",
    industry: "Beverage & Craft Spirits",
    categories: ["Custom Dev"],
    tags: ["CUSTOM"],
    oneLineOutcome: "Designed and built their Shopify store",
    summary: "Custom Shopify store design and build for an Australian better-for-you alcoholic beverage brand, refreshing Australia and planting trees with every sip.",
    problem: "Needed a vibrant, modern e-commerce storefront to launch their low-sugar alcoholic drink line and eco-friendly tree planting initiative.",
    solution: "Built a custom Shopify theme featuring bold brand typography, custom product bundle section, age verification gate, and subscription support.",
    results: [],
    techUsed: ["Shopify OS 2.0", "Liquid", "Tailwind CSS", "Custom Cart Drawer", "Recharge Subscriptions"],
    coverImage: "/work/drink-gravity/cover.webp",
    gallery: [
      "/work/drink-gravity/cover.webp",
      "/work/drink-gravity/gallery-1.webp",
      "/work/drink-gravity/mobile.webp",
    ],
    featured: true,
  },
  {
    slug: "love-good-fats",
    title: "Love Good Fats",
    client: "Love Good Fats",
    liveUrl: "https://lovegoodfats.com/",
    url: "https://lovegoodfats.com/",
    industry: "Health Food & Keto Snacks",
    categories: ["Custom Dev"],
    tags: ["CUSTOM"],
    oneLineOutcome: "Custom store design and build, plus ongoing support",
    summary: "Custom Shopify store design and development for keto-friendly snack brand Love Good Fats, backed by a continuing support retainer.",
    problem: "Legacy storefront struggled to communicate product nutritional benefits, bundle builder options, and subscription plans effectively.",
    solution: "Designed and built a custom Shopify experience with custom PDP nutrition accordions, variety box bundle builder, and continuous retainer support.",
    results: [],
    techUsed: ["Shopify OS 2.0", "Liquid", "Metaobjects", "Bundle Builder", "Ongoing Retainer"],
    coverImage: "/work/love-good-fats/cover.webp",
    gallery: [
      "/work/love-good-fats/cover.webp",
      "/work/love-good-fats/gallery-1.webp",
      "/work/love-good-fats/mobile.webp",
    ],
    featured: true,
  },
  {
    slug: "almach",
    title: "Almach",
    client: "Almach Lisse B.V.",
    liveUrl: "https://almach.nl/",
    url: "https://almach.nl/",
    industry: "Automotive & Motorcycle Loading Systems",
    categories: ["Custom Dev", "Large Catalog"],
    tags: ["CUSTOM", "CATALOG"],
    oneLineOutcome: "Migrated and redesigned their store from WordPress to Shopify",
    summary: "Full platform migration from WordPress to Shopify with a complete redesign, including moving over the product catalog.",
    problem: "Store was running on WordPress/WooCommerce, limiting scalability, performance, and catalog management for specialized motorcycle loading systems.",
    solution: "Rebuilt the store on Shopify from the ground up, migrating all products, customer data, content, and design into a fast, manageable Liquid OS 2.0 setup.",
    results: [],
    techUsed: ["Shopify OS 2.0", "WordPress to Shopify Migration", "Liquid", "Multilingual Setup", "Custom Spec Tables"],
    coverImage: "/work/almach/cover.webp",
    gallery: [
      "/work/almach/cover.webp",
      "/work/almach/gallery-1.webp",
      "/work/almach/mobile.webp",
    ],
    featured: true,
  },
  {
    slug: "mavari-pharmacy",
    title: "Mavari Pharmacy",
    client: "Mavari Pharmacy",
    liveUrl: "https://mavaripharmacy.com/",
    url: "https://mavaripharmacy.com/",
    industry: "Healthcare & Prescription Pharmacy",
    categories: ["Custom Dev"],
    tags: ["CUSTOM"],
    oneLineOutcome: "Designed and built their Shopify store",
    summary: "Store design and build for a compounding healthcare and prescription medical cannabis pharmacy.",
    problem: "Needed a clean, compliant, and trustworthy e-commerce storefront for prescription verification and medical cannabis product guidance.",
    solution: "Architected a modern, medical-grade Shopify storefront with secure consultation intake forms, prescription upload flows, and high-trust UI.",
    results: [],
    techUsed: ["Shopify OS 2.0", "Liquid", "Custom Form Intake", "Privacy Compliance", "Tailwind CSS"],
    coverImage: "/work/mavari-pharmacy/cover.webp",
    gallery: [
      "/work/mavari-pharmacy/cover.webp",
      "/work/mavari-pharmacy/gallery-1.webp",
      "/work/mavari-pharmacy/mobile.webp",
    ],
    featured: false,
  },
];
