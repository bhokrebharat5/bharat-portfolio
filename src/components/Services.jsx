import { Education } from './index';

const services = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Scalable web applications with React, TypeScript, Node.js and Laravel.",
  },
  {
    number: "02",
    title: "E-commerce",
    description:
      "Custom Shopify and WooCommerce solutions focused on performance and conversion.",
  },
  {
    number: "03",
    title: "WordPress & WooCommerce",
    description:
      "Custom themes, plugins and business-focused WordPress solutions.",
  },
  {
    number: "04",
    title: "API & Backend",
    description:
      "Reliable REST APIs, integrations and backend architecture for modern products.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="border-t border-[var(--border)] px-5 py-28 md:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-2">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
              Services
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl">
              What I
              <br />
              <span className="text-[var(--text-muted)]">
                do best.
              </span>
            </h2>
          </div>

          <div className="md:pt-12">
            <p className="max-w-lg text-base leading-8 text-[var(--text-secondary)]">
              I help companies turn ideas into reliable digital
              products—from frontend experiences and APIs to
              e-commerce platforms and custom business systems.
            </p>
          </div>

        </div>

        <div className="mt-20 ">
          <Education services={services} /> 
        </div>

      </div>
    </section>
  );
}

export default Services;