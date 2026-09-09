import { motion } from "framer-motion";

function MotionItem({ children, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 25,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default MotionItem;