import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und rechtliche Angaben von Schlüsseldienst Turan. Kontaktinformationen, Haftungsausschluss und Verantwortlichkeiten.",
  alternates: {
    canonical: "https://schluesseldienst-turan.de/impressum",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Impressum - Schlüsseldienst Turan",
    description: "Impressum und rechtliche Angaben von Schlüsseldienst Turan",
    url: "https://schluesseldienst-turan.de/impressum",
  },
};

export default function Impressum() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-14 lg:px-8">
        <div className="max-w-[1100px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Startseite", href: "/" },
              { label: "Impressum", href: "/impressum" },
            ]}
          />
          <div className="rounded-2xl border border-border bg-card p-6 pt-8 md:p-12 md:pt-14">
            <h1 className="mb-8 text-3xl font-semibold tracking-[-0.03em] text-foreground md:text-4xl">
              Impressum
            </h1>

            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="font-bold text-xl mb-4 text-text-dark">
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="space-y-2">
                  <p>
                    <strong>Schlüsseldienst Turan</strong>
                  </p>
                  <p>Semih Turan</p>
                  <p>Bavariastraße 14d</p>
                  <p>80336 München</p>
                  <p>Deutschland</p>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4 text-text-dark">
                  Kontakt
                </h2>
                <div className="space-y-2">
                  <p>
                    <strong>Telefon:</strong>{" "}
                    <a
                      href="tel:+4915565906604"
                      className="text-brand-primary hover:underline"
                    >
                      0155 659 066 04
                    </a>
                  </p>
                  <p>
                    <strong>E-Mail:</strong>{" "}
                    <a
                      href="mailto:info@schluesseldienst-turan.de"
                      className="text-brand-primary hover:underline"
                    >
                      info@schluesseldienst-turan.de
                    </a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4 text-text-dark">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <div className="space-y-2">
                  <p>Semih Turan</p>
                  <p>Bavariastraße 14d</p>
                  <p>80336 München</p>
                  <p>Deutschland</p>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4 text-text-dark">
                  Haftungsausschluss
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-text-dark">
                      Haftung für Inhalte
                    </h3>
                    <p>
                      Die Inhalte unserer Seiten wurden mit größter Sorgfalt
                      erstellt. Für die Richtigkeit, Vollständigkeit und
                      Aktualität der Inhalte können wir jedoch keine Gewähr
                      übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1
                      TMG für eigene Inhalte auf diesen Seiten nach den
                      allgemeinen Gesetzen verantwortlich.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-text-dark">
                      Haftung für Links
                    </h3>
                    <p>
                      Unser Angebot enthält Links zu externen Webseiten Dritter,
                      auf deren Inhalte wir keinen Einfluss haben. Deshalb
                      können wir für diese fremden Inhalte auch keine Gewähr
                      übernehmen. Für die Inhalte der verlinkten Seiten ist
                      stets der jeweilige Anbieter oder Betreiber der Seiten
                      verantwortlich.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-text-dark">
                      Urheberrecht
                    </h3>
                    <p>
                      Die durch die Seitenbetreiber erstellten Inhalte und
                      Werke auf diesen Seiten unterliegen dem deutschen
                      Urheberrecht. Die Vervielfältigung, Bearbeitung,
                      Verbreitung und jede Art der Verwertung außerhalb der
                      Grenzen des Urheberrechtes bedürfen der schriftlichen
                      Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
