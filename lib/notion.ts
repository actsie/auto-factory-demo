import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export const notion = new Client({ auth: process.env.NOTION_SECRET });
export const n2m = new NotionToMarkdown({ notionClient: notion });

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    description: string;
    published: string;
    tags: string[];
    status: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
    const db = process.env.NOTION_BLOG_DB!;
    const response = await notion.dataSources.query({
        data_source_id: db,
        filter: { property: "Status", select: { equals: "Published" } },
        sorts: [{ property: "Published", direction: "descending" }],
    });

    return response.results.map((page: any) => {
        const props = page.properties;
        return {
            id: page.id,
            title: props.Title?.title?.[0]?.plain_text ?? "Untitled",
            slug: props.Slug?.rich_text?.[0]?.plain_text ?? page.id,
            description: props.Description?.rich_text?.[0]?.plain_text ?? "",
            published: props.Published?.date?.start ?? "",
            tags: props.Tags?.multi_select?.map((t: any) => t.name) ?? [],
            status: props.Status?.select?.name ?? "Draft",
        };
    });
}

export async function getBlogPost(slug: string): Promise<{ post: BlogPost; markdown: string } | null> {
    const db = process.env.NOTION_BLOG_DB!;
    const response = await notion.dataSources.query({
        data_source_id: db,
        filter: { property: "Slug", rich_text: { equals: slug } },
    });

    if (!response.results.length) return null;

    const page = response.results[0] as any;
    const props = page.properties;
    const post: BlogPost = {
        id: page.id,
        title: props.Title?.title?.[0]?.plain_text ?? "Untitled",
        slug: props.Slug?.rich_text?.[0]?.plain_text ?? page.id,
        description: props.Description?.rich_text?.[0]?.plain_text ?? "",
        published: props.Published?.date?.start ?? "",
        tags: props.Tags?.multi_select?.map((t: any) => t.name) ?? [],
        status: props.Status?.select?.name ?? "Draft",
    };

    const mdBlocks = await n2m.pageToMarkdown(page.id);
    const markdown = n2m.toMarkdownString(mdBlocks).parent;

    return { post, markdown };
}
