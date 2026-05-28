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
            <MotionDiv {...motionProps(heroItem(0.08))}>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#2563EB] dark:text-[#60A5FA] mb-4">
                APIs THAT SHIP. INFRA THAT SCALES.
              </p>
            </MotionDiv>

            <MotionH1 {...motionProps(heroItem(0.16))} className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-[1.04] tracking-normal text-[#0F172A] dark:text-white">
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
                  startAnimation={splashDone}
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none select-none bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] bg-clip-text text-transparent"
                >
                  {personalInfo.name}
                </span>
              </span>
            </MotionH1>

            <MotionDiv {...motionProps(heroItem(0.28))}>
              <div className="mb-7 max-w-xl">
                <p className="text-xl md:text-2xl font-medium text-[#0F172A] dark:text-gray-200 mb-4">
                  Python Backend & Cloud Engineer
                </p>
                <div className="flex flex-col gap-2 mb-4">
                  {heroSkillRows.map((row) => (
                    <div key={row.join("-")} className="flex flex-wrap gap-2">
                      {row.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3.5 py-1.5 text-sm font-semibold text-[#2563EB] shadow-sm shadow-blue-500/20 backdrop-blur transition-colors duration-300 hover:border-blue-600 hover:text-blue-600 dark:border-blue-600/60 dark:bg-blue-600/10 dark:text-blue-100 dark:shadow-none"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
                <p className="text-base md:text-lg text-[#475569] dark:text-gray-300 leading-relaxed">
                  I've shipped production APIs and automated cloud infrastructure serving real users across AWS, Docker, and Terraform pipelines. I'm looking to join a team that moves fast and cares about what runs in production.
                </p>
                <div className="mt-4 flex flex-wrap gap-[10px]">
                  {["10+ Projects", "3+ Yrs Building", "AWS • Docker • CI/CD"].map((stat) => (
                    <span
                      key={stat}
                      className="inline-flex items-center rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3 py-1 text-sm font-medium text-[#2563EB] dark:text-blue-100 dark:bg-blue-600/10 dark:border-blue-600/60"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </MotionDiv>

            <MotionDiv {...motionProps(heroItem(0.4))}>
              <div className="flex flex-wrap gap-3">
                <AnimatedButton
                  as="a"
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-3.5 font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/20"
                >
                  View Projects
                </AnimatedButton>
                <AnimatedButton
                  as="a"
                  href={myCV}
                  download="umesh_cv.pdf"
                  className="inline-flex items-center justify-center rounded-full border-[1.5px] border-blue-600 bg-transparent px-8 py-3.5 font-medium text-blue-600 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:text-white"
                >
                  Download CV
                </AnimatedButton>
                <AnimatedButton
                  as="a"
                  href="https://github.com/umess-ss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 font-medium text-gray-500 transition-colors hover:text-blue-600"
                >
                  View GitHub
                </AnimatedButton>
              </div>
            </MotionDiv>
          </div>

          {/* Right — Profile image with decorative ring */}
          <MotionDiv {...motionProps(heroVisual)}>
            <div className="flex justify-center md:justify-end md:-translate-y-3 lg:-translate-y-4">
              <div className="hero-portrait-shell group relative grid place-items-center">
                <div className="hero-portrait-ambient absolute -inset-16 rounded-full" />
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
