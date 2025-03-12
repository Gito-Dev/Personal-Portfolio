import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResumeOverlay = ({ isOpen, onClose, pdfUrl }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-[90%] h-[90%] bg-[#1a1a1a] rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 p-1 rounded-full bg-[#e84644] hover:bg-[#e84644]/80 transition-colors"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* PDF Viewer */}
          <iframe
            src={`${pdfUrl}#zoom=100&view=Fit&toolbar=0&navpanes=0`}
            className="w-full h-full"
            style={{ transform: "scale(1)", transformOrigin: "top left" }}
            title="Resume Preview"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeOverlay;
