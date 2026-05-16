import React from "react";
import { personalInfo } from "../data/PortfolioData";
import rohanImage from "../assets/rohan.jpg";
import myCV from '../assets/myCV.pdf';
import SplitText from "./reactbits/SplitText";
import ScrollReveal from "./reactbits/ScrollReveal";
import AbstractBackground from "./AbstractBackground";

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
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-14 overflow-hidden bg-[#FBFAFC] dark:bg-gray-950 transition-colors duration-300">
      {/* Decorative background layers */}
      <AbstractBackground variant="waves" opacity={0.08} colorClass="text-sky-500 dark:text-sky-500" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(251,250,252,0.98)_0%,rgba(239,246,255,0.72)_48%,rgba(251,250,252,0.98)_100%)] dark:bg-[linear-gradient(115deg,rgba(15,23,42,0.98)_0%,rgba(12,34,66,0.48)_48%,rgba(15,23,42,0.98)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:72px_72px] dark:bg-[linear-gradient(90deg,rgba(37,99,235,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(14,165,233,0.06)_1px,transparent_1px)]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text content */}
          <div className="hero-left-content text-left">
            <ScrollReveal delay={0.1} direction="up" distance={20} startAnimation={splashDone}>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#2563EB] dark:text-[#60A5FA] mb-4">
                APIs THAT SHIP. INFRA THAT SCALES.
              </p>
            </ScrollReveal>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-[1.04] tracking-normal text-[#0F172A] dark:text-white">
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
            </h1>

            <ScrollReveal delay={0.4} direction="up" distance={20} startAnimation={splashDone}>
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
            </ScrollReveal>

            <ScrollReveal delay={0.6} direction="up" distance={20} startAnimation={splashDone}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-3.5 font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/20"
                >
                  View Projects
                </a>
                <a
                  href={myCV}
                  download="umesh_cv.pdf"
                  className="inline-flex items-center justify-center rounded-full border-[1.5px] border-blue-600 bg-transparent px-8 py-3.5 font-medium text-blue-600 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:text-white"
                >
                  Download CV
                </a>
                <a
                  href="https://github.com/umess-ss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 font-medium text-gray-500 transition-colors hover:text-blue-600"
                >
                  View GitHub
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Profile image with decorative ring */}
          <ScrollReveal delay={0.3} direction="right" distance={60} startAnimation={splashDone}>
            <div className="flex justify-center md:-translate-y-3 lg:-translate-y-4">
              <div className="relative">
                <div className="absolute -inset-5 rounded-full border border-blue-200 dark:border-blue-600/50" />
                <div className="absolute -inset-10 rounded-full border border-sky-200/70 dark:border-sky-500/40" />
                <img
                  src={rohanImage}
                  alt="Umesh Rajbanshi — Backend and Cloud Engineer"
                  className="w-72 h-72 md:w-[21rem] md:h-[21rem] lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl shadow-blue-500/20 ring-8 ring-white dark:shadow-blue-500/20 dark:ring-gray-900"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
