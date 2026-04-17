import { AppLocale } from "@/i18n/routing"
import { BlogPost, SiteContent } from "@/types/site-content"
import { ComponentType } from "react"

export type BlogPostWithSlug = BlogPost & {slug:string}

// thêm 1 component làm thuộc tính
export type BlogPostDetail = BlogPostWithSlug & { content: ComponentType}

// lấy tên bài viết từ url 
function getslugFroUrl(url:string) :string{
    return url.split("/").filter((item)=>{
        return Boolean(item)
    }).at(-1) ?? ""
}

// lấy siteData trong file json tưng ứng với ngôn ngữ 
async function getSiteDataByLocale(locale:AppLocale):Promise<SiteContent>{
    // lấy nội dung  file json theo locale
    const messages = (await import(`../messages/${locale}.json`)).default
    return messages.SiteData as SiteContent
}

// lấy thông tin blog theo locale
export async function getBlogPostsByLocale(locale: AppLocale): Promise<BlogPostWithSlug[]>{
    const siteData = await getSiteDataByLocale(locale);
    
    return siteData.blogPosts.map((post)=>{
        return {
            ...post, slug: getslugFroUrl(post.href)
        }
    })
}

// tim kiếm post dự trên slug và gắn data ở mdx
export async function getBlogPostBySlug(locale: AppLocale,slug:string): Promise<BlogPostDetail|null> {
    const posts = await getBlogPostsByLocale(locale)
    
    const post = posts.find((item)=>item.slug === slug)

    if(!post){
        console.log("ko tìm thấy post phù hợp")
        return null
    }
    try{
        const mdxMoude = await import(`@/content/blog/${locale}/${slug}.mdx`)
        const MdxContent = mdxMoude.default as ComponentType | undefined

        if (!MdxContent) {
            return null
        }

        return{
            ...post,content:MdxContent
        }
    }catch(err){
        console.log(err)
        return null
    }
}




