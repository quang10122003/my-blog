"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

type ContactFormValues = {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  service: string;
  attendees: number;
  message: string;
  agree: boolean;
};

function fieldClass(hasError: boolean) {
  return [
    "w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition-shadow",
    hasError
      ? "border-rose-300 shadow-[0_0_0_3px_rgba(244,63,94,0.15)]"
      : "border-slate-200 focus:border-sky-400 focus:shadow-[0_0_0_3px_rgba(56,189,248,0.15)]",
  ].join(" ");
}

export function ContactForm() {
  const t = useTranslations("ContactForm");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    defaultValues: {
      service: "",
      attendees: 1,
      agree: false,
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setSuccessMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSuccessMessage(t("success"));
        reset();
      } else {
        console.error("API ERROR:", result);
      }
    } catch (err) {
      console.error("NETWORK ERROR:", err);
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">{t("fullName")}</label>
          <input
            type="text"
            className={fieldClass(Boolean(errors.fullName))}
            {...register("fullName", {
              required: t("errors.fullNameRequired"),
              minLength: { value: 2, message: t("errors.fullNameMin") },
            })}
          />
          {errors.fullName ? <p className="mt-1.5 text-xs text-rose-600">{errors.fullName.message}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">{t("email")}</label>
          <input
            type="email"
            className={fieldClass(Boolean(errors.email))}
            {...register("email", {
              required: t("errors.emailRequired"),
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: t("errors.emailInvalid"),
              },
            })}
          />
          {errors.email ? <p className="mt-1.5 text-xs text-rose-600">{errors.email.message}</p> : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">{t("phone")}</label>
          <input
            type="tel"
            className={fieldClass(Boolean(errors.phone))}
            {...register("phone", {
              required: t("errors.phoneRequired"),
              pattern: { value: /^[0-9+\-\s()]{8,20}$/, message: t("errors.phoneInvalid") },
            })}
          />
          {errors.phone ? <p className="mt-1.5 text-xs text-rose-600">{errors.phone.message}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">{t("date")}</label>
          <input
            type="date"
            className={fieldClass(Boolean(errors.date))}
            {...register("date", { required: t("errors.dateRequired") })}
          />
          {errors.date ? <p className="mt-1.5 text-xs text-rose-600">{errors.date.message}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">{t("attendees")}</label>
          <input
            type="number"
            min={1}
            className={fieldClass(Boolean(errors.attendees))}
            {...register("attendees", {
              required: t("errors.attendeesRequired"),
              min: { value: 1, message: t("errors.attendeesMin") },
              valueAsNumber: true,
            })}
          />
          {errors.attendees ? <p className="mt-1.5 text-xs text-rose-600">{errors.attendees.message}</p> : null}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">{t("service")}</label>
        <select
          className={fieldClass(Boolean(errors.service))}
          {...register("service", { required: t("errors.serviceRequired") })}
        >
          <option value="">{t("servicePlaceholder")}</option>
          <option value="website">{t("serviceOption1")}</option>
          <option value="landing-page">{t("serviceOption2")}</option>
          <option value="refactor">{t("serviceOption3")}</option>
          <option value="mentoring">{t("serviceOption4")}</option>
        </select>
        {errors.service ? <p className="mt-1.5 text-xs text-rose-600">{errors.service.message}</p> : null}
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">{t("message")}</label>
        <textarea
          rows={4}
          className={fieldClass(Boolean(errors.message))}
          {...register("message", {
            required: t("errors.messageRequired"),
            minLength: { value: 10, message: t("errors.messageMin") },
          })}
        />
        {errors.message ? <p className="mt-1.5 text-xs text-rose-600">{errors.message.message}</p> : null}
      </div>

      <div>
        <label className="flex items-start gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900"
            {...register("agree", { required: t("errors.agreeRequired") })}
          />
          <span>{t("agree")}</span>
        </label>
        {errors.agree ? <p className="mt-1.5 text-xs text-rose-600">{errors.agree.message}</p> : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? t("submitting") : t("submit")}
      </button>

      {successMessage ? (
        <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
          {successMessage}
        </p>
      ) : null}
    </form>
  );
}
