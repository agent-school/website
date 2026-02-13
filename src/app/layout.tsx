import type { Metadata } from "next";
import { DM_Sans, Fraunces, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://agentschool.io"),
  title: "Agent School — Turn Human Knowledge Into AI That Never Forgets",
  description:
    "Teach once, automate forever. Transform your workflows into certified AI agents with 98% reliability. 7x faster training, 95% cost reduction. Self-healing automation that adapts when software changes.",
  keywords: [
    "AI automation",
    "AI agents",
    "workflow automation",
    "RPA alternative",
    "self-healing automation",
    "agent certification",
    "enterprise AI",
    "intelligent automation",
    "AI workforce",
    "automated workflows",
    "business process automation",
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
    title: "Agent School — Turn Human Knowledge Into AI That Never Forgets",
    description:
      "Teach once, automate forever. 98% reliable AI agents that adapt when software changes. 7x faster training, 95% cost reduction.",
    type: "website",
    url: "https://agentschool.io",
    siteName: "Agent School",
    locale: "en_US",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Agent School — The Future of AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@agentschool_io",
    creator: "@agentschool_io",
    title: "Agent School — Turn Human Knowledge Into AI That Never Forgets",
    description:
      "Teach once, automate forever. 99% reliable AI agents that adapt when software changes. Join the revolution.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "https://agentschool.io",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Agent School",
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    ratingCount: "1",
  },
  description:
    "Teach once, automate forever. Transform your workflows into certified AI agents with 99% reliability. Self-healing automation that adapts when software changes.",
  operatingSystem: "Web",
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
      </head>
      <body
        className={`${dmSans.variable} ${fraunces.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
