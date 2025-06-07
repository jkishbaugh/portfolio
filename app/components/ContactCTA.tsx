"use client";

import { motion } from "framer-motion";
import { Link } from "lucide-react";

export default function ContactCTA() {
  return (
   <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-gradient-to-r from-accent to-hover-accent dark:from-dark-accent dark:to-dark-hover-accent rounded-xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="max-w-xl mx-auto mb-8">
              I&apos;m currently available for freelance work and open to new
              opportunities. If you have a project that needs some attention,
              let&apos;s discuss it!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="px-8 py-3 bg-background text-accent dark:bg-dark-background dark:text-dark-accent rounded-lg font-medium hover:bg-secondary dark:hover:bg-dark-secondary transition"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
}