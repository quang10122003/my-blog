import { getTranslations } from "next-intl/server";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import type { HeroStat, Profile } from "@/types/site-content";

type HomeHeroSectionProps = {
  profile: Profile;
  heroStats: HeroStat[];
};

export async function HomeHeroSection({ profile, heroStats }: HomeHeroSectionProps) {
  const tContent = await getTranslations("SiteContent");

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-8 shadow-[0_30px_90px_-55px_rgba(2,132,199,0.8)] backdrop-blur sm:p-12">
      <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-orange-300/25 blur-3xl" />

      <div className="relative space-y-7">
        <p className="inline-flex rounded-full border border-sky-100 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
          {tContent(profile.roleKey)}
        </p>
        <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
          {tContent(profile.heroTitleKey)}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{tContent(profile.heroDescriptionKey)}</p>

        <div className="flex flex-wrap gap-3">
          <ButtonLink href={profile.ctaPrimaryHref} size="lg" variant="secondary">
            {tContent(profile.ctaPrimaryTextKey)}
          </ButtonLink>
          <ButtonLink href={profile.ctaSecondaryHref} size="lg" variant="secondary">
            {tContent(profile.ctaSecondaryTextKey)}
          </ButtonLink>
        </div>

        <div className="grid gap-3 pt-3 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <Card key={stat.labelKey} className="p-4">
              <p className="text-2xl font-black text-slate-900">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600">{tContent(stat.labelKey)}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

