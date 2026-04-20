"use client";

import { FormEvent, useMemo, useState } from "react";

import { useToast } from "@/components/toast-provider";

type ContactFormDictionary = {
  fields: {
    name: string;
    email: string;
    message: string;
    submit: string;
    submitting: string;
  };
  validation: {
    required: string;
    invalidEmail: string;
    shortMessage: string;
  };
  status: {
    successTitle: string;
    successMessage: string;
    errorTitle: string;
    errorMessage: string;
  };
  toast: {
    success: string;
    error: string;
  };
};

type ContactFormProps = {
  dictionary: ContactFormDictionary;
};

type FormState = {
  name: string;
  email: string;
  message: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm({ dictionary }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const { pushToast } = useToast();

  const isSubmitting = submitState === "loading";

  const statusCard = useMemo(() => {
    if (submitState === "success") {
      return (
        <div className="rounded-xl border border-emerald-500/50 bg-emerald-500/15 p-4">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-200">
            {dictionary.status.successTitle}
          </p>
          <p className="mt-2 text-sm text-emerald-100/90">
            {dictionary.status.successMessage}
          </p>
        </div>
      );
    }

    if (submitState === "error") {
      return (
        <div className="rounded-xl border border-red-500/50 bg-red-500/15 p-4">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-red-200">
            {dictionary.status.errorTitle}
          </p>
          <p className="mt-2 text-sm text-red-100/90">
            {errorMessage || dictionary.status.errorMessage}
          </p>
        </div>
      );
    }

    return null;
  }, [dictionary.status, errorMessage, submitState]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setSubmitState("error");
      setErrorMessage(dictionary.validation.required);
      pushToast(dictionary.toast.error, "error");
      return;
    }

    if (!isValidEmail(form.email)) {
      setSubmitState("error");
      setErrorMessage(dictionary.validation.invalidEmail);
      pushToast(dictionary.toast.error, "error");
      return;
    }

    if (form.message.trim().length < 15) {
      setSubmitState("error");
      setErrorMessage(dictionary.validation.shortMessage);
      pushToast(dictionary.toast.error, "error");
      return;
    }

    setSubmitState("loading");
    setErrorMessage("");

    await new Promise((resolve) => {
      window.setTimeout(resolve, 900);
    });

    setSubmitState("success");
    setForm(initialFormState);
    pushToast(dictionary.toast.success, "success");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-orange-500/30 bg-zinc-900/80 p-5 shadow-xl"
    >
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-300">
          {dictionary.fields.name}
        </label>
        <input
          type="text"
          value={form.name}
          disabled={isSubmitting}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, name: event.target.value }))
          }
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 outline-none transition focus:border-orange-400"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-300">
          {dictionary.fields.email}
        </label>
        <input
          type="email"
          value={form.email}
          disabled={isSubmitting}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, email: event.target.value }))
          }
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 outline-none transition focus:border-orange-400"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-300">
          {dictionary.fields.message}
        </label>
        <textarea
          rows={5}
          value={form.message}
          disabled={isSubmitting}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, message: event.target.value }))
          }
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 outline-none transition focus:border-orange-400"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center rounded-full border border-orange-300/80 bg-orange-500/20 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-orange-100 transition hover:bg-orange-400/35 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? dictionary.fields.submitting : dictionary.fields.submit}
      </button>

      {isSubmitting ? (
        <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-sm text-zinc-300">
          {dictionary.fields.submitting}
        </div>
      ) : null}

      {statusCard}
    </form>
  );
}
