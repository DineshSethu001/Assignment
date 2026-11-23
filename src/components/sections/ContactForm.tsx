"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { validateContact, type ContactErrors, type ContactForm as FormData } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

const initial: FormData = { name: "", email: "", message: "" };

const inputBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 transition focus:outline-none focus:ring-4 dark:bg-zinc-950 dark:text-zinc-100";
const inputOk =
  "border-zinc-300 focus:border-violet-500 focus:ring-violet-500/20 dark:border-zinc-700";
const inputErr = "border-red-500 focus:border-red-500 focus:ring-red-500/20";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // Clear a field's error as soon as the user starts fixing it.
    if (errors[name as keyof FormData]) {
      setErrors((err) => ({ ...err, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validateContact(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data.errors) setErrors(data.errors);
        throw new Error("Request failed");
      }
      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-white p-10 text-center dark:border-emerald-900 dark:bg-zinc-900"
      >
        <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold">Message sent!</h3>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Thanks for reaching out — we&apos;ll reply within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-violet-600 hover:underline dark:text-violet-400"
        >
          Send another message
        </button>
      </div>
    );
  }

  const field = (name: keyof FormData) => ({
    id: `contact-${name}`,
    name,
    value: form[name],
    onChange: handleChange,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
    className: `${inputBase} ${errors[name] ? inputErr : inputOk}`,
  });

  const errorText = (name: keyof FormData) =>
    errors[name] && (
      <p id={`contact-${name}-error`} className="mt-1.5 text-sm text-red-600 dark:text-red-400">
        {errors[name]}
      </p>
    );

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input type="text" autoComplete="name" placeholder="Jane Doe" {...field("name")} />
          {errorText("name")}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input type="email" autoComplete="email" placeholder="jane@company.com" {...field("email")} />
          {errorText("email")}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea rows={5} placeholder="Tell us about your project, goals and timeline…" {...field("message")} />
        {errorText("message")}
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950/50 dark:text-red-300">
          Something went wrong. Please check the form and try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 py-4 font-semibold text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        {status === "submitting" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
