import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pulse Systems — Automation That Runs Itself",
  description:
    "We connect your existing business tools so they work together automatically, then manage those automations so you can focus on growth. Custom automation for SMBs.",
  keywords: [
    "business automation",
    "SMB automation",
    "workflow automation",
    "n8n",
    "small business automation",
    "process automation",
  ],
  authors: [{ name: "Tom Oster" }],
  openGraph: {
    title: "Pulse Systems — Automation That Runs Itself",
    description:
      "Custom automation workflows for small businesses. We build them, we run them, you grow.",
    url: "https://systems.pulseequities.com",
    siteName: "Pulse Systems",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulse Systems — Automation That Runs Itself",
    description:
      "Custom automation workflows for small businesses. We build them, we run them, you grow.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
