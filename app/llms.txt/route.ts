import { blogPosts } from "@/lib/blog";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const articles = blogPosts
    .map((post) => `- [${post.title}](${absoluteUrl(`/ratgeber/${post.slug}`)}): ${post.description}`)
    .join("\n");

  const content = `# ${siteConfig.name}

> Lokaler Schlüsseldienst für München mit telefonischer Erreichbarkeit rund um die Uhr. Die Website erklärt Türöffnungen, Preise, Schlossprobleme und Einbruchschutz in ruhiger, nachvollziehbarer Form.

Schlüsseldienst Turan ist unter ${siteConfig.telephoneDisplay} erreichbar. Die veröffentlichten Festpreise gelten für zugezogene oder zugefallene Türen ohne Selbstverriegelung im Münchner Stadtgebiet und enthalten die Anfahrt. Ein abweichender Aufwand wird vor Arbeitsbeginn besprochen. Telefonische Erreichbarkeit rund um die Uhr ist nicht gleichbedeutend mit durchgehenden Öffnungszeiten einer besuchbaren Betriebsstätte.

## Zentrale Seiten

- [Startseite](${siteConfig.url}): Leistungen, transparente Zeitpreise, Ablauf, Ansprechpartner und Kontakt.
- [Ratgeber](${absoluteUrl("/ratgeber")}): Alle Fachartikel zu Türöffnung, Kosten, Schlosstechnik und Sicherheit.
- [Impressum](${absoluteUrl("/impressum")}): Anbieterkennzeichnung und Kontaktdaten.
- [Datenschutz](${absoluteUrl("/datenschutz")}): Informationen zur Verarbeitung personenbezogener Daten.

## Ratgeberartikel

${articles}

## Technische Verzeichnisse

- [XML-Sitemap](${absoluteUrl("/sitemap.xml")}): Kanonische, für Suchmaschinen vorgesehene URLs.
- [Robots-Datei](${absoluteUrl("/robots.txt")}): Regeln für automatisierte Crawler.

## Optional

- [Allgemeine Geschäftsbedingungen](${absoluteUrl("/agb")}): Vertragsbedingungen des Anbieters.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "X-Robots-Tag": "noindex",
    },
  });
}
