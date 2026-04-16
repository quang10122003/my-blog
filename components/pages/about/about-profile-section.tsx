import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { siteContentSectionKeys } from "@/lib/site-content-i18n";
import type { Profile } from "@/types/site-content";

type AboutProfileSectionProps = {
  profile: Profile;
};

export async function AboutProfileSection({ profile }: AboutProfileSectionProps) {
  const tContent = await getTranslations("SiteContent");

  return (
    <>
      <SectionTitle
        eyebrow={tContent(siteContentSectionKeys.about.intro.eyebrow)}
        title={tContent(siteContentSectionKeys.about.intro.title)}
        description={tContent(siteContentSectionKeys.about.intro.description)}
      />

      <Card className="p-8">
        <div className="space-y-5 text-base leading-8 text-slate-700">
          <p>{tContent(profile.aboutIntroKey)}</p>
          {profile.aboutParagraphKeys.map((paragraphKey) => (
            <p key={paragraphKey}>{tContent(paragraphKey)}</p>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">Location</p>
            <p className="mt-2 text-sm font-medium text-slate-700">{tContent(profile.locationKey)}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">Contact</p>
            <p className="mt-2 text-sm font-medium text-slate-700">{profile.email}</p>
          </div>
        </div>
      </Card>
    </>
  );
}

