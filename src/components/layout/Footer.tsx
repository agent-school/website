"use client";

import { Linkedin, Twitter } from "lucide-react";
import { NAV_ITEMS, BOOKING_URL, LINKEDIN_URL, TWITTER_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
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
            <p className="text-body-sm text-slate-400 dark:text-slate-500 leading-relaxed max-w-xs">
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
                    className="text-body-sm text-slate-400 dark:text-slate-500 hover:text-orange-400 dark:hover:text-orange-500 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BOOKING_URL}
                  className="text-body-sm text-slate-400 dark:text-slate-500 hover:text-orange-400 dark:hover:text-orange-500 transition-colors"
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
                  className="text-body-sm text-slate-400 dark:text-slate-500 hover:text-orange-400 dark:hover:text-orange-500 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/blog/geometry-solution-case-study"
                  className="text-body-sm text-slate-400 dark:text-slate-500 hover:text-orange-400 dark:hover:text-orange-500 transition-colors"
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
                  className="text-body-sm text-slate-400 dark:text-slate-500 hover:text-orange-400 dark:hover:text-orange-500 transition-colors"
                >
                  vs Manus
                </a>
              </li>
              <li>
                <a
                  href="/vs/n8n"
                  className="text-body-sm text-slate-400 dark:text-slate-500 hover:text-orange-400 dark:hover:text-orange-500 transition-colors"
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
                  className="text-body-sm text-slate-400 dark:text-slate-500 hover:text-orange-400 dark:hover:text-orange-500 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm text-slate-400 dark:text-slate-500 hover:text-orange-400 dark:hover:text-orange-500 transition-colors inline-flex items-center gap-1.5"
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
                  className="text-body-sm text-slate-400 dark:text-slate-500 hover:text-orange-400 dark:hover:text-orange-500 transition-colors inline-flex items-center gap-1.5"
                >
                  <Twitter size={14} />
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-body-sm text-slate-400 dark:text-slate-500 hover:text-orange-400 dark:hover:text-orange-500 transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-body-sm text-slate-400 dark:text-slate-500 hover:text-orange-400 dark:hover:text-orange-500 transition-colors"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 dark:border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-caption text-slate-500 dark:text-slate-600">
            &copy; {new Date().getFullYear()} Agent School. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 dark:text-slate-600 hover:text-orange-400 dark:hover:text-orange-500 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-slate-500 dark:text-slate-600 hover:text-orange-400 dark:hover:text-orange-500 transition-colors"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* CTA Footer Section */}
      <div className="bg-[#FF6B3D] py-20 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-10">
            <h2 className="font-display text-7xl md:text-8xl font-semibold text-white leading-tight tracking-tight">
              Creating the future
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
                href="#"
                aria-label="Discord"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8">
                  <path d="M26.96 7.33a23.84 23.84 0 0 0-5.88-1.82.09.09 0 0 0-.09.05 16.6 16.6 0 0 0-.73 1.5 22 22 0 0 0-6.6 0 15.16 15.16 0 0 0-.74-1.5.09.09 0 0 0-.09-.05 23.77 23.77 0 0 0-5.88 1.82.08.08 0 0 0-.04.04C2.7 12.15 1.84 16.83 2.31 21.45a.1.1 0 0 0 .04.07 24 24 0 0 0 7.22 3.64.09.09 0 0 0 .1-.03 17.16 17.16 0 0 0 1.48-2.4.09.09 0 0 0-.05-.12 15.8 15.8 0 0 1-2.26-1.08.09.09 0 0 1-.01-.15c.15-.11.3-.23.45-.35a.09.09 0 0 1 .09-.01c4.74 2.17 9.87 2.17 14.55 0a.09.09 0 0 1 .09.01c.14.12.29.24.44.35a.09.09 0 0 1-.01.15c-.72.42-1.47.78-2.25 1.08a.09.09 0 0 0-.05.12c.43.83.92 1.63 1.48 2.4a.09.09 0 0 0 .1.03 23.93 23.93 0 0 0 7.23-3.64.09.09 0 0 0 .04-.07c.56-5.34-.94-9.98-3.99-14.08a.07.07 0 0 0-.04-.04ZM11.52 18.55c-1.33 0-2.43-1.22-2.43-2.72s1.08-2.72 2.43-2.72c1.36 0 2.45 1.23 2.43 2.72 0 1.5-1.08 2.72-2.43 2.72Zm8.98 0c-1.33 0-2.42-1.22-2.42-2.72s1.07-2.72 2.42-2.72c1.36 0 2.45 1.23 2.43 2.72 0 1.5-1.07 2.72-2.43 2.72Z"/>
                </svg>
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
