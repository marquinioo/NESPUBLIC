"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { submitContact, type ContactFormState } from "@/actions/contact";
import { CONTACT_INTEREST_OPTIONS } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";

const initialState: ContactFormState = { success: false };

type ContactFormProps = {
  interestLabels: Record<string, string>;
};

export function ContactForm({ interestLabels }: ContactFormProps) {
  const t = useTranslations("contact.form");
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.success) {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-accent-green/30 bg-accent-green/10 p-8 text-center">
        <p className="text-lg font-semibold text-accent-green">{t("success")}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {state.error && (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {t("error")}
        </p>
      )}

      <FormField
        label={t("name")}
        name="name"
        required
        error={state.fieldErrors?.name ? " " : undefined}
      />
      <FormField
        label={t("company")}
        name="company"
        required
        error={state.fieldErrors?.company ? " " : undefined}
      />
      <FormField
        label={t("email")}
        name="email"
        type="email"
        required
        error={state.fieldErrors?.email ? " " : undefined}
      />
      <FormField label={t("phone")} name="phone" type="tel" />
      <FormField
        label={t("interest")}
        name="interest"
        as="select"
        required
        error={state.fieldErrors?.interest ? " " : undefined}
      >
        <option value="" disabled>
          —
        </option>
        {CONTACT_INTEREST_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.menuKey
              ? interestLabels[opt.menuKey]
              : t("interestOther")}
          </option>
        ))}
      </FormField>
      <FormField
        label={t("message")}
        name="message"
        as="textarea"
        required
        error={state.fieldErrors?.message ? " " : undefined}
      />

      <Button
        type="submit"
        variant="primary"
        disabled={pending}
        className="w-full md:w-auto"
      >
        {pending ? "…" : t("submit")}
      </Button>
    </form>
  );
}
