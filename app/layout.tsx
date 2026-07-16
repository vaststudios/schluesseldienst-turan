import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";

import StructuredData from "@/components/StructuredData";
import ThemeProvider from "@/components/ThemeProvider";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], display: "swap", variable: "--font-geist" });

const description = "Schlüsseldienst Turan München: 24/7 erreichbar, Türöffnung ab 89 € inkl. Anfahrt. Der Preis steht vor Arbeitsbeginn fest.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Schlüsseldienst Turan – München", template: "%s | Schlüsseldienst Turan" },
  description,
  authors: [{ name: "Schlüsseldienst Turan" }],
  creator: "Schlüsseldienst Turan",
  publisher: "Schlüsseldienst Turan",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  alternates: { canonical: siteConfig.url, languages: { "de-DE": siteConfig.url } },
  openGraph: { type: "website", url: siteConfig.url, title: "Schlüsseldienst Turan – München", description, siteName: siteConfig.name, locale: "de_DE" },
  twitter: { card: "summary_large_image", title: "Schlüsseldienst Turan – München", description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={geist.variable} suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab@0.1.48/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
        <meta name="theme-color" content="#17345b" />
        <meta name="format-detection" content="telephone=yes" />
        <link rel="icon" type="image/svg+xml" href="/assets/logo.svg" />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <StructuredData />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
