import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import type { JourneyItem } from "@/types/site-content";

type AboutJourneySectionProps = {
  journey: JourneyItem[];
};

export async function AboutJourneySection({ journey }: AboutJourneySectionProps) {
  const tContent = await getTranslations("SiteContent");

  return (
    <section className="space-y-6">
      <SectionTitle title={tContent("sections.about.journey.title")} />
      <div className="grid gap-4">
        {journey.map((item) => (
          <Card key={item.year} className="p-5 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{tContent(item.titleKey)}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{tContent(item.descriptionKey)}</p>
              </div>
              <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
                {item.year}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

