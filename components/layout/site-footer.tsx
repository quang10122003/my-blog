import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Profile } from "@/types/site-content";

export async function SiteFooter() {
  const t = await getTranslations("Navbar");
  const tFooter = await getTranslations("Footer");
  const tData = await getTranslations("SiteData");
  const profile = tData.raw("profile") as Profile;

  return (
    <footer className="border-t border-white/70 bg-white/55 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          � {new Date().getFullYear()} {profile.brandName}. {tFooter("builtWith")}
        </p>
        <div className="flex items-center gap-4">
          <Link href="/about" className="transition-colors hover:text-sky-700">
            {t("about")}
          </Link>
          <Link href="/projects" className="transition-colors hover:text-sky-700">
            {t("projects")}
          </Link>
          <Link href="/blog" className="transition-colors hover:text-sky-700">
            {t("blog")}
          </Link>
          <Link href="/contact" className="transition-colors hover:text-sky-700">
            {t("contact")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
