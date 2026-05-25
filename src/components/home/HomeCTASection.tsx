import ScrollReveal from "@/components/ewm/ScrollReveal";
import ctaBg from "@/assets/cta-bg.png";

const HomeCTASection = () => {
  return (
    <section
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] px-5 py-16 sm:px-10 sm:py-20 lg:py-24"
          style={{
            backgroundImage: `url(${ctaBg})`,
            backgroundSize: "cover",
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
                className="mb-6 font-heading text-[32px] font-semibold leading-[1.1] sm:text-[52px] lg:text-[64px]"
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
                className="mx-auto mb-10 max-w-[640px] text-[14px] leading-relaxed sm:text-[15px]"
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
