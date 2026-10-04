export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  metric: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "The single best developer we've worked with in 8 years of agency operation. He solved a 25,000 SKU sync issue that three separate agencies failed to fix.",
    author: "Marcus Vance",
    role: "VP of E-Commerce",
    company: "Vance Media Agency",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    metric: "+42% Conversion Rate",
  },
  {
    quote: "He redesigned our PDP and checkout flow. Our mobile conversion rate jumped overnight, and our LCP load time fell below 1.2 seconds.",
    author: "Elena Rostova",
    role: "Founder & Creative Director",
    company: "AURA Luxury",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    metric: "$1.4M ARR Scaled",
  },
  {
    quote: "Extremely rare combination of deep technical GraphQL knowledge, Liquid mastery, and high-end design sensitivity. Having him on retainer is our unfair advantage.",
    author: "David Chen",
    role: "Head of Digital",
    company: "Kroma Cosmetics Labs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    metric: "98/100 Speed Score",
  },
];
