import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Engineering",
    description:
      "Building fast, scalable and polished interfaces with modern frontend technologies.",
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "RTK Query",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Designing reliable APIs, backend services and scalable application architecture.",
    skills: [
      "Laravel",
      "CodeIgniter",
      "Node.js",
      "Express.js",      
      "PHP Frameworks",
      "REST API",
    ],
  },
  {
    number: "03",
    title: "E-commerce & CMS",
    description:
      "Creating custom commerce experiences and business-focused CMS solutions.",
    skills: [      
      "WordPress",
      "WooCommerce",
      "Customized and development Plugins",
      "Customized Themes",
      "Optimization and Security wordpress websites",
      "Wordpress Multisite",
      "Wordpress Custom Post Types",
      "Wordpress layouts and templates",
      "Shopify Liquid",
      "Shopify",
      "Shopify Apps",
    ],
  },
  {
    number: "04",
    title: "Database & Tools",
    description:
      "Working with databases, cloud storage and modern development workflows.",
    skills: [
      "MySQL",
      "Redis",
      "Git",
      "GitHub",
      "AWS S3",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="
        border-t
        border-[var(--border)]
        bg-[var(--surface)]
        px-5
        py-28
        transition-colors
        duration-300
        md:px-8
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="grid gap-10 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              <span className="h-px w-6 bg-[var(--accent)]" />
              Expertise
            </p>

            <h2
              className="
                mt-6
                max-w-xl
                text-5xl
                font-bold
                leading-[0.95]
                tracking-[-0.05em]
                md:text-7xl
              "
            >
              My technical
              <br />

              <span className="text-[var(--text-muted)]">
                toolkit.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-end"
          >
            <p className="max-w-lg text-sm leading-7 text-[var(--text-secondary)]">
              A decade of experience building digital products
              across frontend, backend, e-commerce and modern
              web platforms.
            </p>
          </motion.div>

        </div>

        {/* ================= SKILL LIST ================= */}

        <div className="mt-20">

          {skillGroups.map((group, index) => (

            <motion.article
              key={group.number}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                border-t
                border-[var(--border)]
                py-10
                md:py-12
              "
            >

              {/* Desktop layout */}
              <div
                className="
                  grid
                  gap-8
                  md:grid-cols-[60px_minmax(240px,0.8fr)_minmax(0,1.2fr)]
                  md:items-start
                  md:gap-10
                "
              >

                {/* Number */}

                <div>
                  <span className="text-sm font-medium text-[var(--accent)]">
                    {/* {group.number} */}
                  </span>
                </div>

                {/* Category */}

                <div>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      tracking-tight
                      text-[var(--text)]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      md:text-3xl
                    "
                  >
                    {group.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-sm
                      text-sm
                      leading-7
                      text-[var(--text-secondary)]
                    "
                  >
                    {group.description}
                  </p>

                </div>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2">

                  {group.skills.map((skill) => (

                    <motion.span
                      key={skill}
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
                        cursor-default
                        rounded-full
                        border
                        border-[var(--border)]
                        bg-[var(--background)]
                        px-4
                        py-2
                        text-sm
                        text-[var(--text-secondary)]
                        transition-all
                        duration-300
                        hover:border-[var(--accent)]
                        hover:bg-[var(--accent-soft)]
                        hover:text-[var(--accent)]
                      "
                    >
                      {skill}
                    </motion.span>

                  ))}

                </div>

              </div>

            </motion.article>

          ))}

        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            flex
            flex-col
            gap-6
            border-t
            border-[var(--border)]
            pt-10
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <p className="max-w-2xl text-sm leading-7 text-[var(--text-muted)]">
            I focus on choosing the right technology for the
            problem rather than using technology for its own sake.
          </p>

          <p className="text-sm font-medium text-[var(--accent)]">
            React · Laravel · Wordpress · Shopify · Node.js · Tailwind CSS · TypeScript
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default Skills;