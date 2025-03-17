import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const GradientBorder = ({ children, className = "" }) => (
  <div className={`relative group ${className}`}>
    <div className="relative rounded-2xl overflow-hidden bg-[#1a1a1a] backdrop-blur-sm border border-white/20 bg-opacity-20 h-full transition-all duration-500 hover:bg-white/5 hover:backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
      <div className="relative h-full p-6">{children}</div>
    </div>
  </div>
);

export default function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    emailjs.init("DFrx9uaTpXsVpN8wZ");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    const formData = new FormData(form.current);
    console.log({
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      message: formData.get("message"),
    });

    emailjs
      .sendForm(
        "service_w98fuua",
        "template_qodhoey",
        form.current,
        "DFrx9uaTpXsVpN8wZ"
      )
      .then((result) => {
        console.log("SUCCESS!", result.text);
        setStatus({
          type: "success",
          message: "Message sent successfully! ✨",
        });
        form.current.reset();
        setTimeout(() => {
          setStatus({ type: "", message: "" });
        }, 3000);
      })
      .catch((error) => {
        console.error("FAILED...", error.text);
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again. 😕",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
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
              <h2 className="text-xl font-medium text-gray-200 mb-4">
                Get in Touch
              </h2>
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="flex flex-col h-full"
              >
                <div className="space-y-5 flex-1">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Name</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      name="from_name"
                      required
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
                      name="from_email"
                      required
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
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#e84644]/20 
                               text-gray-200 focus:outline-none focus:border-[#e84644]/50
                               focus:ring-1 focus:ring-[#e84644]/50 transition-all duration-300 resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(232,70,68,0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isLoading}
                    className="w-full relative inline-flex items-center justify-center p-0.5 overflow-hidden 
                             text-sm font-medium rounded-lg group bg-gradient-to-br from-[#e84644] to-[#ff8585] 
                             group-hover:from-[#e84644] group-hover:to-[#ff8585] hover:text-white 
                             focus:ring-4 focus:outline-none focus:ring-[#e84644]/30 
                             shadow-[0_0_15px_rgba(232,70,68,0.3)]
                             disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="w-full px-5 py-3 transition-all ease-in duration-75 rounded-md group-hover:bg-transparent">
                      {isLoading ? "Sending..." : "Send Message"}
                    </span>
                  </motion.button>

                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-sm ${
                        status.type === "success"
                          ? "text-green-400"
                          : "text-red-400"
                      } text-center`}
                    >
                      {status.message}
                    </motion.div>
                  )}
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
