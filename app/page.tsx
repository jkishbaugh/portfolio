// src/app/page.js
"use client";
import { motion } from "framer-motion";
// import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/JK_Dark.png";
// import logoLight from "@/app/assets/JK.png";
import profilePic from "@/app/assets/cartoon.png";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Home() {
  // const [hovered, setHovered] = useState(false);

  return (
    <main className="min-h-screen bg-background dark:bg-dark-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background bg-opacity-80 dark:bg-dark-background dark:bg-opacity-80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            <Image
                src={logo}
                alt="JK Logo"
                width={150}
                height={150}
                className="h-10 w-auto"
                priority
              />
          </Link>
          <div className="flex space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
              About
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
              Projects
            </Link>
            <Link href="/experience" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
              Experience
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                  Hi, I&apos;m <span className="text-accent dark:text-dark-accent">Justin</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
                  Software Engineer
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                  I build modern web applications with a focus on user experience,
                  performance, and clean code. Welcome to my digital portfolio.
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/projects" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                      View My Work <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                      Get In Touch
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="lg:w-2/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4"
                style={{
                  borderColor: 'var(--accent-color)',
                  borderWidth: '4px'
                }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(to bottom right, var(--accent-color), var(--dark-accent-color))'
                  }}
                >
                  <Image
                    src={profilePic}
                    alt="cartoon profile picture"
                    width={800}
                    height={800}
                    className="w-[130%] h-[130%] object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-background dark:bg-dark-background rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 dark:text-blue-400">T</span>
                </span>
                Technical Skills
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
                  { name: "Backend", items: ["Node.js", "Express", "GraphQL", "REST APIs"] },
                  { name: "Languages", items: ["JavaScript", "TypeScript", "Python", "SQL"] },
                  { name: "Tools", items: ["Git", "Docker", "Webpack", "Jest"] },
                  { name: "Design", items: ["Figma", "Responsive Design", "UI/UX Principles"] },
                  { name: "Data", items: ["MongoDB", "PostgreSQL", "Data Visualization"] }
                ].map((category) => (
                  <div key={category.name} className="mb-6">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">{category.name}</h4>
                    <ul className="space-y-1">
                      {category.items.map(item => (
                        <li key={item} className="text-gray-600 dark:text-gray-400 text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills & Approach */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 dark:text-blue-400">S</span>
                </span>
                Professional Approach
              </h3>

              <div className="space-y-6">
                {[
                  {
                    title: "Problem Solving",
                    description: "I approach complex problems methodically, breaking them down into manageable components while keeping sight of the big picture."
                  },
                  {
                    title: "Communication",
                    description: "Clear communication is key to successful projects. I value translating technical concepts into understandable terms for all stakeholders."
                  },
                  {
                    title: "Collaboration",
                    description: "I thrive in collaborative environments, leveraging diverse perspectives to create robust and innovative solutions."
                  },
                  {
                    title: "Continuous Learning",
                    description: "The tech landscape evolves rapidly. I maintain a growth mindset, actively seeking opportunities to expand my knowledge."
                  }
                ].map((skill) => (
                  <div key={skill.title} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-1 bg-blue-500 h-full rounded"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">{skill.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                Some of my recent work that showcases my skills and experience
              </p>
            </div>
            <Link
              href="/projects"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
            >
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Project One", desc: "A responsive web application with React and Node.js" },
              { title: "Project Two", desc: "E-commerce platform with Next.js and Stripe integration" },
              { title: "Project Three", desc: "Real-time dashboard with data visualization" }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.desc}</p>
                  <div className="flex space-x-2 mb-4">
                    {["React", "Node.js"].map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.title.toLowerCase().replace(' ', '-')}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center text-sm font-medium"
                  >
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-secondary dark:bg-dark-secondary">
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
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
            >
              All posts <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Getting Started with Next.js", date: "March 25, 2025", min: 5 },
              { title: "Mastering Tailwind CSS for Rapid Development", date: "March 18, 2025", min: 7 }
            ].map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition"
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date} · {post.min} min read
                </span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link
                  href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center text-sm font-medium"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
            <p className="max-w-xl mx-auto mb-8">
              I&apos;m currently available for freelance work and open to new opportunities.
              If you have a project that needs some attention, let&apos;s discuss it!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-gray-100 transition"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} YourName. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <FileText className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}