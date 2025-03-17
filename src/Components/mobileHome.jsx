import React, { useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import Navbar from "./Navbar";
import { motion, useInView } from "framer-motion";
import pfp from "../assets/pfp.png";
import Divider from "./Divider";
import reactlogo from "../assets/react.svg";
import logo from "../assets/logo.png";
import Ui from "../assets/Ui.svg";
import laptop from "../assets/laptop.svg";
import web from "../assets/web.svg";
import project from "../assets/project.svg";
import seo from "../assets/seo.svg";

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
    <div className="flex flex-col p-4 space-y-6">
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
              Junior React Developer crafting modern web experiences with magic
              and pixel-perfect precision.
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
          <motion.h2 className="text-xl font-medium text-gray-200 text-center">
            Introduction
          </motion.h2>
          <motion.div className="space-y-3 text-sm text-gray-400">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-[#e84644] font-medium"
              >
                01
              </motion.span>
              <p>
                Frontend Developer, learning my way to full Stack Developer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="text-[#e84644] font-medium"
              >
                02
              </motion.span>
              <p>
                Specialized in crafting responsive and Creative user interfaces
                using mainly React and modern web technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="text-[#e84644] font-medium"
              >
                03
              </motion.span>
              <p>Deeply enthusiastic to learn new Technologies and Methods.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Second Divider */}
      <Divider isVisible={isIntroInView} />

      {/* Tech Stack Section */}
      <motion.div
        ref={techStackRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isTechInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          animate={isTechInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-medium text-gray-200 text-center"
        >
          Tech Stack
        </motion.h2>
        <div className="space-y-6">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h3 className="text-sm font-medium text-[#e84644] text-center">
              01 | Frontend
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {["React", "JavaScript", "Tailwind", "HTML/CSS", "Next.js"].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.1,
                      color: "#e84644",
                      borderColor: "#e84644",
                      boxShadow: "0 0 15px rgba(232,70,68,0.3)",
                    }}
                    className="px-3 py-1 text-sm rounded-full bg-white/5 border border-[#e84644]/20 text-gray-300 
                              transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2"
          >
            <h3 className="text-sm font-medium text-[#e84644] text-center">
              02 | Backend
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {["Node.js", "Axios", "Firebase", "REST APIs"].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.1,
                      color: "#e84644",
                      borderColor: "#e84644",
                      boxShadow: "0 0 15px rgba(232,70,68,0.3)",
                    }}
                    className="px-3 py-1 text-sm rounded-full bg-white/5 border border-[#e84644]/20 text-gray-300 
                            transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>

          {/* Tools & Libraries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-2"
          >
            <h3 className="text-sm font-medium text-[#e84644] text-center">
              03 | Tools & Libraries
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
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
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.1,
                    color: "#e84644",
                    borderColor: "#e84644",
                    boxShadow: "0 0 15px rgba(232,70,68,0.3)",
                  }}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-[#e84644]/20 text-gray-300 
                            transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Divider between Tech Stack and Skills & Services */}
      <Divider isVisible={isTechInView} />

      {/* Skills & Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-medium text-gray-200 text-center"
        >
          Skills & Services
        </motion.h2>
        <div className="space-y-6">
          {/* Frontend & Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h3 className="text-sm font-medium text-[#e84644] text-center">
              01 | Frontend & Design
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                {
                  title: "UI/UX Design",
                  icon: Ui,
                },
                {
                  title: "Frontend Dev",
                  icon: laptop,
                },
                {
                  title: "Web Design",
                  icon: web,
                },
              ].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.1,
                    color: "#e84644",
                    borderColor: "#e84644",
                    boxShadow: "0 0 15px rgba(232,70,68,0.3)",
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-[#e84644]/20 
                            hover:bg-[#e84644]/5 transition-all duration-300"
                >
                  <img src={skill.icon} alt={skill.title} className="w-4 h-4" />
                  <span className="text-xs text-gray-300">{skill.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Development & Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2"
          >
            <h3 className="text-sm font-medium text-[#e84644] text-center">
              02 | Development & Management
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                {
                  title: "3D Interactions",
                  icon: web,
                },
                {
                  title: "Project Management",
                  icon: project,
                },
                {
                  title: "Basic SEO",
                  icon: seo,
                },
              ].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.1,
                    color: "#e84644",
                    borderColor: "#e84644",
                    boxShadow: "0 0 15px rgba(232,70,68,0.3)",
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-[#e84644]/20 
                            hover:bg-[#e84644]/5 transition-all duration-300"
                >
                  <img src={skill.icon} alt={skill.title} className="w-4 h-4" />
                  <span className="text-xs text-gray-300">{skill.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Divider />

      {/* Experience Section */}
      <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center gap-2">
          <motion.span
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(232,70,68,0.4)",
                "0 0 0 10px rgba(232,70,68,0)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-2 h-2 rounded-full bg-[#e84644]"
          />
          <h2 className="text-xl font-medium text-gray-200">
            Experience | <span className="text-gray-200">Present</span>
          </h2>
        </div>

        <div className="flex flex-col items-center text-center space-y-1">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-medium text-[#e84644]"
          >
            Junior React Developer
          </motion.h3>
          <motion.p className="text-sm text-gray-300">HighSky AI</motion.p>
          <motion.p className="text-xs text-gray-400">
            Specializing in AI Chatbot Development
          </motion.p>
        </div>

        {/* React Experience */}
        <div className="flex items-center gap-1 text-sm mt-2">
          <span className="text-[#e84644] font-medium">+2</span>
          <span className="text-gray-400">Years with</span>
          <span className="text-[#e84644] font-medium">React</span>
        </div>
        <span className="text-[#e84644] font-medium">+5</span>
        <span className="text-gray-400">Years in </span>
        <span className="text-[#e84644] font-medium">IT</span>
      </div>

      <Divider />

      {/* Logos Section - Closer Together */}
      <div className="flex justify-center items-center gap-8">
        <motion.div className="relative w-14 h-14">
          <img
            src={logo}
            alt="Company Logo"
            className="w-full h-full object-contain [filter:drop-shadow(0_0_15px_rgba(232,70,68,0.6))]"
          />
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative w-14 h-14"
        >
          <img
            src={reactlogo}
            alt="React Logo"
            className="w-full h-full [filter:drop-shadow(0_0_15px_rgba(232,70,68,0.6))]"
          />
        </motion.div>
      </div>

      <Divider />

      {/* Open to Work Section */}
      <div className="flex flex-col items-center space-y-3">
        <div className="flex items-center gap-2">
          <motion.span
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(40,200,64,0.4)",
                "0 0 0 10px rgba(40,200,64,0)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-2 h-2 rounded-full bg-[#28c840]"
          />
          <h2 className="text-base font-medium bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            Open to Work
          </h2>
        </div>

        <div className="flex gap-2">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 text-xs rounded-full bg-white/5 border border-[#28c840]/20 text-gray-300 
                      hover:bg-[#28c840]/5 transition-all duration-300"
          >
            Freelance
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 text-xs rounded-full bg-white/5 border border-[#28c840]/20 text-gray-300 
                      hover:bg-[#28c840]/5 transition-all duration-300"
          >
            Remote
          </motion.span>
        </div>
      </div>

      <Divider />

      {/* Contact Section - Moved to bottom */}
      <motion.div
        ref={contactRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center space-y-4"
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
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="text-gray-400 text-center">
            <span>gitodevelopment@gmail.com</span>
          </div>
          <div className="flex items-center justify-center gap-6">
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

      <Divider />
    </div>
  );
}
