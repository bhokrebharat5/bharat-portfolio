import SliderImport from "react-slick";
import { motion } from "framer-motion";

import { useMediaQuery } from '../hooks/useMediaQuery';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
} from "lucide-react";

const Slider = SliderImport.default ?? SliderImport;

const projects = [
  {
    number: "01",
    title: "MTX-Engines",
    category: "AI AGENT PLATFORM",
    description:
      "A multi-tenant platform for managing AI agents, tools, workflows and widgets with real-time streaming and visual workflow management.",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind",
      "Supabase",
    ],
    featured: true,
    link: "https://mxengine.ai/",
    image: "/projects/mtx-engines.jpg",
  },
  {
    number: "02",
    title: "Fundly.ai",
    category: "FINTECH PLATFORM",
    description:
      "A healthcare embedded-finance platform with financial transaction pages, payment scheduling and a multi-vendor administration system.",
    technologies: [
      "React",
      "Typescript",
      "Node.js",
      "CodeIgniter",
      "MySQL",
    ],
    link: "https://fundly.ai",
    image: "/projects/fundly.jpg",
  },
  {
    number: "03",
    title: "Space Jammit",
    category: "CLOUD STORAGE",
    description:
      "A secure cloud storage experience supporting deep folder structures, drag-and-drop operations and file management.",
    technologies: [
      "React.js",
      "Typescript",
      "Node.js",
      "Express.js",
      "MySQL",
    ],
    link: "https://spacejammit.com/",
    image: "/projects/space-jammit.jpg",
  },
  {
    number: "04",
    title: "Real Profit Analytics",
    category: "SHOPIFY ANALYTICS APP",
    description:
      "Analytics application that calculates merchant profitability using shipping costs, payment fees and product costs.",
    technologies: [
      "Laravel",
      "MySQL",
      "React.js",
      "JavaScript",
      "Shopify API",
    ],
    link: "https://apps.shopify.com/real-profit-analytics",
    image: "/projects/real-profit.jpg",
  },
  {
    number: "05",
    title: "Oky",
    category: "HEALTH & MOBILE BACKEND",
    description:
      "High-performance backend services and predictive REST APIs based on historical customer data.",
    technologies: [
      "Node.js",
      "REST API",
    ],
    link: "https://www.okyapp.info/",
    image: "/projects/oky.jpg",
  },
];

const shopifyApp = [
  {
    id: "shopify-01",
    title: "My Wishlist",
    description:
      "A Shopify wishlist app that lets customers save their favorite products, manage their wishlist, and easily share it with friends and family through email. Built with a focus on seamless Shopify integration, responsive UI, and a smooth customer experience.",
    technologies: [
      "Javascript",
      "Laravel",
      "MySql",
      "Shopify API",
    ],
    link: "https://apps.shopify.com/mywishlist",
    image: "/shopify/my-wishlist.jpg",
  },
  {
    id: "shopify-02",
    title: "Persistent & Share Cart",
    description:
      "A Shopify cart-sharing app that allows customers to save their cart and easily share it with friends through email, social media, or a shareable link. Recipients can open the shared cart on any device and proceed directly to checkout, while merchants can customize the floating cart icon to match their store theme.",
    technologies: [
      "Javascript",
      "Laravel",
      "MySql",
      "Shopify API",
    ],
    link: "https://apps.shopify.com/persistent-share-cart",
    image: "/shopify/persistent-share-cart.jpg",
  },
  {
    id: "shopify-03",
    title: "AI: Loyalty, Referrals & More",
    description:
      "A Shopify app that leverages AI to enhance loyalty programs, referral systems, and customer engagement.",
    technologies: [
      "Javascript",
      "Laravel",
      "MySql",
      "Shopify API",
    ],
    link: "https://apps.shopify.com/hubify-earn-loyalty-rewards",
    image: "/shopify/earn-loyalty-rewards.jpg",
  },
  {
    id: "shopify-04",
    title: "Volume Discount by Hubify",
    description:
      "A Shopify app that allows merchants to set up volume and tiered pricing for their products, enabling customers to receive discounts based on the quantity purchased. This app helps increase sales and customer satisfaction by providing flexible pricing options.",
    technologies: [
      "Javascript",
      "Laravel",
      "MySql",
      "Shopify API",
    ],
    link: "https://apps.shopify.com/volume-tiered-pricing",
    image: "/shopify/volume-tiered-pricing.jpg",
  },
  {
    id: "shopify-05",
    title: "Quick Stock Notifier ‑ Instock",
    description:
      "A Shopify app that notifies customers when their desired products are back in stock, helping to reduce abandoned carts and improve the overall shopping experience.",
    technologies: [
      "Javascript",
      "Laravel",
      "MySql",
      "Shopify API",
    ],
    link: "https://apps.shopify.com/back-in-stock-notification-1",
    image: "/shopify/back-in-stock-notification.jpg",
  },
  {
    id: "shopify-06",
    title: "Hubify ‑ Amazing Zoom Features",
    description:
      "A Shopify app that provides amazing zoom features for product images, enhancing the shopping experience.",
    technologies: [
      "Javascript",
      "Laravel",
      "MySql",
      "Shopify API",
    ],
    link: "https://apps.shopify.com/pinch-zoom",
    image: "/shopify/amazing-zoom-features.jpg",
  },
  {
    id: "shopify-07",
    title: "Hubify Product Custom Options",
    description:
      "A Shopify app that allows merchants to add custom options to their products, providing a more personalized shopping experience.",
    technologies: [
      "Javascript",
      "Laravel",
      "MySql",
      "Shopify API",
    ],
    link: "https://apps.shopify.com/unlimited-custom-options-1",
    image: "/shopify/product-custom-options.jpg",
  },
];

