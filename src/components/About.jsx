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
    <section id="about" className="about-section relative overflow-hidden bg-[#FBFAFC] py-24 dark:bg-gray-900 transition-colors duration-300">
      <AbstractBackground variant="waves" opacity={0.04} colorClass="text-sky-500 dark:text-sky-500" flip />
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <ScrollReveal direction="left" distance={50} delay={0.1}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
                ABOUT ME
              </p>
              <div className="mt-4 h-0.5 w-16 rounded-full bg-blue-600" />

              <h2 className="mt-6 text-4xl font-bold leading-tight text-[#0F172A] dark:text-white md:text-5xl">
                Who Is{" "}
                <span className="text-blue-600">Umesh Rajbanshi</span>
              </h2>
              <div className="mt-6 h-0.5 w-16 rounded-full bg-blue-600" />

              <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#475569] dark:text-gray-300">
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

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(37,99,235,0.16)] dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFF6FF] text-blue-600">
                      <Icon size={24} strokeWidth={2} />
                    </div>
                    <p className="text-4xl font-bold text-blue-600">{value}</p>
                    <p className="mt-2 text-base font-medium text-[#0F172A] dark:text-gray-200">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={50} delay={0.15}>
            <div className="relative mx-auto flex min-h-[460px] w-full max-w-xl items-end justify-center overflow-visible pt-10 lg:min-h-[560px]">
              <div
                className="absolute bottom-8 left-1/2 h-[82%] w-[78%] -translate-x-1/2 rounded-[24px] p-4"
                style={{
                  background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
                }}
              />
              <div className="absolute bottom-16 left-[8%] h-36 w-36 rounded-full bg-[#2563EB]/12 blur-3xl" />
              <div className="absolute right-[4%] top-8 h-40 w-40 rounded-full bg-[#0EA5E9]/16 blur-3xl" />
              <div
                className="absolute right-3 top-8 h-32 w-32 opacity-35"
                style={{
                  backgroundImage: 'radial-gradient(#2563EB 1.4px, transparent 1.4px)',
                  backgroundSize: '14px 14px',
                }}
                aria-hidden="true"
              />
              <div className="absolute bottom-2 left-3 h-24 w-24 rounded-[1.5rem] bg-gradient-to-br from-[#2563EB] to-[#0EA5E9] opacity-90 shadow-[0_18px_50px_rgba(37,99,235,0.22)]" />
              <div className="about-photo-frame relative z-10 h-[420px] w-full sm:h-[480px] lg:h-[520px]">
                <img
                  src={aboutPhoto}
                  alt="Umesh Rajbanshi"
                  className="about-photo-image h-full w-full object-contain drop-shadow-[0_28px_42px_rgba(15,23,42,0.18)]"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
