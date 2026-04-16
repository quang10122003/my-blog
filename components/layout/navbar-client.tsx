"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import type { NavLink } from "@/types/site-content";

type NavbarClientProps = {
  brandName: string;
};

const supportedLocales: AppLocale[] = ["vi", "en"];

export function NavbarClient({ brandName }: NavbarClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Navbar");
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();
  const [brandMain, brandHighlight] = brandName.split(".");

  const navLinks = useMemo<NavLink[]>(
    () => [
      { href: "/", labelKey: t("home") },
      { href: "/about", labelKey: t("about") },
      { href: "/projects", labelKey: t("projects") },
      { href: "/blog", labelKey: t("blog") },
      { href: "/contact", labelKey: t("contact") }
    ],
    [t]
  );

  function switchLocale(nextLocale: AppLocale) {
    router.replace(pathname, { locale: nextLocale });
    setIsMenuOpen(false);
  }

  function isActive(href: string) {
    return pathname === href;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl"
          onClick={() => setIsMenuOpen(false)}
        >
          {brandMain}
          {brandHighlight ? <span className="text-sky-600">.{brandHighlight}</span> : null}
        </Link>

        {/* Khu vực điều hướng desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              <button
                type="button"
                className={[
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200",
                  isActive(item.href)
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-transparent bg-white/70 text-slate-700 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700",
                ].join(" ")}
              >
                {item.labelKey}
              </button>
            </Link>
          ))}
        </nav>

        {/* Nhóm thao tác desktop: đổi ngôn ngữ + CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <div className="inline-flex rounded-full border border-slate-200 bg-white p-1">
            {supportedLocales.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => switchLocale(item)}
                className={[
                  "rounded-full px-3 py-1 text-xs font-semibold uppercase transition-colors cursor-pointer",
                  locale === item ? "bg-slate-900 text-white" : "text-slate-600 hover:text-sky-700"
                ].join(" ")}
                aria-label={`${t("switchLocale")}: ${item}`}
              >
                {item}
              </button>
            ))}
          </div>
          <Link
            href="/projects"
            className="inline-flex h-10 items-center justify-center rounded-full  px-5 text-sm font-semibold text-white shadow-xl shadow-slate-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-600"
          >
            {t("cta")}
          </Link>
        </div>

        {/* Nút mở/đóng menu mobile */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:border-sky-200 hover:text-sky-700 md:hidden"
          aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen ? (
        /* Khu vực menu mobile */
        <div id="mobile-menu" className="border-t border-slate-200/70 bg-white/95 px-4 pb-4 pt-3 md:hidden sm:px-6">
          {/* Danh sách liên kết mobile */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                <button
                  type="button"
                  className={[
                    "w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-sky-50 hover:text-sky-700",
                  ].join(" ")}
                >
                  {item.labelKey}
                </button>
              </Link>
            ))}
          </nav>

          {/* Đổi ngôn ngữ trên mobile */}
          <div className="mt-3 inline-flex rounded-full border border-slate-200 bg-white p-1">
            {supportedLocales.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => switchLocale(item)}
                className={[
                  "rounded-full px-3 py-1 text-xs font-semibold uppercase transition-colors",
                  locale === item ? "bg-slate-900 text-white" : "text-slate-600 hover:text-sky-700"
                ].join(" ")}
                aria-label={`${t("switchLocale")}: ${item}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Nút CTA trên mobile */}
          <div className="mt-3">
            <Link
              href="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex h-10 w-full items-center justify-center rounded-full bg-slate-900 px-4 text-sm font-semibold text-white shadow-xl shadow-slate-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-600"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
