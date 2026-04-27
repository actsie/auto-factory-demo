import { getBlogPosts } from "@/lib/notion";
import type { MetadataRoute } from "next";

const BASE_URL = "https://fountainofscale.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoutes: MetadataRoute.Sitemap = [
        { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
        { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: `${BASE_URL}/real-estate`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/restaurant`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/hvac`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/contractors`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/review-reply`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/sdr`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ];

const posts = await getBlogPosts().catch(() => []);
    const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: post.published ? new Date(post.published) : new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticRoutes, ...blogRoutes];
}
