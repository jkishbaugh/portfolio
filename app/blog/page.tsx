import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8 text-white">Blog</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold text-blue-400 hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-400 text-sm">{post.date}</p>
            <p className="text-gray-300">{post.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
