import { getTranslations } from "next-intl/server";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { siteContentSectionKeys } from "@/lib/site-content-i18n";
import type { Project } from "@/types/site-content";

type ProjectsListSectionProps = {
  projects: Project[];
};

export async function ProjectsListSection({ projects }: ProjectsListSectionProps) {
  const tContent = await getTranslations("SiteContent");

  return (
    <>
      <SectionTitle
        eyebrow={tContent(siteContentSectionKeys.projects.list.eyebrow)}
        title={tContent(siteContentSectionKeys.projects.list.title)}
        description={tContent(siteContentSectionKeys.projects.list.description)}
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.nameKey} title={tContent(project.nameKey)} description={tContent(project.summaryKey)}>
            <p className="text-sm font-semibold text-sky-700">{tContent(project.impactKey)}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stackKeys.map((stackKey) => (
                <span key={stackKey} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                  {tContent(stackKey)}
                </span>
              ))}
            </div>

            <div className="mt-5">
              <ButtonLink href={project.href} variant="secondary" size="sm">
                Xem chi tiet
              </ButtonLink>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

