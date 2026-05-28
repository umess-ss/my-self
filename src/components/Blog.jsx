import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  BrainCircuit,
  Calendar,
  Cloud,
  Code2,
  Database,
  Github,
  Server,
  Tag,
  Timer,
} from 'lucide-react';
import { blogPosts } from '../data/BlogContent';
import SEOHead from './SEOHead';
import AbstractBackground from './AbstractBackground';
import AnimatedButton from './motion/AnimatedButton';
import AnimatedCard from './motion/AnimatedCard';
import Reveal from './motion/Reveal';

const filters = ['All', 'Backend', 'Cloud', 'DevOps', 'AI', 'Python', 'Go', 'System Design'];

const iconMap = {
  ai: BrainCircuit,
  cloud: Cloud,
  devops: Github,
  python: Code2,
  go: Server,
  backend: Server,
  database: Database,
};

const BlogVisual = ({ iconType, featured }) => {
  const Icon = iconMap[iconType] || Server;

  return (
    <div className={`blog-visual relative flex items-center justify-center overflow-hidden rounded-[18px] ${featured ? 'h-44' : 'h-32'}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(255,255,255,0.22),transparent_28%),linear-gradient(135deg,rgba(37,99,235,0.9),rgba(14,165,233,0.58))]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:22px_22px] opacity-35" />
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/25 bg-white/14 text-white shadow-[0_18px_60px_rgba(2,6,23,0.25)] backdrop-blur-md">
        <Icon size={featured ? 36 : 30} strokeWidth={1.8} />
      </div>
    </div>
  );
};

const BlogCard = ({ post, featured = false, delay = 0 }) => {
  const navigate = useNavigate();

  const openPost = () => {
    navigate(`/blog/${post.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <AnimatedCard
      onClick={openPost}
      delay={delay}
      className={`blog-card group flex h-full cursor-pointer flex-col rounded-[20px] p-4 transition-all duration-300 hover:-translate-y-1.5 ${featured ? 'blog-card-featured lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-6' : ''}`}
    >
      <div className="relative">
        <BlogVisual iconType={post.iconType} featured={featured} />
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-blue-300/25 bg-white/85 px-3 py-1 text-xs font-bold text-blue-700 shadow-sm backdrop-blur dark:bg-slate-950/72 dark:text-blue-100">
          <Tag size={12} />
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-5 lg:pt-0">
        <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#64748B] dark:text-gray-400">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Timer size={14} />
            {post.readTime}
          </span>
        </div>

        <h3 className={`${featured ? 'mt-4 text-2xl md:text-3xl' : 'mt-4 text-xl'} font-bold leading-tight text-[#0F172A] dark:text-white`}>
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#475569] dark:text-gray-300">
          {post.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-blue-400/20 bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:text-blue-100">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:shadow-blue-500/30">
            Read Article
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </AnimatedCard>
  );
};

const Blog = ({ isHomePage }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredPosts = useMemo(() => {
    if (activeFilter === 'All') return blogPosts;
    return blogPosts.filter((post) => post.filters.includes(activeFilter));
  }, [activeFilter]);

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <section id="blog" className="blog-section relative overflow-hidden bg-[#FBFAFC] py-20 dark:bg-gray-900 transition-colors duration-300">
      {!isHomePage && (
        <SEOHead
          title="Engineering Notes & Blog"
          description="Technical notes by Umesh Rajbanshi on backend, cloud, DevOps, AI, Python, Go, and system design."
          url="https://umeshrajbanshi.com.np/all-blogs"
        />
      )}
      <div className="blog-bg-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <AbstractBackground variant="both" opacity={0.022} colorClass="text-sky-500 dark:text-sky-500" flip />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-sky-300">
              TECH WRITING
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0F172A] dark:text-white md:text-5xl">
              Engineering Notes &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569] dark:text-gray-300 md:text-lg">
              Thoughts, build logs, and technical notes from my backend, cloud, DevOps, AI, and system design learning journey.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05} distance={14}>
          <div className="mt-8 flex gap-3 overflow-x-auto pb-3 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <AnimatedButton
                  key={filter}
                  as="button"
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`blog-filter-pill shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'blog-filter-pill-active text-white'
                      : 'border-blue-400/20 bg-white/65 text-[#475569] hover:border-blue-400/50 hover:text-blue-600 dark:bg-slate-900/42 dark:text-gray-300 dark:hover:text-sky-200'
                  }`}
                >
                  {filter}
                </AnimatedButton>
              );
            })}
          </div>
        </Reveal>

        {featuredPost && (
          <Reveal delay={0.08} distance={16}>
            <div className="mt-8">
              <BlogCard post={featuredPost} featured />
            </div>
          </Reveal>
        )}

        {regularPosts.length > 0 && (
          <Reveal delay={0.12} distance={16}>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} delay={index * 0.04} />
              ))}
            </div>
          </Reveal>
        )}

        {filteredPosts.length === 0 && (
          <p className="mt-12 text-center text-[#64748B] dark:text-gray-400">
            No articles found for this category.
          </p>
        )}

        {isHomePage && (
          <div className="mt-12 flex justify-center">
            <Link
              to="/all-blogs"
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-white/70 px-6 py-3 font-semibold text-blue-700 shadow-lg shadow-blue-500/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/10 dark:bg-slate-900/50 dark:text-blue-100"
            >
              View All Notes
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
