"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false });

  return (
    <div className="flex flex-col justify-center items-center w-full h-full overflow-hidden px-2">
      <div className="w-full h-full overflow-y-auto">
        <div className="w-[45%] h-full justify-center items-center flex flex-col text-center gap-4 mx-auto">
          <motion.div
            className="text-5xl md:text-7xl lg:text-8xl"
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
            Get to know <span className="text-blue-400">me</span> better
          </motion.div>
        </div>
        <div className="w-full h-[70%] items-center flex flex-col text-center gap-4 pt-20">
          <motion.div
            className="border bg-black/10 border-zinc-600 rounded text-start"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <div className="border-b border-zinc-600 text-lg text-center py-2">
              about me
            </div>
            <div className="p-4 flex flex-col gap-2 text-xl">
              <span>
                My name is <span className="text-red-400">Koby Sysouvanh</span>{" "}
                a <span className="text-blue-400">full-stack developer</span>{" "}
                with a stronger focus on{" "}
                <span className="text-green-400">frontend development</span>.
              </span>
              <span>
                I am a <span className="text-yellow-400">perfectionist</span> striving to create the most{" "}
                <span className="text-purple-400"> aesthetically pleasing </span>
                and <span className="text-purple-400">responsive websites</span>
                .
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default About;
