"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClasses =
  "w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof typeof values, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function validate(): Errors {
    const nextErrors: Errors = {};
    if (!values.name.trim()) nextErrors.name = t("nameRequired");
    if (!EMAIL_PATTERN.test(values.email)) nextErrors.email = t("emailRequired");
    if (!values.message.trim()) nextErrors.message = t("messageRequired");
    return nextErrors;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-border bg-surface p-8 text-sm text-foreground">
        {t("title")} ✓
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <label className="text-sm font-medium text-foreground" htmlFor="name">
          {t("nameLabel")}
        </label>
        <input
          id="name"
          className={`${inputClasses} mt-2`}
          value={values.name}
          onChange={(event) => handleChange("name", event.target.value)}
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label className="text-sm font-medium text-foreground" htmlFor="email">
          {t("emailLabel")}
        </label>
        <input
          id="email"
          type="email"
          className={`${inputClasses} mt-2`}
          value={values.email}
          onChange={(event) => handleChange("email", event.target.value)}
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label className="text-sm font-medium text-foreground" htmlFor="phone">
          {t("phoneLabel")}
        </label>
        <input
          id="phone"
          type="tel"
          className={`${inputClasses} mt-2`}
          value={values.phone}
          onChange={(event) => handleChange("phone", event.target.value)}
        />
      </div>

      <div>
        <label className="text-sm font-medium text-foreground" htmlFor="message">
          {t("messageLabel")}
        </label>
        <textarea
          id="message"
          rows={5}
          className={`${inputClasses} mt-2`}
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message}</p>
        )}
      </div>

      <Button type="submit" variant="primary" className="self-start">
        {t("submit")}
      </Button>
    </form>
  );
}
