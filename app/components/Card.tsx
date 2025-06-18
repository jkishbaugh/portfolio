import nutshell from "@/app/assets/nutshell.png";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SiSpring} from "react-icons/si";

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
    w-[350px] h-[42rem]
    transition-all duration-300 ease-in-out
    mx-auto
    flex flex-col items-center justify-center hover:scale-105"
      onClick={() => setFlipped(!flipped)}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      aria-label="About me card. Press Enter or Space to flip."
      id="about-me-title"
    >
      <AnimatePresence mode="wait">
        {flipped ? (
          <motion.div
            key="back"
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 180, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full h-full rounded-3xl border-[6px] border-warning dark:border-warning-dark shadow-xl bg-gradient-to-br from-[#6366F1] to-[#4F46E5] dark:from-[#14B8A6] dark:to-[#06B6D4] p-6 backface-hidden z-10"
            >
            <div className="text-sm space-y-4">
              <div>
                <h2 className="text-lg font-bold mb-1">More About Me</h2>
                <p>
                  Father of four, husband, and code wrangler who believes in
                  curiosity, compassion, and keeping pull requests under 400 lines.
                  Still holding out hope that life has a dark mode. <Link href="/blog/about-me" className="text-text-warning dark:text-warning-dark hover:underline">Read more</Link>
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
                className="text-muted dark:text-muted-dark hover:underline text-sm"
                aria-label="View my projects"
              >
                Projects
              </a> */}
            <a
                href="/justin-kishbaugh-resume.pdf"
                download="justin-kishbaugh-resume.pdf"
                className="text-text-muted dark:text-muted-dark hover:underline text-sm"
                aria-label="View my resume"
              >
                Resume
              </a>
              <a
                href="/contact"
                className="text-text-muted dark:text-muted-dark hover:underline text-sm"
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
            className="absolute w-full h-full rounded-3xl border-[6px] border-warning dark:border-warning-dark shadow-xl bg-gradient-to-br from-[#6366F1] to-[#4F46E5] dark:from-[#14B8A6] dark:to-[#06B6D4] p-6 backface-hidden"
            aria-labelledby="about-me-title"
          >

            <div className="relative w-full h-36 rounded-xl overflow-hidden border-x-[8px] border-white/30 dark:border-white/20 shadow-lg bg-bg-subtle dark:bg-slate-300">
            <p className="absolute top-0 w-full bg-subtle dark:bg-white/20 dark:text-bg-surface-dark text-dark-primary py-1 rounded-md shadow-md text-right text-xs">
              Full Stack Developer
            </p>
              <div className="w-24 h-24 mx-auto mt-7 rounded-full overflow-hidden border-4 border-warning dark:border-warning-dark bg-green-300">
                <Image
                  src={nutshell}
                  alt="Cartoon of Man in a nutshell"
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="absolute bottom-0 w-full bg-subtle dark:bg-white/20 dark:text-bg-surface-dark text-dark-primary text-xs rounded-md shadow-md">
                Since 2017
              </span>
              {/* Emblem */}
              <div className="absolute top-0 left-0 flex flex-col items-center ">
                <div className="bg-surface text-text-link dark:bg-white/10 dark:text-bg-surface-dark text-xs font-bold px-2 py-1 rounded-t-md shadow-md">
                  Stage 3
                </div>
                <div className="bg-subtle-dark dark:bg-white/10 dark:text-bg-surface-dark p-2 rounded-full shadow-md">
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
                  <li className="bg-bg-subtle text-text-primary dark:bg-subtle-dark dark:text-base-dark px-2 py-1 rounded">Java</li>
                  <li className="bg-bg-subtle text-text-primary dark:bg-subtle-dark dark:text-base-dark px-2 py-1 rounded">Kotlin</li>
                  <li className="bg-bg-subtle text-text-primary dark:bg-subtle-dark dark:text-base-dark px-2 py-1 rounded">Spring Boot</li>
                  <li className="bg-bg-subtle text-text-primary dark:bg-subtle-dark dark:text-base-dark px-2 py-1 rounded">React</li>
                  <li className="bg-bg-subtle text-text-primary dark:bg-subtle-dark dark:text-base-dark px-2 py-1 rounded">Developer Experience</li>
                  <li className="bg-bg-subtle text-text-primary dark:bg-subtle-dark dark:text-base-dark px-2 py-1 rounded">Mentorship</li>
                </ul>
              </div>
              <div className="mt-2 mb-2">
                <h3 className="font-bold">Talents</h3>
                <ul className="text-m">
                  <li className="text-text-base px-2 py-1 list-disc list-inside flex items-start">
                    <span className="mr-2">•</span>
                    <span>Turning chaos into usable tools</span>
                  </li>
                  <li className="text-text-base px-2 py-1 list-disc list-inside flex items-start">
                    <span className="mr-2">•</span>
                    <span>Explaining complex things simply (usually with a metaphor or board game reference)</span>
                  </li>
                  <li className="text-text-base px-2 py-1 list-disc list-inside flex items-start">
                    <span className="mr-2">•</span>
                    <span>Shipping things that make life easier for others (and usually for Future Me)</span>
                  </li>
                  <li className="text-text-base px-2 py-1 list-disc list-inside flex items-start">
                    <span className="mr-2">•</span>
                    <span>ADHD-fueled Systems Thinking</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
