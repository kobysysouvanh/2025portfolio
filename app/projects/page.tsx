"use client"

import Badge from "@/components/Badge";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const Projects = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false });
  const projectsRef = useRef(null);
  const isProjectsInView = useInView(projectsRef, { once: false });

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="w-full h-full overflow-y-auto px-2 overflow-x-hidden">
        <div className="w-[45%] h-full justify-center items-center flex flex-col text-center gap-4 mx-auto">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isHeroInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <h2 className="text-sm text-neutral-500">PROJECTS</h2>
            <div className="text-5xl md:text-7xl lg:text-8xl mt-10 flex flex-col">
              <span>Collection of</span>
              <span className="text-red-400">My Projects</span>
            </div>
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
            <div className="flex flex-col w-full justify-center items-center px-2">
              <h1 className="text-neutral-500">CLICK TO LEARN MORE</h1>
              <Link href="/projects/gamedeals" className="flex justify-between items-center mt-6 border bg-black/15 border-zinc-600 rounded w-full md:w-3/5 px-6 py-16 cursor-pointer hover:md:scale-105 transition-all">
                <div className="flex flex-col items-start">
                  <h1 className="text-xl md:text-4xl text-red-400">GameDeals</h1>
                  <p className="text-start text-neutral-400 mt-4 text-sm md:text-md">
                    Games on Sale Finder
                  </p>
                  <div className="flex gap-2 mt-4 flex-wrap">
                  <Badge>Next.js</Badge> 
                  <Badge>TypeScript</Badge>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-neutral-400">2025</p>
              </Link>
            </div>
            <div className="flex flex-col w-full justify-center items-center px-2">
              <Link href="/projects/staycation" className="flex justify-between items-center mt-6 border bg-black/15 border-zinc-600 rounded w-full md:w-3/5 px-6 py-16 cursor-pointer hover:md:scale-105 transition-all">
                <div className="flex flex-col items-start">
                  <h1 className="text-xl md:text-4xl text-red-400">Staycation!</h1>
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
              <Link href="/projects/txtio" className="flex justify-between items-center mt-6 border bg-black/15 border-zinc-600 rounded w-full md:w-3/5 px-6 py-16 cursor-pointer hover:md:scale-105 transition-all">
                <div className="flex flex-col items-start">
                  <h1 className="text-xl md:text-4xl text-red-400">txt.io</h1>
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
              <Link href="/projects/cloneflix" className="flex justify-between items-center mt-6 border bg-black/15 border-zinc-600 rounded w-full md:w-3/5 px-6 py-16 cursor-pointer hover:md:scale-105 transition-all">
                <div className="flex flex-col items-start">
                  <h1 className="text-xl md:text-4xl text-red-400">Cloneflix</h1>
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
            <div className="flex flex-col w-full justify-center items-center px-2 pb-20">
              <div className="flex justify-center items-center mt-6 border bg-black/15 border-zinc-600 rounded w-full md:w-3/5 px-6 py-16 cursor-pointer hover:md:scale-105 transition-all">
               <h1 className="text-neutral-500 text-3xl">MORE TO COME...</h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
export default Projects