import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { TechnologyIcon } from "@/components/ui/tech-icon";
import { siteContentSectionKeys } from "@/lib/site-content-i18n";
import type { Technology } from "@/types/site-content";

type HomeTechnologiesSectionProps = {
  technologies: Technology[];
};

export async function HomeTechnologiesSection({ technologies }: HomeTechnologiesSectionProps) {
  const tContent = await getTranslations("SiteContent");

  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow={tContent(siteContentSectionKeys.home.technologies.eyebrow)}
        title={tContent(siteContentSectionKeys.home.technologies.title)}
        description={tContent(siteContentSectionKeys.home.technologies.description)}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech) => (
          <Card key={tech.nameKey} className="p-5">
            <div className="flex items-start gap-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-800">
                <TechnologyIcon name={tech.icon} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sky-700">{tContent(tech.categoryKey)}</p>
                <h3 className="mt-1 text-base font-bold text-slate-900">{tContent(tech.nameKey)}</h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">{tContent(tech.descriptionKey)}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

