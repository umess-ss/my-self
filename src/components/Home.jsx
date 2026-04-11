import React from "react";
import { personalInfo } from "../data/PortfolioData";
import rohanImage from "../assets/rohan.jpg";
import myCV from '../assets/myCV.pdf';
import SplitText from "./reactbits/SplitText";
import BlurText from "./reactbits/BlurText";
import ScrollReveal from "./reactbits/ScrollReveal";
import DecryptedText from "./reactbits/DecryptedText";
import AbstractBackground from "./AbstractBackground";

export default function Home({ splashDone = false }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden transition-colors duration-300">
      {/* Decorative background layers */}
      <AbstractBackground variant="both" opacity={0.06} colorClass="text-pink-400 dark:text-pink-600" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/30 dark:bg-pink-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Text content */}
          <div>
            <ScrollReveal delay={0.1} direction="up" distance={20} startAnimation={splashDone}>
              <p className="text-pink-600 dark:text-pink-400 font-semibold text-lg mb-4 tracking-wider">
                <DecryptedText
                  text="HELLO THERE 👋"
                  speed={40}
                  maxIterations={12}
                  sequential={true}
                  revealDirection="start"
                  animateOn="view"
                  className="text-pink-600 dark:text-pink-400"
                  encryptedClassName="text-pink-300 dark:text-pink-700"
                />
              </p>
            </ScrollReveal>

            <h1 className="text-5xl md:text-6xl font-bold mb-2 leading-tight">
              <BlurText
                text="I am"
                animateBy="words"
                delay={80}
                duration={0.5}
                direction="top"
                startAnimation={splashDone}
              />
            </h1>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <SplitText
                text={personalInfo.name}
                className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                delay={50}
                duration={0.6}
                splitBy="chars"
                from={{ opacity: 0, y: 50, scale: 0.8 }}
                to={{ opacity: 1, y: 0, scale: 1 }}
                tag="span"
                startAnimation={splashDone}
              />
            </h1>

            <ScrollReveal delay={0.4} direction="up" distance={20} startAnimation={splashDone}>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                {personalInfo.title}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.6} direction="up" distance={20} startAnimation={splashDone}>
              <div className="flex flex-wrap gap-4">
                <a href={myCV} download="umesh_cv.pdf" className="cursor-pointer inline-block">
                  <button className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-pink-200 dark:hover:shadow-pink-900/30 hover:-translate-y-0.5 transition-all cursor-pointer font-semibold">
                    Download CV
                  </button>
                </a>
                <a
                  href="https://github.com/umess-ss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-pink-600 text-pink-600 dark:text-pink-400 dark:border-pink-400 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:-translate-y-0.5 transition-all inline-block font-semibold"
                >
                  View GitHub
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Profile image with decorative ring */}
          <ScrollReveal delay={0.3} direction="right" distance={60} startAnimation={splashDone}>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full border-2 border-pink-200/50 dark:border-pink-800/30 animate-pulse" />
                <div className="absolute -inset-8 rounded-full border border-purple-200/30 dark:border-purple-800/20" />
                <img
                  src={rohanImage}
                  alt="Profile"
                  className="w-72 h-72 md:w-80 md:h-80 rounded-full shadow-2xl shadow-pink-200/40 dark:shadow-pink-900/20 object-cover ring-4 ring-white dark:ring-gray-800"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}