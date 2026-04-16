import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HomeFeaturedProjectsSection } from "@/components/pages/home/home-featured-projects-section";
import { HomeHeroSection } from "@/components/pages/home/home-hero-section";
import { HomeLatestPostsSection } from "@/components/pages/home/home-latest-posts-section";
import { HomeSkillsSection } from "@/components/pages/home/home-skills-section";
import { HomeTechnologiesSection } from "@/components/pages/home/home-technologies-section";
import type { BlogPost, HeroStat, Profile, Project, Skill, Technology } from "@/types/site-content";

export const metadata: Metadata = {
  title: "Trang chu | Quang Blog",
  description: "Landing page blog du an ca nhan lap trinh"
};

export default async function HomePage() {
  const tData = await getTranslations("SiteData");
  const profile = tData.raw("profile") as Profile;
  const heroStats = tData.raw("heroStats") as HeroStat[];
  const skills = tData.raw("skills") as Skill[];
  const technologies = tData.raw("technologies") as Technology[];
  const projects = tData.raw("projects") as Project[];
  const blogPosts = tData.raw("blogPosts") as BlogPost[];

  return (
    <div className="space-y-20">
      <HomeHeroSection profile={profile} heroStats={heroStats} />
      <HomeSkillsSection skills={skills} />
      <HomeTechnologiesSection technologies={technologies} />
      <HomeFeaturedProjectsSection projects={projects.slice(0, 3)} />
      <HomeLatestPostsSection posts={blogPosts.slice(0, 2)} />
    </div>
  );
}

