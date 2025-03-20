"use client";
import Badge from "@/components/Badge";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

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
      <div className="w-full h-full overflow-y-auto px-2 overflow-x-hidden">
        <div className="w-full h-full justify-center items-center flex flex-col text-center gap-4 relative">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isHeroInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-sm text-neutral-500">HOME</h2>
            <div className="text-5xl md:text-7xl lg:text-8xl flex flex-col mt-10">
              <span>I&apos;m Koby 👋, a </span>

              <span className="text-green-400">Frontend Developer</span>
            </div>
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
        <div className="w-full h-full justify-center items-center flex flex-col text-center ">
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
              Here are some of{" "}
              <span className="text-green-400"> my projects</span>
            </span>
            <Link
              className="flex border bg-black/15 mt-6 border-zinc-600 rounded w-60 justify-center p-1 hover:bg-green-950 hover:text-green-400 hover:border-green-400 transition duration-400"
              href="/projects"
            >
              view all projects
            </Link>
            <div className="flex flex-col w-full justify-center items-center px-2">
              <Link
                href="/projects/staycation"
                className="flex justify-between items-center mt-6 border bg-black/15 border-zinc-600 rounded w-full md:w-3/5 px-6 py-16 cursor-pointer hover:md:scale-105 transition-all"
              >
                <div className="flex flex-col items-start">
                  <h1 className="text-xl md:text-4xl text-green-400">
                    Staycation!
                  </h1>
                  <p className="text-start text-neutral-400 mt-4 text-sm md:text-md">
                    Real Estate Rental
                  </p>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    <Badge>Next.js</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>NextAuth</Badge>
                    <Badge>Prisma</Badge>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-neutral-400">2024</p>
              </Link>
            </div>
            <div className="flex flex-col w-full justify-center items-center px-2">
              <Link
                href="/projects/txtio"
                className="flex justify-between items-center mt-6 border bg-black/15 border-zinc-600 rounded w-full md:w-3/5 px-6 py-16 cursor-pointer hover:md:scale-105 transition-all"
              >
                <div className="flex flex-col items-start">
                  <h1 className="text-xl md:text-4xl text-green-400">txt.io</h1>
                  <p className="text-start text-neutral-400 mt-4 text-sm md:text-md">
                    Realtime chat messaging
                  </p>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    <Badge>Next.js</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>Pusher</Badge>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-neutral-400">2023</p>
              </Link>
            </div>
            <div className="flex flex-col w-full justify-center items-center px-2">
              <Link
                href="/projects/cloneflix"
                className="flex justify-between items-center mt-6 border bg-black/15 border-zinc-600 rounded w-full md:w-3/5 px-6 py-16 cursor-pointer hover:md:scale-105 transition-all"
              >
                <div className="flex flex-col items-start">
                  <h1 className="text-xl md:text-4xl text-green-400">
                    Cloneflix
                  </h1>
                  <p className="text-start text-neutral-400 mt-4 text-sm md:text-md">
                    Movie search engine and tracker
                  </p>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    <Badge>Next.js</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>NextAuth</Badge>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-neutral-400">2023</p>
              </Link>
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
