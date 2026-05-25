import globeBg from "@/assets/globe-bg.mp4";

const ConsultingSection = () => {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#000' }}>
      <video
        src={globeBg}
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover top-[-3rem] sm:top-[-4rem] md:top-[-5rem]"
      />
      <div className="absolute w-full h-full top-[-3rem] sm:top-[-4rem] md:top-[-5rem] bg-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] xl:max-w-[1440px] px-5 sm:px-8 md:px-14 lg:px-20 py-24 sm:py-32 md:py-40 text-center">
        <div className="mb-8">
          <div className="inline-block">
            <p
              className="text-white text-[15px] sm:text-[17px] tracking-wide font-normal"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Who we are
            </p>
            <div className="w-[60%] h-[2px] bg-white mx-auto" />
          </div>
        </div>

        <h2
          className="text-white text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-semibold leading-[1.05] mb-10"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Built for Visionaries.
        </h2>

        <p className="text-white text-[18px] sm:text-[22px] md:text-[26px] leading-[1.5] mb-2">
          Transforming ideas into{" "}
          <span
            className="inline-block"
            style={{
              fontFamily: "'Special Elite', cursive",
              borderBottom: '3px solid',
              borderImageSource:
                'linear-gradient(90deg, #FE9300 -22.47%, #C02142 36.41%, #FE9300 100%)',
              borderImageSlice: 1,
            }}
          >
            scalable digital experiences
          </span>
        </p>
        <p className="text-white text-[18px] sm:text-[22px] md:text-[26px] leading-[1.5] mb-10">
          through AI, strategy, and engineering.
        </p>

        <p className="text-white/60 text-[14px] sm:text-[15px] max-w-2xl mx-auto leading-relaxed">
          No complexity. No disconnected teams. Just seamless{" "}
          <span className="text-white font-semibold">innovation - designed</span>{" "}
          experience by experience.
        </p>
      </div>
    </section>
  );
};

export default ConsultingSection;
