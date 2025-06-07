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

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  // Ensure params is awaited
  const { slug } = await params;

  const filePath = path.join("posts", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-white">
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
      <p className="text-sm text-gray-400 mb-6">{data.date}</p>
      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}