const wordpressContent = [{
  id: 'wordpress-project-1',
  title: "Studio SWEAT onDemand",
  description:
    "Built a scalable virtual fitness platform that delivers on-demand workouts, live classes, personalized fitness experiences, and business-focused wellness solutions across multiple devices.",
  technologies: [
    "Wordpress",
    "Woocommerce",
    "Custom Post Type",
    "Optimized Performance",
    "Video Streaming",
    "Admin Dashboard",
    "Membership",
    "Customized and development the plugin",      
    "Scalable Web Application",
    "Subscription for Live Classes",
    "Trainer Platform",
    "Integrating Landing Pages"    
  ],
  link: "https://www.studiosweatondemand.com/",
  image: "/wordpress/studio-sweat-ondemand.jpg",
},
{
  id: 'wordpress-project-2',
  title: "Resmed",
  description: "A user-focused digital healthcare platform connecting customers with innovative sleep and respiratory care solutions through product discovery, online shopping, sleep assessments, and therapy support.",
  technologies: [
    "Wordpress",
    "Healthcare Platform",
    "Woocommerce",
    "Responsive Web Design",
    "Customer Support",
    "Product Discovery",
    "Online Shopping",
    "Sleep Assessments",
    "Therapy Support",
    "Payment Integration",
    "User-Friendly UI",
    "Admin Dashboard",
    "JQuery",
  ],
  link: "https://www.resmed.co.in/",
  image: "/wordpress/resmed.jpg",
},
{
  id: 'wordpress-project-3',
  title: "The Balesky Experience",
  description: "A modern spiritual wellness platform offering online psychic readings, spiritual coaching, meditation training, webinars, and personalized guidance through a seamless booking and e-commerce experience.",
  technologies: [
    "Wordpress",
    "Woocommerce",
    "Responsive Web Design",
    "Payment Integration",
    "User-Friendly UI",
    "Admin Dashboard",
    "JQuery",
    "Membership",
    "live events",
    "Video Conferencing",
    "Online Services",
    "Testimonials",
    "Online Booking",
    "PDF Readings",
    "Spiritual Coaching"
  ],
  link: "https://thebaleskyexperience.com/",
  image: "/wordpress/thebaleskyexperience.jpg",
},
{
  id: 'wordpress-project-4',
  title: "Santaluz",
  description: "A premium community website showcasing Santaluz’s luxury residential lifestyle, world-class golf, amenities, events, residences, and strong connection to nature in San Diego.",
  technologies: [
    "Wordpress",
    "Woocommerce",
    "Customized plugins",
    "Payment Integration",
    "Membership",
    "Luxury Community",
    "Club & Spa Services Management",
    "Community Events Services",
    "Real Estate Listings",
    "Responsive Web Design",
    "User-Friendly UI",
    "Admin Dashboard",
    "JQuery",
  ],
  link: "https://santaluzcommunity.com/",
  image: "/wordpress/santaluz.jpg",
}]


