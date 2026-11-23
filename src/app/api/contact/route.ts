import { NextResponse } from "next/server";
import { validateContact, type ContactForm } from "@/lib/validation";

export async function POST(request: Request) {
  let body: Partial<ContactForm>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const data: ContactForm = {
    name: String(body.name ?? ""),
    email: String(body.email ?? ""),
    message: String(body.message ?? ""),
  };

  const errors = validateContact(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // In production this would send an email or store the lead (e.g. Resend, a CRM).
  console.log("New contact enquiry:", { name: data.name, email: data.email });

  return NextResponse.json({ ok: true });
}
