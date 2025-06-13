import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
  const files = fs.readdirSync("posts");
  return files.map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BlogPost({ params, searchParams }: PageProps) {
  const { slug } = await params;
  await searchParams; // Ensure searchParams is awaited even if not used

  const filePath = path.join("posts", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-text-base bg-bg-surface dark:bg-bg-surface-dark dark:text-text-base-dark">
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
      <p className="text-sm text-text-muted dark:text-text-muted-dark mb-6">{data.date}</p>
      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}
