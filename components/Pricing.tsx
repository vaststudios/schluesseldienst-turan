import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const priceGroups = [
  {
    day: "Montag bis Freitag",
    rows: [
      ["08:00 bis 18:00 Uhr", "89 €"],
      ["18:00 bis 22:00 Uhr", "99 €"],
      ["22:00 bis 08:00 Uhr", "119 €"],
    ],
  },
  {
    day: "Samstag",
    rows: [
      ["08:00 bis 22:00 Uhr", "109 €"],
      ["22:00 bis 08:00 Uhr", "129 €"],
    ],
  },
  {
    day: "Sonntag und Feiertag",
    rows: [["00:00 bis 24:00 Uhr", "149 €"]],
  },
];

export default function Pricing() {
  return (
    <section id="preise" className="scroll-mt-24 bg-muted/35 py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-8">
        <div className="flex max-w-xl flex-col items-start gap-5 lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
            Preise, die vorher feststehen.
          </h2>
          <p className="text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Diese Festpreise gelten für zugezogene oder zugefallene Türen ohne Selbstverriegelung in München. Die Anfahrt ist enthalten.
          </p>
          <Button asChild size="lg" className="h-12 rounded-md px-5">
            <a href="tel:+4915565906604">
              <Phone data-icon="inline-start" aria-hidden="true" />
              Jetzt anrufen
            </a>
          </Button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <Table className="table-fixed">
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="h-12 w-2/3 px-5 text-xs uppercase tracking-[0.08em] text-muted-foreground sm:px-7">
                  Zeitfenster
                </TableHead>
                <TableHead className="h-12 px-5 text-right text-xs uppercase tracking-[0.08em] text-muted-foreground sm:px-7">
                  Festpreis
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {priceGroups.map((group) => (
                <PriceGroup key={group.day} day={group.day} rows={group.rows} />
              ))}
            </TableBody>
          </Table>
          <div className="border-t border-border px-5 py-5 sm:px-7">
            <p className="max-w-[72ch] text-pretty text-sm leading-6 text-muted-foreground">
              Bei Selbstverriegelung, defekten Schlössern oder anderen Arbeiten nennen wir Ihnen nach Beschreibung der Situation einen verbindlichen Preis vor Beginn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceGroup({ day, rows }: { day: string; rows: string[][] }) {
  return (
    <>
      <TableRow className="border-b-0 bg-primary/[0.045] hover:bg-primary/[0.045]">
        <TableCell colSpan={2} className="px-5 py-4 text-sm font-semibold text-foreground sm:px-7">
          {day}
        </TableCell>
      </TableRow>
      {rows.map(([time, price]) => (
        <TableRow key={`${day}-${time}`} className="hover:bg-transparent">
          <TableCell className="px-5 py-4 text-sm text-muted-foreground sm:px-7 sm:text-base">
            {time}
          </TableCell>
          <TableCell className="px-5 py-4 text-right text-base font-semibold tabular-nums text-primary sm:px-7 sm:text-lg">
            {price}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
