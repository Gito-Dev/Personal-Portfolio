import React, { useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import Navbar from "./Navbar";
import { motion, useInView } from "framer-motion";
import pfp from "../assets/pfp.png";
import Divider from "./Divider";

// Add this variant for hover animation
const techButtonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    boxShadow: "0 0 8px rgba(232, 70, 68, 0.3)",
    borderColor: "#e84644",
  },
};

export default function MobileHome() {
  // Add refs for each section
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const techStackRef = useRef(null);
  const contactRef = useRef(null);

  // Create isInView states for each section
  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true });
  const isTechInView = useInView(techStackRef, { once: true });
  const isContactInView = useInView(contactRef, { once: true });

  return (
    <>
      <div className="h-[100vh] p-4 space-y-6 overflow-y-auto">
        {/* Profile Header */}
        <div className="pt-10 pb-[50px]">
          <Navbar />
        </div>

        {/* Centered Hero Section */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center min-h-[60vh] mb-8"
        >
          <div className="text-center space-y-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <button
                className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#e84644] hover:bg-[#e84644]/90 transition-all duration-300 flex items-center justify-center shadow-lg"
                style={{
                  backgroundImage: `url(${pfp})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></button>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-[#e84644] via-[#ff6b6b] to-[#ff8585] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(232,70,68,0.75)]">
                  Gito Dev
                </h1>
                <Divider isVisible={isHeroInView} />
              </div>
            </motion.div>

            {/* Profile Info Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <motion.h2
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl font-medium text-gray-200"
              >
                Frontend Developer
              </motion.h2>
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-400 text-sm leading-relaxed"
              >
                Junior React Developer crafting modern web experiences with
                magic and pixel-perfect precision.
              </motion.p>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-sm text-gray-400"
              >
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <span>21 y/o</span>
                  <span className="text-[#e84644]">|</span>
                  <span>Based in Bulgaria</span>
                  <span className="text-[#e84644]">|</span>
                  <span>Cs Student</span>
                </div>
              </motion.div>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="w-full md:w-auto relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-[#e84644] to-[#ff8585] group-hover:from-[#e84644] group-hover:to-[#ff8585] hover:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-[#e84644]/30"
              >
                <span className="w-full px-8 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-transparent">
                  View Resume
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* First Divider */}
        <Divider isVisible={isHeroInView} />

        {/* About Me Section */}
        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Introduction */}
          <div className="space-y-4">
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={
                isIntroInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
              }
              transition={{ delay: 0.2 }}
              className="text-xl font-medium text-gray-200"
            >
              Introduction
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="space-y-3 text-sm text-gray-400"
            >
              <div className="flex items-start gap-3">
                <span className="text-[#e84644] text-lg">•</span>
                <p>
                  Frontend Developer, learning my way to full Stack Developer.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#e84644] text-lg">•</span>
                <p>
                  Specialized in crafting responsive and Creative user
                  interfaces using mainly React and modern web technologies.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#e84644] text-lg">•</span>
                <p>Deeply enthusiastic to learn new Technologies and Methods</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Second Divider */}
        <Divider isVisible={isIntroInView} />

        {/* Tech Stack Section with updated buttons */}
        <motion.div
          ref={techStackRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isTechInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={
              isTechInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
            }
            transition={{ delay: 0.2 }}
            className="text-xl font-medium text-gray-200"
          >
            Tech Stack
          </motion.h2>
          <div className="space-y-4">
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isTechInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <h3 className="text-sm font-medium text-[#e84644]">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "JavaScript", "Tailwind CSS", "HTML/CSS"].map(
                  (tech, index) => (
                    <motion.span
                      key={tech}
                      variants={techButtonVariants}
                      initial="initial"
                      whileHover="hover"
                      animate={
                        isTechInView
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 10 }
                      }
                      transition={{
                        delay: 0.3 + index * 0.1,
                        duration: 0.2,
                      }}
                      className="px-3 py-1 text-sm rounded-full bg-white/5 border border-[#e84644]/20 text-gray-300 
                             hover:bg-[#e84644]/5 transition-all duration-300 cursor-default
                             shadow-[0_0_2px_rgba(232,70,68,0.1)] hover:shadow-[0_0_15px_rgba(232,70,68,0.2)]"
                    >
                      {tech}
                    </motion.span>
                  )
                )}
              </div>
            </motion.div>

            {/* Backend - Apply same changes to Backend section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isTechInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <h3 className="text-sm font-medium text-[#e84644]">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Axios", "REST APIs"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    variants={techButtonVariants}
                    initial="initial"
                    whileHover="hover"
                    animate={
                      isTechInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 10 }
                    }
                    transition={{
                      delay: 0.4 + index * 0.1,
                      duration: 0.2,
                    }}
                    className="px-3 py-1 text-sm rounded-full bg-white/5 border border-[#e84644]/20 text-gray-300 
                             hover:bg-[#e84644]/5 transition-all duration-300 cursor-default
                             shadow-[0_0_2px_rgba(232,70,68,0.1)] hover:shadow-[0_0_15px_rgba(232,70,68,0.2)]"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Tools & Others - Apply same changes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isTechInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <h3 className="text-sm font-medium text-[#e84644]">
                Tools & Others
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Github",
                  "VS Code",
                  "Figma",
                  "Spline",
                  "Netlify",
                  "Firebase",
                  "Vercel",
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    variants={techButtonVariants}
                    initial="initial"
                    whileHover="hover"
                    animate={
                      isTechInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 10 }
                    }
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.2,
                    }}
                    className="px-3 py-1 text-sm rounded-full bg-white/5 border border-[#e84644]/20 text-gray-300 
                             hover:bg-[#e84644]/5 transition-all duration-300 cursor-default
                             shadow-[0_0_2px_rgba(232,70,68,0.1)] hover:shadow-[0_0_15px_rgba(232,70,68,0.2)]"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Third Divider */}
        <Divider isVisible={isTechInView} />

        {/* Contact & Social Links */}
        <motion.div
          ref={contactRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={
              isContactInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
            }
            transition={{ delay: 0.2 }}
            className="text-xl font-medium text-gray-200"
          >
            Contact Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="space-y-4"
          >
            <div className="text-gray-400">
              <span>gitodevelopment@gmail.com</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/Gito-Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#e84644] transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/horgito-m-41b047289/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#e84644] transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/gito.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#e84644] transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@gito.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#e84644] transition-colors duration-300"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
