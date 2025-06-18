"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  slug: string;
  date: string;
  readingTime: number;
  title: string;
  summary: string;
}

export default function BlogPostsSection({ blogPosts }: { blogPosts: BlogPost[] }) {
  return (
    <section className="py-16 bg-subtle dark:bg-surface-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Latest from the Blog</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              Sharing my thoughts, learnings, and experiences in software development
            </p>
          </div>
          <Link
            href="/blog"
            className="text-text-link dark:text-text-base-dark hover:underline flex items-center"
          >
            All posts <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-background dark:bg-surface-dark p-6 rounded-lg shadow-md transition"
            >
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {post.date} · {post.readingTime} min read
              </span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2 mb-3">
                {post.title}
              </h3>
              <p className="text-text-base dark:text-text-base-dark mb-4">{post.summary}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-text-link dark:text-text-link-dark hover:underline flex items-center text-sm font-medium"
              >
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}