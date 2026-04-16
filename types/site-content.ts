// File nay dinh nghia shape du lieu site duoc doc tu messages/<locale>.json.

export type NavLink = {
  href: string;
  labelKey: string;
};

export type Skill = {
  titleKey: string;
  descriptionKey: string;
};

export type HeroStat = {
  value: string;
  labelKey: string;
};

export type TechnologyIcon =
  | "nextjs"
  | "react"
  | "typescript"
  | "tailwind"
  | "redux"
  | "nodejs"
  | "java"
  | "mysql"
  | "github-actions";

export type Technology = {
  nameKey: string;
  icon: TechnologyIcon;
  categoryKey: string;
  descriptionKey: string;
};

export type Project = {
  nameKey: string;
  summaryKey: string;
  impactKey: string;
  stackKeys: string[];
  href: string;
};

export type BlogPost = {
  titleKey: string;
  excerptKey: string;
  readTimeKey: string;
  tagKeys: string[];
  href: string;
};

export type JourneyItem = {
  year: string;
  titleKey: string;
  descriptionKey: string;
};

export type Profile = {
  name: string;
  brandName: string;
  roleKey: string;
  heroTitleKey: string;
  heroDescriptionKey: string;
  aboutIntroKey: string;
  aboutParagraphKeys: string[];
  locationKey: string;
  email: string;
  ctaPrimaryTextKey: string;
  ctaPrimaryHref: string;
  ctaSecondaryTextKey: string;
  ctaSecondaryHref: string;
};

export type SiteContent = {
  // profile: thong tin tong quan ve tac gia va hero section
  profile: Profile;
  // navLinks: danh sach route + key label (du phong khi can render tu data)
  navLinks: NavLink[];
  // heroStats: thong so noi bat tren hero
  heroStats: HeroStat[];
  // skills: danh sach nang luc chinh
  skills: Skill[];
  // technologies: stack va icon map voi component icon
  technologies: Technology[];
  // projects: du an portfolio
  projects: Project[];
  // blogPosts: bai viet moi
  blogPosts: BlogPost[];
  // journey: moc thoi gian phat trien nghe nghiep
  journey: JourneyItem[];
};
