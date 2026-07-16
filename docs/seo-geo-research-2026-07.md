# SEO-, GEO- und `llms.txt`-Recherche

Stand: 16. Juli 2026. Die Empfehlungen basieren auf offiziellen Google-Dokumentationen, Schema.org und der ursprünglichen `llms.txt`-Spezifikation.

## Kurzfazit

Für eine Aufnahme in Google gibt es keinen separaten GEO-Schalter und keine Garantie. Eine Seite muss technisch crawlbar, indexierbar und für ein Snippet zugelassen sein; Sitemaps und strukturierte Daten helfen Google beim Entdecken und Einordnen, erzwingen aber weder Indexierung noch Rankings. Google beschreibt seine generativen Suchfunktionen als Teil derselben Such- und Qualitätssysteme wie die klassische Suche. [Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

`/llms.txt` ist dagegen eine freiwillige, nicht standardisierte Konvention außerhalb der Google-Indexierung. Google sagt ausdrücklich, dass es diese Datei für Search einschließlich generativer Funktionen nicht verwendet und dass sie Google-Rankings weder verbessert noch verschlechtert. [Google: LLMS.txt and special markup](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#mythbusting)

## 1. Verbindliche Basis für Google

- Jede gewünschte URL muss öffentlich erreichbar sein, einen erfolgreichen HTTP-Status liefern, indexierbaren Inhalt enthalten und Googlebot darf nicht durch `robots.txt` oder `noindex` ausgeschlossen werden. Für generative Google-Funktionen muss die Seite außerdem im normalen Suchindex liegen und für ein Snippet zugelassen sein. [Google: technical requirements for AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#technical-requirements)
- Pro indexierbarer Seite sollte eine eindeutige, selbstreferenzierende Canonical-URL im HTML stehen. Interne Links und Sitemap müssen dieselbe kanonische HTTPS-URL verwenden. Canonicals sind starke Signale; Sitemap-Einträge sind schwächere Signale. [Google: canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- Die Root-Sitemap soll nur vollständige, kanonische URLs enthalten. Ihre Einreichung ist ein Hinweis und keine Indexierungsgarantie. `lastmod` sollte nur echte wesentliche Änderungen abbilden; `priority` und `changefreq` ignoriert Google. [Google: build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- Sitemap nach dem Deployment in Search Console einreichen, Startseite, Ratgeber-Listing und repräsentative Artikel mit der URL-Prüfung kontrollieren und bei Bedarf eine erneute Indexierung anstoßen. Das ist ein erforderlicher operativer Schritt außerhalb des Repositories. [Google: LocalBusiness release workflow](https://developers.google.com/search/docs/appearance/structured-data/local-business#how-to-add-structured-data)
- `meta keywords` kann entfernt werden: Google verwendet dieses Meta-Tag nicht für Web-Rankings. [Google: meta keywords](https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag)

## 2. Lokale Auffindbarkeit

Der stärkste zusätzliche Hebel ist ein verifiziertes Google Business Profile. Google nennt Relevanz, Entfernung und Bekanntheit als Hauptfaktoren lokaler Ergebnisse. Vollständige und konsistente Angaben, korrekte Öffnungszeiten, Fotos sowie echte Bewertungen und hilfreiche Antworten unterstützen die lokale Sichtbarkeit. [Google Business Profile: local ranking](https://support.google.com/business/answer/7091)

Für Turan bedeutet das:

1. Name, Haupttelefon, Adresse beziehungsweise Servicegebiet und Öffnungszeiten auf Website, Impressum, strukturierten Daten und Business Profile exakt abgleichen.
2. Vor Veröffentlichung klären, ob Kunden die Bavariastraße tatsächlich während angegebener Zeiten besuchen können. Bei einem reinen Vor-Ort-Service muss das Business Profile als Service-Area-Business korrekt geführt und die Adresse gegebenenfalls ausgeblendet werden. [Google Business Profile: address and service area](https://support.google.com/business/answer/2853879)
3. Die Aussage „telefonisch rund um die Uhr erreichbar“ nicht automatisch als durchgehend geöffnete, besuchbare Betriebsstätte auszeichnen. `openingHoursSpecification` nur mit belegbaren Geschäftszeiten pflegen.
4. Das Profil verifizieren, die passende primäre Kategorie wählen, Servicegebiet München präzise halten und Profiländerungen regelmäßig mit den Website-Angaben abgleichen.

## 3. Strukturierte Daten

Google empfiehlt den spezifischsten zutreffenden `LocalBusiness`-Typ. Schema.org definiert dafür `Locksmith`; Google zeigt `Locksmith` ausdrücklich als unterstütztes Typbeispiel. Für Local-Business-Ergebnisse sind `name` und eine vollständige `address` die Pflichtfelder, unter anderem `telephone`, `url`, `geo`, `openingHoursSpecification` und `priceRange` sind empfohlene Angaben. [Google: LocalBusiness markup](https://developers.google.com/search/docs/appearance/structured-data/local-business), [Schema.org: Locksmith](https://schema.org/Locksmith)

Priorisierte Anpassungen im aktuellen Projekt:

- Den Organisationsknoten von generischem `LocalBusiness` auf den spezifischen Typ `Locksmith` umstellen und dieselbe stabile `@id` weiterverwenden.
- `logo` und ein repräsentatives Unternehmensbild getrennt auszeichnen; nur vorhandene, crawlbare Bilder verwenden.
- `telephone`, `email`, Adresse, Koordinaten, Servicegebiet, Preise und Zeiten nur aufnehmen, wenn sie sichtbar und nachweislich aktuell sind. Keine selbst vergebenen Sterne oder Bewertungen in das Markup schreiben. Google empfiehlt Bewertungsfelder für Seiten, die Bewertungen anderer lokaler Unternehmen erfassen, nicht für selbst kontrollierte Eigenbewertungen. [Google: LocalBusiness properties](https://developers.google.com/search/docs/appearance/structured-data/local-business#local-business)
- `BlogPosting` beibehalten. Sichtbare Autorenzeile und – bei echter Überarbeitung – sichtbares Aktualisierungsdatum mit `author`, `datePublished` und `dateModified` synchronisieren. Google empfiehlt zusätzlich eine eindeutige Autoren-URL und mehrere hochauflösende Bildformate in 16:9, 4:3 und 1:1. [Google: Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
- Das vorhandene `FAQPage`-Markup ist zulässig, erzeugt für einen Schlüsseldienst aber normalerweise kein sichtbares FAQ-Rich-Result. Google beschränkt dieses Ergebnis weitgehend auf bekannte Behörden- und Gesundheitsseiten. Es darf bleiben, sollte aber nicht als Ranking- oder Darstellungsvorteil eingeplant werden. [Google: FAQ rich-result changes](https://developers.google.com/search/blog/2023/08/howto-faq-changes)
- Nach dem Deployment Homepage und je einen Artikel im Rich Results Test und anschließend mit der Search-Console-URL-Prüfung validieren.

## 4. GEO und Google-AI-Funktionen

Google betrachtet AEO/GEO nicht als separates Optimierungsverfahren: Seine AI Overviews und AI Mode greifen auf den normalen Suchindex und die Kern-Rankingsysteme zurück. Es gibt kein spezielles AI-Schema. Strukturierte Daten bleiben für normale Rich Results sinnvoll, sind aber keine Voraussetzung für generative Google-Ergebnisse. [Google: SEO and GEO](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#seo-and-generative-ai), [Google: GEO mythbusting](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#mythbusting)

Sinnvolle GEO-Arbeit ist deshalb inhaltliche Qualitätsarbeit:

- Ratgeber mit konkretem Turan-Fachwissen anreichern: tatsächliche Prüfschritte vor Ort, nachvollziehbarer Preisumfang, reale Grenzen der Ferneinschätzung und datierte Aktualisierungen.
- Klare Überschriften, kurze direkte Antworten und anschließende Erläuterungen verwenden, ohne Texte künstlich in Mini-Blöcke zu zerlegen.
- Keine massenhaft erzeugten Münchner Stadtteilseiten oder Suchvarianten mit nahezu gleichem Inhalt anlegen. Google warnt vor skalierter Inhaltserstellung ohne zusätzlichen Nutzen. [Google: helpful generative-search content](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#content)
- Relevante Originalbilder und sichtbare Fachautorschaft beibehalten. Google empfiehlt einzigartige, erfahrungsbasierte Inhalte statt austauschbarer Zusammenfassungen.
- Das verifizierte Business Profile aktuell halten; Google nennt es ausdrücklich als Quelle für lokale Informationen in generativen Antworten. [Google: local information in AI responses](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#business-data)
- Nach dem Launch klassische Suchleistung und den Bericht für generative AI-Funktionen in Search Console beobachten, statt Sichtbarkeit mit Drittanbieter-Scores zu schätzen. [Google: measuring AI visibility](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#measure)

## 5. `llms.txt`: freiwillige Ergänzung, kein Google-Signal

Die ursprüngliche Spezifikation beschreibt `/llms.txt` als Vorschlag für eine kuratierte, maschinenlesbare Website-Übersicht zur Nutzung durch LLMs zur Inferenzzeit. Das Format liegt kleingeschrieben im Root und besteht aus einer verpflichtenden H1, optionaler Kurzbeschreibung als Blockquote, ergänzendem Kontext und H2-Abschnitten mit Markdown-Links. [llms.txt proposal and format](https://llmstxt.org/)

Wenn die Datei auf ausdrücklichen Wunsch ergänzt wird, sollte sie:

- unter `/llms.txt` erreichbar sein und den korrekten Content-Type für Klartext beziehungsweise Markdown liefern;
- Unternehmen, Einsatzgebiet, Kontaktweg, Preislogik und den Unterschied zwischen telefonischer Erreichbarkeit und Geschäftszeiten sachlich beschreiben;
- die kanonische Startseite, Ratgeberübersicht, sieben Artikel, Impressum und Datenschutz mit absoluten HTTPS-URLs verlinken;
- nur öffentlich sichtbare Aussagen wiederholen und keine zusätzlichen Versprechen, Bewertungen oder Standortseiten erfinden;
- klein und manuell prüfbar bleiben. Ein duplizierendes `llms-full.txt` oder separate Markdown-Kopien aller Seiten sind für diese kleine Website nicht nötig, solange kein konkreter Verbraucher dafür bekannt ist.

Wichtig: `llms.txt` ersetzt weder `robots.txt` noch `sitemap.xml`, Canonicals, strukturierte Daten, Business Profile oder Search Console. Für Google ist die Datei ausdrücklich wirkungslos; ihr Nutzen beschränkt sich auf externe Systeme, die sich freiwillig an diesen Vorschlag halten.

## Empfohlene Reihenfolge

1. Unternehmensdaten und Besuchs-/Service-Area-Modell mit dem Betreiber verifizieren.
2. `Locksmith`-Markup, Artikelautor/-datum und belastbare Sitemap-Daten korrigieren.
3. Optional ein kuratiertes `/llms.txt` ergänzen, klar als Nicht-Google-Maßnahme behandeln.
4. Produktionsantworten für Canonical, robots, Sitemap, strukturierte Daten und Statuscodes prüfen.
5. Business Profile abgleichen und verifizieren.
6. Sitemap in Search Console einreichen, Kern-URLs prüfen und die Entwicklung über mehrere Wochen beobachten.
