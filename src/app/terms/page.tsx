import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Agent School",
  description:
    "Terms and conditions for using Agent School website and services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <article className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
          <header className="mb-12">
            <h1 className="font-display text-display-md md:text-display-lg text-slate-900 dark:text-slate-100 mb-4">
              Terms of Service
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
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the Agent School website at{" "}
                <a
                  href="https://agentschool.io"
                  className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                  agentschool.io
                </a>
                , our services, or any related content (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not access or use the Service. These Terms constitute a legally binding agreement between you and Agent School (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                2. Description of Service
              </h2>
              <p>
                Agent School provides a platform that teaches and certifies AI agents to automate software workflows. Our Service includes our website, marketing materials, demo bookings, and any software, tools, or services we offer. We reserve the right to modify, suspend, or discontinue any part of the Service at any time with or without notice.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                3. Eligibility
              </h2>
              <p>
                You must be at least 18 years old and have the legal capacity to enter into a binding contract to use our Service. By using the Service, you represent and warrant that you meet these requirements. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                4. Account Registration and Security
              </h2>
              <p>
                Some features of the Service may require you to create an account. You agree to provide accurate, current, and complete information during registration and to update such information as needed. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                5. License and Use Restrictions
              </h2>
              <p>
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your personal or internal business purposes. You may not: (a) copy, modify, distribute, sell, or lease any part of the Service; (b) reverse engineer, decompile, or disassemble the Service; (c) remove or alter any proprietary notices; (d) use the Service for any illegal or unauthorized purpose; or (e) access the Service through automated means (e.g., bots, scrapers) except as expressly permitted by us.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                6. Intellectual Property
              </h2>
              <p>
                The Service and all content, features, and functionality (including but not limited to text, graphics, logos, icons, software, and designs) are owned by Agent School or our licensors and are protected by copyright, trademark, and other intellectual property laws. You may not use our trademarks, logos, or brand elements without our prior written consent. You retain ownership of any content you submit to the Service, but you grant us a license to use, display, and process such content as necessary to provide the Service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                7. Acceptable Use
              </h2>
              <p>
                You agree not to use the Service to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Violate any applicable law, regulation, or third-party rights</li>
                <li>Transmit malware, viruses, or harmful code</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
                <li>Harass, abuse, or harm others</li>
                <li>Send spam or unsolicited communications</li>
                <li>Impersonate any person or entity</li>
                <li>Collect or harvest user data without consent</li>
              </ul>
              <p className="mt-4">
                We reserve the right to suspend or terminate your access to the Service if we believe you have violated these Terms or engaged in harmful conduct.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                8. Demo Bookings and Payments
              </h2>
              <p>
                Demo bookings are facilitated through third-party scheduling services (e.g., Cal.com). By booking a demo, you agree to the terms of those third-party services. If you purchase paid services from us, additional fees, payment terms, and refund policies will be set forth in a separate agreement or order form. You are responsible for any applicable taxes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                9. Privacy
              </h2>
              <p>
                Your use of the Service is also governed by our{" "}
                <a
                  href="/privacy"
                  className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                  Privacy Policy
                </a>
                , which describes how we collect, use, and protect your personal information. By using the Service, you consent to our data practices as described in the Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                10. Third-Party Links and Services
              </h2>
              <p>
                The Service may contain links to third-party websites or services (e.g., Cal.com, LinkedIn). We do not control and are not responsible for the content, privacy policies, or practices of third-party sites. You access them at your own risk and should review their terms and policies.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                11. Disclaimer of Warranties
              </h2>
              <p>
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES. WE DISCLAIM ANY RESPONSIBILITY FOR THE ACCURACY, RELIABILITY, OR COMPLETENESS OF CONTENT ON THE SERVICE.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                12. Limitation of Liability
              </h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, AGENT SCHOOL AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE. IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE GREATER OF (A) ONE HUNDRED U.S. DOLLARS ($100) OR (B) THE AMOUNT YOU PAID US, IF ANY, IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO SOME OF THE ABOVE MAY NOT APPLY TO YOU.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                13. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless Agent School and its affiliates, officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising from: (a) your use of the Service; (b) your violation of these Terms; (c) your violation of any third-party rights; or (d) any content you submit to the Service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                14. Termination
              </h2>
              <p>
                You may stop using the Service at any time. We may suspend or terminate your access to the Service, with or without notice, for any reason, including if we believe you have violated these Terms. Upon termination, your right to use the Service ceases immediately. Sections of these Terms that by their nature should survive termination (including Intellectual Property, Limitation of Liability, Indemnification, and Governing Law) shall survive.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                15. DMCA and Copyright
              </h2>
              <p>
                We respect intellectual property rights. If you believe content on our Service infringes your copyright, please send a DMCA takedown notice to hello@agentschool.io with: (a) identification of the copyrighted work; (b) identification of the infringing material; (c) your contact information; (d) a statement of good faith; (e) a statement of accuracy under penalty of perjury; and (f) your physical or electronic signature. We may remove or disable access to content that we believe infringes copyright.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                16. Changes to Terms
              </h2>
              <p>
                We may modify these Terms at any time. We will post the updated Terms on this page and update the &quot;Last updated&quot; date. For material changes, we may notify you by email or through a prominent notice on the Service. Your continued use of the Service after such changes constitutes acceptance of the updated Terms. If you do not agree to the updated Terms, you must stop using the Service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                17. Governing Law and Dispute Resolution
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any dispute arising from these Terms or the Service shall be resolved exclusively in the state or federal courts located in Delaware, and you consent to the personal jurisdiction of such courts. You waive any right to a jury trial or to participate in a class action.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                18. General
              </h2>
              <p>
                These Terms constitute the entire agreement between you and Agent School regarding the Service and supersede any prior agreements. If any provision is found to be unenforceable, the remaining provisions will remain in effect. Our failure to enforce any right or provision shall not constitute a waiver. You may not assign these Terms without our consent; we may assign these Terms without restriction.
              </p>
            </section>

            <section>
              <h2 className="font-display text-heading-md text-slate-900 dark:text-slate-100 mb-4">
                19. Contact Us
              </h2>
              <p>
                For questions about these Terms of Service, contact us at:
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
