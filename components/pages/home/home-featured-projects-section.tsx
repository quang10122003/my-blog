import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import type { Project } from "@/types/site-content";

type HomeFeaturedProjectsSectionProps = {
  projects: Project[];
};

export async function HomeFeaturedProjectsSection({ projects }: HomeFeaturedProjectsSectionProps) {
  const tContent = await getTranslations("SiteContent");

  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow={tContent("sections.home.featuredProjects.eyebrow")}
        title={tContent("sections.home.featuredProjects.title")}
        description={tContent("sections.home.featuredProjects.description")}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.nameKey}
            title={tContent(project.nameKey)}
            description={tContent(project.summaryKey)}
            className="transition-all duration-300 hover:-translate-y-1 hover:border-sky-100 hover:shadow-[0_28px_80px_-40px_rgba(2,132,199,0.45)]"
          >
            <p className="text-sm font-semibold text-sky-700">{tContent(project.impactKey)}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stackKeys.map((stackKey) => (
                <span key={stackKey} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {tContent(stackKey)}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

