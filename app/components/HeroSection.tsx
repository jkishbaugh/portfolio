"use client";

import { motion } from "framer-motion";
import profilePic from "../assets/cartoon.png";
import Image from "next/image";
import { ArrowRight} from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return ( <section className="pt-32 pb-20 px-6 bg-surface dark:bg-surface-dark">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold text-base dark:text-white mb-4">
                Hi, I&apos;m{" "}
                <span className="text-primary dark:primary-dark">
                  Justin
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted dark:text-text-muted-dark mb-6">
                Software Engineer
              </h2>
              <p className="text-lg text-base dark:text-text-base-dark mb-8 max-w-lg">
                I&apos;m a curious human who accidentally turned problem solving
                into a career. I believe in building things—and people—with
                care, clarity, and just enough pragmatism to actually get things
                done. I&apos;m not afraid to dive into the deep end of a tough
                problem, and I adapt fast—whether it&apos;s a new tech stack or a
                toddler&apos;s shifting nap schedule. I learn obsessively, mentor
                generously, and treat collaboration like a team sport (soccer
                preferred, but I don&apos;t make the rules). When I&apos;m not wrangling
                code, I&apos;m probably chasing a puzzle, a soccer ball, or one of my
                kids.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://github.com/jkishbaugh"
                  className="inline-flex items-center px-6 py-3 bg-primary dark:bg-primary-dark dark:hover:bg-primary-hover-dark text-text-base dark:text-text-base-dark rounded-lg font-medium hover:bg-primary-hover dark:hover:bg-primary-hover-dark transition hover:scale-105 active:scale-95"
                >
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-primary/10 text-muted dark:bg-surface-dark dark:text-gray-200 rounded-lg font-medium hover:bg-subtle dark:hover:bg-surface-dark transition hover:scale-105 active:scale-95"
                  >
                    Get In Touch
                  </Link>
              </div>
          </div>

          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full p-[3px] bg-gradient-to-br from-accent to-primary-hover dark:from-primary-dark dark:to-dark-primary-hover">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={profilePic}
                  alt="cartoon profile picture"
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    );
}