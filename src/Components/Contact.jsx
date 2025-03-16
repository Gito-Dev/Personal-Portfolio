import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";

const GradientBorder = ({ children, className = "" }) => (
  <div className={`relative group ${className}`}>
    <div className="relative rounded-2xl overflow-hidden bg-[#1a1a1a] backdrop-blur-sm border border-white/20 bg-opacity-20 h-full transition-all duration-500 hover:bg-white/5 hover:backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
      <div className="relative h-full p-6">{children}</div>
    </div>
  </div>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 flex flex-row gap-4 p-4">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-2/3 h-[500px]"
        >
          <GradientBorder className="h-full">
            <div className="flex flex-col h-full">
              <h2 className="text-xl font-medium text-gray-200 mb-6">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col h-full">
                <div className="space-y-5 flex-1">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Name</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#e84644]/20 
                               text-gray-200 focus:outline-none focus:border-[#e84644]/50
                               focus:ring-1 focus:ring-[#e84644]/50 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Email</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#e84644]/20 
                               text-gray-200 focus:outline-none focus:border-[#e84644]/50
                               focus:ring-1 focus:ring-[#e84644]/50 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Message</label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#e84644]/20 
                               text-gray-200 focus:outline-none focus:border-[#e84644]/50
                               focus:ring-1 focus:ring-[#e84644]/50 transition-all duration-300 resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(232,70,68,0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full relative inline-flex items-center justify-center p-0.5 overflow-hidden 
                             text-sm font-medium rounded-lg group bg-gradient-to-br from-[#e84644] to-[#ff8585] 
                             group-hover:from-[#e84644] group-hover:to-[#ff8585] hover:text-white 
                             focus:ring-4 focus:outline-none focus:ring-[#e84644]/30 
                             shadow-[0_0_15px_rgba(232,70,68,0.3)]"
                  >
                    <span className="w-full px-5 py-3 transition-all ease-in duration-75 rounded-md group-hover:bg-transparent">
                      Send Message
                    </span>
                  </motion.button>
                </div>
              </form>
            </div>
          </GradientBorder>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-1/3 h-[500px]"
        >
          <GradientBorder className="h-full">
            <div className="flex flex-col h-full">
              <h2 className="text-xl font-medium text-gray-200 mb-6">
                Contact Info
              </h2>

              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-[#e84644]">Email</h3>
                  <p className="text-sm text-gray-300">
                    gitodevelopment@gmail.com
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-[#e84644]">
                    Location
                  </h3>
                  <p className="text-sm text-gray-300">Bulgaria</p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-[#e84644]">
                    Social Media
                  </h3>
                  <div className="flex gap-6">
                    {[
                      { Icon: FaGithub, url: "https://github.com/Gito-Dev" },
                      {
                        Icon: FaLinkedin,
                        url: "https://www.linkedin.com/in/horgito-m-41b047289/",
                      },
                      {
                        Icon: FaInstagram,
                        url: "https://www.instagram.com/gito.dev/",
                      },
                      {
                        Icon: FaTiktok,
                        url: "https://www.tiktok.com/@gito.dev",
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          scale: 1.2,
                          color: "#e84644",
                          textShadow: "0 0 10px rgba(232,70,68,0.5)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(232,70,68,0.5)]"
                      >
                        <social.Icon size={24} />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-[#e84644]">
                    Availability
                  </h3>
                  <div className="flex gap-3">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 text-sm rounded-full bg-white/5 border border-[#28c840]/20 text-gray-300 
                                hover:bg-[#28c840]/5 transition-all duration-300"
                    >
                      Freelance
                    </motion.span>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 text-sm rounded-full bg-white/5 border border-[#28c840]/20 text-gray-300 
                                hover:bg-[#28c840]/5 transition-all duration-300"
                    >
                      Remote
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>
          </GradientBorder>
        </motion.div>
      </div>
    </div>
  );
}
