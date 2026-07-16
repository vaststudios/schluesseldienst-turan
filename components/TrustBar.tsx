import { Check, MapPin, ReceiptText } from "lucide-react";

const facts = [
  { icon: ReceiptText, title: "Preis vor Arbeitsbeginn", text: "Türöffnung werktags ab 89 € inklusive Anfahrt" },
  { icon: MapPin, title: "Direkt in München", text: "Anfahrt im gesamten Stadtgebiet" },
  { icon: Check, title: "Klare Einschätzung", text: "Möglichkeiten und Risiken vor Ort erklärt" },
];

export default function TrustBar() {
  return (
    <section aria-label="Wichtige Informationen" className="border-y border-border bg-muted/35">
      <div className="mx-auto grid max-w-7xl divide-y divide-border px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
        {facts.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex min-h-24 items-start gap-4 py-5 md:px-6 md:first:pl-0 md:last:pr-0">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold text-foreground">{title}</h2>
              <p className="text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
