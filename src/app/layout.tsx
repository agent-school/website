import type { Metadata } from "next";
import { DM_Sans, Fraunces, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";

export const dynamic = "force-dynamic";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentschool.io"),
  title: "Agent School — AI Automation for Your Business",
  description:
    "We help small and mid-size businesses automate repetitive workflows using AI — faster, cheaper, and without needing a tech team. Book a free 30-minute discovery call.",
  keywords: [
    "AI automation",
    "AI automation consultancy",
    "business automation",
    "workflow automation",
    "small business AI",
    "automate repetitive tasks",
    "AI for small business",
    "business process automation",
    "AI consulting",
    "automate business workflows",
  ],
  authors: [{ name: "Agent School" }],
  creator: "Agent School",
  publisher: "Agent School",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/logo/agent school icon dark square.png", type: "image/png" }],
    shortcut: "/logo/agent school icon dark square.png",
    apple: "/logo/agent school icon dark square.png",
  },
  openGraph: {
    title: "Agent School — AI Automation for Your Business",
    description:
      "Stop wasting your team's time on repetitive tasks. We build AI automations tailored to how your business actually works. No engineers needed.",
    type: "website",
    url: "https://agentschool.io",
    siteName: "Agent School",
    locale: "en_US",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Agent School — AI Automation for Your Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@agentschool_io",
    creator: "@agentschool_io",
    title: "Agent School — AI Automation for Your Business",
    description:
      "Stop wasting your team's time on repetitive tasks. We build AI automations tailored to how your business works. No engineers needed.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "https://agentschool.io",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Agent School",
  serviceType: "AI Automation Consultancy",
  description:
    "We help small and mid-size businesses automate repetitive workflows using AI — faster, cheaper, and without needing a tech team.",
  url: "https://agentschool.io",
  publisher: {
    "@type": "Organization",
    name: "Agent School",
    url: "https://agentschool.io",
    logo: "https://agentschool.io/logo/agent%20school%20icon%20dark%20square.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="md:scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `("scrollRestoration" in history) && (history.scrollRestoration = "manual"); window.scrollTo(0,0);`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Hotjar Tracking — replace YOUR_HOTJAR_SITE_ID with your actual site ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:'YOUR_HOTJAR_SITE_ID',hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${fraunces.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} font-body antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
