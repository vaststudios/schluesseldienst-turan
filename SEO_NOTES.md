# SEO-Status

## Umgesetzt

- Seitenspezifische Titel, Beschreibungen und Canonicals
- Open-Graph- und Twitter-Metadaten mit dynamischem Bild unter `/opengraph-image`
- `Locksmith`, `WebSite` und `Service` als zusammenhängender JSON-LD-Graph mit stabilen Entitäts-IDs
- Name, Adresse, Telefon, Bilder und Servicegebiet aus einer zentralen Unternehmenskonfiguration
- Sechs statisch generierte Ratgeberartikel mit eigener URL, Canonical, Article-Metadaten und Social Preview
- `BlogPosting`, `FAQPage` und `BreadcrumbList` als strukturierte Daten auf jeder Artikelseite
- Sichtbare Autoren- und Aktualisierungsangaben passend zum `BlogPosting`-Markup
- `CollectionPage` und `ItemList` auf der Ratgeberübersicht
- Interne Verlinkung über Homepage-Teaser, Listing, verwandte Artikel und Hauptnavigation
- Breadcrumb-Navigation mit `BreadcrumbList` auf den Rechtseiten
- Dynamische `sitemap.xml` und `robots.txt`
- Kuratiertes `/llms.txt` mit absoluten kanonischen Links für freiwillig unterstützende Fremdsysteme
- Optimierte Bilder über `next/image`
- Deutsche Sprache, semantische Überschriften und aussagekräftige Alternativtexte

## Inhaltliche Leitlinie

Metadaten und strukturierte Daten dürfen nur Aussagen wiederholen, die auf der Seite nachvollziehbar sind. Nicht belegte Erfolgsquoten, Meisterbetrieb-Claims und garantierte Ankunftszeiten werden nicht verwendet. Der lokale Fokus liegt auf Schlüsseldienst, Türöffnung und Schlosswechsel in München. Ratgebertexte erklären sicher und ruhig, ohne riskante Öffnungsanleitungen, Alarmismus oder pauschale Rechtsberatung.

Telefonische Erreichbarkeit rund um die Uhr darf nicht als durchgehende Öffnungszeit einer besuchbaren Betriebsstätte ausgezeichnet werden. Deshalb enthält das lokale Unternehmensschema erst dann Öffnungszeiten oder Koordinaten, wenn diese fachlich bestätigt und mit dem Google Business Profile abgeglichen wurden.

`llms.txt` ist kein Google-Ranking- oder Indexierungssignal. Google verlangt für AI Overviews und AI Mode keine separaten AI-Dateien oder speziellen Schemas. Der Nutzen der Datei beschränkt sich auf externe Systeme, die die freiwillige Konvention unterstützen. Quellen und Begründung stehen in [`docs/seo-geo-research-2026-07.md`](./docs/seo-geo-research-2026-07.md).

## Vor Veröffentlichung prüfen

1. Bestätigen, ob die Bavariastraße eine besuchbare Betriebsstätte oder nur die Anbieteradresse ist; Service-Area-Modell und Zeiten entsprechend im Business Profile pflegen.
2. Name, Telefonnummer, Adresse beziehungsweise Servicegebiet und Zeiten exakt mit dem verifizierten Google Business Profile abgleichen.
3. Strukturierte Daten mit dem Google Rich Results Test validieren.
4. Open-Graph-Vorschau der produktiven URL prüfen.
5. Canonicals, `/llms.txt`, `sitemap.xml` und `robots.txt` nach dem Deployment kontrollieren.
6. Sitemap in der Google Search Console einreichen und Startseite, Ratgeber sowie einen repräsentativen Artikel mit der URL-Prüfung kontrollieren.
