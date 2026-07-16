import { NextResponse } from "next/server";

type ContactPayload = { name: string; email: string; message: string };

function isValidString(value: unknown, maxLength: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.trim().length <= maxLength;
}

function isValidEmail(value: string): boolean {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const formId = process.env.FORMSPARK_FORM_ID;
  if (!formId) {
    return NextResponse.json({ ok: false, error: "Nachricht konnte nicht gesendet werden." }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ungültige Anfrage." }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Partial<ContactPayload>;
  if (!isValidString(name, 100) || !isValidString(email, 254) || !isValidString(message, 2000) || !isValidEmail(email.trim())) {
    return NextResponse.json({ ok: false, error: "Bitte prüfen Sie Ihre Eingaben." }, { status: 400 });
  }

  try {
    const response = await fetch(`https://submit-form.com/${encodeURIComponent(formId)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim(), source: "website" }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, error: "Nachricht konnte nicht gesendet werden." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Nachricht konnte nicht gesendet werden." }, { status: 502 });
  }
}
