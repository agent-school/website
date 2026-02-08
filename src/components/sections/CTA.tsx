"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Play, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggeredList";
import { Button } from "@/components/ui/Button";
import { BOOKING_URL } from "@/lib/constants";

const ctaCards = [
  {
    icon: Calendar,
    title: "Book a Pilot Meeting",
    description:
      "Talk to our team about your specific workflows. We'll map out a 30-day pilot plan tailored to your operations.",
    cta: "Schedule Call",
    href: BOOKING_URL,
    variant: "primary" as const,
    highlight: true,
  },
  {
    icon: Play,
    title: "Try Interactive Demo",
    description:
      "Experience Agent School hands-on. Explore the Skill Builder, run a certification test, and see the self-healing in action.",
    cta: "Explore Features",
    href: "#features",
    variant: "outline" as const,
    highlight: false,
  },
  {
    icon: MessageCircle,
    title: "Start a Conversation",
    description:
      "Have questions? Want to discuss whether Agent School is right for your use case? We're here to help.",
    cta: "Email Us",
    href: "mailto:hello@agentschool.io",
    variant: "ghost" as const,
    highlight: false,
  },
];

export function CTA() {
  return (
    <section className="py-24 md:py-32 px-6 bg-navy-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="font-mono text-caption uppercase tracking-widest text-amber-400 mb-4">
              Ready to get started?
            </p>
            <h2 className="font-display text-display-md md:text-display-lg text-white mb-4 text-balance">
              Train Your First Agent in 30 Days
            </h2>
            <p className="text-body-lg text-navy-200 max-w-xl mx-auto text-balance">
              Start with a risk-free pilot. We&apos;ll work with your team to certify
              your first workflow — satisfaction guaranteed.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          stagger={0.12}
        >
          {ctaCards.map((card) => (
            <StaggerItem key={card.title}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`rounded-2xl p-7 h-full flex flex-col ${
                  card.highlight
                    ? "bg-amber-500/10 border border-amber-500/30"
                    : "bg-navy-800/50 border border-navy-700"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                    card.highlight
                      ? "bg-amber-500/20"
                      : "bg-navy-700/50"
                  }`}
                >
                  <card.icon
                    size={22}
                    className={
                      card.highlight ? "text-amber-400" : "text-navy-300"
                    }
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="font-display text-heading-md text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-body-sm text-navy-200 mb-6 flex-1">
                  {card.description}
                </p>

                <Button
                  variant={card.variant === "primary" ? "secondary" : "outline"}
                  size="sm"
                  href={card.href}
                  className={
                    card.variant === "outline"
                      ? "border-navy-600 text-white hover:border-amber-500 hover:text-amber-400"
                      : card.variant === "ghost"
                        ? "border-navy-700 text-navy-200 hover:text-white hover:border-navy-500"
                        : ""
                  }
                >
                  {card.cta}
                  <ArrowRight size={14} />
                </Button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
