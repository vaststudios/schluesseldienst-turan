import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    question: "Was kostet eine einfache Türöffnung?",
    answer: "Werktags zwischen 08:00 und 18:00 Uhr kostet die Öffnung einer zugezogenen oder zugefallenen Tür ohne Selbstverriegelung 89 € inklusive Anfahrt in München. Andere Zeitfenster finden Sie in der Preistabelle.",
  },
  {
    question: "Wie schnell können Sie vor Ort sein?",
    answer: "Die Ankunft hängt von Verkehr, Wetter und laufenden Einsätzen ab. Am Telefon nennen wir Ihnen eine realistische Einschätzung. Eine bestimmte Ankunftszeit können wir nicht garantieren.",
  },
  {
    question: "Bleibt die Tür bei der Öffnung unbeschädigt?",
    answer: "Wir beginnen mit der möglichst schonenden Methode. Bei Selbstverriegelung, defekten Schlössern oder besonderen Beschlägen kann eine beschädigungsfreie Öffnung nicht immer möglich sein. Darüber informieren wir Sie vor Beginn.",
  },
  {
    question: "In welchen Stadtteilen sind Sie unterwegs?",
    answer: "Wir fahren Einsätze im gesamten Münchner Stadtgebiet. Nennen Sie uns am Telefon einfach Ihre Adresse, damit wir die Anfahrt einschätzen können.",
  },
  {
    question: "Wann sollte ich das Kontaktformular nutzen?",
    answer: "Das Formular ist für nicht dringende Anfragen zu Schlosswechseln, Schutzbeschlägen oder geplanten Arbeiten gedacht. Wenn Sie ausgesperrt sind, rufen Sie bitte direkt an.",
  },
];

export default function FAQ() {
  return (
    <section id="fragen" className="scroll-mt-24 bg-muted/35 py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
            Häufige Fragen, klare Antworten.
          </h2>
          <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Das Wichtigste zu Kosten, Anfahrt und Öffnungsmethode.
          </p>
        </div>
        <Accordion type="single" collapsible className="border-t border-border">
          {questions.map((item) => (
            <AccordionItem key={item.question} value={item.question} className="border-b border-border">
              <AccordionTrigger className="min-h-16 rounded-none py-4 text-base font-semibold hover:no-underline sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-[66ch] pb-5 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
