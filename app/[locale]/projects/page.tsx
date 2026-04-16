import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ProjectsListSection } from "@/components/pages/projects/projects-list-section";
import type { Project } from "@/types/site-content";

export const metadata: Metadata = {
  title: "Du an | Quang Dev Blog",
  description: "Danh sach du an tieu bieu"
};

export default async function ProjectsPage() {
  const tData = await getTranslations("SiteData");
  const projects = tData.raw("projects") as Project[];

  return (
    <div className="space-y-10">
      <ProjectsListSection projects={projects} />
    </div>
  );
}

