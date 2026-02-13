import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Agent School",
  description:
    "Learn how Agent School collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <article className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
          <header className="mb-12">
            <h1 className="font-display text-display-md md:text-display-lg text-slate-900 dark:text-slate-100 mb-4">
              Privacy Policy
            </h1>
            <p className="font-mono text-caption uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">
              Agent School
            </p>
            <p className="text-body-sm text-slate-600 dark:text-slate-400">
              Last updated: February 12, 2025
            </p>
          </header>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-body-md text-slate-700 dark:text-slate-300">
            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                1. Introduction
              </h2>
              <p>
                Agent School (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at{" "}
                <a
                  href="https://agentschool.io"
                  className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                  agentschool.io
                </a>
                , use our services, or interact with us in any way.
              </p>
              <p>
                Personal information means any information that can be used to identify you, including your name, email address, IP address, and information about how you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                2. Information We Collect
              </h2>
              <p className="mb-4">
                We collect information in the following ways:
              </p>

              <h3 className="font-semibold text-body-md text-slate-900 dark:text-slate-100 mt-6 mb-2">
                Information you provide
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Contact information:</strong> Name, email address, and company name when you book a demo, subscribe to our newsletter, or contact us</li>
                <li><strong>Communication:</strong> Messages and correspondence you send to us</li>
                <li><strong>Account data:</strong> If you create an account, we collect login credentials and profile information you provide</li>
              </ul>

              <h3 className="font-semibold text-body-md text-slate-900 dark:text-slate-100 mt-6 mb-2">
                Information collected automatically
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Log data:</strong> IP address, browser type and version, pages visited, time and date of visit, time spent on pages, referring URL</li>
                <li><strong>Device information:</strong> Device type, operating system, screen resolution</li>
                <li><strong>Usage data:</strong> How you interact with our website, features used, and error logs</li>
              </ul>

              <h3 className="font-semibold text-body-md text-slate-900 dark:text-slate-100 mt-6 mb-2">
                Information from third parties
              </h3>
              <p>
                When you book a demo through Cal.com or similar scheduling tools, we receive the information you provide to those services (e.g., name, email, selected time slot).
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, operate, and maintain our website and services</li>
                <li>To process and manage demo bookings and follow-up communications</li>
                <li>To send you marketing communications (with your consent) about our products and updates</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To improve our website, services, and user experience</li>
                <li>To analyze usage patterns and trends</li>
                <li>To detect, prevent, and address technical issues, fraud, or abuse</li>
                <li>To comply with legal obligations and enforce our terms</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                4. Legal Basis for Processing (GDPR)
              </h2>
              <p>
                If you are in the European Economic Area (EEA) or UK, we process your personal data based on: (a) your consent; (b) performance of a contract with you; (c) our legitimate interests (e.g., improving our services, marketing, security); or (d) compliance with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                5. Sharing Your Information
              </h2>
              <p className="mb-4">
                We may share your personal information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service providers:</strong> Analytics (e.g., Vercel Analytics), scheduling (Cal.com), email delivery, hosting, and other vendors who assist us in operating our business. These providers are contractually bound to protect your data.</li>
                <li><strong>Legal requirements:</strong> When required by law, court order, or government authority</li>
                <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity</li>
              </ul>
              <p className="mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                6. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar technologies (e.g., local storage) to enhance your experience, analyze site traffic, and understand usage patterns. Cookies may be session-based (deleted when you close your browser) or persistent (stored for a set period). You can control cookies through your browser settings. Disabling certain cookies may affect site functionality.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                7. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption (e.g., TLS for data in transit), access controls, and secure hosting. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                8. Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law. For example, we may retain contact information for the duration of our business relationship and for a reasonable period thereafter for legal and compliance purposes. You may request deletion of your data at any time (see Your Rights below).
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                9. Your Rights
              </h2>
              <p className="mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                <li><strong>Opt-out of marketing:</strong> Unsubscribe from marketing emails at any time</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:hello@agentschool.io"
                  className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                  hello@agentschool.io
                </a>
                . If you are in the EEA or UK, you may also lodge a complaint with your local data protection authority.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                10. California Privacy Rights (CCPA/CPRA)
              </h2>
              <p>
                California residents have additional rights under the CCPA/CPRA, including the right to know what personal information we collect, the right to delete personal information, the right to correct inaccurate information, and the right to opt-out of the &quot;sale&quot; or &quot;sharing&quot; of personal information. We do not sell or share personal information as defined under the CCPA. To exercise your rights, contact us at hello@agentschool.io.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                11. International Transfers
              </h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When we transfer data from the EEA or UK, we rely on appropriate safeguards such as adequacy decisions or standard contractual clauses.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                12. Children&apos;s Privacy
              </h2>
              <p>
                Our services are not directed to individuals under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us and we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                13. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites (e.g., Cal.com, LinkedIn). We are not responsible for the privacy practices of these sites. We encourage you to read their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                14. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will post the updated policy on this page and update the &quot;Last updated&quot; date. For material changes, we may notify you by email or through a prominent notice on our website. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                15. Contact Us
              </h2>
              <p>
                For questions about this Privacy Policy or our data practices, contact us at:
              </p>
              <p className="mt-4">
                <strong>Agent School</strong>
                <br />
                Email:{" "}
                <a
                  href="mailto:hello@agentschool.io"
                  className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                  hello@agentschool.io
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
