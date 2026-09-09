import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 5,
        y: position.y - 5,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 0.2,
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        hidden
        h-2.5
        w-2.5
        rounded-full
        bg-[var(--accent)]
        md:block
      "
    />
  );
}

export default CustomCursor;