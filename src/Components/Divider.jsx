import { motion } from "framer-motion";

export default function Divider({ isVisible = true }) {
  return (
    <div className="w-[80%] mx-auto">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="h-[1px] bg-gradient-to-r from-transparent via-[#e84644]/50 to-transparent"
      />
    </div>
  );
}
