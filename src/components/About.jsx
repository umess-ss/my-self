import React from 'react';
import { Briefcase, Layers, Rocket } from 'lucide-react';
import ScrollReveal from './reactbits/ScrollReveal';
import AbstractBackground from './AbstractBackground';
import aboutPhoto from '../assets/about.png';

const stats = [
  { icon: Briefcase, value: '3+', label: 'Years Experience' },
  { icon: Rocket, value: '10+', label: 'Projects Shipped' },
  { icon: Layers, value: '9+', label: 'Technologies' },
];

export default function About() {
  return (
    <section id="about" className="about-section relative overflow-hidden bg-[#FBFAFC] py-20 transition-colors duration-300 dark:bg-slate-950 md:py-24">
      <div className="about-bg-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <AbstractBackground variant="waves" opacity={0.014} colorClass="text-sky-500 dark:text-sky-500" flip />
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          <ScrollReveal direction="left" distance={28} delay={0.08}>
            <div className="max-w-[39rem]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB] dark:text-[#60A5FA]">
                ABOUT ME
              </p>

              <h2 className="mt-5 max-w-[35rem] text-4xl font-bold leading-tight text-[#0F172A] dark:text-white md:text-5xl">
                Who Is{" "}
                <span className="text-[#2563EB] dark:text-[#60A5FA]">Umesh Rajbanshi</span>
              </h2>

              <div className="mt-7 max-w-[36rem] space-y-5 text-base leading-[1.75] text-[#475569] dark:text-gray-300 md:text-[1.0625rem]">
                <p>
                  I'm a Python backend and cloud engineer based in Nepal, building APIs and infrastructure that go from idea to production reliably.
                </p>
                <p>
                  I've worked with FastAPI, Docker, AWS, and Terraform to ship containerized services and automate deployments for real-world projects.
                </p>
                <p>
                  I'm looking for a team that values clean systems, fast iteration, and engineering that actually runs well in production.
                </p>
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="about-stat-card"
                  >
                    <div className="about-stat-icon">
                      <Icon size={19} strokeWidth={2} />
                    </div>
                    <p className="about-stat-value">{value}</p>
                    <p className="about-stat-label">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={30} delay={0.12}>
            <div className="about-visual-shell relative mx-auto flex min-h-[390px] w-full max-w-lg items-end justify-center overflow-visible pt-6 sm:min-h-[460px] lg:min-h-[500px]">
              <div className="about-profile-glow absolute inset-x-4 bottom-10 top-12 rounded-full" aria-hidden="true" />
              <div className="about-photo-frame relative z-10 h-[380px] w-full sm:h-[440px] lg:h-[480px]">
                <img
                  src={aboutPhoto}
                  alt="Umesh Rajbanshi"
                  className="about-photo-image h-full w-full object-contain drop-shadow-[0_24px_36px_rgba(15,23,42,0.16)]"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
