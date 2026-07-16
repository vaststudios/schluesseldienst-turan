# Schlüsseldienst Turan

Öffentliche Website des Schlüsseldiensts Turan in München. Die Anwendung basiert auf Next.js App Router, React, Tailwind CSS und shadcn/ui.

## Lokal entwickeln

```bash
pnpm install
pnpm dev
```

Die Seite ist anschließend unter [http://localhost:3000](http://localhost:3000) erreichbar.

Im Development-Modus ist React Grab aktiviert, um UI-Elemente direkt mit ihrem Quellkontext auszuwählen. Die Integration wird nicht in Produktion geladen.

## Qualitätschecks

```bash
pnpm lint
pnpm build
```

## Deployment

Die produktive Quelle ist das öffentliche Repository `vaststudios/schluesseldienst-turan`. Deployments laufen in das bestehende Vercel-Projekt `semih-turans-projects/turan`; daran hängen `schluesseldienst-turan.de` und `www.schluesseldienst-turan.de`.

Bis im Semih-Vercel-Account eine GitHub-Login-Verbindung eingerichtet ist, wird ein geprüfter Stand mit der Vercel CLI ausgerollt:

```bash
vercel link --scope semih-turans-projects --project turan
vercel deploy --prod
```

Das frühere private Repository `vaststudios/turan` ist nicht mehr die produktive Quelle; Git-Deployments daraus werden im Hobby-Plan blockiert.

## Ratgeber

Unter `/ratgeber` steht ein statisch generierter Ratgeber mit sieben ausführlichen Artikeln zu Türöffnungen, Kosten, Schlosstechnik, Anbieterauswahl und Einbruchschutz bereit. Inhalte und Metadaten werden zentral in `lib/blog.ts` gepflegt; die optimierten Artikelbilder liegen unter `public/assets/blog`.

## Einsatzgebietskarte

Die Homepage zeigt das gesamte Münchner Stadtgebiet in einer MapCN-/MapLibre-Karte. Aus Performance- und Datenschutzgründen werden Karten-Code und OpenFreeMap-Tiles erst geladen, wenn die interaktive Karte geöffnet wird; die Information zum Einsatzgebiet bleibt vorher vollständig als Text und Vorschau verfügbar.

## SEO und maschinenlesbare Daten

Unternehmensdaten werden zentral in `lib/site.ts` gepflegt und in Metadaten, Sitemap, Robots-Datei und JSON-LD wiederverwendet. `/llms.txt` stellt externen Systemen eine kurze, kuratierte Übersicht mit kanonischen Links bereit. Google verwendet `llms.txt` ausdrücklich nicht für Rankings oder AI Overviews; für Google bleiben Indexierbarkeit, hilfreiche Inhalte, das Business Profile und die Search Console entscheidend.

Die aktuelle Quellen- und Umsetzungseinschätzung steht in [`docs/seo-geo-research-2026-07.md`](./docs/seo-geo-research-2026-07.md).

## Kontaktformular

Das Formular sendet serverseitig über `POST /api/contact` an Formspark. Dafür wird die folgende Umgebungsvariable benötigt:

- `FORMSPARK_FORM_ID`: Formspark-Formular-ID; sie wird ausschließlich im Server-Handler verwendet.

Das Formular ist für planbare Anliegen gedacht. Akute Aussperrungen werden über die hervorgehobene Telefonnummer geführt.

## Produkt- und Designprinzipien

Die verbindliche Produktdefinition steht in [`PRODUCT.md`](./PRODUCT.md). Die Seite priorisiert schnelle telefonische Hilfe, überprüfbare Aussagen, transparente Preise, mobile Bedienbarkeit und WCAG-2.2-AA-nahe Zustände.
