"use server";

import { CONTACT_INTEREST_OPTIONS } from "@/lib/site";

export type ContactFormState = {
  success: boolean;
  error?: string;
  fieldErrors?: Partial<
    Record<"name" | "company" | "email" | "interest" | "message", string>
  >;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_INTEREST = new Set(
  CONTACT_INTEREST_OPTIONS.map((o) => o.value),
);

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const company = formData.get("company")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const interest = formData.get("interest")?.toString() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (!name) fieldErrors.name = "required";
  if (!company) fieldErrors.company = "required";
  if (!email || !EMAIL_RE.test(email)) fieldErrors.email = "invalid";
  if (!interest || !VALID_INTEREST.has(interest as never)) {
    fieldErrors.interest = "required";
  }
  if (!message) fieldErrors.message = "required";

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, fieldErrors };
  }

  const payload = { name, company, email, phone, interest, message };

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  if (endpoint) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        return { success: false, error: "submit_failed" };
      }
    } catch {
      return { success: false, error: "submit_failed" };
    }
  } else if (process.env.NODE_ENV === "development") {
    console.info("[contact] Form submission (no CONTACT_FORM_ENDPOINT):", payload);
  }

  return { success: true };
}
