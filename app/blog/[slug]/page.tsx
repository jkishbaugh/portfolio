import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";


const postsDirectory = path.join(process.cwd(), "posts"); 

export async function generateStaticParams() {
  const files = fs.readdirSync(postsDirectory);
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

  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="max-w-3xl mx-auto px-4 py-20  bg-bg-surface dark:bg-bg-surface-dark ">
      <h1 className="text-4xl text-text-base dark:text-text-base-dark font-bold mb-2">{data.title}</h1>
      <p className="text-sm text-text-muted dark:text-text-muted-dark mb-6">{data.date}</p>
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}
