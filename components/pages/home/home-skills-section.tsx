import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import type { Skill } from "@/types/site-content";

type HomeSkillsSectionProps = {
  skills: Skill[];
};

export async function HomeSkillsSection({ skills }: HomeSkillsSectionProps) {
  const tContent = await getTranslations("SiteContent");

  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow={tContent("sections.home.skills.eyebrow")}
        title={tContent("sections.home.skills.title")}
        description={tContent("sections.home.skills.description")}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {skills.map((skill) => (
          <Card key={skill.titleKey} title={tContent(skill.titleKey)} description={tContent(skill.descriptionKey)} />
        ))}
      </div>
    </section>
  );
}

