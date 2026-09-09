import { motion } from "framer-motion";

function PageLoader() {
  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1],
      }}
      style={{
        transformOrigin: "top",
      }}
      className="fixed inset-0 z-[100] bg-[var(--text)]"
    />
  );
}

export default PageLoader;