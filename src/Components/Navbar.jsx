import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pfp from "../assets/pfp.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="flex items-center gap-4">
          <button
            className="w-12 h-12 rounded-full bg-[#e84644] hover:bg-[#e84644]/90 transition-all duration-300 flex items-center justify-center shadow-lg"
            style={{
              backgroundImage: `url(${pfp})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></button>
          <h1 className="text-xl font-semibold tracking-tight bg-gradient-to-r from-[#e84644] via-[#ff6b6b] to-[#ff8585] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(232,70,68,0.75)]">
            Gito Dev
          </h1>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/20"
              onClick={toggleMobileMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#101010] backdrop-blur-lg px-6 py-6 sm:max-w-sm"
            >
              <div className="flex items-center justify-between">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <button
                    className="w-12 h-12 rounded-full bg-[#e84644] hover:bg-[#e84644]/90 transition-all duration-300 flex items-center justify-center shadow-lg"
                    style={{
                      backgroundImage: `url(${pfp})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></button>
                  <h1 className="text-xl font-semibold tracking-tight bg-gradient-to-r from-[#e84644] via-[#ff6b6b] to-[#ff8585] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(232,70,68,0.75)]">
                    Gito Dev
                  </h1>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                  onClick={toggleMobileMenu}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>
              <motion.div
                className="mt-6 flow-root pt-10"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 },
                  },
                }}
              >
                <div className="-my-6 divide-y divide-[#e84644]/20">
                  <div className="space-y-2 py-6">
                    {["About", "Projects", "Contact"].map((item, index) => (
                      <motion.a
                        key={index}
                        href={`#${item.toLowerCase()}`}
                        className="-mx-3 text-4xl block rounded-lg px-3 py-5 font-semibold leading-7 text-gray-200 hover:text-[#e84644]"
                        onClick={closeMobileMenu}
                        variants={{
                          open: { x: 0, opacity: 1 },
                          closed: { x: 50, opacity: 0 },
                        }}
                      >
                        {item}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
