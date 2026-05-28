import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { personalInfo } from "../data/PortfolioData";
import homeImage from "../assets/home.jpeg";
import myCV from '../assets/myCV.pdf';
import SplitText from "./reactbits/SplitText";
import AbstractBackground from "./AbstractBackground";
import AnimatedButton from "./motion/AnimatedButton";
import { easeOut } from "./motion/animations";

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MagicRings = React.lazy(() => import("./reactbits/MagicRings"));

const heroSkillRows = [
  [
    "Python",
    "Go",
    "FastAPI",
    "Node.js",
    "Next.js",
  ],
  [
    "Docker",
    "AWS",
    "Terraform",
    "GitHub Actions",
  ],
];

export default function Home({ splashDone = false }) {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = (delay = 0) => shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.18, delay: Math.min(delay, 0.1), ease: easeOut } },
      }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: easeOut } },
      };
  const visualIn = shouldReduceMotion
    ? fadeUp(0.12)
    : {
        hidden: { opacity: 0, y: 18, scale: 0.99 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.64, delay: 0.18, ease: easeOut } },
      };

  return (
    <section id="home" className="hero-section relative min-h-screen flex items-center overflow-hidden bg-[#FBFAFC] pt-20 pb-10 dark:bg-gray-950 transition-colors duration-300">
      {/* Decorative background layers */}
      <AbstractBackground variant="waves" opacity={0.08} colorClass="text-sky-500 dark:text-sky-500" />
      <div className="absolute inset-0 -z-10">
        <div className="portfolio-hero-bg absolute inset-0" />
        <div className="portfolio-hero-grid absolute inset-0" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-[4.5rem] xl:gap-20 items-center">
          {/* Left — Text content */}
          <div className="hero-left-content text-left">
            <MotionDiv variants={fadeUp(0.05)} initial="hidden" animate="visible">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#2563EB] dark:text-[#60A5FA] mb-4">
                APIs THAT SHIP. INFRA THAT SCALES.
              </p>
            </MotionDiv>

            <MotionH1 variants={fadeUp(0.12)} initial="hidden" animate="visible" className="max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-[1.06] tracking-normal text-[#0F172A] dark:text-white">
              I am
              <span className="relative block text-transparent align-baseline">
                <SplitText
                  text={personalInfo.name}
                  delay={36}
                  duration={0.6}
                  splitBy="chars"
                  from={{ opacity: 0, y: 34, scale: 0.94 }}
                  to={{ opacity: 1, y: 0, scale: 1 }}
                  tag="span"
                  startAnimation={true}
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none select-none bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] bg-clip-text text-transparent"
                >
                  {personalInfo.name}
                </span>
              </span>
            </MotionH1>

            <MotionDiv variants={fadeUp(0.22)} initial="hidden" animate="visible">
              <div className="mb-7 max-w-xl">
                <p className="text-lg md:text-xl font-medium text-[#0F172A] dark:text-gray-200 mb-5">
                  Python Backend & Cloud Engineer
                </p>
                <div className="flex flex-col gap-2.5 mb-5">
                  {heroSkillRows.map((row) => (
                    <div key={row.join("-")} className="flex flex-wrap gap-2.5">
                      {row.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-full border border-blue-400/25 bg-blue-500/[0.07] px-3.5 py-1.5 text-sm font-medium text-blue-700 transition-colors duration-200 hover:border-blue-500/45 hover:bg-blue-500/10 dark:border-blue-400/25 dark:bg-blue-400/[0.08] dark:text-blue-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
                <p className="text-base md:text-[1.0625rem] text-[#475569] dark:text-gray-300 leading-[1.75]">
                  I've shipped production APIs and automated cloud infrastructure serving real users across AWS, Docker, and Terraform pipelines. I'm looking to join a team that moves fast and cares about what runs in production.
                </p>
                <div className="mt-4 flex flex-wrap gap-[10px]">
                  {["10+ Projects", "3+ Yrs Building", "AWS • Docker • CI/CD"].map((stat) => (
                    <span
                      key={stat}
                      className="inline-flex items-center rounded-full border border-blue-400/20 bg-white/60 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-100 dark:bg-slate-900/50 dark:border-blue-400/25"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </MotionDiv>

            <MotionDiv variants={fadeUp(0.32)} initial="hidden" animate="visible">
              <div className="flex flex-wrap gap-3">
                <AnimatedButton
                  as="a"
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-8 py-3.5 font-medium text-white shadow-lg shadow-blue-500/20 transition-colors duration-200 hover:bg-[#1D4ED8]"
                >
                  View Projects
                </AnimatedButton>
                <AnimatedButton
                  as="a"
                  href={myCV}
                  download="umesh_cv.pdf"
                  className="inline-flex items-center justify-center rounded-full border border-blue-500/50 bg-transparent px-8 py-3.5 font-medium text-blue-600 transition-colors duration-200 hover:border-blue-600 hover:bg-blue-600/10 dark:text-blue-100"
                >
                  Download CV
                </AnimatedButton>
                <AnimatedButton
                  as="a"
                  href="https://github.com/umess-ss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 font-medium text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-sky-300"
                >
                  View GitHub
                </AnimatedButton>
              </div>
            </MotionDiv>
          </div>

          {/* Right — Profile image with decorative ring */}
          <MotionDiv variants={visualIn} initial="hidden" animate="visible">
            <div className="flex justify-center md:justify-end md:-translate-y-3 lg:-translate-y-4">
              <div className="hero-portrait-shell group relative grid place-items-center">
                <div className="hero-portrait-ambient absolute -inset-16 rounded-full" />
                {!shouldReduceMotion && (
                  <div className="pointer-events-none absolute -inset-16 z-[1] opacity-70" aria-hidden="true">
                    <React.Suspense fallback={null}>
                      <MagicRings
                        color="#2563EB"
                        colorTwo="#0EA5E9"
                        ringCount={5}
                        speed={0.55}
                        attenuation={12}
                        lineThickness={1.3}
                        baseRadius={0.31}
                        radiusStep={0.075}
                        scaleRate={0.055}
                        opacity={0.5}
                        blur={0}
                        noiseAmount={0.015}
                        rotation={-8}
                        ringGap={1.42}
                        fadeIn={0.85}
                        fadeOut={1.9}
                        followMouse={false}
                        hoverScale={1.04}
                        parallax={0}
                        clickBurst={false}
                      />
                    </React.Suspense>
                  </div>
                )}
                <div className="hero-portrait-ring hero-portrait-ring--inner absolute -inset-7 rounded-full" />
                <div className="hero-portrait-ring hero-portrait-ring--outer absolute -inset-12 rounded-full" />
                <div className="hero-portrait-glass absolute -inset-4 rounded-full" />
                <img
                  src={homeImage}
                  alt="Umesh Rajbanshi — Backend and Cloud Engineer"
                  className="hero-portrait-image relative z-10 h-[21rem] w-[21rem] rounded-full object-cover object-[50%_38%] transition-all duration-700 ease-out group-hover:scale-[1.025] md:h-[24.5rem] md:w-[24.5rem] lg:h-[27.5rem] lg:w-[27.5rem]"
                />
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
