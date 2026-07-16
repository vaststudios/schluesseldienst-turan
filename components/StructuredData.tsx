import { absoluteUrl, siteConfig } from "@/lib/site";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Locksmith",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        image: absoluteUrl(siteConfig.image),
        logo: absoluteUrl(siteConfig.logo),
        url: siteConfig.url,
        telephone: siteConfig.telephone,
        email: siteConfig.email,
        description: "Schlüsseldienst in München mit telefonischer Erreichbarkeit rund um die Uhr, transparenten Preisen und möglichst schonender Türöffnung.",
        priceRange: "€€",
        currenciesAccepted: "EUR",
        knowsLanguage: "de",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.locality,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        areaServed: { "@type": "City", name: siteConfig.areaServed },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.telephone,
          contactType: "customer service",
          areaServed: "DE-BY",
          availableLanguage: ["de"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: siteConfig.locale,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${siteConfig.url}/#tueroeffnung`,
        name: "Türöffnung in München",
        serviceType: "Türöffnung",
        description: "Öffnung zugezogener oder zugefallener Türen mit einer möglichst schonenden Methode und Preisbestätigung vor Arbeitsbeginn.",
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: { "@type": "City", name: siteConfig.areaServed },
      },
      {
        "@type": "Service",
        "@id": `${siteConfig.url}/#schlosswechsel`,
        name: "Schlosswechsel und Sicherheitsnachrüstung",
        serviceType: "Schlosswechsel",
        description: "Austausch defekter Schließzylinder und Beratung zu passenden Sicherheitsnachrüstungen.",
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: { "@type": "City", name: siteConfig.areaServed },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />;
}
