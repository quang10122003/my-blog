import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { TechnologyIcon } from "@/components/ui/tech-icon";
import type { Technology } from "@/types/site-content";

type AboutTechnologiesSectionProps = {
  technologies: Technology[];
};

export async function AboutTechnologiesSection({ technologies }: AboutTechnologiesSectionProps) {
  const tContent = await getTranslations("SiteContent");

  return (
    <section className="space-y-6">
      <SectionTitle
        title={tContent("sections.about.technologies.title")}
        description={tContent("sections.about.technologies.description")}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.slice(0, 6).map((tech) => (
          <Card key={tech.nameKey} className="p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-800">
                <TechnologyIcon name={tech.icon} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">{tContent(tech.nameKey)}</h3>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{tContent(tech.categoryKey)}</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-600">{tContent(tech.descriptionKey)}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

