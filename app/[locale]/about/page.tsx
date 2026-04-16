import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutJourneySection } from "@/components/pages/about/about-journey-section";
import { AboutProfileSection } from "@/components/pages/about/about-profile-section";
import { AboutTechnologiesSection } from "@/components/pages/about/about-technologies-section";
import type { JourneyItem, Profile, Technology } from "@/types/site-content";

export const metadata: Metadata = {
  title: "Gioi thieu | Quang Dev Blog",
  description: "Thong tin ca nhan va hanh trinh phat trien nghe lap trinh cua mình."
};

export default async function AboutPage() {
  const tData = await getTranslations("SiteData");
  const profile = tData.raw("profile") as Profile;
  const journey = tData.raw("journey") as JourneyItem[];
  const technologies = tData.raw("technologies") as Technology[];

  return (
    <div className="space-y-12">
      <AboutProfileSection profile={profile} />
      <AboutTechnologiesSection technologies={technologies} />
      <AboutJourneySection journey={journey} />
    </div>
  );
}

