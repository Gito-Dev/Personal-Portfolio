import React from "react";
import { motion } from "framer-motion";
import pfp from "../assets/pfp.png";

export default function MobileFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-6 px-4"
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Logo and Name */}
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-8 h-8 rounded-full overflow-hidden border border-[#e84644]/20"
          >
            <img
              src={pfp}
              alt="Gito Dev"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.p
            whileHover={{ color: "#e84644" }}
            className="text-sm font-medium text-gray-300 transition-colors duration-300"
          >
            Gito Dev
          </motion.p>
        </div>

        {/* Copyright Text */}
        <div className="text-center space-y-1">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} All rights reserved
          </p>
          <p className="text-xs text-gray-400">
            Crafted with <span className="text-[#e84644]">♥</span> by{" "}
            <motion.span
              whileHover={{ color: "#e84644" }}
              className="text-gray-300 transition-colors duration-300"
            >
              Gito Dev
            </motion.span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
