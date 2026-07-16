import type { Metadata } from "next";

import Contact from "@/components/Contact";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileCall from "@/components/MobileCall";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import ServiceArea from "@/components/ServiceArea";
import Services from "@/components/Services";
import Team from "@/components/Team";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Schlüsseldienst München – 24/7 erreichbar",
  description: "Schlüsseldienst Turan München: 24/7 erreichbar, Türöffnung ab 89 € inkl. Anfahrt. Der Preis steht vor Arbeitsbeginn fest.",
  alternates: { canonical: "https://schluesseldienst-turan.de" },
};

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">Zum Hauptinhalt springen</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <TrustBar />
        <Pricing />
        <Services />
        <ServiceArea />
        <Process />
        <Team />
        <BlogPreview />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <MobileCall />
    </>
  );
}
