import ScrollReveal from "@/components/ewm/ScrollReveal";
import ctaBg from "@/assets/cta-bg.png";

const HomeCTASection = () => {
  return (
    <section
      className="relative overflow-hidden py-10 sm:py-14 lg:py-16"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="relative mx-auto w-full max-w-[1100px] px-6 sm:px-10 lg:px-16">
        <div
          className="relative mx-auto overflow-hidden rounded-[20px] sm:rounded-[28px] px-5 py-10 sm:px-8 sm:py-12 lg:py-14"
          style={{
            backgroundImage: `url(${ctaBg})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 mx-auto flex max-w-[900px] flex-col items-center text-center">
            <ScrollReveal animation="fadeUp" duration={0.6}>
              <span
                className="mb-6 inline-block text-[11px] font-semibold uppercase tracking-[0.25em]"
                style={{ color: "#30E8BA" }}
              >
                Ready to Transform ?
              </span>
            </ScrollReveal>

            <ScrollReveal animation="clipReveal" duration={1} delay={0.1}>
              <h2
                className="mb-5 font-heading text-[26px] font-semibold leading-[1.15] sm:text-[40px] lg:text-[52px]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #4D4D4D 0%, #FFFFFF 50.48%, #4D4D4D 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Building the Future
                <br />
                of Intelligent Manufacturing
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" duration={0.7} delay={0.25}>
              <p
                className="mx-auto mb-7 max-w-[560px] text-[13px] leading-relaxed sm:text-[14px]"
                style={{ color: "#BDBDBD" }}
              >
                The next decade will fundamentally shift how manufacturing operates, and AI analytics and
                data-driven insights will redefine how industries plan, produce, and deliver.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" duration={0.6} delay={0.4}>
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-medium transition-transform hover:scale-105 sm:px-7 sm:py-3 sm:text-[13px]"
                  style={{ background: "#FFFFFF", color: "#0A0A0A" }}
                >
                  Contact Us
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </a>

                <button
                  className="rounded-full px-5 py-2.5 text-[12px] font-medium text-white transition-transform hover:scale-105 sm:px-7 sm:py-3 sm:text-[13px]"
                  style={{ background: "transparent" }}
                >
                  Explore More
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTASection;
