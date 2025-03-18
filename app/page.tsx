"use client";
import { motion, useInView } from "framer-motion";
import {
  ArrowBigDownDash,
  ArrowDownNarrowWide,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useRef, useEffect } from "react";

export default function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false });
  const isAboutInView = useInView(aboutRef, { once: false });
  const isProjectsInView = useInView(projectsRef, { once: false });
  const isContactInView = useInView(contactRef, { once: false });

  return (
    <div className="flex flex-col justify-center items-center w-full h-full overflow-hidden">
      <div className="w-full h-full overflow-y-auto px-2">
        <div className="w-full h-full justify-center items-center flex flex-col text-center gap-4 relative">
          <motion.div
            className="text-5xl md:text-7xl lg:text-8xl flex flex-col"
            ref={heroRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isHeroInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
          >
            <span>I'm Koby 👋, a </span>
            <span className="text-green-400">Frontend Developer</span>
          </motion.div>
        </div>
        <div className="w-full h-[70%] justify-center items-center flex flex-col text-center gap-4">
          <motion.div
            ref={aboutRef}
            className="w-full h-full items-center flex flex-col text-center gap-4 mt-16"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isAboutInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
          >
            <span className="text-5xl">
              Striving to create{" "}
              <span className="text-green-400">digital excellence</span>
            </span>

            <Link
              href="/about"
              className="flex mt-6 border bg-black/15 border-zinc-600 rounded w-60 justify-center p-1 hover:bg-green-950 hover:text-green-400 hover:border-green-400 transition duration-400"
            >
              learn more about me
            </Link>
          </motion.div>
        </div>
        <div className="w-full h-full justify-center items-center flex flex-col text-center">
          <motion.div
            ref={projectsRef}
            className="w-full h-full items-center flex flex-col text-center gap-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isProjectsInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
          >
            <span className="text-5xl">
              Here are some of my{" "}
              <span className="text-green-400">projects</span>
            </span>
            <Link
              className="flex border bg-black/15 mt-6 border-zinc-600 rounded w-60 justify-center p-1 hover:bg-green-950 hover:text-green-400 hover:border-green-400 transition duration-400"
              href="/projects"
            >
              view all projects
            </Link>
            <div className="flex flex-col w-full justify-center items-center px-2">
              <div className="flex justify-between items-center mt-6 border bg-black/15 border-zinc-600 rounded w-full md:w-3/5 px-6 py-16 cursor-pointer hover:md:scale-105 transition-all">
                <div className="flex flex-col items-start">
                  <h1 className="text-xl md:text-4xl">Staycation!</h1>
                  <p className="text-start text-neutral-400 mt-4 text-sm md:text-md">
                    Home rental service. (Like Airbnb)
                  </p>
                </div>
                <p className="text-lg md:text-xl text-neutral-400">2024</p>
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center px-2">
              <div className="flex justify-between items-center mt-6 border bg-black/15 border-zinc-600 rounded w-full md:w-3/5 px-6 py-16 cursor-pointer hover:md:scale-105 transition-all">
                <div className="flex flex-col items-start">
                  <h1 className="text-xl md:text-4xl">txt.io</h1>
                  <p className="text-start text-neutral-400 mt-4 text-sm md:text-md">
                    Realtime chat messaging.
                  </p>
                </div>
                <p className="text-lg md:text-xl text-neutral-400">2023</p>
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center px-2">
              <div className="flex justify-between items-center mt-6 border bg-black/15 border-zinc-600 rounded w-full md:w-3/5 px-6 py-16 cursor-pointer hover:md:scale-105 transition-all">
                <div className="flex flex-col items-start">
                  <h1 className="text-xl md:text-4xl">Cloneflix</h1>
                  <p className="text-start text-neutral-400 mt-4 text-sm md:text-md">
                    Movie search engine and tracker.
                  </p>
                </div>
                <p className="text-lg md:text-xl text-neutral-400">2023</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full h-[70%] justify-center items-center flex flex-col text-center gap-4">
          <motion.div
            ref={contactRef}
            className="w-full h-full justify-center items-center flex flex-col text-center gap-4 mt-16"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isContactInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
          >
            <span className="text-5xl">Thanks for stopping by!</span>
            <span className="text-5xl">
              Want to <span className="text-green-400">reach out</span>?
            </span>

            <Link
              href="/contact"
              className="flex mt-6 border bg-black/15 border-zinc-600 rounded w-60 items-center justify-center p-1 hover:bg-green-950 hover:text-green-400 hover:border-green-400 transition duration-400"
            >
              shoot me an email
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
