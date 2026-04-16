import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact | Quang Dev Blog",
  description: "Contact booking form for project consultation.",
};

export default async function ContactPage() {
  const t = await getTranslations("ContactPage");

  return (
    <div className="space-y-10">
      <SectionTitle eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <Card className="p-6 sm:p-8">
          <ContactForm />
        </Card>

        <Card className="p-6 sm:p-8">
          <h3 className="text-xl font-bold tracking-tight text-slate-900">{t("asideTitle")}</h3>
          <ul className="mt-5 space-y-5 text-sm leading-7 text-slate-600">
            <li>
              <p className="font-semibold text-slate-900">{t("asideItem1Title")}</p>
              <p>{t("asideItem1Desc")}</p>
            </li>
            <li>
              <p className="font-semibold text-slate-900">{t("asideItem2Title")}</p>
              <p>{t("asideItem2Desc")}</p>
            </li>
            <li>
              <p className="font-semibold text-slate-900">{t("asideItem3Title")}</p>
              <p>{t("asideItem3Desc")}</p>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
