import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import FooterSection from "@/components/sections/FooterSection";

export default function ContactPage() {
  return (
    <div className="pt-36">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 space-y-6">
        <span className="eyebrow block">/ INITIATE PROJECT</span>
        <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight uppercase leading-[0.88] text-text">
          HAVE A STORE TO <br />
          FIX OR SCALE?
        </h1>
        <p className="text-text-muted text-lg md:text-xl max-w-2xl font-light leading-relaxed">
          Fill out the project brief below, or schedule a direct 30-minute strategy call on my calendar.
        </p>
      </section>

      {/* Main Grid: Form + Calendly Sidebar */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-28 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Right Sidebar: Calendly & Direct Info */}
        <div className="lg:col-span-5 space-y-10">
          {/* Calendly Card */}
          <div className="p-8 rounded-2xl bg-surface border border-border space-y-6">
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-2xl font-bold uppercase text-text">
                Book a 30-Min Strategy Call
              </h3>
              <p className="text-text-muted text-sm font-light leading-relaxed">
                Prefer to talk live? Pick a slot on my Calendly to discuss your Shopify store requirements directly.
              </p>
            </div>
            <a
              href="https://calendly.com/haseebarshed2/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-6 py-3.5 rounded-full bg-black text-white font-bold text-xs tracking-widest uppercase hover:bg-neutral-800 transition-colors"
            >
              <span>SCHEDULE ON CALENDLY</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Direct Details */}
          <div className="p-8 rounded-2xl bg-surface border border-border space-y-6">
            <div>
              <span className="eyebrow block text-xs mb-2">Location & Timezone</span>
              <div className="flex items-center space-x-2 text-sm text-text-muted">
                <MapPin className="w-4 h-4 text-text shrink-0" />
                <span>Manchester, UK — Worldwide Remote Contracts</span>
              </div>
            </div>

            <div>
              <span className="eyebrow block text-xs mb-2">Current SLA Availability</span>
              <div className="flex items-center space-x-2 text-sm text-text font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-black" />
                <span>2 Slots Open for Q3/Q4 Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
