import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import type { BlogPost } from "@/types/site-content";
import { ButtonLink } from "@/components/ui/button-link";

type BlogListSectionProps = {
  posts: BlogPost[];
};

export async function BlogListSection({ posts }: BlogListSectionProps) {
  const tContent = await getTranslations("SiteContent");

  return (
    <>
      <SectionTitle
        eyebrow={tContent("sections.blog.list.eyebrow")}
        title={tContent("sections.blog.list.title")}
        description={tContent("sections.blog.list.description")}
      />

      <div className="grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <Card key={post.titleKey} title={tContent(post.titleKey)} description={tContent(post.excerptKey)}>
            <div className="flex flex-wrap gap-2">
              {post.tagKeys.map((tagKey) => (
                <span key={tagKey} className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                  {tContent(tagKey)}
                </span>
              ))}
            </div>
            <div className="mt-4 text-sm font-semibold text-slate-500">{tContent(post.readTimeKey)}</div>
            <ButtonLink href={post.href} variant="ghost" size="sm" className="mt-3">
              {tContent("actions.readMore")}
            </ButtonLink>
          </Card>
        ))}
      </div>
    </>
  );
}

