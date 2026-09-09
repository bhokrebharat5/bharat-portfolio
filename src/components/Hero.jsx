import {
  ArrowDownRight,
  ArrowDownToLine,
  ArrowUpRight,
  Code2,
  createLucideIcon
} from "lucide-react";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { HeroBackground } from "./index";

// GitHub SVG Path from Simple Icons
const Github = createLucideIcon('Github', [
  ['path', { d: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' }]
]);

// LinkedIn SVG Path from Simple Icons
const Linkedin = createLucideIcon('Linkedin', [
  ['path', { d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' }]
]);

function Hero() {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 50,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 50,
    damping: 20,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

      mouseX.set(x * 30);
      mouseY.set(y * 30);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="
        relative 
        min-h-screen 
        overflow-hidden 
        px-5 pb-20 pt-36 
        md:px-8 md:pt-44
        bg-[var(--background)]
        transition-colors
        duration-300
      "
    >

      <HeroBackground
        mouseX={springX}
        mouseY={springY}
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Background Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(var(--text) 1px, transparent 1px),
              linear-gradient(90deg, var(--text) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Accent Glow */}
        <div className="pointer-events-none absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* Top Label */}
          <div className="mb-8 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-blue-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--text-secondary)]">
              Senior Full Stack Web Developer
            </span>
          </div>

          {/* Main Grid */}
          <div className="grid items-end gap-14 lg:grid-cols-[1.3fr_0.7fr]">

            {/* Left */}
            <div>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.12,
                    },
                  },
                }}
                className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[0.88] tracking-[-0.065em]"
              >
                <motion.span
                  className="block"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 70,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                >
                  I BUILD
                </motion.span>

                <motion.span
                  className="block text-[var(--text-muted)]"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 70,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                >
                  DIGITAL
                </motion.span>

                <motion.span
                  className="block"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 70,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                >
                  PRODUCTS
                  <span className="text-blue-600">.</span>
                </motion.span>
              </motion.h1>

              <div className="mt-10 max-w-2xl">
                <p className="text-lg leading-8 text-[var(--text-secondary)] md:text-xl">
                  Full Stack Developer with 10+ years of experience
                  building scalable web applications, SaaS platforms,
                  fintech products and e-commerce experiences.
                </p>
              </div>

              {/* Actions */}
              <div className="mt-9 flex flex-wrap items-center gap-4">

                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--text)] px-6 py-3.5 text-sm font-semibold text-[var(--background)] transition hover:gap-5"
                >
                  Explore My Work
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:rotate-45"
                  />
                </a>

                <a
                  href="#contact"
                  className="
                    inline-flex 
                    items-center 
                    gap-2 
                    rounded-full
                    border
                    border-[var(--border)]
                    px-6
                    py-3.5
                    text-sm
                    text-[var(--text-secondary)]
                    transition-all
                    hover:-translate-y-1
                    hover:border-[var(--accent)]
                    hover:text-[var(--accent)]
                  "
                >
                  Let's Connect
                </a>

                <a
                  href="/Bharat-Bhokre-Resume.pdf"
                  download
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[var(--text-secondary)]/5
                    border
                    border-[var(--border)]
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-[var(--text-warning)]
                    transition-transform
                    hover:scale-[1.03]  
                    hover:border-[var(--accent)]
                    hover:text-[var(--accent)]
                  "
                >
                  Download Resume
                  <ArrowDownToLine size={16} />
                </a>

              </div>

              {/* Social */}
              <div className="mt-9 flex items-center gap-3">

                <a
                  href="https://github.com/bhokrebharat5"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition hover:border-[var(--text)] hover:text-[var(--text)]"
                >
                  <Github size={17} />
                </a>

                <a
                  href="http://www.linkedin.com/in/bharat-bhokre-a19a06345"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition hover:border-[var(--text)] hover:text-[var(--text)]"
                >
                  <Linkedin size={17} />
                </a>

              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden min-h-[420px] lg:block">

              {/* Vertical line */}
              <div className="absolute bottom-0 right-1/2 top-0 w-px bg-[var(--border)]" />

              {/* Floating Tech */}
              <div className="absolute right-0 top-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <Code2
                    size={20}
                    className="text-blue-500"
                  />

                  <div>
                    <p className="text-xs text-[var(--text-muted)]">
                      CURRENT FOCUS
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      AI & SaaS Platforms
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Project Card */}
              <div className="absolute bottom-0 left-0 w-full max-w-md rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl">

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                    Featured Project
                  </span>

                  {/* <ArrowUpRight
                    size={18}
                    className="text-[var(--text-muted)]"
                  /> */}
                </div>

                <h2 className="mt-8 text-3xl font-bold tracking-tight">
                  MTX-Engines
                </h2>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  AI Agent Management Platform
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "Redux",
                    "RTK Query",
                    "SSE",
                  ].map((tech) => (

                    <motion.span
                      key={tech}
                      whileHover={{
                        y: -3,
                        scale: 1.03,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                      className="
                          rounded-full
                          border
                          border-[var(--border)]
                          bg-[var(--surface-soft)]
                          px-3
                          py-1.5
                          text-xs
                          text-[var(--text-muted)]
                          transition-colors
                          duration-300
                          hover:border-[var(--accent)]
                          hover:bg-[var(--accent-soft)]
                          hover:text-[var(--accent)]
                        "
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-7 border-t border-[var(--border)] pt-5">
                  <p className="text-xs leading-5 text-[var(--text-muted)]">
                    Multi-tenant application with real-time
                    streaming and visual workflow management.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Stats */}

          <div className="mt-10 border-y border-[var(--text-secondary)] py-8 md:py-10">

            <div className="grid grid-cols-2 md:grid-cols-4">

              <div className="border-r border-[var(--border)] px-5 py-7 md:px-8">
                <p className="text-3xl font-bold tracking-tight md:text-4xl text-orange-500">
                  10+
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-[var(--text-muted)]">
                  Years Experience
                </p>
              </div>

              <div className="px-5 py-7 md:border-r md:border-[var(--border)] md:px-8">
                <p className="text-3xl font-bold tracking-tight md:text-4xl text-green-500">
                  300+
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-[var(--text-muted)]">
                  Projects
                </p>
              </div>

              <div className="border-r border-t border-[var(--border)] px-5 py-7 md:border-t-0 md:px-8">
                <p className="text-3xl font-bold tracking-tight md:text-4xl text-yellow-500">
                  15
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-[var(--text-muted)]">
                  Shopify Apps
                </p>
              </div>

              <div className="border-t border-[var(--border)] px-5 py-7 md:border-t-0 md:px-8">
                <p className="text-3xl font-bold tracking-tight md:text-4xl text-blue-500">
                  4
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-[var(--text-muted)]">
                  Core Domains
                </p>
              </div>

            </div>
          </div>

          {/* Scroll indicator */}
          <a
            href="#about"
            className="
              mt-10 
              hidden 
              items-center gap-3 
              text-xs uppercase tracking-widest 
              text-[var(--text-accent)] 
              transition hover:text-[var(--text)] 
              md:flex
              border
              border-[var(--accent)]
              p-5
              w-fit
              py-2.5
              rounded-full
              background-[var(--surface-soft)]
              hover:bg-[var(--surface)]
              hover:border-[var(--accent)]
              hover:text-[var(--accent)]
            "
          >
            Scroll to explore
            <ArrowDownRight size={15} />
          </a>

        </div>
      </div>
    </section>
  );
}

export default Hero;