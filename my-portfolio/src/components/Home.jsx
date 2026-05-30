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
  const heroItem = (delay = 0) => shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2, delay: Math.min(delay, 0.12), ease: easeOut } },
      }
    : {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.56, delay, ease: easeOut } },
      };
  const heroVisual = shouldReduceMotion
    ? heroItem(0.12)
    : {
        hidden: { opacity: 0, y: 20, scale: 0.985 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, delay: 0.24, ease: easeOut } },
      };
  const motionProps = (variants) => ({
    variants,
    initial: "hidden",
    animate: "visible",
  });

  return (
    <section id="home" className="hero-section relative min-h-screen flex items-center overflow-hidden bg-[#FBFAFC] pt-24 pb-14 dark:bg-slate-950 transition-colors duration-300">
      {/* Decorative background layers */}
      <AbstractBackground variant="waves" opacity={0.025} colorClass="text-sky-500 dark:text-sky-500" />
      <div className="absolute inset-0 -z-10">
        <div className="portfolio-hero-bg absolute inset-0" />
        <div className="portfolio-hero-grid absolute inset-0" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-[4.5rem] xl:gap-20 items-center">
          {/* Left — Text content */}
          <div className="hero-left-content max-w-[38rem] text-left">
            <MotionDiv {...motionProps(heroItem(0.08))}>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.13em] text-[#2563EB] dark:text-[#60A5FA]">
                APIs THAT SHIP. INFRA THAT SCALES.
              </p>
            </MotionDiv>

            <MotionH1 {...motionProps(heroItem(0.16))} className="mb-5 max-w-[34rem] text-4xl font-bold leading-[1.03] tracking-normal text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
              I am
              <span className="relative block text-[#2563EB] align-baseline dark:text-[#60A5FA]">
                <SplitText
                  text={personalInfo.name}
                  delay={36}
                  duration={0.6}
                  splitBy="chars"
                  from={{ opacity: 0, y: 34, scale: 0.94 }}
                  to={{ opacity: 1, y: 0, scale: 1 }}
                  tag="span"
                  startAnimation={splashDone}
                />
              </span>
            </MotionH1>

            <MotionDiv {...motionProps(heroItem(0.28))}>
              <div className="mb-8 max-w-[35rem]">
                <p className="mb-5 text-lg font-medium text-[#0F172A] dark:text-gray-200 md:text-xl">
                  Python Backend & Cloud Engineer
                </p>
                <div className="mb-6 flex flex-col gap-2">
                  {heroSkillRows.map((row) => (
                    <div key={row.join("-")} className="flex flex-wrap gap-2">
                      {row.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-full border border-blue-400/25 bg-blue-500/[0.06] px-3 py-1.5 text-sm font-medium text-blue-700 transition-colors duration-300 hover:border-blue-500/40 hover:bg-blue-500/[0.08] dark:border-blue-400/20 dark:bg-blue-400/[0.07] dark:text-blue-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
                <p className="max-w-[34rem] text-base leading-[1.75] text-[#475569] dark:text-gray-300 md:text-[1.0625rem]">
                  I've shipped production APIs and automated cloud infrastructure serving real users across AWS, Docker, and Terraform pipelines. I'm looking to join a team that moves fast and cares about what runs in production.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["10+ Projects", "3+ Yrs Building", "AWS • Docker • CI/CD"].map((stat) => (
                    <span
                      key={stat}
                      className="inline-flex items-center rounded-full border border-blue-400/20 bg-white/45 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-400/20 dark:bg-slate-950/20 dark:text-blue-100"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </MotionDiv>

            <MotionDiv {...motionProps(heroItem(0.4))}>
              <div className="flex flex-wrap items-center gap-3">
                <AnimatedButton
                  as="a"
                  href="#projects"
                  className="site-primary-action inline-flex items-center justify-center rounded-full px-8 py-3.5 font-medium transition-all duration-300 ease-out"
                >
                  View Projects
                </AnimatedButton>
                <AnimatedButton
                  as="a"
                  href={myCV}
                  download="umesh_cv.pdf"
                  className="site-secondary-action inline-flex items-center justify-center rounded-full px-8 py-3.5 font-medium transition-all duration-300 ease-out"
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
          <MotionDiv {...motionProps(heroVisual)} className="overflow-visible">
            <div className="flex justify-center overflow-visible md:justify-end md:-translate-y-2 lg:-translate-y-3">
              <div className="hero-portrait-shell group relative grid place-items-center overflow-visible">
                <div className="hero-portrait-ambient absolute -inset-10 rounded-full" />
                <div className="hero-portrait-frame absolute -inset-3 rounded-full" />
                <img
                  src={homeImage}
                  alt="Umesh Rajbanshi — Backend and Cloud Engineer"
                  className="hero-portrait-image relative z-10 h-[19rem] w-[19rem] rounded-full object-cover object-[50%_38%] transition-all duration-700 ease-out group-hover:scale-[1.015] md:h-[22rem] md:w-[22rem] lg:h-[24rem] lg:w-[24rem]"
                />
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
