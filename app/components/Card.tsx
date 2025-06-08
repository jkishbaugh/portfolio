import nutshell from "@/app/assets/nutshell.png";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaJava } from "react-icons/fa";
import { SiSpring, SiSpringboot } from "react-icons/si";

export default function Card() {
  const [flipped, setFlipped] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setFlipped((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="relative
    w-1/5 h-[36rem]
    transition-all duration-300 ease-in-out
    mx-auto
    flex flex-col items-center justify-center hover:scale-105"
      onClick={() => setFlipped(!flipped)}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      aria-label="About me card. Press Enter or Space to flip."
    >
      <AnimatePresence mode="wait">
        {flipped ? (
          <motion.div
            key="back"
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 180, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full h-full rounded-3xl border-[6px] border-tertiary dark:border-dark-tertiary shadow-xl bg-gradient-to-br from-[#6366F1] to-[#4F46E5] dark:from-[#14B8A6] dark:to-[#06B6D4] p-6 backface-hidden z-10"
            // rounded-2xl shadow-xl dark:shadow-[0_0_20px_4px_#14B8A6] hover:ring-4 hover:ring-accent dark:hover:ring-dark-hover-accent focus:outline-none focus:ring-4 focus:ring-hover-accent dark:focus:ring-dark-hover-accent"
          >
            {/* <h3
              className="text-center text-lg font-bold mb-4 text-accent dark:text-accent-dark"
              id="more-about-me"
            >
              More About Me
            </h3>
            <div className="text-sm text-gray-800 dark:text-gray-200 mb-4">
              <p>
                I&apos;m passionate about designing intuitive UIs and building
                performant web apps.
              </p>
              <p className="mt-2">
                I enjoy mentoring developers, learning in public, and building
                side projects.
              </p>
            </div>
            <h4 className="text-sm font-semibold text-primary dark:text-dark-primary mb-1">
              Hobbies:
            </h4>
            <ul className="list-disc ml-5 text-sm text-primary dark:text-dark-primary">
              <li>Sketching characters</li>
              <li>Baseball stats nerd</li>
              <li>Collecting enamel pins</li>
            </ul> */}

            <div className="text-sm space-y-4">
              <div>
                <h3 className="text-lg font-bold mb-1">More About Me</h3>
                <p>
                  Father of four, husband, and code wrangler who believes in
                  curiosity, compassion, and keeping pull requests under 400 lines.
                  Still holding out hope that life has a dark mode. <Link href="/blog/about-me" className="text-tertiary dark:text-tertiary-dark hover:underline">Read more</Link>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Fun Fact</h3>
                <p>
                  Once explained dependency injection using a peanut butter and jelly sandwich. It worked.
                  Now my kids think &quot;Spring&quot; is a snack.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Hidden Trait</h3>
                <p>
                  Intelligently lazy: I&apos;ll automate it before I repeat it,
                  even if it takes three hours to save thirty seconds.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-4">
              {/* <a
                href="/projects"
                className="text-secondary dark:text-dark-secondary hover:underline text-sm"
                aria-label="View my projects"
              >
                Projects
              </a> */}
            <a
                href="/resume"
                className="text-secondary dark:text-dark-secondary hover:underline text-sm"
                aria-label="View my resume"
              >
                Resume
              </a>
              <a
                href="/contact"
                className="text-secondary dark:text-dark-secondary hover:underline text-sm"
                aria-label="Contact me"
              >
                Contact
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="front"
            initial={{ rotateY: -180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -180, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute w-full h-full rounded-3xl border-[6px] border-tertiary dark:border-dark-tertiary shadow-xl bg-gradient-to-br from-[#6366F1] to-[#4F46E5] dark:from-[#14B8A6] dark:to-[#06B6D4] p-6 backface-hidden"
            aria-labelledby="about-me-title"
          >

            <div className="relative w-full h-36 rounded-xl overflow-hidden border-x-[8px] border-white/30 dark:border-white/20 shadow-lg bg-slate-500 dark:bg-slate-300">
            <p className="absolute top-0 w-full bg-dark-secondary dark:bg-white/20 dark:text-dark-background text-dark-primary py-1 rounded-md shadow-md text-right text-xs">
              Full Stack Developer
            </p>
              <div className="w-24 h-24 mx-auto mt-5 rounded-full overflow-hidden border-4 border-tertiary dark:border-dark-tertiary bg-green-300">
                <Image
                  src={nutshell}
                  alt="Cartoon of Man in a nutshell"
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="absolute bottom-0 w-full bg-dark-secondary dark:bg-white/20 dark:text-dark-background text-dark-primary text-xs rounded-md shadow-md">
                Since 2017
              </span>
              {/* Emblem */}
              <div className="absolute top-0 left-0 flex flex-col items-center ">
                <div className="bg-dark-secondary text-primary dark:bg-white/10 dark:text-dark-background text-xs font-bold px-2 py-1 rounded-t-md shadow-md">
                  Stage 3
                </div>
                <div className="bg-dark-secondary dark:bg-white/10 dark:text-dark-background p-2 rounded-full shadow-md">
                  <SiSpring className="text-2xl" />
                </div>
              </div>
            </div>
             <div className="mt-4 space-y-1 text-sm leading-relaxed">
              <h2 className="text-xl font-extrabold">Justin Kishbaugh</h2>
              <p className="text-sm italic">Software Engineer / Human Debugger</p>
              <p className="font-medium mt-2">&quot;Build simply, lead thoughtfully, learn out loud&quot;</p>
              <div className="mt-2">
                <h3 className="font-bold">Specialties</h3>
                <ul className="grid grid-cols-3 gap-2 text-center text-xs">
                  <li className="bg-background text-primary dark:bg-dark-secondary dark:text-primary-dark px-2 py-1 rounded">Java</li>
                  <li className="bg-background text-primary dark:bg-dark-secondary dark:text-primary-dark px-2 py-1 rounded">Kotlin</li>
                  <li className="bg-background text-primary dark:bg-dark-secondary dark:text-primary-dark px-2 py-1 rounded">Spring Boot</li>
                  <li className="bg-background text-primary dark:bg-dark-secondary dark:text-primary-dark px-2 py-1 rounded">React</li>
                  <li className="bg-background text-primary dark:bg-dark-secondary dark:text-primary-dark px-2 py-1 rounded">Developer Experience</li>
                  <li className="bg-background text-primary dark:bg-dark-secondary dark:text-primary-dark px-2 py-1 rounded">Mentorship</li>
                </ul>
              </div>
              <div className="mt-2">
                <h3 className="font-bold">Talents</h3>
                <ul className="text-sm">
                  <li className="bg-accent/10 text-primary dark:text-primary-dark px-2 py-1 rounded">Turning chaos into usable tools</li>
                  <li className="bg-accent/10 text-primary dark:text-primary-dark px-2 py-1 rounded" >Explaining complex things simply (usually with a metaphor or board game reference)</li>
                  <li className="bg-accent/10 text-primary dark:text-primary-dark px-2 py-1 rounded" >Shipping things that make life easier for others (and usually for Future Me)</li>
                  <li className="bg-accent/10 text-primary dark:text-primary-dark px-2 py-1 rounded">ADHD-fueled Systems Thinking</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
