"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Calendar, Cloud, Code2, Database, Github, Server, Tag, Timer } from "lucide-react";
import { blogFilters, blogPosts, BlogPost } from "@/data/blog";

const iconMap = {
  ai: BrainCircuit,
  cloud: Cloud,
  devops: Github,
  python: Code2,
  go: Server,
  backend: Server,
  database: Database
};

function BlogVisual({ iconType, featured = false }: { iconType: BlogPost["iconType"]; featured?: boolean }) {
  const Icon = iconMap[iconType] || Server;

  return (
    <div className={`blog-visual relative flex items-center justify-center overflow-hidden rounded-2xl ${featured ? "h-40" : "h-28"}`}>
      <div className="blog-visual-grid absolute inset-0" aria-hidden="true" />
      <div className="blog-visual-icon relative flex items-center justify-center">
        <Icon size={featured ? 31 : 26} strokeWidth={1.8} />
      </div>
    </div>
  );
}

function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className={`blog-card group flex h-full flex-col rounded-[18px] p-4 transition-all duration-300 sm:p-5 ${featured ? "blog-card-featured lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-6" : ""}`}
    >
      <div className="relative">
        <BlogVisual iconType={post.iconType} featured={featured} />
        <span className="blog-category-pill absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold">
          <Tag size={12} />
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-5 lg:pt-0">
        <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--portfolio-subtle)]">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Timer size={14} />
            {post.readTime}
          </span>
        </div>

        <h3 className={`${featured ? "mt-4 text-2xl md:text-3xl" : "mt-4 text-xl"} font-semibold leading-tight text-[var(--portfolio-text)]`}>
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--portfolio-muted)]">
          {post.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="blog-tag-chip rounded-full px-2.5 py-1 text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>

        <span className="blog-read-action mt-6 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300">
          Read Article
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function Blog({ limit }: { limit?: number }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPosts = useMemo(() => {
    const filtered = activeFilter === "All" ? blogPosts : blogPosts.filter((post) => post.filters.includes(activeFilter));
    return limit ? filtered.slice(0, limit) : filtered;
  }, [activeFilter, limit]);

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <section id="blog" className="blog-section relative overflow-hidden py-24 transition-colors duration-300 md:py-32">
      <div className="blog-bg-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--portfolio-warm)]">
            TECH WRITING
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--portfolio-text)] md:text-5xl">
            Engineering Notes & Blog
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--portfolio-muted)] md:text-lg">
            Thoughts, build logs, and technical notes from my backend, cloud, DevOps, AI, and system design learning journey.
          </p>
        </div>

        {!limit ? (
          <div className="mt-8 flex gap-3 overflow-x-auto pb-3 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {blogFilters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`blog-filter-pill shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${isActive ? "blog-filter-pill-active" : ""}`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        ) : null}

        {featuredPost ? (
          <div className="mt-8">
            <BlogCard post={featuredPost} featured />
          </div>
        ) : null}

        {regularPosts.length > 0 ? (
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : null}

        {filteredPosts.length === 0 ? (
          <p className="mt-12 text-center text-[var(--portfolio-muted)]">No articles found for this category.</p>
        ) : null}

        {limit ? (
          <div className="mt-12 flex justify-center">
            <Link href="/all-blogs" className="site-secondary-action inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300">
              View All Notes
              <ArrowRight size={18} />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
