"use client";

import { Linkedin, Twitter } from "lucide-react";
import { NAV_ITEMS, BOOKING_URL, LINKEDIN_URL, TWITTER_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Strip hidden until subscription feature is ready */}
      {/*
      <div className="bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-heading-lg text-white">
                Stay in the loop
              </h3>
              <p className="text-body-sm text-white/80 mt-1">
                Get updates on Agent School features and industry insights.
              </p>
            </div>
          </div>
        </div>
      </div>
      */}

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/logo/agent school icon light square.png"
                alt="Agent School"
                className="h-9 w-9 object-contain"
              />
              <span className="font-display font-semibold text-xl tracking-tight">
                Agent School
              </span>
            </div>
            <p className="text-body-sm text-slate-400 leading-relaxed max-w-xs">
              The fastest way to teach and certify AI agents to operate on your
              software stack reliably.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-body-sm text-white mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-body-sm text-slate-400 hover:text-orange-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BOOKING_URL}
                  className="text-body-sm text-slate-400 hover:text-orange-400 transition-colors"
                >
                  Book a Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-body-sm text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/blog"
                  className="text-body-sm text-slate-400 hover:text-orange-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/blog/geometry-solution-case-study"
                  className="text-body-sm text-slate-400 hover:text-orange-400 transition-colors"
                >
                  Case Study
                </a>
              </li>
            </ul>
          </div>

          {/* Comparisons */}
          <div>
            <h4 className="font-semibold text-body-sm text-white mb-4">
              Comparisons
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/vs/manus"
                  className="text-body-sm text-slate-400 hover:text-orange-400 transition-colors"
                >
                  vs Manus
                </a>
              </li>
              <li>
                <a
                  href="/vs/n8n"
                  className="text-body-sm text-slate-400 hover:text-orange-400 transition-colors"
                >
                  vs n8n
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="font-semibold text-body-sm text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@agentschool.io"
                  className="text-body-sm text-slate-400 hover:text-orange-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm text-slate-400 hover:text-orange-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={TWITTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm text-slate-400 hover:text-orange-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <Twitter size={14} />
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-body-sm text-slate-400 hover:text-orange-400 transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-body-sm text-slate-400 hover:text-orange-400 transition-colors"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Footer Section */}
      <div className="bg-[#FF6B3D] py-20 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-10">
            <h2 className="font-playfair text-7xl md:text-8xl font-bold text-white leading-tight tracking-tight opacity-70">
              Creating the future.
            </h2>
            <a
              href="mailto:hello@agentschool.io"
              className="text-white text-3xl md:text-4xl hover:opacity-80 transition-opacity"
            >
              hello@agentschool.io
            </a>
            <div className="flex items-center gap-6 mt-2">
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <Twitter size={28} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <Linkedin size={28} />
              </a>
            </div>
            <div className="mt-8">
              <p className="text-white text-sm opacity-70">
                Copyright {new Date().getFullYear()} Agent School. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
