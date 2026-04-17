import { AppLocale, routing } from "@/i18n/routing";
import { getBlogPostBySlug, getBlogPostsByLocale } from "@/lib/site-content-i18n";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

type BlogDetailPageProps={
    params: Promise<{locale:string,slug:string}>
}

// check xem locale có hợp lệ
function checkLocale(locale:string):AppLocale | null{
    return routing.locales.includes(locale as AppLocale) ? (locale as AppLocale) : null
}


// lấy ra các param slug + locale tương ứng
export async function generateStaticParams(){
    const all = await Promise.all(
        routing.locales.map( async(locale)=>{
            const post = await getBlogPostsByLocale(locale)
            return post.map((post)=>({
                locale, slug:post.slug
            }))
        })
    )
    return all.flat();
}

// truy cập url ngoài danh sách generateStaticParams trả 404 
export const dynamicParams = false

export default async function PageSlug({params}:BlogDetailPageProps) {

    const {locale: localeParam, slug} = await params;
    const locale = checkLocale(localeParam);

    if(!locale) notFound();
    
    const post = await getBlogPostBySlug(locale,slug)

    if (!post) notFound();

    const t = await getTranslations("SiteContent")
    
    const Content = post.content

    return (
        <article className="mx-auto w-full max-w-3xl space-y-8">
            <header className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    {t(post.titleKey)}
                </h1>
                <p className="text-sm font-semibold text-slate-500">{t(post.readTimeKey)}</p>
                <div className="flex flex-wrap gap-2">
                    {post.tagKeys.map((tagKey) => (
                        <span key={tagKey} className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                            {t(tagKey)}
                        </span>
                    ))}
                </div>
            </header>

            <div className="space-y-5 leading-8 text-slate-700 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_ul]:list-disc [&_ul]:pl-6">
                <Content />
            </div>
        </article>
    );
}