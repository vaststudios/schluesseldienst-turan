# Polish-Plan: Schlüsseldienst Turan

## Zielbild

Eine markante, ruhige und vertrauenswürdige Seite für den Münchner Schlüsseldienst. Im Notfall muss der Anruf ohne Suchen möglich sein; bei planbaren Arbeiten müssen Leistung, Preislogik und Ansprechpartner nachvollziehbar werden.

## Umsetzung

- [x] Bestehende Marke, Dunkelblau, Logo und echte Bilder bewahren
- [x] Hero auf Erreichbarkeit, Preisbestätigung und zwei klare Wege fokussieren
- [x] Preistabelle direkt nach den wichtigsten Vertrauenssignalen platzieren
- [x] Leistungen, Ablauf, Inhaber und FAQ als nachvollziehbare Belege strukturieren
- [x] Mobile Notfallaktion dauerhaft erreichbar machen
- [x] Mobile Hauptnavigation als zugängliches Shadcn-Sheet ergänzen
- [x] Formular auf planbare Anliegen begrenzen und zugängliche Fehlerzustände ergänzen
- [x] Nicht belegte Claims aus Seite, Metadaten und JSON-LD entfernen
- [x] Scroll-Listener, Zähler, Typewriter, Karten-Map und dekorative Effekte entfernen
- [x] Shadcn-Komponenten und ein kleines, konsistentes Token-System einführen
- [x] Systembasierten Dark Mode mit persistentem Header-Umschalter ergänzen
- [x] Einsatzgebiet München mit einer bei Bedarf geladenen MapCN-Karte visualisieren
- [x] Lint, Produktions-Build und reale Browser-Ansichten prüfen

## Ratgeber-Erweiterung

- [x] Sieben eigenständige SEO-Themen für Notfall, Kosten, Technik und Sicherheit ausarbeiten
- [x] Sieben ruhige, redaktionelle Bildmotive generieren und als WebP optimieren
- [x] Minimalistische Listing-Seite mit zugänglichem, serverseitigem Themenfilter umsetzen
- [x] Statische Artikelseiten mit Inhaltsverzeichnis, FAQ und verwandten Beiträgen umsetzen
- [x] `BlogPosting`, `FAQPage`, Breadcrumbs, Canonicals und Sitemap-Einträge ergänzen
- [x] Ratgeber in Homepage, Hauptnavigation und Footer integrieren
- [x] Listing und Artikel auf Desktop und Mobile im Browser prüfen

## Technische Leitplanken

- Server Components bleiben der Standard; Client Components sind auf interaktive Inseln wie Formular, Accordion, Theme-Umschalter und die optionale Karte begrenzt. Der Ratgeberfilter wird über URL-Parameter serverseitig aufgelöst.
- Touch-Ziele sind mindestens 44 Pixel hoch und Fokuszustände sichtbar.
- Animationen beschränken sich auf einen kurzen Hero-Einstieg und respektieren `prefers-reduced-motion`.
- Helles und dunkles Farbschema verwenden dieselben semantischen shadcn-Tokens; die Systempräferenz ist der Standard.
- Die MapCN-/MapLibre-Karte und ihre Tiles laden erst nach einer bewussten Interaktion; vorher bleibt eine semantische, layoutstabile Vorschau sichtbar.
- Nur sichtbare Hero-Bilder werden vorgeladen; Kartenbilder laden responsiv und erst in Viewport-Nähe.
- Optimierte Bilder werden sieben Tage, statische Assets mit `stale-while-revalidate` zwischengespeichert.
- Verbindliche Produkt- und Barrierefreiheitsprinzipien stehen in [`../PRODUCT.md`](../PRODUCT.md).

## Performance-Härtung

- [x] Above-the-fold-Preloads auf Homepage- und Artikel-Hero begrenzen
- [x] Responsive Bildgrößen für Hero, Listing und Homepage-Karten präzisieren
- [x] Hero-Quelldatei auf korrektes JPEG-Format und zuverlässige Next-Image-Auslieferung umstellen
- [x] Wiederholungsaufrufe mit längeren Bild- und Asset-Caches beschleunigen
- [x] Produktions-Build, Cache-Header und mobile 390-px-Ansichten verifizieren

## SEO- und GEO-Härtung

- [x] Unternehmensdaten für Metadaten, Schemas und Verzeichnisse zentralisieren
- [x] Lokales Unternehmensschema auf den spezifischen Typ `Locksmith` umstellen
- [x] Unbestätigte Koordinaten und nicht belegte Öffnungszeiten aus dem Markup entfernen
- [x] Ratgeber um sichtbare Fachautorschaft, Änderungsdatum, `CollectionPage` und `ItemList` ergänzen
- [x] Filtervarianten mit `noindex,follow` von der kanonischen Übersicht trennen
- [x] Sitemap-Änderungsdaten stabilisieren und ignorierte Prioritätsangaben entfernen
- [x] Kuratiertes `/llms.txt` mit kanonischen Links bereitstellen
- [x] Aktuelle Google- und Schema.org-Grundlagen in [`seo-geo-research-2026-07.md`](./seo-geo-research-2026-07.md) dokumentieren
- [ ] Nach Deployment Google Business Profile abgleichen und Sitemap in Search Console einreichen
