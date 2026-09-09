import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025 — Present",
    company: "WDT Technologies Pvt Ltd",
    role: "Sr. Full Stack Web Developer",
    description:
      "Developing a scalable AI agent management platform using React, TypeScript, Redux Toolkit and Vite. Working with multi-tenant architecture, SSE streaming and visual DAG workflows.",
    stack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Vite",
      "Laravel",
      "WordPress",
      "Shopify",
    ],
    link: "https://webdevelopmenttech.com/",
  },
  {
    year: "2022 — 2024",
    company: "Greychain Technology",
    role: "Sr. Full Stack Developer",
    description:
      "Led full-stack development for fintech platforms and high-performance mobile application backends, including scalable REST APIs and secure payment integrations.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "REST API",
      "Laravel",
      "WordPress",
    ],
    link: "https://greychain.ai/",
  },
  {
    year: "2022",
    company: "Clickspurr Technologies",
    role: "Sr. React Js Developer",
    description:
      "Developed and deployed dynamic web applications using React.js and Node.js while collaborating with design and product teams.",
    stack: ["React.js", "Node.js"],
  },
  {
    year: "2015 — 2022",
    company: "Bitcot Technologies",
    role: "Software Engineer",
    description:
      "Worked across full-stack development, Shopify applications and WordPress/WooCommerce solutions. Developed and published five Shopify public applications.",
    stack: [      
      "WordPress",
      "WooCommerce",
      "Customized and development Plugins",
      "Customized Themes",
      "Optimization and Security wordpress websites",
      "MySQL",
      "Laravel",
      "React",
      "Shopify",
    ],
    link: "https://www.bitcot.com/",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[var(--border)] bg-[var(--surface)] px-5 py-28 transition-colors duration-300 md:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="grid gap-8 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Experience
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl">
              A decade of
              <br />

              <span className="text-[var(--text-muted)]">
                building.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-end"
          >
            <p className="max-w-md text-sm leading-7 text-[var(--text-secondary)]">
              From traditional web applications to modern AI
              platforms, my career has evolved alongside the web.
            </p>
          </motion.div>

        </div>

        {/* ================= TIMELINE ================= */}
        <div className="mt-20 border-t border-[var(--border)]">

          {experiences.map((experience, index) => (

            <motion.div
              key={`${experience.company}-${experience.year}`}

              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -35 : 35,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
                amount: 0.2,
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}

              className="group grid gap-6 border-b border-[var(--border)] py-10 md:grid-cols-[180px_1fr_1.2fr_30px] md:gap-10 md:py-12"
            >

              {/* ================= YEAR ================= */}
              <div>
                <span className="text-sm font-medium text-[var(--text-muted)]">
                  {experience.year}
                </span>
              </div>

              {/* ================= COMPANY ================= */}
              <div>
                <h3 className="text-xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
                  {experience.company}
                </h3>

                <p className="mt-2 text-sm font-medium text-[var(--accent)]">
                  {experience.role}
                </p>
              </div>

              {/* ================= DESCRIPTION ================= */}
              <div>

                <p className="text-sm leading-7 text-[var(--text-secondary)]">
                  {experience.description}
                </p>

                {/* Tech stack */}
                <div className="mt-5 flex flex-wrap gap-2">

                  {experience.stack.map((item) => (

                    <motion.span
                      key={item}
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
                      {item}
                    </motion.span>

                  ))}

                </div>

              </div>

              {/* ================= ARROW ================= */}
              <div className="hidden md:flex md:justify-end">

                <motion.div
                  whileHover={{
                    rotate: 45,
                    scale: 1.15,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[var(--border)]
                    text-[var(--text-muted)]
                    transition-colors
                    duration-300
                    group-hover:border-[var(--accent)]
                    group-hover:text-[var(--accent)]
                  "
                >
                  <a href={experience.link} target="_blank" rel="noopener noreferrer">
                    <ArrowUpRight size={18} />
                  </a>
                </motion.div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;