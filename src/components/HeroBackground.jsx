import { motion } from "framer-motion";

function HeroBackground({ mouseX, mouseY }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

      {/* Animated grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.045]
          dark:opacity-[0.06]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              var(--text) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              var(--text) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Large ambient glow - left */}
      <motion.div
        animate={{
          x: [0, 80, 0, -50, 0],
          y: [0, -40, 30, 0, 0],
          scale: [1, 1.15, 1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[var(--accent)]
          opacity-[0.07]
          blur-[120px]
          dark:opacity-[0.12]
        "
      />

      {/* Large ambient glow - right */}
      <motion.div
        animate={{
          x: [0, -70, 20, 70, 0],
          y: [0, 50, -30, 20, 0],
          scale: [1, 1.2, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="
          absolute
          -right-40
          top-1/4
          h-[500px]
          w-[500px]
          rounded-full
          bg-[var(--accent)]
          opacity-[0.05]
          blur-[140px]
          dark:opacity-[0.1]
        "
      />

      {/* Center glow */}
      <motion.div
        style={{
            x: mouseX,
            y: mouseY,
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.03, 0.07, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[var(--accent)]
          blur-[130px]
        "
      />

      {/* Moving horizontal light */}
      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-0
          top-[35%]
          h-px
          w-1/3
          bg-gradient-to-r
          from-transparent
          via-[var(--accent)]
          to-transparent
          opacity-20
        "
      />

      {/* Bottom fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-[var(--surface)]
          to-transparent
        "
      />

    </div>
  );
}

export default HeroBackground;