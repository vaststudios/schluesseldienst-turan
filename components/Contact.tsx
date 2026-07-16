"use client";

import { FormEvent, useRef, useState } from "react";
import { CheckCircle2, Mail, Phone, Send, TriangleAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;
type SubmitStatus = "idle" | "submitting" | "success" | "error";

const initialFormData: FormData = { name: "", email: "", message: "" };

function validate(formData: FormData): FormErrors {
  const nextErrors: FormErrors = {};

  if (!formData.name.trim()) nextErrors.name = "Bitte geben Sie Ihren Namen ein.";
  if (!formData.email.trim()) {
    nextErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    nextErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  }
  if (!formData.message.trim()) nextErrors.message = "Bitte beschreiben Sie kurz Ihr Anliegen.";

  return nextErrors;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function updateField(field: keyof FormData, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "idle") setStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);

    const firstInvalidField = (Object.keys(nextErrors) as Array<keyof FormData>)[0];
    if (firstInvalidField) {
      ({ name: nameRef, email: emailRef, message: messageRef }[firstInvalidField].current)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: AbortSignal.timeout(15_000),
      });
      const result = (await response.json().catch(() => null)) as { ok?: boolean } | null;

      if (!response.ok || !result?.ok) {
        setStatus("error");
        return;
      }

      setFormData(initialFormData);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="scroll-mt-24 border-t border-border bg-background py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div className="flex max-w-xl flex-col items-start gap-5">
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
            Für planbare Anliegen.
          </h2>
          <p className="text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Das Formular eignet sich für Schlosswechsel, Nachrüstung und Rückfragen. Bei einer akuten Aussperrung rufen Sie bitte direkt an.
          </p>
          <div className="mt-2 flex w-full max-w-md flex-col gap-3">
            <Button asChild size="lg" variant="call" className="h-14 w-full justify-between gap-4 rounded-xl py-2 pl-5 pr-2 text-base">
              <a href="tel:+4915565906604">
                <span className="flex flex-col items-start gap-0.5 leading-none">
                  <span className="text-xs font-medium text-primary-foreground/65">Direkt anrufen</span>
                  <span className="font-semibold">0155 659 066 04</span>
                </span>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground text-primary shadow-sm transition-transform duration-300 group-hover/button:rotate-6">
                  <Phone data-icon="inline-end" aria-hidden="true" />
                </span>
              </a>
            </Button>

            <Button asChild size="lg" variant="outline" className="h-14 w-full justify-between gap-3 rounded-xl py-2 pl-5 pr-2 text-sm shadow-sm">
              <a href="mailto:info@schluesseldienst-turan.de">
                <span className="min-w-0 truncate font-semibold">info@schluesseldienst-turan.de</span>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-primary transition-transform duration-300 group-hover/button:-translate-y-0.5">
                  <Mail data-icon="inline-end" aria-hidden="true" />
                </span>
              </a>
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-card p-5 sm:p-8">
          <FieldGroup>
            <Field data-invalid={Boolean(errors.name)}>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                ref={nameRef}
                id="name"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                value={formData.name}
                onChange={(event) => updateField("name", event.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                placeholder="Ihr Vor- und Nachname"
                className="h-11"
              />
              <FieldError id="name-error">{errors.name}</FieldError>
            </Field>

            <Field data-invalid={Boolean(errors.email)}>
              <FieldLabel htmlFor="email">E-Mail-Adresse</FieldLabel>
              <Input
                ref={emailRef}
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                maxLength={254}
                value={formData.email}
                onChange={(event) => updateField("email", event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="name@beispiel.de"
                className="h-11"
              />
              <FieldError id="email-error">{errors.email}</FieldError>
            </Field>

            <Field data-invalid={Boolean(errors.message)}>
              <FieldLabel htmlFor="message">Anliegen</FieldLabel>
              <Textarea
                ref={messageRef}
                id="message"
                name="message"
                required
                maxLength={2000}
                rows={5}
                value={formData.message}
                onChange={(event) => updateField("message", event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : "message-description"}
                placeholder="Worum geht es und in welchem Münchner Stadtteil?"
                className="min-h-32 resize-y"
              />
              <FieldDescription id="message-description">Bitte keine sensiblen Zugangsdaten senden.</FieldDescription>
              <FieldError id="message-error">{errors.message}</FieldError>
            </Field>

            {status === "success" && (
              <Alert className="border-primary/20 bg-primary/5" aria-live="polite">
                <CheckCircle2 aria-hidden="true" />
                <AlertTitle>Nachricht gesendet</AlertTitle>
                <AlertDescription>Vielen Dank. Wir melden uns so bald wie möglich.</AlertDescription>
              </Alert>
            )}
            {status === "error" && (
              <Alert variant="destructive" aria-live="assertive">
                <TriangleAlert aria-hidden="true" />
                <AlertTitle>Nachricht nicht gesendet</AlertTitle>
                <AlertDescription>Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.</AlertDescription>
              </Alert>
            )}

            <Button type="submit" size="lg" disabled={status === "submitting"} className="h-12 w-full rounded-md text-base sm:w-fit sm:px-6">
              {status === "submitting" ? <Spinner aria-hidden="true" /> : <Send data-icon="inline-start" aria-hidden="true" />}
              {status === "submitting" ? "Wird gesendet …" : "Anfrage senden"}
            </Button>
          </FieldGroup>
        </form>
      </div>
    </section>
  );
}
