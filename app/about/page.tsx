"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const About = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false });
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: false });
  const resumeRef = useRef(null);
  const isResumeInView = useInView(resumeRef, { once: false });

  return (
    <div className="flex flex-col justify-center items-center w-full h-full overflow-hidden">
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
            <h2 className="text-sm text-neutral-500">ABOUT</h2>
            <div className="text-5xl md:text-7xl lg:text-8xl mt-10">
              Get to know <span className="text-blue-400">me</span> better
            </div>
          </motion.div>
        </div>
        <div className="w-full h-full md:max-w-7xl md:mx-auto flex flex-col md:flex-row items-start justify-center gap-8 pt-20">
          {/* About Me Section - Left */}
          <motion.div
            className="border bg-black/10 border-zinc-600 rounded text-start w-full md:w-1/2"
            ref={aboutRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isAboutInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <div className="border-b border-zinc-600 text-lg text-center py-2">
              about me
            </div>
            <div className="p-4 flex flex-col gap-2 text-xl">
              <span>
                <span className="text-neutral-400 font-bold mr-4">1</span>
                My name is <span className="text-red-400">
                  Koby Sysouvanh.
                </span>{" "}
                A <span className="text-blue-400">full-stack developer</span>{" "}
                with a stronger focus on{" "}
                <span className="text-green-400">frontend development</span>.
              </span>
              <span>
                <span className="text-neutral-400 font-bold mr-4">2</span>I am a{" "}
                <span className="text-yellow-400">perfectionist</span> striving
                to bridge{" "}
                <span className="text-purple-400">
                  {" "}
                  aesthetics{" "}
                </span>
                and <span className="text-purple-400">functionality{" "}</span>
                to websites.
              </span>
              <span>
                <span className="text-neutral-400 font-bold mr-4">3</span>
                <span>
                  I am a <span className="text-teal-400">team player</span> and
                  believe I work best under collaboration
                </span>
              </span>
            </div>
          </motion.div>

          {/* Resume Section - Right */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col items-center justify-center text-center gap-4"
            ref={resumeRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isResumeInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <Image
              className="rounded"
              src="/resume.png"
              alt="My Resume"
              width={550}
              height={600}
              unoptimized
            />
            <a
              className="flex border bg-black/15 mt-6 border-zinc-600 rounded w-60 justify-center p-1 hover:bg-blue-950 hover:text-blue-400 hover:border-blue-400 transition duration-400 mb-20"
              href="/resume.pdf"
              download="KobySysouvanh_Resume.pdf"
            >
              grab a copy
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default About;
