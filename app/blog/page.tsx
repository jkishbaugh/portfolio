import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main className="min-h-screen bg-surface dark:bg-surface-dark items-center flex flex-col justify-start mt-24 mb-0">
      <h1 className="text-4xl font-bold mb-8 text-text-base dark:text-text-base-dark">Blog</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="bg-bg-subtle dark:bg-bg-subtle-dark p-6 rounded">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold text-primary dark:text-primary-dark hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-text-base dark:text-text-base-dark text-sm">{post.date}</p>
            <p className="text-text-muted dark:text-text-muted-dark">{post.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
