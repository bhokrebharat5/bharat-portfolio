import { ArrowUpRight, Mail, MapPin } from "lucide-react";


function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--border)] px-5 py-28 md:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr]">

          {/* Main CTA */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
              Contact
            </p>

            <h2 className="mt-6 max-w-5xl text-6xl font-bold leading-[0.9] tracking-[-0.055em] md:text-8xl">
              Have an idea?
              <br />
              <span className="text-[var(--text-muted)]">
                Let's build it.
              </span>
            </h2>

            <a
              href="mailto:bharatbhokre33@gmail.com"
              className="group mt-10 inline-flex items-center gap-3 border-b border-[var(--text)] pb-2 text-lg font-medium"
            >
              bharatbhokre33@gmail.com

              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <div className="flex flex-wrap gap-3 mt-10">

              <a
                href="https://github.com/bhokrebharat5"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  border
                  border-[var(--border)]
                  px-5
                  py-2.5
                  text-sm
                  text-[var(--text-secondary)]
                  transition-all
                  hover:-translate-y-1
                  hover:border-[var(--accent)]
                  hover:text-[var(--accent)]
                "
              >
                GitHub ↗
              </a>

              <a
                href="http://www.linkedin.com/in/bharat-bhokre-a19a06345"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  border
                  border-[var(--border)]
                  px-5
                  py-2.5
                  text-sm
                  text-[var(--text-secondary)]
                  transition-all
                  hover:-translate-y-1
                  hover:border-[var(--accent)]
                  hover:text-[var(--accent)]
                "
              >
                LinkedIn ↗
              </a>

            </div>


          </div>

          {/* Contact details */}
          <div className="flex flex-col justify-end">

            <div className="border-t border-[var(--border)] pt-6">

              <div className="flex items-start gap-4">
                <Mail
                  size={19}
                  className="mt-1 text-blue-500"
                />

                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--text-muted)]">
                    Email
                  </p>

                  <a
                    href="mailto:bharatbhokre33@gmail.com"
                    className="mt-2 block text-sm text-[var(--text-secondary)] hover:text-[var(--text)]"
                  >
                    bharatbhokre33@gmail.com
                  </a>
                </div>
              </div>



            </div>

            <div className="mt-8 border-t border-[var(--border)] pt-6">

              <div className="flex items-start gap-4">
                <MapPin
                  size={19}
                  className="mt-1 text-blue-500"
                />

                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--text-muted)]">
                    Based in
                  </p>

                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    Indore, Madhya Pradesh, India
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;