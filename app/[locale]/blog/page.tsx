import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { BlogListSection } from "@/components/pages/blog/blog-list-section";
import type { BlogPost } from "@/types/site-content";

export const metadata: Metadata = {
  title: "Blog | Quang Dev Blog",
  description: "Danh sach bai viet chia se kinh nghiem lap trinh va phat trien nghe nghiep."
};

export default async function BlogPage() {
  const tData = await getTranslations("SiteData");
  const blogPosts = tData.raw("blogPosts") as BlogPost[];

  return (
    <div className="space-y-10">
      <BlogListSection posts={blogPosts} />
    </div>
  );
}

