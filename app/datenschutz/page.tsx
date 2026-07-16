import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Schlüsseldienst Turan. Informationen zur Datenverarbeitung, Ihren Rechten und dem Datenschutz gemäß DSGVO.",
  alternates: {
    canonical: "https://schluesseldienst-turan.de/datenschutz",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Datenschutzerklärung - Schlüsseldienst Turan",
    description: "Datenschutzerklärung von Schlüsseldienst Turan gemäß DSGVO",
    url: "https://schluesseldienst-turan.de/datenschutz",
  },
};

export default function Datenschutz() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-14 lg:px-8">
        <div className="max-w-[1100px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Startseite", href: "/" },
              { label: "Datenschutz", href: "/datenschutz" },
            ]}
          />
          <div className="rounded-2xl border border-border bg-card p-6 pt-8 md:p-12 md:pt-14">
            <h1 className="mb-8 text-3xl font-semibold tracking-[-0.03em] text-foreground md:text-4xl">
              Datenschutzerklärung
            </h1>

            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="font-bold text-xl mb-4 text-text-dark">
                  1. Datenschutz auf einen Blick
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-text-dark">
                      Allgemeine Hinweise
                    </h3>
                    <p>
                      Die folgenden Hinweise geben einen einfachen Überblick
                      darüber, was mit Ihren personenbezogenen Daten passiert,
                      wenn Sie diese Website besuchen. Personenbezogene Daten
                      sind alle Daten, mit denen Sie persönlich identifiziert
                      werden können.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4 text-text-dark">
                  2. Verantwortliche Stelle
                </h2>
                <div className="space-y-2">
                  <p>
                    Die verantwortliche Stelle für die Datenverarbeitung auf
                    dieser Website ist:
                  </p>
                  <div className="bg-neutral-50 p-4 rounded-xl">
                    <p>
                      <strong>Schlüsseldienst Turan</strong>
                    </p>
                    <p>Semih Turan</p>
                    <p>Bavariastraße 14d</p>
                    <p>80336 München</p>
                    <p>Deutschland</p>
                    <p className="mt-2">
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
                </div>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4 text-text-dark">
                  3. Datenerfassung auf dieser Website
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-text-dark">
                      Kontaktformular
                    </h3>
                    <p>
                      Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                      werden Ihre Angaben aus dem Anfrageformular inklusive der
                      von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                      der Anfrage und für den Fall von Anschlussfragen bei uns
                      gespeichert. Diese Daten geben wir nicht ohne Ihre
                      Einwilligung weiter.
                    </p>
                    <p className="mt-2">
                      Die Verarbeitung dieser Daten erfolgt auf Grundlage von
                      Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
                      Erfüllung eines Vertrags zusammenhängt oder zur
                      Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                      In allen übrigen Fällen beruht die Verarbeitung auf
                      unserem berechtigten Interesse an der effektiven
                      Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs.
                      1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs.
                      1 lit. a DSGVO), sofern diese abgefragt wurde.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-text-dark">
                      Server-Log-Dateien
                    </h3>
                    <p>
                      Der Provider der Seiten erhebt und speichert automatisch
                      Informationen in so genannten Server-Log-Dateien, die Ihr
                      Browser automatisch an uns übermittelt. Dies sind:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                      <li>Browsertyp und Browserversion</li>
                      <li>verwendetes Betriebssystem</li>
                      <li>Referrer URL</li>
                      <li>Hostname des zugreifenden Rechners</li>
                      <li>Uhrzeit der Serveranfrage</li>
                      <li>IP-Adresse</li>
                    </ul>
                    <p className="mt-2">
                      Eine Zusammenführung dieser Daten mit anderen
                      Datenquellen wird nicht vorgenommen. Die Erfassung dieser
                      Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
                      DSGVO.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4 text-text-dark">
                  4. Ihre Rechte
                </h2>
                <p>
                  Sie haben jederzeit das Recht, Auskunft über Ihre bei uns
                  gespeicherten personenbezogenen Daten, deren Herkunft und
                  Empfänger und den Zweck der Datenverarbeitung sowie ein Recht
                  auf Berichtigung, Sperrung oder Löschung dieser Daten zu
                  erhalten. Hierzu sowie zu weiteren Fragen zum Thema
                  personenbezogene Daten können Sie sich jederzeit unter der im
                  Impressum angegebenen Adresse an uns wenden.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-xl mb-4 text-text-dark">
                  5. Widerspruch gegen Datenerfassung
                </h2>
                <p>
                  Sie können der Erhebung Ihrer Daten durch Google Analytics
                  widersprechen, indem Sie das Browser-Add-on zur Deaktivierung
                  von Google Analytics installieren. Sie können der Erhebung
                  Ihrer Daten widersprechen, wenn diese auf unserem berechtigten
                  Interesse beruht.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
