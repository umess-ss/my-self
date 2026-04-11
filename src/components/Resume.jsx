import React, { useState, useEffect, useRef } from 'react';
import { Rocket, Code, GraduationCap, Award, Brain } from 'lucide-react';
import { experiences } from '../data/PortfolioData';

/* ── Icon grid data for Hard Skills ─────────────────────── */
const techGroups = [
  {
    label: 'Languages',
    color: 'from-pink-500 to-rose-400',
    skills: [
      { name: 'Python',     icon: 'python',      pct: 85 },
      { name: 'JavaScript', icon: 'javascript',  pct: 75 },
      { name: 'C / C++',   icon: 'c',           pct: 70 },
      { name: 'SQL',        icon: 'mysql',       pct: 65 },
    ],
  },
  {
    label: 'Web & Backend',
    color: 'from-violet-500 to-purple-400',
    skills: [
      { name: 'Django',   icon: 'django',   pct: 80 },
      { name: 'React',    icon: 'react',    pct: 72 },
      { name: 'REST API', icon: 'fastapi',  pct: 75 },
      { name: 'HTML/CSS', icon: 'html5',   pct: 78 },
    ],
  },
  {
    label: 'AI / ML',
    color: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'PyTorch',    icon: 'pytorch',    pct: 78 },
      { name: 'TensorFlow', icon: 'tensorflow', pct: 70 },
      { name: 'Langchain',  icon: 'python',     pct: 72 },
      { name: 'OpenCV',     icon: 'opencv',     pct: 68 },
    ],
  },
  {
    label: 'Cloud & DevOps',
    color: 'from-orange-500 to-amber-400',
    skills: [
      { name: 'AWS',    icon: 'amazonwebservices', pct: 70 },
      { name: 'Docker', icon: 'docker',            pct: 75 },
      { name: 'Git',    icon: 'git',               pct: 85 },
      { name: 'Linux',  icon: 'linux',             pct: 72 },
    ],
  },
];

/* ── Devicon URL helper ──────────────────────────────────── */
const deviconUrl = (icon) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`;

/* ── Single tech card ────────────────────────────────────── */
const TechCard = ({ skill, gradient, delay, animate }) => (
  <div
    className="skill-icon-card bg-white dark:bg-gray-700 rounded-xl p-4 flex flex-col items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
    style={{ animationDelay: `${delay}ms`, animationPlayState: animate ? 'running' : 'paused' }}
  >
    <img
      src={deviconUrl(skill.icon)}
      alt={skill.name}
      className="w-10 h-10 object-contain"
      onError={(e) => { e.target.style.display = 'none'; }}
    />
    <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 text-center leading-tight">
      {skill.name}
    </span>
    {/* progress bar */}
    <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-600 rounded-full overflow-hidden mt-1">
      <div
        className={`skill-bar-fill bg-gradient-to-r ${gradient}`}
        style={{
          '--skill-pct': `${skill.pct}%`,
          animationDelay: `${delay + 100}ms`,
          animationPlayState: animate ? 'running' : 'paused',
        }}
      />
    </div>
    <span className="text-[10px] text-gray-400 dark:text-gray-500">{skill.pct}%</span>
  </div>
);

/* ── Hard Skills panel ───────────────────────────────────── */
const HardSkillsPanel = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-8">
      {techGroups.map((group) => (
        <div key={group.label}>
          <h4 className={`text-sm font-bold uppercase tracking-widest mb-3 bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
            {group.label}
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {group.skills.map((skill, i) => (
              <TechCard
                key={skill.name}
                skill={skill}
                gradient={group.color}
                delay={i * 80}
                animate={animate}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

/* ── Resume card (category switcher) ─────────────────────── */
const ResumeCard = ({ icon: Icon, label, color, isActive, onClick }) => {
  const colorMap = {
    pink:   isActive ? 'bg-pink-600 text-white'   : 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400',
    orange: isActive ? 'bg-orange-600 text-white' : 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
    blue:   isActive ? 'bg-blue-600 text-white'   : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  };

  return (
    <div
      onClick={onClick}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-44 text-center hover:shadow-lg hover:-translate-y-2 transition-all cursor-pointer border-2 ${isActive ? 'border-purple-500' : 'border-transparent dark:border-gray-700'}`}
    >
      <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${colorMap[color]}`}>
        <Icon size={28} />
      </div>
      <h3 className="font-semibold text-lg dark:text-gray-200">{label}</h3>
    </div>
  );
};

/* ── Main Resume component ────────────────────────────────── */
const Resume = () => {
  const [activeCategory, setActiveCategory] = useState('Education');

  const categories = [
    { icon: GraduationCap, label: 'Education',   color: 'orange' },
    { icon: Award,         label: 'Trainings',   color: 'blue'   },
    { icon: Code,          label: 'Hard Skills', color: 'orange' },
    { icon: Brain,         label: 'Soft Skills', color: 'pink'   },
    { icon: Rocket,        label: 'Experience',  color: 'pink'   },
  ];

  const filteredData = experiences.filter((item) => item.category === activeCategory);

  return (
    <section id="resume" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <p className="text-pink-600 font-semibold text-center mb-2">MY RESUME</p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="text-purple-600">Experience &amp; Skills</span>
        </h2>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, index) => (
            <ResumeCard
              key={index}
              icon={cat.icon}
              label={cat.label}
              color={cat.color}
              isActive={activeCategory === cat.label}
              onClick={() => setActiveCategory(cat.label)}
            />
          ))}
        </div>

        {/* Content panel */}
        <div className="max-w-4xl mx-auto">
          {activeCategory === 'Hard Skills' ? (
            <HardSkillsPanel />
          ) : filteredData.length > 0 ? (
            filteredData.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8 mb-6 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-2">
                  {exp.position}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4 font-medium">
                  {exp.company} {exp.location && `| ${exp.location}`} | {exp.duration}
                </p>
                <div className="pl-4 space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-gray-300">✓ {resp}</p>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No entries found for this category.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;