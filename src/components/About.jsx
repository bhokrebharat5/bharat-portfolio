function About() {
  return (
    <section
      id="about"
      className="border-t border-[var(--border)] px-5 py-28 md:px-8"
    >
      <div className="mx-auto max-w-7xl">



        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
              About Me
            </p>

            {/* <div className="relative z-20 md:max-w-[480px] mt-10 col:max-w-[350px]">
              <div className="max-w-[350px] col:max-w-[350px]  text-center rounded-[10px] pb-[180px] bg-gradient-to-b to-[#1B1B19] from-[#2E2C1F] xl:ml-[20px] col:ml-0">
                <h2 className="text-[140px] col:text-[90px] text-[#FFE600] font-bold base-font">10+</h2>
                <span className="text-white text-[18px] font-normal ">Years of Experience</span>
              </div>

              <div className="absolute right-[170px] lg:right-[80px] col:right-0  bottom-10 max-w-[300px] col:max-w-[350px] px-[20px] py-[20px] rounded-[12px] z-10 bg-transparent flex items-center justify-center 
 before:absolute before:content before:left-0 before:top-0 before:w-full before:h-full before:opacity-[1] before:-z-20 before:rounded-[12px] before:bg-gradient-to-l to-[#939393] from-[#1c1a1a4d] 
 after:absolute after:left-[2px] after:top-[2px] after:w-[98%] after:h-[98%] after:content after:bg-[#2D2B1F] after:opacity-[.85] after:-z-10 after:rounded-[12px]">
                <h3 className="mr-[15px] w-[50%] text-[45px]  text-[#59C378] font-bold base-font flex items-center">
                  <span className="odometer" data-count="100">100</span>%
                </h3>
                <p className="text-[15px] w-[50%] text-white font-normal base-font">Clients Satisfections</p>
              </div>
            </div> */}

            <div
              className="
                relative
                z-20
                w-full
                max-w-[480px]
                mt-10
              "
            >
              {/* Content wrapper */}
              <div
                className="
                  relative
                  w-full
                  max-w-[350px]
                  mx-auto
                "
              >
                {/* Experience Card */}
                <div
                  className="
                    relative
                    w-full
                    max-w-[350px]
                    text-center
                    rounded-[10px]
                    pb-[180px]
                    bg-gradient-to-b
                    from-[#2E2C1F]
                    to-[#1B1B19]
                  "
                >
                  <h2
                    className="
                      text-[140px]
                      max-[500px]:text-[90px]
                      text-[#FFE600]
                      font-bold
                      base-font
                      leading-none
                      pt-[35px]
                    "
                  >
                    10+
                  </h2>

                  <span
                    className="
                      block
                      text-white
                      text-[18px]
                      max-[500px]:text-[16px]
                      font-normal
                      mt-[40px]
                    "
                  >
                    Years of Experience
                  </span>
                </div>

                {/* Client Satisfaction Card */}
                <div
                  className="
                    absolute
                    z-10
                    bottom-[40px]

                    /* Desktop positioning */
                    right-[-20px]

                    /* Large desktop */
                    xl:right-[-20px]

                    /* Tablet */
                    lg:right-[-10px]

                    /* Mobile */
                    max-[500px]:right-auto
                    max-[500px]:left-1/2
                    max-[500px]:-translate-x-1/2

                    /* Width */
                    w-[300px]
                    max-[500px]:w-[calc(100%-20px)]

                    max-w-[300px]
                    max-[500px]:max-w-[330px]

                    px-[20px]
                    py-[20px]

                    rounded-[12px]

                    bg-transparent

                    flex
                    items-center
                    justify-center

                    before:absolute
                    before:content-['']
                    before:left-0
                    before:top-0
                    before:w-full
                    before:h-full
                    before:opacity-100
                    before:-z-20
                    before:rounded-[12px]
                    before:bg-gradient-to-l
                    before:from-[#939393]
                    before:to-[#1c1a1a4d]

                    after:absolute
                    after:left-[2px]
                    after:top-[2px]
                    after:w-[calc(100%-4px)]
                    after:h-[calc(100%-4px)]
                    after:content-['']
                    after:bg-[#2D2B1F]
                    after:opacity-[.85]
                    after:-z-10
                    after:rounded-[12px]
                  "
                >
                  <h3
                    className="
                      mr-[15px]
                      w-1/2
                      text-[45px]
                      max-[500px]:text-[40px]
                      text-[#59C378]
                      font-bold
                      base-font
                      flex
                      items-center
                    "
                  >
                    <span className="odometer">100</span>%
                  </h3>

                  <p
                    className="
                      w-1/2
                      text-[15px]
                      max-[500px]:text-[14px]
                      text-white
                      font-normal
                      base-font
                    "
                  >
                    Clients Satisfections
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>

            <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em] md:text-6xl">
              I turn complex ideas into
              <span className="text-[var(--text-muted)]">
                {" "}simple, scalable products.
              </span>
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

              <p className="text-base leading-8 text-[var(--text-secondary)]">
                With 10+ years of experience, I work across frontend,
                backend, CMS and e-commerce ecosystems to create
                reliable digital products.
              </p>

              <p className="text-base leading-8 text-[var(--text-secondary)]">
                My experience covers e-commerce, healthcare, fintech,
                fitness and modern SaaS applications, including
                complex APIs and third-party integrations.
              </p>

            </div>

            <div className="mt-12 grid grid-cols-1 border-y border-[var(--border)]">

              <ul className="flex flex-wrap mx-[-15px]">
                <li
                  className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#ff9a0099] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]"
                >
                  <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center">
                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center">
                      <span className="odometer" data-count="300+">300+</span>
                    </h3>
                    <p className="font-normal text-[16px] text-[#FF9A00]">Projects</p>
                  </div>
                </li>
                <li
                  className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#00a9ff99] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]"
                >
                  <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center">
                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center">
                      <span className="odometer" data-count="15">15</span>
                    </h3>
                    <p className="font-normal text-[16px] text-[#00A9FF]">Shopify Apps</p>
                  </div>
                </li>
                <li
                  className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#9e00ff99] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]"
                >
                  <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center">
                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center">
                      <span className="odometer" data-count="40">4</span>
                    </h3>
                    <p className="font-normal text-[16px] text-[#AD00FF]">Domains</p>
                  </div>
                </li>
              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;