function Projects() {

  const isMobile = useMediaQuery('(max-width: 639px)');
  const isTablet = useMediaQuery('(max-width: 1023px)');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: false,
  };


  return (

    <section
      id="projects"
      className="
        overflow-hidden
        border-t
        border-[var(--border)]
        bg-[var(--background)]
        px-5
        py-28
        transition-colors
        duration-300
        md:px-8
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              <span className="h-px w-6 bg-[var(--accent)]" />
              Selected Work
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Projects
              <br />
              <span className="text-[var(--text-muted)]">
                I've built.
              </span>
            </h2>
          </motion.div>

          <p className="max-w-sm text-sm leading-7 text-[var(--text-secondary)]">
            A selection of products, platforms and applications
            I've designed and developed throughout my career.
          </p>
        </div>

        {/* Projects */}
        <div className="relative mt-20">

          <Slider {...settings}>
            {projects.map((project, index) => (
              <div
                key={project.number}
                className="px-2.5 pb-10 md:px-3"
              >
                <motion.article
                  initial={{
                    opacity: 0,
                    y: 30,
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
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[var(--border)]
                    bg-[var(--surface)]
                  "
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.06 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />

                    <div className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/50
                      via-transparent
                      to-transparent
                      opacity-60
                    " />

                    <div className="absolute left-4 top-4">
                      <span className="
                        rounded-md
                        border
                        border-white/20
                        bg-black/30
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        tracking-[0.15em]
                        text-white
                        backdrop-blur-md
                      ">
                        {project.category}
                      </span>
                    </div>

                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        whileHover={{
                          scale: 1.05,
                        }}
                        className="
                          absolute
                          bottom-4
                          right-4
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-white
                          text-black
                          opacity-0
                          transition-opacity
                          duration-300
                          group-hover:opacity-100
                        "
                      >
                        <ArrowUpRight size={18} />
                      </motion.a>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    <h3 className="
                      text-2xl
                      font-bold
                      tracking-tight
                      text-[var(--text)]
                      md:text-3xl
                    ">
                      {project.title}
                    </h3>

                    <p className="
                        mt-3
                        line-clamp-3
                        text-sm
                        leading-6
                        text-[var(--text-secondary)]
                      ">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-full
                            border
                            border-[var(--border)]
                            bg-[var(--background)]
                            px-3
                            py-1.5
                            text-[11px]
                            text-[var(--text-muted)]
                            duration-300
                            hover:border-[var(--accent)]
                            hover:bg-[var(--accent-soft)]
                            hover:text-[var(--accent)]
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <div className="
                          mt-6
                          flex
                          items-center
                          justify-between
                          border-t
                          border-[var(--border)]
                          pt-5
                        ">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex
                            items-center
                            gap-2
                            text-xs
                            font-medium
                            text-[var(--text-secondary)]
                            transition-colors
                            hover:text-[var(--accent)]
                          "
                        >
                          <ExternalLink size={14} />
                          Live Project
                        </a>
                      </div>
                    )}
                  </div>
                </motion.article>
              </div>
            ))}
          </Slider>

        </div>

        {/* Wordpress highlight */}
        <div className="mt-10 border-t border-[var(--border)] pt-12" >

          <div className="grid gap-8 md:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
                WordPress Development & Solutions
              </p>

              <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
                Empowering Businesses with Scalable
                <br />
                <span className="text-blue-500">WordPress & WooCommerce Solutions</span>.
              </h3>
            </div>

            <div className="flex flex-wrap content-start gap-3">
              <p className="max-w-sm text-sm leading-7 text-[var(--text-secondary)]">
                Creating scalable WordPress & WooCommerce e-commerce solutions with seamless shopping experiences, responsive design, optimal performance, and powerful business functionality.
              </p>
            </div>

          </div>

          {/* Wordpress slider */}
          <div className="relative mt-20">

            <Slider {...settings}>
              {wordpressContent.map((app, index) => (
                <div
                  key={app.id}
                  className="px-2.5 pb-10 md:px-3"
                >
                  <motion.article
                    initial={{
                      opacity: 0,
                      y: 30,
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
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    className="
                        group
                        overflow-hidden
                        rounded-2xl
                        border
                        border-[var(--border)]
                        bg-[var(--surface)]
                      "
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <motion.img
                        src={app.image}
                        alt={`${app.title} project preview`}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.06 }}
                        transition={{
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />

                      <div className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/50
                          via-transparent
                          to-transparent
                          opacity-60
                        " />

                      {app.link && (
                        <motion.a
                          href={app.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{
                            opacity: 0,
                            scale: 0.8,
                          }}
                          whileHover={{
                            scale: 1.05,
                          }}
                          className="
                            absolute
                            bottom-4
                            right-4
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-black
                            opacity-0
                            transition-opacity
                            duration-300
                            group-hover:opacity-100
                          "
                        >
                          <ArrowUpRight size={18} />
                        </motion.a>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6">
                      <h3 className="
                        text-2xl
                        font-bold
                        tracking-tight
                        text-[var(--text)]
                        md:text-3xl
                      ">
                        {app.title}
                      </h3>

                      <p className="
                        mt-3
                        line-clamp-3
                        text-sm
                        leading-6
                        text-[var(--text-secondary)]
                      ">
                        {app.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {app.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="
                              rounded-full
                              border
                              border-[var(--border)]
                              bg-[var(--background)]
                              px-3
                              py-1.5
                              text-[9px]
                              text-[var(--text-muted)]
                              duration-300
                              hover:border-[var(--accent)]
                              hover:bg-[var(--accent-soft)]
                              hover:text-[var(--accent)]
                            "
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      {app.link && (
                        <div className="
                            mt-6
                            flex
                            items-center
                            justify-between
                            border-t
                            border-[var(--border)]
                            pt-5
                          ">
                          <a
                            href={app.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex
                                items-center
                                gap-2
                                text-xs
                                font-medium
                                text-[var(--text-secondary)]
                                transition-colors
                                hover:text-[var(--accent)]
                              "
                          >
                            <ExternalLink size={14} />
                            Live Project
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.article>
                </div>
              ))}
            </Slider>

          </div>

        </div>

        {/* Shopify highlight */}
        <div className="mt-10 border-t border-[var(--border)] pt-12" >

          <div className="grid gap-8 md:grid-cols-2">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
                Shopify Applications
              </p>

              <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
                Building tools for
                <br />
                <span className="text-blue-500">Shopify merchants</span>.
              </h3>
            </div>

            <div className="flex flex-wrap content-start gap-3">
              <p className="max-w-sm text-sm leading-7 text-[var(--text-secondary)]">
                Building modern, scalable, and user-focused digital experiences.
              </p>
            </div>

          </div>

          {/* Shopify slider */}
          <div className="relative mt-20">

            <Slider {...settings}>
              {shopifyApp.map((app, index) => (
                <div
                  key={app.id}
                  className="px-2.5 pb-10 md:px-3"
                >
                  <motion.article
                    initial={{
                      opacity: 0,
                      y: 30,
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
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    className="
                        group
                        overflow-hidden
                        rounded-2xl
                        border
                        border-[var(--border)]
                        bg-[var(--surface)]
                      "
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <motion.img
                        src={app.image}
                        alt={`${app.title} project preview`}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.06 }}
                        transition={{
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />

                      <div className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/50
                          via-transparent
                          to-transparent
                          opacity-60
                        " />

                      {app.link && (
                        <motion.a
                          href={app.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{
                            opacity: 0,
                            scale: 0.8,
                          }}
                          whileHover={{
                            scale: 1.05,
                          }}
                          className="
                            absolute
                            bottom-4
                            right-4
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-black
                            opacity-0
                            transition-opacity
                            duration-300
                            group-hover:opacity-100
                          "
                        >
                          <ArrowUpRight size={18} />
                        </motion.a>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6">
                      <h3 className="
                        text-2xl
                        font-bold
                        tracking-tight
                        text-[var(--text)]
                        md:text-3xl
                      ">
                        {app.title}
                      </h3>

                      <p className="
                        mt-3
                        line-clamp-3
                        text-sm
                        leading-6
                        text-[var(--text-secondary)]
                      ">
                        {app.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {app.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="
                              rounded-full
                              border
                              border-[var(--border)]
                              bg-[var(--background)]
                              px-3
                              py-1.5
                              text-[11px]
                              text-[var(--text-muted)]
                              duration-300
                              hover:border-[var(--accent)]
                              hover:bg-[var(--accent-soft)]
                              hover:text-[var(--accent)]
                            "
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      {app.link && (
                        <div className="
                            mt-6
                            flex
                            items-center
                            justify-between
                            border-t
                            border-[var(--border)]
                            pt-5
                          ">
                          <a
                            href={app.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex
                                items-center
                                gap-2
                                text-xs
                                font-medium
                                text-[var(--text-secondary)]
                                transition-colors
                                hover:text-[var(--accent)]
                              "
                          >
                            <ExternalLink size={14} />
                            Live Project
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.article>
                </div>
              ))}
            </Slider>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;