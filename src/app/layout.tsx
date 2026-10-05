import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk, Inter, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/ui/Navbar";
import MenuOverlay from "@/components/ui/MenuOverlay";
import TreeShadowBackground from "@/components/ui/TreeShadowBackground";
import { generatePersonSchema, generateServiceSchema } from "@/lib/schema";
import "@/styles/globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  fallback: ["Impact", "sans-serif"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  title: "Haseeb Arshed — Senior Shopify Developer & E-Commerce Architect | Manchester, UK",
  description:
    "Manchester, UK-based freelance Shopify Expert specializing in CRO, custom Liquid & Hydrogen development, 10k+ SKU catalog migrations, and Core Web Vitals performance optimization.",
  keywords: [
    "Shopify Developer Manchester",
    "Shopify Developer UK",
    "Shopify Expert Manchester",
    "Shopify Plus UK",
    "Hydrogen",
    "Remix",
    "Liquid OS 2.0",
    "CRO",
    "Shopify Functions",
    "Checkout Extensibility",
  ],
  openGraph: {
    title: "Haseeb Arshed — The All-In-One Shopify Partner (Manchester, UK)",
    description: "One Manchester-based Shopify developer for CRO, custom themes, headless Hydrogen, and large catalogs.",
    url: "https://shopify-developer.portfolio",
    siteName: "Haseeb Arshed Shopify Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = generatePersonSchema();
  const serviceSchema = generateServiceSchema();

  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${inter.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className="bg-bg text-text selection:bg-text selection:text-bg min-h-screen relative font-body antialiased">
        {/* Organic Tree Branch Shadow Background */}
        <TreeShadowBackground />

        {/* Navigation & Menu */}
        <Navbar />
        <MenuOverlay />

        {/* Main Content */}
        <main className="relative z-10">{children}</main>

        <Analytics />
      </body>
    </html>
  );
}
