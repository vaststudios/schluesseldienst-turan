export const siteConfig = {
  name: "Schlüsseldienst Turan",
  legalName: "Schlüsseldienst Turan",
  url: "https://schluesseldienst-turan.de",
  locale: "de-DE",
  language: "de",
  telephone: "+4915565906604",
  telephoneDisplay: "0155 659 066 04",
  email: "info@schluesseldienst-turan.de",
  address: {
    street: "Bavariastraße 14d",
    postalCode: "80336",
    locality: "München",
    region: "Bayern",
    country: "DE",
  },
  areaServed: "München",
  logo: "/assets/logo.svg",
  image: "/assets/service-image.jpg",
  lastUpdated: "2026-07-16T12:00:00+02:00",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function articleDate(date: string) {
  return `${date}T12:00:00+02:00`;
}
