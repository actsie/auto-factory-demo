import { getBlogPosts } from "@/lib/notion";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
    title: "Blog — Automation for Small Businesses | Fountain of Scale",
    description: "Practical guides on automating follow-ups, lead capture, review replies, and more for small business owners.",
    alternates: { canonical: "https://fountainofscale.com/blog" },
    openGraph: { url: "https://fountainofscale.com/blog" },
};

export default async function BlogPage() {
    const posts = await getBlogPosts().catch(() => []);

    return (
        <main className="min-h-screen">
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 pt-32 pb-16 border-b border-[#edf9f8]">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8] px-8 md:px-16">
                    <p className="text-purple-500 text-xs font-semibold uppercase tracking-widest mb-3">Blog</p>
                    <h1 className="font-urbanist font-bold text-4xl md:text-5xl text-gray-800 max-w-xl">
                        Insights on automation for small businesses
                    </h1>
                </div>
            </section>

            <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-16">
                <div className="max-w-7xl mx-auto border-x border-[#edf9f8] px-8 md:px-16">
                    {posts.length === 0 ? (
                        <p className="text-zinc-400 text-sm">No posts yet — check back soon.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map(post => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.slug}`}
                                    className="group flex flex-col gap-3 border border-[#edf9f8] rounded-xl p-6 bg-[#f7fcfb] hover:border-purple-200 hover:bg-white transition-all"
                                >
                                    {post.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-500 font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <h2 className="font-urbanist font-semibold text-gray-800 text-lg leading-snug">
                                        {post.title}
                                    </h2>
                                    {post.description && (
                                        <p className="text-zinc-500 text-sm/6 line-clamp-3">{post.description}</p>
                                    )}
                                    <div className="flex items-center justify-between mt-auto pt-2">
                                        {post.published && (
                                            <span className="text-zinc-400 text-xs">
                                                {new Date(post.published).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                            </span>
                                        )}
                                        <span className="flex items-center gap-1 text-sm text-purple-500 font-medium ml-auto">
                                            Read <ArrowUpRightIcon size={13} />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
