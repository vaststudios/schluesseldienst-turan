import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description:
    "AGB von Schlüsseldienst Turan. Allgemeine Geschäftsbedingungen für Schlüsseldienstleistungen, Preise, Zahlungsbedingungen und Haftung.",
  alternates: {
    canonical: "https://schluesseldienst-turan.de/agb",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AGB - Schlüsseldienst Turan",
    description: "Allgemeine Geschäftsbedingungen von Schlüsseldienst Turan",
    url: "https://schluesseldienst-turan.de/agb",
  },
};

export default function AGB() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-14 lg:px-8">
        <div className="max-w-[1100px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Startseite", href: "/" },
              { label: "AGB", href: "/agb" },
            ]}
          />
          <div className="rounded-2xl border border-border bg-card p-6 pt-8 md:p-12 md:pt-14">
            <h1 className="mb-8 text-3xl font-semibold tracking-[-0.03em] text-foreground md:text-4xl">
              Allgemeine Geschäftsbedingungen (AGB)
            </h1>

            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="font-bold text-xl mb-4 text-text-dark">
                  1. Geltungsbereich
                </h2>
                <p>
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle
                  Leistungen des Schlüsseldienst Turan (nachfolgend &quot;Anbieter&quot;
                  genannt). Abweichende, entgegenstehende oder ergänzende AGB
                  des Kunden werden nicht Vertragsbestandteil, es sei denn, der
                  Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4 text-text-dark">
                  2. Vertragsgegenstand
                </h2>
                <p>
                  Der Anbieter erbringt Leistungen im Bereich
                  Schlüsseldienstleistungen, insbesondere:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Türöffnungen (zugezogene/zugefallene Türen)</li>
                  <li>Schlüsselnotdienst</li>
                  <li>Schlossmontage und -reparatur</li>
                  <li>Schlüsselkopien</li>
                  <li>Beratung in Sicherheitsfragen</li>
                </ul>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4 text-text-dark">
                  3. Preise und Zahlungsbedingungen
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-text-dark">
                      3.1 Preisangabe
                    </h3>
                    <p>
                      Alle auf der Website angegebenen Preise sind
                      Festpreise inklusive Anfahrt innerhalb Münchens. Die
                      Preise verstehen sich in Euro inklusive der gesetzlichen
                      Mehrwertsteuer. Der Kunde erhält vor Beginn der Arbeiten
                      eine verbindliche Preisangabe.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-text-dark">
                      3.2 Zahlung
                    </h3>
                    <p>
                      Die Zahlung erfolgt in der Regel bar vor Ort nach
                      erfolgreicher Leistungserbringung. Auf Wunsch kann auch
                      per EC-Karte oder Überweisung gezahlt werden. Bei
                      Überweisung ist die Zahlung innerhalb von 14 Tagen nach
                      Rechnungsstellung fällig.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4 text-text-dark">
                  4. Leistungserbringung
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-text-dark">
                      4.1 Ankunftszeit
                    </h3>
                    <p>
                      Der Anbieter bemüht sich, innerhalb der telefonisch
                      geschätzten Ankunftszeit am Einsatzort zu sein. Die
                      Ankunftszeit kann jedoch durch Verkehrslage, Wetter oder
                      andere unvorhersehbare Umstände beeinflusst werden. Eine
                      Garantie für eine bestimmte Ankunftszeit kann nicht
                      gegeben werden.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-text-dark">
                      4.2 Zerstörungsfreie Öffnung
                    </h3>
                    <p>
                      Der Anbieter bemüht sich, Türen zerstörungsfrei zu
                      öffnen. In manchen Fällen kann eine zerstörungsfreie
                      Öffnung jedoch nicht möglich sein (z.B. bei
                      Selbstverriegelung, defekten Schlössern). Der Kunde wird
                      vor Beginn der Arbeiten über mögliche Beschädigungen
                      informiert.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4 text-text-dark">
                  5. Haftung
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-text-dark">
                      5.1 Haftungsausschluss
                    </h3>
                    <p>
                      Der Anbieter haftet nur für Vorsatz und grobe
                      Fahrlässigkeit. Bei leichter Fahrlässigkeit haftet der
                      Anbieter nur bei Verletzung einer wesentlichen
                      Vertragspflicht, deren Erfüllung die ordnungsgemäße
                      Durchführung des Vertrages überhaupt erst ermöglicht und
                      auf deren Einhaltung der Kunde regelmäßig vertrauen darf.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-text-dark">
                      5.2 Beschädigungen
                    </h3>
                    <p>
                      Bei zerstörungsfreier Öffnung wird der Anbieter nicht für
                      minimale Beschädigungen haftbar gemacht, die technisch
                      unvermeidbar sind. Über mögliche Beschädigungen wird der
                      Kunde vor Beginn der Arbeiten informiert.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4 text-text-dark">
                  6. Widerrufsrecht
                </h2>
                <p>
                  Bei Fernabsatzverträgen hat der Kunde ein Widerrufsrecht.
                  Da die Leistungen jedoch in der Regel sofort vor Ort erbracht
                  werden und der Kunde ausdrücklich zustimmt, dass die
                  Leistung vor Ablauf der Widerrufsfrist vollständig erbracht
                  wird, erlischt das Widerrufsrecht mit vollständiger
                  Erfüllung des Vertrages.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4 text-text-dark">
                  7. Datenschutz
                </h2>
                <p>
                  Der Anbieter verarbeitet personenbezogene Daten des Kunden
                  gemäß der geltenden Datenschutzbestimmungen. Nähere
                  Informationen finden Sie in unserer Datenschutzerklärung.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4 text-text-dark">
                  8. Schlussbestimmungen
                </h2>
                <div className="space-y-2">
                  <p>
                    <strong>Anbieter:</strong> Schlüsseldienst Turan
                  </p>
                  <p>
                    <strong>Inhaber:</strong> Semih Turan
                  </p>
                  <p>Bavariastraße 14d, 80336 München</p>
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
                  <p className="mt-4">
                    Es gilt deutsches Recht. Gerichtsstand ist München, sofern
                    der Kunde Kaufmann, juristische Person des öffentlichen
                    Rechts oder öffentlich-rechtliches Sondervermögen ist.
                  </p>
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
