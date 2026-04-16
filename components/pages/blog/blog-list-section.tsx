import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { siteContentSectionKeys } from "@/lib/site-content-i18n";
import type { BlogPost } from "@/types/site-content";

type BlogListSectionProps = {
  posts: BlogPost[];
};

export async function BlogListSection({ posts }: BlogListSectionProps) {
  const tContent = await getTranslations("SiteContent");

  return (
    <>
      <SectionTitle
        eyebrow={tContent(siteContentSectionKeys.blog.list.eyebrow)}
        title={tContent(siteContentSectionKeys.blog.list.title)}
        description={tContent(siteContentSectionKeys.blog.list.description)}
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
          </Card>
        ))}
      </div>
    </>
  );
}

