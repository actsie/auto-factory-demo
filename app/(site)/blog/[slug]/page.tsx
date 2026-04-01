import { getBlogPost, getBlogPosts } from "@/lib/notion";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";

export const revalidate = 3600;

export async function generateStaticParams() {
    const posts = await getBlogPosts();
    return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const result = await getBlogPost(params.slug);
    if (!result) return {};
    return {
        title: `${result.post.title} | Fountain of Scale`,
        description: result.post.description,
    };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const result = await getBlogPost(params.slug);
    if (!result) notFound();

    const { post, markdown } = result;

    return (
        <main>
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 pt-32 pb-16 border-b border-[#edf9f8]">
                <div className="max-w-3xl mx-auto">
                    <Link href="/blog" className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-purple-500 transition-colors mb-8">
                        <ArrowLeftIcon size={14} /> Back to blog
                    </Link>
                    {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {post.tags.map(tag => (
                                <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-500 font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                    <h1 className="font-urbanist font-bold text-4xl md:text-5xl text-gray-800 leading-tight">
                        {post.title}
                    </h1>
                    {post.description && (
                        <p className="text-zinc-500 text-lg/8 mt-4">{post.description}</p>
                    )}
                    {post.published && (
                        <p className="text-zinc-400 text-sm mt-4">
                            {new Date(post.published).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                        </p>
                    )}
                </div>
            </section>

            <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-16">
                <div className="max-w-3xl mx-auto prose prose-zinc prose-headings:font-urbanist prose-headings:font-semibold prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline">
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </div>
            </section>
        </main>
    );
}
