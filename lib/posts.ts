
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.title,
        date: data.date,
        summary: data.summary,
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

// New function to get blog post summaries
export function getBlogPostSummaries() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Estimate reading time (assuming ~200 words per minute)
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      summary: data.summary,
      readingTime,
    };
  });
}