"use client"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full overflow-hidden">
      <div className="w-full h-full overflow-y-auto">
          <div className="w-full h-full justify-center items-center flex flex-col text-center gap-4">
            <motion.div
              className="text-5xl md:text-7xl lg:text-8xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              
            </motion.div>
          </div>
      </div>
    </div>
  )
}
export default About