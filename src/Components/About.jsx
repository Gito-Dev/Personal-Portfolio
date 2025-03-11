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
            <div className="flex flex-col justify-center h-full relative overflow-hidden">
              {/* Terminal-like header */}
              <div className="absolute top-0 left-0 right-0 p-1 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#ff5f57]"></div>
                <div className="w-2 h-2 rounded-full bg-[#febc2e]"></div>
                <div className="w-2 h-2 rounded-full bg-[#28c840]"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <span className="text-[#e84644]">&gt;</span>
                <span className="text-gray-400 text-sm ml-2">{"{"}</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="text-gray-400 text-sm ml-6"
              >
                <span className="text-[#61dafb]">role:</span> "Junior React
                Developer"
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.9 }}
                className="text-gray-400 text-sm ml-6"
              >
                <span className="text-[#61dafb]">company:</span> "HighSky Ai"
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.2 }}
                className="text-gray-400 text-sm ml-6"
              >
                <span className="text-[#61dafb]">current:</span> "Creating Ai
                Chatbot Agents"
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.5 }}
              >
                <span className="text-gray-400 text-sm">{"}"}</span>
              </motion.div>
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
            <div className="flex items-center justify-center h-full relative">
              {/* Glowing background effect */}
              <motion.div
                className="absolute w-24 h-24 rounded-full blur-xl"
                animate={{
                  background: [
                    "radial-gradient(circle, rgba(232,70,68,0.3) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(232,70,68,0.6) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(232,70,68,0.3) 0%, transparent 70%)",
                  ],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Profile picture with hover spin animation */}
              <motion.div
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
                className="relative z-10"
              >
                <div
                  className="w-20 h-20 rounded-full bg-cover bg-center border-2 border-[#e84644]/50 shadow-[0_0_15px_rgba(232,70,68,0.3)] transition-transform duration-300"
                  style={{ backgroundImage: `url(${pfp})` }}
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
            <div className="flex flex-col items-center justify-center h-full space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-[#e84644] font-medium"
                >
                  +2
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-sm"
                >
                  Years with
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0 0 8px rgb(232,70,68)",
                  }}
                  className="text-[#e84644] font-semibold tracking-wide"
                  transition={{ duration: 0.3 }}
                >
                  React
                </motion.span>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full h-px bg-gradient-to-r from-transparent via-[#e84644]/30 to-transparent"
              />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-2 text-gray-400"
              >
                <span>Learning Next.js</span>
              </motion.div>
            </div>
          </GradientBorder>
        </motion.div>

        {/* react logo  */}
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

        {/* ferlanc */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[180px] w-[calc(33%-8px)]"
        >
          <GradientBorder className="h-full">
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2"
              >
                <motion.span
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(40, 200, 64, 0.4)",
                      "0 0 0 10px rgba(40, 200, 64, 0)",
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-2.5 h-2.5 rounded-full bg-[#28c840]"
                />
                <h2 className="text-lg font-medium bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Open to Work
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="flex gap-2">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-[#28c840]/20 text-gray-300 
                              hover:bg-[#28c840]/5 transition-all duration-300
                              shadow-[0_0_2px_rgba(40,200,64,0.1)] hover:shadow-[0_0_15px_rgba(40,200,64,0.2)]"
                  >
                    Freelance
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-[#28c840]/20 text-gray-300 
                              hover:bg-[#28c840]/5 transition-all duration-300
                              shadow-[0_0_2px_rgba(40,200,64,0.1)] hover:shadow-[0_0_15px_rgba(40,200,64,0.2)]"
                  >
                    Remote
                  </motion.span>
                </div>
              </motion.div>
            </div>
          </GradientBorder>
        </motion.div>
      </div>
    </div>
  );
}
