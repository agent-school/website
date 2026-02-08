import type { Metadata } from "next";
import { DM_Sans, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Agent School — AI That Learns Once, Runs Repeatedly",
  description:
    "The fastest way to teach and certify AI agents to operate on your software stack reliably. Train once, certify, and replay deterministically at 10x lower cost.",
  keywords: [
    "AI agents",
    "automation",
    "RPA",
    "agent certification",
    "workflow automation",
    "enterprise AI",
    "self-healing automation",
  ],
  openGraph: {
    title: "Agent School — AI That Learns Once, Runs Repeatedly",
    description:
      "Train AI agents to automate your workflows with certified reliability. 10x cheaper than traditional approaches.",
    type: "website",
    url: "https://agentschool.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${fraunces.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
