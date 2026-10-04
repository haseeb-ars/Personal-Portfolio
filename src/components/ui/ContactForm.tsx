"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useAppStore } from "@/lib/store";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  storeUrl: z.string().optional(),
  services: z.array(z.string()).min(1, "Select at least one service needed"),
  message: z.string().min(10, "Please provide brief project details"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const SERVICE_OPTIONS = [
  "Conversion Rate Optimization (CRO)",
  "Custom Liquid Theme (OS 2.0)",
  "Headless Hydrogen Storefront",
  "10k+ SKU Data & ERP Migration",
  "Shopify SEO & Speed Rescue",
  "Monthly SLA Retainer Support",
];

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { setCursor } = useAppStore();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      services: ["Custom Liquid Theme (OS 2.0)"],
    },
  });

  const selectedServices = watch("services") || [];

  const toggleService = (service: string) => {
    const current = [...selectedServices];
    const index = current.indexOf(service);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(service);
    }
    setValue("services", current, { shouldValidate: true });
  };

  const onSubmit = async (data: ContactFormData) => {
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await res.json().catch(() => ({}));

      if (res.ok && responseData.success) {
        setIsSubmitted(true);
        return;
      }

      // Fallback: direct Web3Forms submission from client side
      const directRes = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f44700ea-b21e-4ee2-846d-6b0b30083f37",
          from_name: "Haseeb Arshed Portfolio",
          subject: `New Project Enquiry from ${data.name}`,
          name: data.name,
          email: data.email,
          "Shopify Store URL": data.storeUrl || "Not provided",
          "Services Needed": Array.isArray(data.services) ? data.services.join(", ") : data.services,
          message: data.message,
        }),
      });

      const directData = await directRes.json().catch(() => ({}));

      if (directRes.ok && directData.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(
          directData.message || responseData.error || "Failed to send enquiry. Please try again."
        );
      }
    } catch {
      setErrorMessage("Network error occurred. Please check your connection and try again.");
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-10 rounded-2xl bg-surface border border-accent/40 text-center space-y-6"
      >
        <div className="w-16 h-16 rounded-full bg-accent/20 text-accent mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-display text-4xl font-bold uppercase text-text">
          MESSAGE RECEIVED!
        </h3>
        <p className="text-text-muted text-base max-w-md mx-auto font-light">
          Thank you for reaching out. I inspect all project enquiries personally and respond within 12 business hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 rounded-full bg-white/10 text-xs font-mono tracking-widest text-text hover:bg-accent hover:text-black transition-colors uppercase"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="eyebrow text-xs block">Your Name *</label>
          <input
            {...register("name")}
            placeholder="John Doe"
            className="w-full px-5 py-4 rounded-xl bg-surface border border-white/10 text-text placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors"
          />
          {errors.name && <span className="text-xs text-red-400">{errors.name.message}</span>}
        </div>

        <div className="space-y-2">
          <label className="eyebrow text-xs block">Email Address *</label>
          <input
            {...register("email")}
            type="email"
            placeholder="john@yourbrand.com"
            className="w-full px-5 py-4 rounded-xl bg-surface border border-white/10 text-text placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors"
          />
          {errors.email && <span className="text-xs text-red-400">{errors.email.message}</span>}
        </div>
      </div>

      {/* Store URL */}
      <div className="space-y-2">
        <label className="eyebrow text-xs block">Current Shopify Store URL (Optional)</label>
        <input
          {...register("storeUrl")}
          placeholder="https://yourstore.com"
          className="w-full px-5 py-4 rounded-xl bg-surface border border-white/10 text-text placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      {/* Services Needed Pills */}
      <div className="space-y-3">
        <label className="eyebrow text-xs block">What do you need help with? *</label>
        <div className="flex flex-wrap gap-3">
          {SERVICE_OPTIONS.map((srv) => {
            const isSelected = selectedServices.includes(srv);
            return (
              <button
                type="button"
                key={srv}
                onClick={() => toggleService(srv)}
                className={`px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                  isSelected
                    ? "bg-accent text-black font-bold border border-accent"
                    : "bg-surface border border-white/10 text-text-muted hover:border-white/30"
                }`}
              >
                {srv}
              </button>
            );
          })}
        </div>
        {errors.services && <span className="text-xs text-red-400 block">{errors.services.message}</span>}
      </div>

      {/* Message Textarea */}
      <div className="space-y-2">
        <label className="eyebrow text-xs block">Project Overview / Goals *</label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell me about your current store, key pain points, deadlines, or targets..."
          className="w-full px-5 py-4 rounded-xl bg-surface border border-white/10 text-text placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors"
        />
        {errors.message && <span className="text-xs text-red-400">{errors.message.message}</span>}
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
          {errorMessage}
        </div>
      )}

      {/* Submit Action */}
      <button
        type="submit"
        disabled={isSubmitting}
        onMouseEnter={() => setCursor("hover", "Submit")}
        onMouseLeave={() => setCursor("default")}
        className="w-full py-5 rounded-xl bg-accent text-black font-display text-xl font-bold tracking-wider uppercase hover:bg-accent-hover transition-colors flex items-center justify-center space-x-3 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-6 h-6 animate-spin" />
            <span>SENDING ENQUIRY...</span>
          </>
        ) : (
          <>
            <span>SUBMIT PROJECT ENQUIRY</span>
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}
