"use client";

import Image from "next/image";
import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CardSpotlight } from "@/components/aceternity/CardSpotlight";
import { SectionHeader } from "@/components/ui/SectionHeader";

const TESTIMONIALS = [
  {
    quote:
      "Agent School transformed how we approach automation at Geometry Solution. What used to take our team days to configure now happens in minutes. The self-healing capabilities alone have saved us countless hours of maintenance work. This is the future of workflow automation.",
    author: "Ryan Li",
    role: "CEO",
    company: "Geometry Solution",
    image: "/people/ryan.jpg",
  },
] as const;

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            overline="Trusted by Leaders"
            title="What Our Users Say"
            description="Join the companies and teams already automating their workflows with Agent School."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((testimonial, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <CardSpotlight className="rounded-2xl border border-slate-200 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
                <div className="p-8 lg:p-12">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/20 flex items-center justify-center mb-6">
                    <Quote
                      size={24}
                      className="text-orange-600"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Quote Text */}
                  <blockquote className="mb-8">
                    <p className="font-display text-xl lg:text-2xl leading-relaxed text-slate-900">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-orange-500/20">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-slate-900">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-slate-600">
                          {testimonial.role} at{" "}
                          <span className="text-orange-600 font-medium">
                            {testimonial.company}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Read Full Case Study Link */}
                    <Link
                      href="/blog/geometry-solution-case-study"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-600 text-white hover:bg-teal-700 transition-colors group"
                    >
                      <span className="text-sm font-semibold whitespace-nowrap">
                        Read Full Story
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </CardSpotlight>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
