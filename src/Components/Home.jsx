import React, { useState } from "react";
import { motion } from "framer-motion";
import pfp from "../assets/pfp.png";
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import About from "./About";
import Divider from "./Divider";
import ResumeOverlay from "./ResumeOverlay";
import resumePDF from "../assets/Horgito Mhillaj CV.pdf";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Home() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const tabs = [
    { id: "tab1", label: "About" },
    { id: "tab2", label: "Projects" },
    { id: "tab3", label: "Contact" },
  ];

  const sidebarVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const renderContent = () => {
    switch (activeTab) {
      case "tab1":
        return <About />;
      case "tab2":
        return <Projects />;
      case "tab3":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen p-4">
      <div className="flex flex-col md:flex-row h-full gap-4">
        {/* sidebar */}
        <div className="w-full md:w-1/4 h-1/4 md:h-full group relative overflow-hidden rounded-2xl bg-[#1a1a1a] backdrop-blur-sm border border-white/20 bg-opacity-20">
          <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
          <motion.div
            initial="initial"
            animate="animate"
            variants={sidebarVariants}
            className="relative flex flex-col h-full w-full p-6 text-gray-800"
          >
            {/* Profile Header */}
            <motion.div
              variants={itemVariants}
              className="w-full flex items-center gap-4"
            >
              <div className="relative flex flex-col items-center">
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 md:w-20 md:h-20 lg:w-30 lg:h-30 rounded-full bg-[#e84644] hover:bg-[#e84644]/90 transition-all duration-300 flex items-center justify-center shadow-lg relative z-10"
                  style={{
                    backgroundImage: `url(${pfp})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="w-full mt-2">
                  <Divider isVisible={true} />
                </div>
              </div>
              <motion.h1
                variants={itemVariants}
                className="text-balance text-3xl font-semibold tracking-tight bg-gradient-to-r from-[#e84644] via-[#ff6b6b] to-[#ff8585] bg-clip-text text-transparent sm:text-4xl drop-shadow-[0_0_15px_rgba(232,70,68,0.75)]"
              >
                Gito Dev
              </motion.h1>
            </motion.div>

            {/* Profile Info Section with glow */}
            <motion.div variants={itemVariants} className="mt-8 space-y-4">
              <div className="space-y-2">
                <motion.h2
                  variants={itemVariants}
                  className="text-xl font-medium text-gray-200 drop-shadow-[0_0_10px_rgba(232,70,68,0.3)]"
                >
                  Frontend Developer
                </motion.h2>
              </div>
              <motion.p
                variants={itemVariants}
                className="text-gray-400 text-sm leading-relaxed"
              >
                Junior React Developer Crafting Modern Web Experiencese.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex items-center flex-wrap text-sm text-gray-400"
              >
                <div className="flex items-center whitespace-nowrap">
                  <span>21 y/o</span>
                  <span className="text-[#e84644] mx-2">|</span>
                  <span>Based in Bulgaria</span>
                  <span className="text-[#e84644] mx-2">|</span>
                  <span>Cs Student</span>
                </div>
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(232,70,68,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsResumeOpen(true)}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-[#e84644] to-[#ff8585] group-hover:from-[#e84644] group-hover:to-[#ff8585] hover:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-[#e84644]/30 shadow-[0_0_15px_rgba(232,70,68,0.3)]"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-transparent">
                  View Resume
                </span>
              </motion.button>

              {/* Introduction Section with glow */}
              <div className="space-y-2">
                <motion.h2
                  variants={itemVariants}
                  className="text-xl font-medium text-gray-200 mt-8 mb-4 drop-shadow-[0_0_10px_rgba(232,70,68,0.3)]"
                >
                  Introduction
                </motion.h2>
              </div>
              <motion.div
                variants={itemVariants}
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
                  <p>
                    Deeply enthusiastic to learn new Technologies and Methods.
                  </p>
                </div>
              </motion.div>

              {/* Contact Section with glow */}
              <div className="space-y-2">
                <motion.h2
                  variants={itemVariants}
                  className="text-xl font-medium text-gray-200 mt-6 mb-4 drop-shadow-[0_0_10px_rgba(232,70,68,0.3)]"
                >
                  Contact Me
                </motion.h2>
              </div>
              <motion.div variants={itemVariants} className="space-y-4">
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-2 text-gray-400"
                >
                  <span>gitodevelopment@gmail.com</span>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  {[FaGithub, FaLinkedin, FaInstagram, FaTiktok].map(
                    (Icon, index) => (
                      <motion.a
                        key={index}
                        whileHover={{
                          scale: 1.2,
                          color: "#e84644",
                          textShadow: "0 0 10px rgba(232,70,68,0.5)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className="text-gray-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(232,70,68,0.5)]"
                      >
                        <Icon size={20} />
                      </motion.a>
                    )
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* content center  */}
        <div className="grow h-3/4 md:h-full group relative overflow-hidden rounded-2xl bg-[#1a1a1a] backdrop-blur-sm border border-white/20 bg-opacity-20">
          <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
          <div className="relative flex flex-col h-full w-full p-6">
            {/* Tabs Container */}
            <div className="flex justify-center items-center gap-2 mb-6">
              {tabs.map((tab, index) => (
                <React.Fragment key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-300 border border-transparent hover:text-[#e84644] ${
                      activeTab === tab.id ? "text-[#e84644]" : "text-gray-400"
                    }`}
                  >
                    {tab.label}
                  </button>
                  {index < tabs.length - 1 && (
                    <span className="text-[#e84644]">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-auto">{renderContent()}</div>
          </div>
        </div>
      </div>

      <ResumeOverlay
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        pdfUrl={resumePDF}
      />
    </div>
  );
}
