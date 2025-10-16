"use client";

import Badge from "@/components/Badge";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const PRStatusBoard = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false });
  const projectRef = useRef(null);
  const isProjectInView = useInView(projectRef, { once: false });

  return (
    <div className="flex flex-col justify-center items-center w-full h-full overflow-hidden">
      <div className="w-full h-full overflow-y-auto px-2 overflow-x-hidden">
        <div className="w-full justify-center items-center flex flex-col text-center md:mt-40 mt-20">
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
            <h2 className="text-5xl">PR Status Board</h2>
            <div className="flex gap-2 flex-wrap justify-center my-6">
              <Badge>JavaScript</Badge>
              <Badge>React.js</Badge>
              <Badge>Vite</Badge>
              <Badge>GitHub REST API</Badge>
            </div>
            <div className="w-full px-4">
              <Image
                src="/prstatusboard.png"
                width={1000}
                height={800}
                alt="PR Status Board website image"
                className="rounded-lg"
                unoptimized
              />
            </div>
          </motion.div>
        </div>
        <div className="w-full h-[50%] justify-center items-center flex p-4">
          <motion.div
            className="w-full md:max-w-5xl h-full items-center flex flex-col md:flex-row gap-4 "
            ref={projectRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isProjectInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <div className="w-full flex flex-col text-left">
              <label className="text-neutral-600 font-bold">Description</label>
              <p className="text-neutral-400">
                Web app created using Vite, React.js and TailwindCSS. The app allows users to input a GitHub username and repository name to fetch and display pull request data using the GitHub REST API. The app features a clean and responsive design, making it easy to view pull request information on various devices.
              </p>
            </div>
            <div className="flex w-full justify-center mt-6 md:justify-end">
              <div className="flex md:flex-col gap-3">
                <div className="border rounded py-1 px-2 border-neutral-500 hover:bg-red-600/20 hover:border-red-400 hover:text-red-400 transition-all duration-300 text-center">
                  <a href="https://prstatusboard.netlify.app/" rel="noopener noreferrer">visit website</a>
                </div>
                <div className="border rounded py-1 px-2 border-neutral-500 hover:bg-red-600/20 hover:border-red-400 hover:text-red-400 transition-all duration-300 text-center">
                  <a href="https://github.com/chingu-voyages/V57-tier2-team-23?tab=readme-ov-file" rel="noopener noreferrer">visit repo</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default PRStatusBoard;
