import { getTranslations } from "next-intl/server";
import { NavbarClient } from "@/components/layout/navbar-client";
import type { Profile } from "@/types/site-content";

export async function Navbar() {
  const tData = await getTranslations("SiteData");
  const profile = tData.raw("profile") as Profile;

  return <NavbarClient brandName={profile.brandName} />;
}
