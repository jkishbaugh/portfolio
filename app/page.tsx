import { getBlogPostSummaries } from "@/lib/posts";
import BlogPostsSection from "./components/BlogPostsSection";
import SkillsSection from "./components/SkillsSection";
import HeroSection from "./components/HeroSection";
import ContactCTA from "./components/ContactCTA";

export default function Home() {
  const blogPosts = getBlogPostSummaries();
  return (
    <main className="min-h-screen bg-surface dark:bg-surface-dark">
      <HeroSection />
      <SkillsSection />
      <BlogPostsSection blogPosts={blogPosts} />
      <ContactCTA />
    </main>
  );
}
