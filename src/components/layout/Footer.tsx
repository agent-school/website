"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, ArrowRight, Mail } from "lucide-react";
import { NAV_ITEMS, BOOKING_URL } from "@/lib/constants";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      {/* Newsletter Strip */}
      <div className="bg-gradient-to-r from-teal-600 to-orange-500">
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
            <form
              onSubmit={handleSubscribe}
              className="flex items-center gap-2 w-full md:w-auto"
            >
              <div className="relative flex-1 md:w-72">
                <Mail
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/90 text-slate-900 text-body-sm placeholder:text-slate-500 border-2 border-transparent focus:border-slate-900 focus:outline-none transition-colors"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold text-body-sm flex items-center gap-2 hover:bg-slate-800 transition-colors"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
                <ArrowRight size={16} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-600 to-orange-500 flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg leading-none">
                  A
                </span>
              </div>
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
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-body-sm text-slate-400 dark:text-slate-500 hover:text-teal-400 dark:hover:text-teal-500 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BOOKING_URL}
                  className="text-body-sm text-slate-400 dark:text-slate-500 hover:text-teal-400 dark:hover:text-teal-500 transition-colors"
                >
                  Book a Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-body-sm text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@agentschool.io"
                  className="text-body-sm text-slate-400 dark:text-slate-500 hover:text-teal-400 dark:hover:text-teal-500 transition-colors"
                >
                  hello@agentschool.io
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/agent-school"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm text-slate-400 dark:text-slate-500 hover:text-teal-400 dark:hover:text-teal-500 transition-colors inline-flex items-center gap-1.5"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-body-sm text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-body-sm text-slate-400 dark:text-slate-500 hover:text-teal-400 dark:hover:text-teal-500 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body-sm text-slate-400 dark:text-slate-500 hover:text-teal-400 dark:hover:text-teal-500 transition-colors"
                >
                  Terms of Service
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
              href="https://linkedin.com/company/agent-school"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-600 hover:text-teal-400 dark:hover:text-teal-500 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
