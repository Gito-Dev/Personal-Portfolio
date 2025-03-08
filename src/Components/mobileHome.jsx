import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

export default function MobileHome() {
  return (
    <>
      {/* hero section  */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-[100vh] p-4 space-y-6"
      >
        {/* Profile Header */}
        <div className="pt-10 pb-[50px]">
          <Navbar />
        </div>

        {/* Profile Info Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-medium text-gray-200"
          >
            Frontend Developer
          </motion.h2>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-sm leading-relaxed"
          >
            Creating experiences that are smooth, engaging, and memorable.
          </motion.p>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-gray-400"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span>21 y/o</span>
              <span className="text-[#e84644]">|</span>
              <span>Based in Bulgaria</span>
              <span className="text-[#e84644]">|</span>
              <span>Cs Student</span>
            </div>
          </motion.div>
          <button className="w-full relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-[#e84644] to-[#ff8585] group-hover:from-[#e84644] group-hover:to-[#ff8585] hover:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-[#e84644]/30">
            <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-transparent">
              View Resume
            </span>
          </button>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl font-medium text-gray-200"
          >
            Introduction
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
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
                Specialized in crafting responsive and Creative user interfaces
                using mainly React and modern web technologies.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#e84644] text-lg">•</span>
              <p>Deeply enthusiastic to learn new Technologies and Methods</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact & Social Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="space-y-4"
        >
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl font-medium text-gray-200"
          >
            Contact Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="space-y-4"
          >
            <div className="text-gray-400">
              <span>your.email@example.com</span>
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
      </motion.div>
    </>
  );
}
