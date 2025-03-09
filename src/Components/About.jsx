import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import pfp from "../assets/pfp.png";

const GradientBorder = ({ children, className = "" }) => (
  <div
    className={`relative rounded-2xl overflow-hidden group bg-[#1a1a1a] backdrop-blur-sm border border-white/20 bg-opacity-20 ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
    <div className="relative h-full p-4">{children}</div>
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
            <div className="flex items-center justify-center gap-4 h-full">
              <FaGithub className="text-2xl text-gray-400 hover:text-[#e84644] cursor-pointer transition-colors" />
              <FaLinkedin className="text-2xl text-gray-400 hover:text-[#e84644] cursor-pointer transition-colors" />
              <FaInstagram className="text-2xl text-gray-400 hover:text-[#e84644] cursor-pointer transition-colors" />
              <FaTiktok className="text-2xl text-gray-400 hover:text-[#e84644] cursor-pointer transition-colors" />
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

        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[180px] w-[calc(33%-8px)]"
        >
          <GradientBorder className="h-full">
            <div className="flex flex-col h-full">
              <h2 className="text-xl font-medium text-gray-200 mb-2">
                About Me
              </h2>
              <p className="text-gray-400 text-sm">
                Frontend Developer, learning my way to full Stack Development.
              </p>
            </div>
          </GradientBorder>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[180px] w-[calc(33%-8px)]"
        >
          <GradientBorder className="h-full">
            <div className="flex flex-col h-full">
              <h2 className="text-xl font-medium text-gray-200 mb-2">Skills</h2>
              <p className="text-gray-400 text-sm">
                React • Tailwind CSS • Modern Web Technologies
              </p>
            </div>
          </GradientBorder>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[180px] w-[calc(66%-8px)]"
        >
          <GradientBorder className="h-full">
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-xl font-medium text-gray-200 mb-2">
                Contact
              </h2>
              <p className="text-gray-400 text-sm">gitodevelopment@gmail.com</p>
            </div>
          </GradientBorder>
        </motion.div>
      </div>
    </div>
  );
}
