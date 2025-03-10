import React from "react";
import { motion } from "framer-motion";
import reactlogo from "../assets/react.svg";
import pfp from "../assets/pfp.png";

const GradientBorder = ({ children, className = "" }) => (
  <div className={`relative group ${className}`}>
    <div className="relative rounded-2xl overflow-hidden bg-[#1a1a1a] backdrop-blur-sm border border-white/20 bg-opacity-20 h-full transition-all duration-500 hover:bg-white/5 hover:backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
      <div className="relative h-full p-4">{children}</div>
    </div>
  </div>
);

export default function About() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 flex flex-row gap-2 flex-wrap p-3 overflow-auto">
        {/* Intro Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[180px] w-[calc(33%-8px)]"
        >
          <GradientBorder className="h-full">
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-2xl font-semibold bg-gradient-to-r from-[#e84644] via-[#ff6b6b] to-[#ff8585] bg-clip-text text-transparent">
                Frontend Developer
              </h1>
              <p className="text-gray-400 text-sm mt-2">
                Junior React Developer Crafting Modern Web Experiences
              </p>
            </div>
          </GradientBorder>
        </motion.div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[180px] w-[calc(33%-8px)]"
        >
          <GradientBorder className="h-full">
            <div className="flex items-center justify-center h-full">
              <div
                className="w-20 h-20 rounded-full bg-cover bg-center border-2 border-[#e84644]/50"
                style={{ backgroundImage: `url(${pfp})` }}
              />
            </div>
          </GradientBorder>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[180px] w-[calc(33%-8px)]"
        >
          <GradientBorder className="h-full">
            <div className="flex items-center justify-center h-full">
              <motion.div
                animate={{ rotate: 360 }}
                whileHover={{
                  rotate: 0,
                  transition: { rotate: { duration: 0.2 } },
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <img
                  src={reactlogo}
                  alt="React Logo"
                  className="w-20 h-20 [filter:drop-shadow(0_0_15px_rgba(232,70,68,0.6))]"
                />
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    filter: [
                      "drop-shadow(0 0 30px rgba(232,70,68,0.9))",
                      "drop-shadow(0 0 60px rgba(232,70,68,0.9))",
                      "drop-shadow(0 0 30px rgba(232,70,68,0.9))",
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute inset-0 blur-2xl"
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    background: [
                      "radial-gradient(circle, rgba(232,70,68,0.3) 0%, transparent 70%)",
                      "radial-gradient(circle, rgba(232,70,68,0.5) 0%, transparent 70%)",
                      "radial-gradient(circle, rgba(232,70,68,0.3) 0%, transparent 70%)",
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </GradientBorder>
        </motion.div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[180px] w-[calc(33%-8px)]"
        >
          <GradientBorder className="h-full">
            <div className="flex flex-col justify-center h-full">
              <div className="flex items-center gap-2 text-gray-400">
                <span>21 y/o</span>
                <span className="text-[#e84644]">|</span>
                <span>Bulgaria</span>
              </div>
            </div>
          </GradientBorder>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[180px] w-[calc(66%-8px)]"
        >
          <GradientBorder className="h-full">
            <div className="flex flex-col h-full p-2">
              <h2 className="text-xl font-medium text-gray-200 mb-2">
                Tech Stack
              </h2>
              <div className="grid grid-cols-3 h-[calc(100%-2rem)]">
                {/* Frontend */}
                <div className="space-y-1.5">
                  <h3 className="text-xs font-medium text-[#e84644]">
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {[
                      "React",
                      "JavaScript",
                      "Tailwind",
                      "HTML/CSS",
                      "Next.js",
                    ].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ delay: 0.1 * index, duration: 0.2 }}
                        className="px-2 py-0.5 text-xs rounded-full bg-white/5 border border-[#e84644]/20 text-gray-300 
                                  hover:bg-[#e84644]/5 transition-all duration-300 cursor-default
                                  shadow-[0_0_2px_rgba(232,70,68,0.1)] hover:shadow-[0_0_15px_rgba(232,70,68,0.2)]"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="space-y-1.5 -ml-6">
                  <h3 className="text-xs font-medium text-[#e84644]">
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {["Node.js", "Axios", "Firebase", "REST APIs"].map(
                      (tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            delay: 0.2 + 0.1 * index,
                            duration: 0.2,
                          }}
                          className="px-2 py-0.5 text-xs rounded-full bg-white/5 border border-[#e84644]/20 text-gray-300 
                                  hover:bg-[#e84644]/5 transition-all duration-300 cursor-default
                                  shadow-[0_0_2px_rgba(232,70,68,0.1)] hover:shadow-[0_0_15px_rgba(232,70,68,0.2)]"
                        >
                          {tech}
                        </motion.span>
                      )
                    )}
                  </div>
                </div>

                {/* Libraries */}
                <div className="space-y-1.5">
                  <h3 className="text-xs font-medium text-[#e84644]">
                    Tools / Libraries
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {[
                      "Github",
                      "VS Code/Cursor",
                      "Vercel/Netlify",
                      "Spline",
                      "Framer Motion",
                      "Router",
                    ].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          delay: 0.3 + 0.1 * index,
                          duration: 0.2,
                        }}
                        className="px-2 py-0.5 text-xs rounded-full bg-white/5 border border-[#e84644]/20 text-gray-300 
                                  hover:bg-[#e84644]/5 transition-all duration-300 cursor-default
                                  shadow-[0_0_2px_rgba(232,70,68,0.1)] hover:shadow-[0_0_15px_rgba(232,70,68,0.2)]"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </GradientBorder>
        </motion.div>

        {/* Open to Work - Now comes first */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[180px] w-[calc(66%-8px)]"
        >
          <GradientBorder className="h-full">
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-xl font-medium text-gray-200 mb-2">
                Open to Work
              </h2>
              <p className="text-gray-400 text-sm">
                Available for freelance opportunities
              </p>
            </div>
          </GradientBorder>
        </motion.div>

        {/* Contact - Now comes second */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[180px] w-[calc(33%-8px)]"
        >
          <GradientBorder className="h-full">
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-xl font-medium text-gray-200 mb-2">
                Open to Work
              </h2>
              <p className="text-gray-400 text-sm">
                Available for freelance opportunities
              </p>
            </div>
          </GradientBorder>
        </motion.div>
      </div>
    </div>
  );
}
