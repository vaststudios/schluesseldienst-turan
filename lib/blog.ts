export type BlogCategory = "Notfall" | "Kosten" | "Technik" | "Sicherheit";

export type BlogSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  intro: string[];
  sections: BlogSection[];
  faq: BlogFaq[];
  relatedSlugs: string[];
};

export type BlogSummary = Pick<
  BlogPost,
  "slug" | "title" | "excerpt" | "category" | "publishedAt" | "readingTime" | "image" | "imageAlt"
>;

export const blogPosts: BlogPost[] = [
  {
    slug: "serioesen-schluesseldienst-muenchen-erkennen",
    title: "Seriösen Schlüsseldienst in München erkennen: 9 klare Merkmale",
    description: "Seriösen Schlüsseldienst in München finden: Mit diesen neun Merkmalen prüfen Sie Preis, Anfahrt, Öffnungsmethode, Rechnung und Kommunikation vor dem Auftrag.",
    excerpt: "Neun konkrete Merkmale helfen dabei, Preis, Kommunikation und Vorgehen eines Schlüsseldiensts bereits vor der Beauftragung besser einzuschätzen.",
    category: "Kosten",
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-16",
    readingTime: "11 Min. Lesezeit",
    image: "/assets/blog/serioeser-schluesseldienst-muenchen.webp",
    imageAlt: "Schlüsseldienst und Kundin besprechen vor einer Wohnungstür einen Kostenvoranschlag",
    intro: [
      "Wer vor einer verschlossenen Tür steht, möchte schnell entscheiden. Genau dieser Zeitdruck macht es jedoch schwer, Preisangaben, Leistungsumfang und Anbieter miteinander zu vergleichen. Eine gute Auswahl muss trotzdem keine lange Recherche sein: Wenige konkrete Fragen liefern bereits wichtige Hinweise.",
      "Ein einzelnes Merkmal beweist noch nicht, dass ein Betrieb zuverlässig arbeitet. Zusammengenommen zeigen klare Erreichbarkeit, nachvollziehbare Preise, technische Rückfragen und eine saubere Dokumentation aber, ob Kommunikation und Vorgehen professionell wirken. Diese Checkliste hilft bei der Einordnung eines Schlüsseldiensts in München.",
    ],
    sections: [
      {
        id: "klare-angaben",
        title: "1. Der Anbieter macht klare Angaben zu Betrieb und Erreichbarkeit",
        paragraphs: [
          "Vor der Beauftragung sollte erkennbar sein, mit welchem Betrieb Sie sprechen und wie dieser erreichbar ist. Name, Kontaktmöglichkeiten und die verantwortliche Stelle gehören zu einer nachvollziehbaren Außendarstellung. Eine Münchner Telefonnummer oder ein Stadtname in einer Anzeige allein sagt dagegen wenig über den tatsächlichen Anbieter aus.",
          "Fragen Sie im Zweifel nach dem vollständigen Namen des Betriebs und danach, wer die Rechnung ausstellt. Die Antwort sollte direkt und verständlich sein. Ausweichende Formulierungen oder wechselnde Unternehmensnamen erschweren eine spätere Zuordnung und sind ein Grund, noch einmal genauer hinzusehen.",
        ],
      },
      {
        id: "technische-fragen",
        title: "2. Am Telefon werden zuerst technische Rückfragen gestellt",
        paragraphs: [
          "Eine belastbare Einschätzung beginnt mit der Türsituation. Ist die Tür nur zugefallen oder mit dem Schlüssel abgeschlossen? Steckt innen ein Schlüssel? Gibt es eine Selbstverriegelung, ein Zusatzschloss oder einen erkennbaren Defekt? Auch Türart, Stockwerk und Zugänglichkeit können relevant sein.",
          "Wer ohne jede Rückfrage sofort einen Endpreis oder eine bestimmte Methode verspricht, kennt die Ausgangslage noch nicht. Gute Kommunikation trennt klar zwischen einem Preis für eine definierte Standardsituation und einer Einschätzung für Sonderfälle. Je genauer die Beschreibung, desto geringer das Risiko späterer Missverständnisse.",
        ],
      },
      {
        id: "gesamtpreis",
        title: "3. Der genannte Preis hat einen verständlichen Leistungsumfang",
        paragraphs: [
          "Fragen Sie nicht nur nach einer Zahl, sondern nach dem Gesamtpreis für die geschilderte Situation. Wichtig ist, ob Anfahrt innerhalb Münchens, Arbeitszeit, Umsatzsteuer und mögliche Zeitaufschläge enthalten sind. Ein auffällig niedriger Betrag hilft wenig, wenn wesentliche Positionen erst vor Ort hinzukommen.",
          "Lassen Sie sich außerdem erklären, unter welchen konkreten Umständen der Preis abweichen kann. Bei einer abgeschlossenen Tür, einem defekten Zylinder oder notwendigem Material kann eine andere Leistung erforderlich werden. Entscheidend ist, dass eine Abweichung nicht überraschend entsteht, sondern vor zusätzlicher Arbeit besprochen wird.",
        ],
        bullets: [
          "Gilt der Betrag für genau die beschriebene Türsituation?",
          "Sind Anfahrt, Arbeitszeit und Umsatzsteuer enthalten?",
          "Gibt es einen Abend-, Nacht- oder Feiertagszuschlag?",
          "Welche technische Abweichung könnte den Preis verändern?",
        ],
      },
      {
        id: "ankunft",
        title: "4. Die Ankunftszeit wird realistisch statt absolut versprochen",
        paragraphs: [
          "Die tatsächliche Anfahrt hängt in München von Standort, Verkehr, Wetter und laufenden Einsätzen ab. Eine realistische Zeitspanne ist deshalb meist glaubwürdiger als ein garantiertes Minutenversprechen, das unabhängig von Tageszeit und Stadtteil gelten soll.",
          "Teilen Sie den genauen Einsatzort erst dem ausgewählten Anbieter mit und fragen Sie, von welchem Bereich die Fachkraft startet. Wird eine Verzögerung absehbar, sollte der Betrieb erreichbar bleiben und informieren können. Klare Kommunikation ist in dieser Phase wichtiger als eine besonders spektakuläre Zeitangabe.",
        ],
      },
      {
        id: "vor-arbeitsbeginn",
        title: "5. Vor Arbeitsbeginn werden Situation, Methode und Preis bestätigt",
        paragraphs: [
          "Vor Ort sollte die Tür zunächst betrachtet werden. Passt die tatsächliche Situation zur telefonischen Beschreibung, kann der vereinbarte Leistungsumfang bestätigt werden. Zeigt sich ein Defekt oder eine andere Verriegelung, braucht es eine neue Erklärung, bevor zusätzliche Arbeit beginnt.",
          "Lassen Sie sich die geplante Methode in einfachen Worten beschreiben. Bei einer nur zugefallenen Tür sollte zuerst geprüft werden, ob eine schonende Öffnung technisch möglich ist. Bohren oder der Austausch von Bauteilen darf nicht zur automatischen Standardantwort werden, bevor die Tür fachlich eingeordnet wurde.",
        ],
      },
      {
        id: "berechtigung",
        title: "6. Die Zugangsberechtigung wird ernst genommen",
        paragraphs: [
          "Ein verantwortungsvoller Schlüsseldienst muss berücksichtigen, ob die Person vor der Tür zum Zugang berechtigt ist. Ein Ausweisdokument mit passender Adresse ist der einfachste Nachweis, liegt bei einer Aussperrung aber häufig in der Wohnung. Dann können andere nachvollziehbare Unterlagen oder die Bestätigung nach der Öffnung relevant werden.",
          "Bereiten Sie vorhandene Nachweise vor und erklären Sie die Situation offen. Dass ein Anbieter hierzu Fragen stellt, ist kein unnötiges Hindernis, sondern ein Sicherheitsmerkmal. Bei ungewöhnlichen oder widersprüchlichen Umständen darf eine Öffnung nicht gedankenlos erfolgen.",
        ],
      },
      {
        id: "rechnung",
        title: "7. Leistung und Material erscheinen nachvollziehbar auf der Rechnung",
        paragraphs: [
          "Nach dem Einsatz sollte die Rechnung erkennen lassen, welche Leistung erbracht wurde und welches Material gegebenenfalls eingesetzt wurde. Der Rechnungssteller sollte mit dem beauftragten Betrieb nachvollziehbar zusammenpassen. Bewahren Sie Rechnung und Zahlungsbeleg auf.",
          "Prüfen Sie den Betrag in Ruhe gegen die vorherige Absprache. Wurde vor Ort eine zusätzliche Leistung vereinbart, sollte sie verständlich benannt sein. Leere Formulare, unklare Sammelpositionen oder Druck zu einer Unterschrift ohne Lesemöglichkeit passen nicht zu einem transparenten Ablauf.",
        ],
      },
      {
        id: "kommunikation",
        title: "8. Die Kommunikation bleibt auch unter Zeitdruck sachlich",
        paragraphs: [
          "Eine Aussperrung ist bereits belastend. Professionelle Kommunikation verstärkt diesen Druck nicht mit Drohungen, künstlicher Eile oder unverständlichen Fachbegriffen. Fragen zu Preis, Methode und Rechnung sollten erlaubt sein, ohne dass daraus ein Konflikt entsteht.",
          "Sie dürfen einen Auftrag ablehnen, solange noch keine kostenpflichtige Leistung vereinbart oder begonnen wurde. Klären Sie im Telefongespräch, ob für eine bereits veranlasste Anfahrt Kosten entstehen würden. Treffen Sie die Entscheidung möglichst vor der endgültigen Beauftragung und vermeiden Sie parallele Aufträge an mehrere Dienste.",
        ],
      },
      {
        id: "neun-merkmale",
        title: "9. Eine kurze Checkliste ergibt ein stimmiges Gesamtbild",
        paragraphs: [
          "Nicht jede Website muss gleich aussehen, und auch ein kleiner lokaler Betrieb kann professionell arbeiten. Entscheidend ist, ob die wesentlichen Informationen zusammenpassen. Nutzen Sie diese neun Punkte als schnellen Filter, nicht als starres Zertifikat.",
          "Wenn mehrere Antworten unklar bleiben, nehmen Sie sich trotz der Situation einen Moment für einen zweiten Anruf. Zwei Minuten für eine saubere Preis- und Leistungsabstimmung sind oft wertvoller als ein überhasteter Auftrag, dessen Bedingungen erst an der Tür sichtbar werden.",
        ],
        bullets: [
          "Betrieb und Rechnungssteller sind klar benannt",
          "Die Türsituation wird technisch abgefragt",
          "Der Preis bezieht sich auf eine definierte Leistung",
          "Anfahrt und Zuschläge werden transparent genannt",
          "Die Ankunftszeit wird realistisch eingeschätzt",
          "Methode und Preis werden vor Beginn bestätigt",
          "Die Zugangsberechtigung wird berücksichtigt",
          "Die Rechnung beschreibt Leistung und Material",
          "Fragen werden ruhig und verständlich beantwortet",
        ],
      },
    ],
    faq: [
      {
        question: "Woran erkenne ich am Telefon einen seriösen Schlüsseldienst?",
        answer: "Hilfreich sind klare Betriebsangaben, technische Rückfragen zur Tür, ein nachvollziehbarer Gesamtpreis und eine Erklärung, wann dieser Preis abweichen könnte. Kein einzelnes Merkmal ist allein ein Beweis; das Gesamtbild zählt.",
      },
      {
        question: "Sollte ich bei einer Aussperrung mehrere Schlüsseldienste gleichzeitig bestellen?",
        answer: "Nein. Vergleichen Sie vor der Beauftragung telefonisch, entscheiden Sie sich dann für einen Anbieter und erteilen Sie nur diesem den Auftrag. Parallele Anfahrten können unnötige Kosten und Konflikte verursachen.",
      },
      {
        question: "Muss der Preis einer Türöffnung vorab feststehen?",
        answer: "Für eine klar beschriebene Standardsituation sollte der Leistungsumfang mit einem nachvollziehbaren Preis verbunden sein. Zeigt sich vor Ort eine andere technische Lage, sollte jede Änderung vor zusätzlicher Arbeit erklärt und bestätigt werden.",
      },
      {
        question: "Warum fragt der Schlüsseldienst nach einem Berechtigungsnachweis?",
        answer: "Damit nicht beliebige Personen Zugang zu einer Wohnung erhalten. Liegt der Ausweis in der Wohnung, können je nach Situation andere nachvollziehbare Nachweise oder eine Prüfung unmittelbar nach der Öffnung erforderlich sein.",
      },
    ],
    relatedSlugs: [
      "kosten-tueroeffnung-muenchen",
      "ausgesperrt-in-muenchen-was-tun",
      "zugefallene-oder-abgeschlossene-tuer",
    ],
  },
  {
    slug: "ausgesperrt-in-muenchen-was-tun",
    title: "Ausgesperrt in München: Was Sie jetzt in Ruhe tun können",
    description: "Ausgesperrt in München? Diese ruhige Checkliste zeigt, was Sie zuerst prüfen, welche Angaben der Schlüsseldienst braucht und wie Sie Kosten klären.",
    excerpt: "Eine klare Reihenfolge für die ersten Minuten vor der verschlossenen Tür – ohne riskante Selbstversuche und ohne unnötigen Zeitverlust.",
    category: "Notfall",
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-16",
    readingTime: "8 Min. Lesezeit",
    image: "/assets/blog/ausgesperrt-muenchen.webp",
    imageAlt: "Geschlossene Wohnungstür in einem ruhigen Münchner Treppenhaus",
    intro: [
      "Die Wohnungstür fällt ins Schloss, der Schlüssel liegt drinnen – und plötzlich wird aus einem normalen Tag ein dringendes Problem. Wer in München ausgesperrt ist, muss trotzdem nicht überstürzt handeln. Ein kurzer, geordneter Check spart oft Zeit und hilft dabei, dem Schlüsseldienst die Situation präzise zu schildern.",
      "Wichtig ist vor allem, die Tür nicht mit ungeeigneten Gegenständen oder Gewalt zu bearbeiten. Dadurch können Beschlag, Rahmen oder Schloss beschädigt werden. Die folgende Reihenfolge konzentriert sich deshalb auf sichere, nachvollziehbare Schritte.",
    ],
    sections: [
      {
        id: "akute-gefahr-pruefen",
        title: "1. Zuerst prüfen: Besteht eine akute Gefahr?",
        paragraphs: [
          "Befinden sich ein Kleinkind, eine hilfsbedürftige Person, ein eingeschalteter Herd oder eine andere unmittelbare Gefahr in der Wohnung, ist die Situation kein gewöhnlicher Türöffnungsauftrag. In einem echten Notfall sollten Sie die zuständigen Rettungskräfte informieren und die Gefahr so konkret wie möglich beschreiben.",
          "Geht es ausschließlich um den fehlenden Zugang zur Wohnung, können Sie die nächsten Schritte in Ruhe abarbeiten. Stellen Sie sich an einen sicheren Ort im Haus, halten Sie das Telefon bereit und notieren Sie die vollständige Adresse einschließlich Stockwerk und Klingelname.",
        ],
      },
      {
        id: "ersatzschluessel",
        title: "2. Gibt es einen erreichbaren Ersatzschlüssel?",
        paragraphs: [
          "Bevor Sie einen Schlüsseldienst beauftragen, lohnt sich ein kurzer Realitätscheck: Hat eine Vertrauensperson einen Ersatzschlüssel? Ist die Hausverwaltung erreichbar? Gibt es einen Mitbewohner, der in absehbarer Zeit nach Hause kommt? Entscheidend ist nicht nur, ob ein Schlüssel existiert, sondern ob er schnell und ohne unverhältnismäßigen Aufwand verfügbar ist.",
          "Fenster, Balkone oder Nebeneingänge sollten Sie nicht auf eigene Faust über Kletterwege erreichen. Das Verletzungsrisiko steht in keinem Verhältnis zu einer geordneten Türöffnung.",
        ],
      },
      {
        id: "tuer-beschreiben",
        title: "3. Die Tür möglichst genau beschreiben",
        paragraphs: [
          "Für eine realistische Einschätzung ist die Unterscheidung zwischen einer zugefallenen und einer abgeschlossenen Tür zentral. Eine zugefallene Tür wurde nur ins Schloss gezogen. Bei einer abgeschlossenen Tür wurden die Riegel mit dem Schlüssel betätigt. Auch eine Selbstverriegelung, ein innen steckender Schlüssel oder ein defektes Schloss verändern die Ausgangslage.",
          "Sie müssen keine Fachbegriffe kennen. Beschreiben Sie einfach, was unmittelbar vor dem Aussperren passiert ist und ob sich der Schlüssel in der Wohnung, im Schloss oder möglicherweise verloren befindet.",
        ],
        bullets: [
          "Ist die Tür nur zugefallen oder wurde sie abgeschlossen?",
          "Steckt innen ein Schlüssel?",
          "Ist der Schlüssel abgebrochen oder verloren?",
          "Gab es vorher bereits Probleme mit Schloss oder Tür?",
          "In welchem Münchner Stadtteil und Stockwerk befindet sich die Wohnung?",
        ],
      },
      {
        id: "preis-klaeren",
        title: "4. Preis und Leistungsumfang vor der Anfahrt klären",
        paragraphs: [
          "Fragen Sie am Telefon, welcher Preis für die beschriebene Situation gilt und ob die Anfahrt enthalten ist. Für eine einfache zugezogene oder zugefallene Tür ohne Selbstverriegelung veröffentlicht Schlüsseldienst Turan feste Zeitpreise. Besondere Schlösser, Defekte oder zusätzliche Arbeiten müssen dagegen separat eingeschätzt werden.",
          "Eine seriöse Abstimmung trennt die bekannte Ausgangslage von möglichen Zusatzarbeiten. Falls sich vor Ort zeigt, dass die Tür anders gesichert ist als beschrieben, sollte das weitere Vorgehen erklärt und der Preis vor Beginn bestätigt werden.",
        ],
      },
      {
        id: "vor-ort",
        title: "5. Vor Ort: Berechtigung und Vorgehen",
        paragraphs: [
          "Ein Schlüsseldienst muss nachvollziehen können, dass Sie zum Zutritt berechtigt sind. Liegt der Ausweis in der Wohnung, kann die Identität nach der Öffnung geprüft werden. Je nach Situation können auch Mietunterlagen, Nachbarn oder andere plausible Nachweise helfen.",
          "Lassen Sie sich vor Arbeitsbeginn kurz erklären, welche Methode vorgesehen ist und welche Risiken bestehen. Bei einer einfachen zugefallenen Tür wird zunächst die möglichst schonende Methode geprüft. Niemand kann jedoch für jede Schloss- und Türsituation eine beschädigungsfreie Öffnung versprechen.",
        ],
      },
      {
        id: "danach",
        title: "Nach der Türöffnung: Ursache statt nur Symptom prüfen",
        paragraphs: [
          "War die Aussperrung ein einmaliges Missgeschick, genügt häufig ein besser organisierter Ersatzschlüssel. Ist die Tür dagegen wegen eines klemmenden Schlosses, einer verzogenen Tür oder eines verlorenen Schlüssels zum Problem geworden, sollte die Ursache separat betrachtet werden.",
          "Bewahren Sie die Rechnung auf und prüfen Sie, ob die abgerechnete Leistung dem vorher besprochenen Umfang entspricht. Ein ruhiger Abschluss ist ebenso wichtig wie die schnelle Hilfe am Anfang.",
        ],
      },
    ],
    faq: [
      { question: "Kann ich eine zugefallene Tür selbst öffnen?", answer: "Von improvisierten Methoden ist abzuraten. Ungeeignete Karten, Drähte oder Werkzeuge können Tür, Dichtung und Beschlag beschädigen und funktionieren bei vielen Türen ohnehin nicht." },
      { question: "Welche Angaben braucht der Schlüsseldienst?", answer: "Hilfreich sind Adresse, Stockwerk, Art der Tür, die Information zugefallen oder abgeschlossen sowie Hinweise auf einen innen steckenden oder verlorenen Schlüssel." },
      { question: "Wie schnell ist Hilfe in München vor Ort?", answer: "Das hängt von Standort, Verkehr, Wetter und laufenden Einsätzen ab. Eine realistische Einschätzung kann erst am Telefon anhand der aktuellen Situation gegeben werden." },
    ],
    relatedSlugs: ["kosten-tueroeffnung-muenchen", "zugefallene-oder-abgeschlossene-tuer"],
  },
  {
    slug: "kosten-tueroeffnung-muenchen",
    title: "Was kostet eine Türöffnung in München? Preise richtig einordnen",
    description: "Türöffnung in München: Welche Faktoren den Preis bestimmen, welche Festpreise bei Schlüsseldienst Turan gelten und was Sie vor Auftrag klären sollten.",
    excerpt: "Woraus sich der Preis einer Türöffnung zusammensetzt, wann ein veröffentlichter Festpreis gilt und welche Fragen vor der Beauftragung wichtig sind.",
    category: "Kosten",
    publishedAt: "2026-07-10",
    updatedAt: "2026-07-16",
    readingTime: "9 Min. Lesezeit",
    image: "/assets/blog/kosten-tueroeffnung-muenchen.webp",
    imageAlt: "Kalkulation einer Türöffnung mit Schlüssel, Formular und Taschenrechner",
    intro: [
      "Die Frage nach den Kosten gehört bei einer Aussperrung an den Anfang – nicht ans Ende. Trotzdem lässt sich eine Türöffnung nur dann verlässlich einordnen, wenn klar ist, welche Tür vorliegt, wie sie verschlossen ist und zu welcher Zeit der Einsatz stattfindet.",
      "Transparente Preise bedeuten deshalb zweierlei: veröffentlichte Beträge für klar definierte Standardsituationen und eine verbindliche Abstimmung, sobald die Situation davon abweicht.",
    ],
    sections: [
      {
        id: "standardsituation",
        title: "Welche Situation deckt ein einfacher Türöffnungspreis ab?",
        paragraphs: [
          "Die veröffentlichten Preise von Schlüsseldienst Turan gelten für zugezogene oder zugefallene Türen ohne Selbstverriegelung im Münchner Stadtgebiet. Die Anfahrt ist enthalten. Gemeint ist eine Tür, die nicht mit dem Schlüssel verriegelt wurde und bei der kein technischer Defekt die Öffnung erschwert.",
          "Diese Abgrenzung ist wichtig. Eine abgeschlossene Tür, eine Mehrfachverriegelung, ein defekter Schließzylinder oder ein abgebrochener Schlüssel sind andere technische Ausgangslagen. Sie können zusätzliche Arbeit oder Material erfordern und sollten bereits am Telefon erwähnt werden.",
        ],
      },
      {
        id: "zeitpreise",
        title: "Die veröffentlichten Festpreise im Überblick",
        paragraphs: [
          "Der Zeitpunkt beeinflusst den Preis, weil Einsätze am Abend, in der Nacht sowie an Sonn- und Feiertagen anders kalkuliert werden. Für die definierte Standardsituation gelten derzeit folgende Gesamtpreise inklusive Anfahrt innerhalb Münchens.",
        ],
        bullets: [
          "Montag bis Freitag, 08:00–18:00 Uhr: 89 Euro",
          "Montag bis Freitag, 18:00–22:00 Uhr: 99 Euro",
          "Montag bis Freitag, 22:00–08:00 Uhr: 119 Euro",
          "Samstag, 08:00–22:00 Uhr: 109 Euro",
          "Samstag, 22:00–08:00 Uhr: 129 Euro",
          "Sonntag und Feiertag, 00:00–24:00 Uhr: 149 Euro",
        ],
      },
      {
        id: "abweichungen",
        title: "Wann kann die Türöffnung mehr kosten?",
        paragraphs: [
          "Mehrkosten entstehen nicht allein dadurch, dass eine Öffnung schwierig wirkt. Entscheidend ist, ob eine andere Leistung erforderlich wird. Muss ein defekter Zylinder bearbeitet oder ersetzt werden, ist Material notwendig oder liegt eine abgeschlossene Mehrfachverriegelung vor, reicht der Preis für die einfache Öffnung nicht aus.",
          "Auch deshalb sollte vor jeder zusätzlichen Arbeit eine neue Preisbestätigung erfolgen. Die reine Anfahrt darf nicht stillschweigend in mehrere Positionen zerlegt werden, wenn sie im vereinbarten Preis bereits enthalten ist.",
        ],
      },
      {
        id: "telefonfragen",
        title: "Fünf Fragen für ein klares Telefongespräch",
        paragraphs: [
          "Eine gute Preisabstimmung braucht keine lange Verhandlung. Wenige konkrete Fragen reichen, um Missverständnisse zu vermeiden. Notieren Sie den genannten Betrag und die beschriebene Leistung, bevor Sie den Auftrag bestätigen.",
        ],
        bullets: [
          "Gilt der genannte Betrag für meine beschriebene Türsituation?",
          "Ist die Anfahrt innerhalb Münchens enthalten?",
          "Sind Umsatzsteuer und übliche Arbeitszeit enthalten?",
          "Welche Umstände könnten den Preis verändern?",
          "Wird ein abweichender Preis vor Beginn erneut bestätigt?",
        ],
      },
      {
        id: "rechnung",
        title: "Was auf der Rechnung nachvollziehbar sein sollte",
        paragraphs: [
          "Nach dem Einsatz sollte die Rechnung erkennen lassen, welche Leistung erbracht und welches Material gegebenenfalls eingesetzt wurde. Stimmen Betrag und Leistung nicht mit der vorherigen Absprache überein, sprechen Sie die Differenz direkt und sachlich an.",
          "Ein niedriger Lockpreis ohne klare Leistungsbeschreibung hilft im Notfall wenig. Aussagekräftiger ist ein Preis, dessen Geltungsbereich verständlich formuliert ist und der vor Arbeitsbeginn zur konkreten Tür passt.",
        ],
      },
      {
        id: "preis-und-qualitaet",
        title: "Preis und Öffnungsmethode zusammen betrachten",
        paragraphs: [
          "Der günstigste Betrag ist nicht automatisch die wirtschaftlichste Lösung, wenn dabei unnötige Schäden entstehen. Fragen Sie deshalb nicht nur nach dem Preis, sondern auch nach dem geplanten Vorgehen. Bei einer zugefallenen Tür sollte zunächst geprüft werden, ob eine schonende Öffnung technisch möglich ist.",
          "Transparenz entsteht aus dem Zusammenspiel von richtiger Einordnung, klarer Preisbestätigung und einer Rechnung, die den tatsächlichen Auftrag abbildet.",
        ],
      },
    ],
    faq: [
      { question: "Ist die Anfahrt im Preis enthalten?", answer: "Bei den veröffentlichten Festpreisen von Schlüsseldienst Turan ist die Anfahrt innerhalb des Münchner Stadtgebiets enthalten." },
      { question: "Gilt der Preis auch für eine abgeschlossene Tür?", answer: "Nein. Die Tabelle beschreibt eine zugezogene oder zugefallene Tür ohne Selbstverriegelung. Eine abgeschlossene oder defekte Tür muss separat eingeschätzt werden." },
      { question: "Wann wird der endgültige Preis bestätigt?", answer: "Für die geschilderte Situation erfolgt die Abstimmung vorab. Zeigt sich vor Ort eine andere technische Ausgangslage, wird das weitere Vorgehen vor Arbeitsbeginn erneut besprochen." },
    ],
    relatedSlugs: ["serioesen-schluesseldienst-muenchen-erkennen", "ausgesperrt-in-muenchen-was-tun", "zugefallene-oder-abgeschlossene-tuer"],
  },
  {
    slug: "zugefallene-oder-abgeschlossene-tuer",
    title: "Tür zugefallen oder abgeschlossen? Der wichtige Unterschied",
    description: "Zugefallen oder abgeschlossen: So unterscheiden sich Türsituationen, Öffnungsmethoden, Risiken und die Angaben für den Schlüsseldienst in München.",
    excerpt: "Warum ein kurzer Satz am Telefon über Methode, Aufwand und Preis entscheidet – verständlich erklärt, ohne unnötige Fachbegriffe.",
    category: "Technik",
    publishedAt: "2026-07-03",
    updatedAt: "2026-07-03",
    readingTime: "7 Min. Lesezeit",
    image: "/assets/blog/zugefallen-oder-abgeschlossen.webp",
    imageAlt: "Vergleich von Falle und Verriegelung an zwei Wohnungstüren",
    intro: [
      "Im Alltag klingt beides ähnlich: Die Tür ist zu. Für eine Türöffnung macht es jedoch einen großen Unterschied, ob sie nur ins Schloss gefallen oder mit dem Schlüssel abgeschlossen wurde. Die technische Ausgangslage beeinflusst Öffnungsmethode, Zeitaufwand, Schadensrisiko und Preis.",
      "Wer diesen Unterschied am Telefon richtig beschreibt, erhält schneller eine passende Einschätzung. Fachwissen ist dafür nicht nötig – entscheidend ist die Beobachtung, was mit der Tür zuletzt passiert ist.",
    ],
    sections: [
      {
        id: "zugefallen",
        title: "Was bedeutet „zugefallen“?",
        paragraphs: [
          "Eine zugefallene Tür wurde zugezogen oder vom Wind geschlossen, aber nicht mit dem Schlüssel verriegelt. Im Türrahmen hält in der Regel nur die Falle die Tür geschlossen. Sie ist der bewegliche Teil des Schlosses, der beim Herunterdrücken der Klinke zurückweicht.",
          "Bei einer üblichen, intakten Wohnungstür kann in dieser Situation häufig zuerst eine schonende Öffnungsmethode geprüft werden. Ob sie tatsächlich möglich ist, hängt unter anderem von Beschlag, Dichtung, Türspalt, Schutztechnik und Zustand des Schlosses ab.",
        ],
      },
      {
        id: "abgeschlossen",
        title: "Was bedeutet „abgeschlossen“?",
        paragraphs: [
          "Wurde der Schlüssel gedreht, greifen zusätzlich ein oder mehrere Riegel in den Rahmen. Bei Mehrfachverriegelungen können mehrere Sicherungspunkte gleichzeitig aktiv sein. Die Tür wird dadurch bewusst gegen Öffnen gesichert.",
          "Eine abgeschlossene Tür ist daher keine einfache zugefallene Tür. Die Arbeit kann aufwendiger werden und je nach Schloss einen Austausch von Teilen erfordern. Eine pauschale Zusage zur beschädigungsfreien Öffnung wäre ohne Prüfung nicht seriös.",
        ],
      },
      {
        id: "selbstverriegelung",
        title: "Sonderfall Selbstverriegelung",
        paragraphs: [
          "Manche Türen verriegeln automatisch, sobald sie geschlossen werden. Von außen sieht die Situation dann wie eine gewöhnlich zugefallene Tür aus, technisch sind jedoch zusätzliche Riegel aktiv. Gerade bei neueren Türen oder Haustüren ist dieser Hinweis wichtig.",
          "Wenn Sie wissen, dass Ihre Tür selbstverriegelnd ist, nennen Sie das direkt. Falls Sie unsicher sind, helfen Angaben zum Gebäudealter, zur Türart und zum üblichen Schließverhalten bei der Einordnung.",
        ],
      },
      {
        id: "telefonisch-erkennen",
        title: "So beschreiben Sie die Situation am Telefon",
        paragraphs: [
          "Die einfachste Frage lautet: Haben Sie den Schlüssel nach dem Schließen noch gedreht? Wenn nicht, ist die Tür wahrscheinlich nur zugefallen. Ergänzend ist wichtig, ob innen ein Schlüssel steckt, ob die Klinke außen beweglich ist und ob das Schloss vorher bereits geklemmt hat.",
          "Vermeiden Sie Vermutungen über konkrete Schlossmodelle, wenn Sie diese nicht sicher kennen. Eine ehrliche Beschreibung des Ablaufs ist hilfreicher als ein unzutreffender Fachbegriff.",
        ],
        bullets: [
          "Tür nur zugezogen oder Schlüssel gedreht?",
          "Schlüssel innen, verloren oder abgebrochen?",
          "Normale Wohnungstür, Haustür oder selbstverriegelnde Tür?",
          "Schloss und Tür bisher unauffällig oder bereits schwergängig?",
        ],
      },
      {
        id: "keine-selbstversuche",
        title: "Warum Selbstversuche die Lage verschlechtern können",
        paragraphs: [
          "Im Internet kursieren zahlreiche Methoden mit Karten, Draht oder Werkzeug. Ohne genaue Kenntnis der Tür können solche Versuche Dichtungen beschädigen, Teile im Türspalt verklemmen oder sichtbare Spuren am Rahmen hinterlassen. Bei abgeschlossenen Türen sind sie in der Regel ohnehin ungeeignet.",
          "Je unveränderter die Ausgangslage bleibt, desto besser lässt sich vor Ort beurteilen, welche Methode das geringste Risiko bietet. Teilen Sie bereits unternommene Versuche offen mit, damit lose oder verklemmte Teile berücksichtigt werden können.",
        ],
      },
      {
        id: "vorbeugen",
        title: "Einfach vorbeugen: Schließverhalten bewusst machen",
        paragraphs: [
          "Wer eine selbstverriegelnde Tür besitzt, sollte Ersatzschlüssel und Zugangsregelung besonders bewusst organisieren. Bei einer gewöhnlichen Wohnungstür hilft bereits eine feste Routine: Schlüssel in die Hand nehmen, bevor die Tür zugezogen wird.",
          "Klemmt die Tür regelmäßig oder muss sie zum Abschließen angehoben werden, ist das kein normales Bedienproblem. Eine frühe Prüfung kann verhindern, dass aus einer schwergängigen Tür später ein akuter Defekt wird.",
        ],
      },
    ],
    faq: [
      { question: "Ist eine zugefallene Tür immer beschädigungsfrei zu öffnen?", answer: "Nein. Häufig kann eine schonende Methode geprüft werden, aber Beschlag, Dichtung, Schutztechnik und Defekte können die Öffnung beeinflussen." },
      { question: "Woran erkenne ich eine Selbstverriegelung?", answer: "Typisch ist, dass beim Zuziehen automatisch zusätzliche Riegel aktiv werden. Wenn Sie unsicher sind, beschreiben Sie das übliche Verhalten der Tür am Telefon." },
      { question: "Warum ist eine abgeschlossene Tür teurer?", answer: "Weil nicht nur die Falle, sondern zusätzliche Riegel oder Sicherungspunkte aktiv sind. Methode, Zeit und möglicher Materialeinsatz unterscheiden sich dadurch." },
    ],
    relatedSlugs: ["kosten-tueroeffnung-muenchen", "tuerschloss-klemmt-was-tun"],
  },
  {
    slug: "schluessel-verloren-schloss-wechseln",
    title: "Schlüssel verloren: Wann sollte das Schloss gewechselt werden?",
    description: "Schlüssel verloren? So bewerten Sie das Sicherheitsrisiko, entscheiden über einen Schlosswechsel und planen die nächsten Schritte in München.",
    excerpt: "Nicht jeder verlorene Schlüssel bedeutet dasselbe Risiko. Entscheidend sind Zuordenbarkeit, Fundort, Schließanlage und die Frage, wer Zugang erhalten könnte.",
    category: "Sicherheit",
    publishedAt: "2026-06-26",
    updatedAt: "2026-06-26",
    readingTime: "8 Min. Lesezeit",
    image: "/assets/blog/schluessel-verloren.webp",
    imageAlt: "Leerer Schlüsselhaken mit neuem Schließzylinder auf einer Ablage",
    intro: [
      "Ein verlorener Wohnungsschlüssel ist zunächst ärgerlich, aber nicht automatisch ein akuter Einbruchsfall. Für die richtige Reaktion zählt, ob der Schlüssel einer konkreten Adresse zugeordnet werden kann und welche Türen er öffnet.",
      "Statt pauschal jedes Schloss sofort auszutauschen, hilft eine strukturierte Risikobewertung. Bei einem klaren Sicherheitsrisiko sollte die Absicherung allerdings nicht unnötig aufgeschoben werden.",
    ],
    sections: [
      {
        id: "risiko",
        title: "Das Risiko hängt von der Zuordenbarkeit ab",
        paragraphs: [
          "Ein einzelner, unbeschrifteter Schlüssel, der weit entfernt verloren ging, lässt sich meist schwer einer Wohnung zuordnen. Anders sieht es aus, wenn sich am Schlüsselbund ein Adressanhänger, Ausweisdokumente, Fahrzeugpapiere oder andere eindeutige Hinweise befanden.",
          "Auch der Fundort spielt eine Rolle. Wurde eine Tasche direkt vor dem Wohnhaus gestohlen oder ging der Schlüssel zusammen mit Unterlagen verloren, ist das Risiko höher als bei einem anonymen Einzelverlust ohne Ortsbezug.",
        ],
      },
      {
        id: "welche-tueren",
        title: "Welche Türen und Anlagen sind betroffen?",
        paragraphs: [
          "Viele Wohnungsschlüssel öffnen nicht nur die eigene Tür, sondern auch Hauseingang, Keller, Garage oder Gemeinschaftsräume. In einer Schließanlage kann ein einzelner Verlust deshalb mehrere Zugänge berühren. Notieren Sie, welche Türen mit dem verlorenen Schlüssel bedient werden konnten.",
          "Bei gemieteten Wohnungen und gemeinschaftlichen Schließanlagen sollte die zuständige Verwaltung oder Vermietung frühzeitig informiert werden. Sie kann einordnen, welche organisatorischen Schritte für die Anlage vorgesehen sind. Eine individuelle rechtliche oder versicherungsbezogene Bewertung ersetzt dieser Beitrag nicht.",
        ],
      },
      {
        id: "wechsel-sinnvoll",
        title: "Wann ein Zylinderwechsel sinnvoll ist",
        paragraphs: [
          "Ein zeitnaher Wechsel ist besonders naheliegend, wenn Schlüssel und Adresse gemeinsam abhandengekommen sind, ein Diebstahl vermutet wird oder eine unberechtigte Person den Schlüssel besitzen könnte. Auch nach einem unklaren Schlüsselbestand beim Einzug kann ein eigener, kontrollierter Satz Schlüssel sinnvoll sein.",
          "Häufig muss nicht das komplette Einsteckschloss ersetzt werden. Bei einem intakten Türsystem genügt je nach Aufbau der Austausch des passenden Schließzylinders. Vorher sollten Maße, Beschlag und gewünschte Schließfunktion geprüft werden.",
        ],
      },
      {
        id: "sofortmassnahmen",
        title: "Praktische Schritte unmittelbar nach dem Verlust",
        paragraphs: [
          "Rekonstruieren Sie zunächst den letzten sicheren Gebrauch des Schlüssels. Fragen Sie an den plausiblen Fundorten nach, ohne öffentlich Adresse und genaue Schlüsselmerkmale zusammen zu nennen. Bei einem möglichen Diebstahl kann zusätzlich eine Meldung bei den zuständigen Stellen sinnvoll sein.",
          "Bis zur Entscheidung über den Austausch sollten vorhandene Zusatzsicherungen konsequent genutzt werden. Lassen Sie die Wohnung nicht offen, um einen späteren Zugang zu erleichtern.",
        ],
        bullets: [
          "Letzten sicheren Besitz und mögliche Fundorte notieren",
          "Prüfen, ob Adresse oder persönliche Unterlagen gemeinsam verloren gingen",
          "Betroffene Türen und Schließanlage erfassen",
          "Verwaltung oder Vermietung bei gemeinschaftlichen Anlagen informieren",
          "Bei erkennbarem Risiko Zylinder und Schlüsselbestand prüfen lassen",
        ],
      },
      {
        id: "neuer-zylinder",
        title: "Was beim neuen Schließzylinder wichtig ist",
        paragraphs: [
          "Ein Zylinder muss zur Türstärke und zum Beschlag passen. Steht er deutlich über, kann das die Schutzwirkung des gesamten Türsystems beeinträchtigen. Ebenso wichtig ist ein kontrollierter Schlüsselbestand: Notieren Sie, wie viele Schlüssel ausgegeben werden und wer sie erhält.",
          "Zusatzfunktionen wie beidseitige Schließbarkeit trotz innen steckendem Schlüssel können im Alltag sinnvoll sein, müssen aber zur Nutzung der Wohnung passen. Die Auswahl sollte nicht allein nach dem Zylinder erfolgen, sondern zusammen mit Beschlag, Tür und Rahmen betrachtet werden.",
        ],
      },
      {
        id: "danach-organisieren",
        title: "Nach dem Wechsel: Schlüssel nachvollziehbar organisieren",
        paragraphs: [
          "Beschriften Sie Ersatzschlüssel nicht mit der vollständigen Adresse. Hinterlegen Sie sie nur bei Personen, denen Sie vertrauen, und halten Sie die Anzahl überschaubar. Bei einem weiteren Verlust lässt sich das Risiko dann schneller bewerten.",
          "Ein Schlosswechsel schafft vor allem Klarheit: Die verlorenen Schlüssel passen nicht mehr, und der neue Bestand ist bekannt. Genau diese Kontrolle ist in einer unsicheren Verlustsituation der entscheidende Nutzen.",
        ],
      },
    ],
    faq: [
      { question: "Muss nach jedem Schlüsselverlust das Schloss gewechselt werden?", answer: "Nicht zwingend. Entscheidend sind Zuordenbarkeit, Fundort, mögliche unberechtigte Besitzer und die betroffenen Türen. Bei einem konkreten Risiko ist ein Wechsel jedoch sinnvoll." },
      { question: "Reicht es, nur den Schließzylinder zu wechseln?", answer: "Bei einem intakten Türsystem häufig ja. Ob weitere Teile betroffen sind, hängt von Schloss, Beschlag, Tür und gewünschter Sicherheitsfunktion ab." },
      { question: "Was ist bei einer Schließanlage zu tun?", answer: "Informieren Sie die zuständige Verwaltung oder Vermietung, weil der Schlüssel möglicherweise Gemeinschaftstüren öffnet und anlagenspezifische Regeln gelten können." },
    ],
    relatedSlugs: ["einbruchschutz-wohnungstuer", "tuerschloss-klemmt-was-tun"],
  },
  {
    slug: "tuerschloss-klemmt-was-tun",
    title: "Türschloss klemmt: Warnzeichen erkennen und Schäden vermeiden",
    description: "Das Türschloss klemmt oder der Schlüssel dreht schwer? Erkennen Sie Ursachen, sichere erste Schritte und den richtigen Zeitpunkt für eine Prüfung.",
    excerpt: "Schwergängige Schlüssel, hakende Türen und ungewöhnliche Geräusche sind frühe Hinweise. Wer rechtzeitig reagiert, kann einen akuten Defekt vermeiden.",
    category: "Technik",
    publishedAt: "2026-06-18",
    updatedAt: "2026-06-18",
    readingTime: "8 Min. Lesezeit",
    image: "/assets/blog/tuerschloss-klemmt.webp",
    imageAlt: "Hand prüft vorsichtig einen schwergängigen Schlüssel an einer Wohnungstür",
    intro: [
      "Ein Türschloss wird selten ohne Vorwarnung völlig unbrauchbar. Häufig beginnt das Problem mit einem Schlüssel, der nur in einer bestimmten Stellung dreht, einer Tür, die angehoben werden muss, oder einem Griff, der nicht sauber zurückfedert.",
      "Diese Hinweise sollten nicht mit mehr Kraft beantwortet werden. Ein verbogener oder abgebrochener Schlüssel macht aus einer planbaren Prüfung schnell einen dringenden Einsatz.",
    ],
    sections: [
      {
        id: "warnzeichen",
        title: "Typische Warnzeichen eines beginnenden Problems",
        paragraphs: [
          "Achten Sie auf Veränderungen gegenüber dem normalen Verhalten. Dreht der Schlüssel morgens leicht, am Abend aber nur unter Druck? Schleift die Tür am Boden? Muss sie zum Abschließen herangezogen oder angehoben werden? Solche Beobachtungen helfen dabei, Schlossproblem und Türverzug voneinander zu unterscheiden.",
          "Auch ein Schlüssel, der sichtbar abgenutzt, verbogen oder eingerissen ist, verdient Aufmerksamkeit. Verwenden Sie ihn nicht weiter als einzigen Alltagsschlüssel.",
        ],
        bullets: [
          "Schlüssel lässt sich nur ruckelnd einführen oder drehen",
          "Tür muss gedrückt, gezogen oder angehoben werden",
          "Klinke kehrt nicht sauber in die Ausgangsposition zurück",
          "Ungewöhnliches Kratzen oder Knacken im Schloss",
          "Schlüssel zeigt Verbiegung, Risse oder starken Verschleiß",
        ],
      },
      {
        id: "ursachen",
        title: "Nicht jedes Klemmen kommt vom Schließzylinder",
        paragraphs: [
          "Bei wechselnden Temperaturen und hoher Nutzung können sich Tür und Rahmen leicht verändern. Lockere Bänder, ein verschobenes Schließblech oder eine abgesenkte Tür erzeugen Spannung auf Falle und Riegel. Dann fühlt sich der Schlüssel schwergängig an, obwohl der Zylinder selbst intakt ist.",
          "Umgekehrt kann ein verschlissener Zylinder auch bei geöffneter Tür haken. Ein Vergleich hilft: Lässt sich das Schloss bei offener Tür deutlich leichter bedienen, liegt die Ursache häufig im Zusammenspiel von Tür und Rahmen.",
        ],
      },
      {
        id: "sichere-schritte",
        title: "Was Sie gefahrlos prüfen können",
        paragraphs: [
          "Testen Sie einen wenig benutzten Ersatzschlüssel und beobachten Sie, ob sich das Verhalten verändert. Prüfen Sie bei geöffneter Tür vorsichtig, ob Falle und Riegel ohne seitliche Spannung arbeiten. Sichtbare lose Schrauben am Beschlag können als Hinweis notiert werden, sollten aber nicht wahllos verstellt werden.",
          "Verwenden Sie keine beliebigen Öle oder Haushaltsmittel. Manche Produkte binden Staub oder sind für den jeweiligen Zylinder ungeeignet. Wenn eine Pflege vorgesehen ist, sollte sie zur Herstellerangabe und zum vorhandenen Schlosstyp passen.",
        ],
      },
      {
        id: "stopp",
        title: "Wann Sie nicht weiterdrehen sollten",
        paragraphs: [
          "Sobald sich der Schlüssel sichtbar biegt, nur noch teilweise einführen lässt oder im Zylinder festhängt, sollten Sie den Versuch abbrechen. Gleiches gilt bei metallischem Knacken oder wenn sich der Zylinder im Beschlag bewegt.",
          "Steckt der Schlüssel bereits fest, erhöht kräftiges Ziehen oder Drehen das Risiko eines Bruchs. Beschreiben Sie stattdessen genau, in welcher Position er steckt und ob die Tür offen oder geschlossen ist.",
        ],
      },
      {
        id: "pruefung",
        title: "Was bei einer fachlichen Prüfung betrachtet wird",
        paragraphs: [
          "Eine sinnvolle Prüfung betrachtet nicht nur den Zylinder. Relevant sind Schlüsselzustand, Beschlag, Einsteckschloss, Türbänder, Schließblech, Türspalt und die Ausrichtung von Tür und Rahmen. Erst daraus ergibt sich, ob eine Einstellung, Reparatur oder ein Austausch zielführend ist.",
          "Bei planbaren Problemen bleibt Zeit für einen passenden Austausch ohne Notdienstsituation. Das ist meist angenehmer, als auf den Moment zu warten, in dem sich die Tür gar nicht mehr öffnen oder schließen lässt.",
        ],
      },
      {
        id: "vorbeugen",
        title: "Schloss und Schlüssel im Alltag entlasten",
        paragraphs: [
          "Hängen schwere Schlüsselbunde dauerhaft am eingesteckten Schlüssel, belasten sie Zylinder und Schlüssel unnötig. Nutzen Sie einen geraden, intakten Schlüssel und vermeiden Sie es, ihn als Griff zum Ziehen der Tür zu verwenden.",
          "Reagieren Sie auf Veränderungen früh. Eine Tür, die regelmäßig nur mit Druck schließt, wird nicht von selbst präziser. Die rechtzeitige Korrektur schützt Schloss, Rahmen und den Alltag vor einem vermeidbaren Ausfall.",
        ],
      },
    ],
    faq: [
      { question: "Darf ich Öl in das Türschloss geben?", answer: "Nicht jedes Öl ist für Schließzylinder geeignet. Verwenden Sie nur ein zum vorhandenen Produkt passendes Pflegemittel nach Herstellerangabe oder lassen Sie die Ursache zuerst prüfen." },
      { question: "Warum klemmt das Schloss nur bei geschlossener Tür?", answer: "Dann entsteht wahrscheinlich Spannung zwischen Tür, Rahmen, Falle oder Riegel. Der Zylinder kann intakt sein, während die Ausrichtung der Tür die Bedienung erschwert." },
      { question: "Wann sollte ein klemmendes Schloss ersetzt werden?", answer: "Wenn Zylinder oder Schlüssel verschlissen oder beschädigt sind, kann ein Austausch sinnvoll sein. Zuerst sollte jedoch ausgeschlossen werden, dass Tür oder Beschlag die eigentliche Ursache sind." },
    ],
    relatedSlugs: ["zugefallene-oder-abgeschlossene-tuer", "schluessel-verloren-schloss-wechseln"],
  },
  {
    slug: "einbruchschutz-wohnungstuer",
    title: "Einbruchschutz an der Wohnungstür: Das Zusammenspiel zählt",
    description: "Einbruchschutz für die Wohnungstür verständlich erklärt: Türblatt, Rahmen, Beschlag, Zylinder, Zusatzsicherung und sinnvolle Prioritäten.",
    excerpt: "Eine sichere Wohnungstür besteht nicht aus einem einzelnen starken Schloss. Erst Türblatt, Rahmen, Beschlag und Verhalten bilden ein stimmiges System.",
    category: "Sicherheit",
    publishedAt: "2026-06-10",
    updatedAt: "2026-06-10",
    readingTime: "9 Min. Lesezeit",
    image: "/assets/blog/einbruchschutz-wohnungstuer.webp",
    imageAlt: "Solide Wohnungstür mit Schutzbeschlag und stabiler Einfassung",
    intro: [
      "Beim Einbruchschutz richtet sich der Blick oft zuerst auf den Schließzylinder. Er ist wichtig, aber nur ein Teil der Wohnungstür. Ein hochwertiger Zylinder kann seine Aufgabe nicht vollständig erfüllen, wenn Beschlag, Rahmen oder Türblatt deutliche Schwachstellen haben.",
      "Sinnvolle Nachrüstung beginnt deshalb mit einer Bestandsaufnahme des gesamten Systems. Ziel ist kein sichtbares Aufrüsten um jeden Preis, sondern eine ausgewogene Lösung, die zur Tür und zum Alltag passt.",
    ],
    sections: [
      {
        id: "gesamtsystem",
        title: "Die Wohnungstür als Gesamtsystem betrachten",
        paragraphs: [
          "Türblatt, Zarge, Bänder, Schloss, Schließblech, Zylinder und Beschlag übertragen Kräfte gemeinsam. Ist ein Teil deutlich schwächer als die übrigen, verlagert sich der Angriffspunkt dorthin. Deshalb sollte eine Beratung nie nur ein einzelnes Produkt betrachten.",
          "Auch der Zustand zählt: Lose Beschläge, ausgerissene Schrauben, ein stark überstehender Zylinder oder eine verzogene Tür können die Schutzwirkung beeinträchtigen, selbst wenn die Einzelteile ursprünglich passend gewählt wurden.",
        ],
      },
      {
        id: "beschlag-zylinder",
        title: "Schutzbeschlag und Zylinder müssen zusammenpassen",
        paragraphs: [
          "Der äußere Beschlag schützt den Zylinder und den Bereich um das Schloss. Der Zylinder sollte passend zur Türstärke bemessen sein und außen nicht unnötig weit hervorstehen. Eine saubere, feste Montage ist dabei ebenso wichtig wie die Produktwahl.",
          "Komfortfunktionen können sinnvoll sein, dürfen aber nicht isoliert betrachtet werden. Entscheidend ist, wer die Tür nutzt, ob innen häufig ein Schlüssel steckt und wie Flucht- und Alltagssituationen organisiert sind.",
        ],
      },
      {
        id: "rahmen",
        title: "Rahmen, Schließblech und Bänder nicht vergessen",
        paragraphs: [
          "Riegel und Falle greifen in den Rahmen. Ist das Schließblech schwach befestigt oder die Zarge beschädigt, kann ein starkes Schloss diesen Bereich nicht ausgleichen. Auf der Bandseite übernehmen Bänder und mögliche Sicherungen eine ähnliche Aufgabe.",
          "Bei älteren Türen lohnt sich daher eine Prüfung der Befestigungspunkte und des Materials. Nicht jede Tür braucht dieselbe Nachrüstung; bei sehr schwacher Grundkonstruktion kann eine punktuelle Ergänzung an Grenzen stoßen.",
        ],
      },
      {
        id: "zusatzsicherungen",
        title: "Wann Zusatzsicherungen sinnvoll sein können",
        paragraphs: [
          "Zusätzliche Sicherungen können die vorhandenen Verriegelungspunkte ergänzen und zugleich eine sichtbare Bedienkontrolle bieten. Sie müssen zur Tür passen, stabil befestigt und im Alltag konsequent genutzt werden. Ein Bauteil, das aus Bequemlichkeit immer offen bleibt, verbessert die tatsächliche Sicherheit kaum.",
          "Bei Mietwohnungen sollten geplante bauliche Veränderungen vorab mit den zuständigen Personen abgestimmt werden. Mobile oder rückrüstbare Lösungen können je nach Tür eine Alternative sein, ersetzen aber keine fachliche Gesamtbewertung.",
        ],
      },
      {
        id: "alltag",
        title: "Alltagsverhalten ist ein Teil des Einbruchschutzes",
        paragraphs: [
          "Eine Wohnungstür, die beim Verlassen nur ins Schloss gezogen wird, nutzt vorhandene Riegel nicht. Verriegeln Sie die Tür entsprechend ihrer vorgesehenen Funktion und lassen Sie Schlüssel nicht sichtbar oder leicht erreichbar in Türnähe liegen.",
          "Organisieren Sie Ersatzschlüssel nachvollziehbar und vermeiden Sie Adressangaben am Schlüsselbund. Prüfen Sie außerdem, wer nach Umzug, Handwerkerterminen oder früheren Schlüsselübergaben noch Zugang haben könnte.",
        ],
        bullets: [
          "Tür beim Verlassen korrekt verriegeln",
          "Schlüsselbestand und ausgegebene Ersatzschlüssel kennen",
          "Lose Beschläge oder schwergängige Verriegelung früh prüfen",
          "Zylinder nicht unnötig über den Beschlag stehen lassen",
          "Nachrüstungen auf Tür, Rahmen und Nutzung abstimmen",
        ],
      },
      {
        id: "prioritaeten",
        title: "Mit einer Prioritätenliste statt Produktliste starten",
        paragraphs: [
          "Eine gute Bestandsaufnahme beantwortet drei Fragen: Wo liegen die schwächsten Punkte? Welche Verbesserung bringt dort den größten praktischen Nutzen? Welche Maßnahmen werden im Alltag wirklich verwendet? Daraus entsteht eine sinnvolle Reihenfolge.",
          "Manchmal genügt es, Beschlag und Zylinder passend zu erneuern. In anderen Fällen sind Rahmenbefestigung, Schließblech oder eine zusätzliche Sicherung wichtiger. Premium bedeutet hier nicht möglichst viele Bauteile, sondern eine präzise Lösung ohne offensichtliche Lücken.",
        ],
      },
    ],
    faq: [
      { question: "Reicht ein hochwertiger Schließzylinder aus?", answer: "Nein. Zylinder, Schutzbeschlag, Schloss, Türblatt, Rahmen und Befestigung müssen zusammenpassen. Die schwächste Stelle beeinflusst das Gesamtsystem." },
      { question: "Kann eine Mietwohnung nachgerüstet werden?", answer: "Viele Maßnahmen sind möglich, bauliche Veränderungen sollten jedoch vorab mit Vermietung oder Verwaltung abgestimmt werden. Welche Lösung passt, hängt von der vorhandenen Tür ab." },
      { question: "Was sollte zuerst geprüft werden?", answer: "Beginnen Sie mit sichtbaren Schwachstellen und dem Zustand von Beschlag, Zylinder, Rahmen, Schließblech und Bändern. Daraus lässt sich eine Prioritätenliste ableiten." },
    ],
    relatedSlugs: ["schluessel-verloren-schloss-wechseln", "tuerschloss-klemmt-was-tun"],
  },
];

export const blogCategories = ["Alle", "Notfall", "Kosten", "Technik", "Sicherheit"] as const;

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogSummaries(): BlogSummary[] {
  return blogPosts.map(({ slug, title, excerpt, category, publishedAt, readingTime, image, imageAlt }) => ({
    slug,
    title,
    excerpt,
    category,
    publishedAt,
    readingTime,
    image,
    imageAlt,
  }));
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(`${date}T12:00:00Z`));
}

export function getBlogWordCount(post: BlogPost) {
  const content = [
    post.title,
    post.excerpt,
    ...post.intro,
    ...post.sections.flatMap((section) => [section.title, ...section.paragraphs, ...(section.bullets ?? [])]),
    ...post.faq.flatMap((item) => [item.question, item.answer]),
  ].join(" ");

  return content.trim().split(/\s+/).length;
}
