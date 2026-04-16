import { getTranslations } from "next-intl/server";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import type { BlogPost } from "@/types/site-content";

type HomeLatestPostsSectionProps = {
  posts: BlogPost[];
};

export async function HomeLatestPostsSection({ posts }: HomeLatestPostsSectionProps) {
  const tContent = await getTranslations("SiteContent");

  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow={tContent("sections.home.latestPosts.eyebrow")}
        title={tContent("sections.home.latestPosts.title")}
        description={tContent("sections.home.latestPosts.description")}
      />
      <div className="grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <Card
            key={post.titleKey}
            title={tContent(post.titleKey)}
            description={tContent(post.excerptKey)}
            className="transition-all duration-300 hover:-translate-y-1 hover:border-sky-100 hover:shadow-[0_28px_80px_-40px_rgba(2,132,199,0.45)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">{tContent(post.readTimeKey)}</span>
              <ButtonLink href={post.href} variant="ghost" size="sm">
                {tContent("actions.readMore")}
              </ButtonLink>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

