import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { siteContentSectionKeys } from "@/lib/site-content-i18n";
import type { Skill } from "@/types/site-content";

type HomeSkillsSectionProps = {
  skills: Skill[];
};

export async function HomeSkillsSection({ skills }: HomeSkillsSectionProps) {
  const tContent = await getTranslations("SiteContent");

  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow={tContent(siteContentSectionKeys.home.skills.eyebrow)}
        title={tContent(siteContentSectionKeys.home.skills.title)}
        description={tContent(siteContentSectionKeys.home.skills.description)}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {skills.map((skill) => (
          <Card key={skill.titleKey} title={tContent(skill.titleKey)} description={tContent(skill.descriptionKey)} />
        ))}
      </div>
    </section>
  );
}

