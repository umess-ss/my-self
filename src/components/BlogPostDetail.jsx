import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Calendar,
  Cloud,
  Code2,
  Database,
  Server,
  Tag,
  Timer,
  User,
} from 'lucide-react';
import { blogPosts } from '../data/BlogContent';
import SEOHead from './SEOHead';
import AbstractBackground from './AbstractBackground';

const iconMap = {
  ai: BrainCircuit,
  cloud: Cloud,
  devops: Cloud,
  python: Code2,
  go: Server,
  backend: Server,
  database: Database,
};

const ArticleVisual = ({ iconType }) => {
  const Icon = iconMap[iconType] || Server;

  return (
    <div className="blog-detail-visual relative flex h-56 items-center justify-center overflow-hidden rounded-[28px] md:h-72">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_24%,rgba(255,255,255,0.22),transparent_28%),linear-gradient(135deg,rgba(37,99,235,0.92),rgba(14,165,233,0.58))]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:28px_28px] opacity-35" />
      <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/25 bg-white/14 text-white shadow-[0_22px_70px_rgba(2,6,23,0.25)] backdrop-blur-md">
        <Icon size={42} strokeWidth={1.8} />
      </div>
    </div>
  );
};

const markdownComponents = {
  h2: ({ children }) => (
    <h2 className="mt-10 border-l-4 border-blue-500 pl-4 text-2xl font-bold tracking-normal text-[#0F172A] dark:text-white">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 text-xl font-bold tracking-normal text-[#0F172A] dark:text-white">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-5 text-base leading-[1.85] text-[#475569] dark:text-gray-300 md:text-lg">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-[1.8] text-[#475569] dark:text-gray-300 md:text-lg">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-5 list-decimal space-y-2 pl-6 text-base leading-[1.8] text-[#475569] dark:text-gray-300 md:text-lg">
      {children}
    </ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-7 rounded-r-2xl border-l-4 border-blue-500 bg-blue-500/10 px-5 py-4 text-[#334155] dark:text-blue-100">
      {children}
    </blockquote>
  ),
  code: ({ inline, children }) => (
    inline ? (
      <code className="rounded-md border border-blue-400/20 bg-blue-500/10 px-1.5 py-0.5 text-[0.92em] font-semibold text-blue-700 dark:text-blue-100">
        {children}
      </code>
    ) : (
      <code className="block overflow-x-auto rounded-2xl border border-blue-400/20 bg-slate-950 p-5 text-sm leading-relaxed text-blue-50">
        {children}
      </code>
    )
  ),
  pre: ({ children }) => (
    <pre className="mt-6 overflow-x-auto rounded-2xl bg-transparent p-0">
      {children}
    </pre>
  ),
};

const RelatedCard = ({ post }) => (
  <Link to={`/blog/${post.id}`} className="blog-related-card group rounded-[20px] p-5 transition-all duration-300 hover:-translate-y-1">
    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-sky-300">{post.category}</p>
    <h3 className="mt-3 text-lg font-bold leading-snug text-[#0F172A] dark:text-white">{post.title}</h3>
    <p className="mt-3 text-sm leading-relaxed text-[#475569] dark:text-gray-300">{post.excerpt}</p>
    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-blue-100">
      Read Article
      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
    </span>
  </Link>
);

const BlogPostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#FBFAFC] px-4 text-center dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white">Post not found</h2>
        <button onClick={() => navigate('/all-blogs')} className="mt-4 text-[#2563EB] underline">
          Return to Blog
        </button>
      </main>
    );
  }

  const relatedPosts = blogPosts
    .filter((candidate) => candidate.id !== post.id)
    .filter((candidate) => candidate.filters.some((filter) => post.filters.includes(filter)))
    .slice(0, 3);

  const fallbackRelatedPosts = relatedPosts.length > 0
    ? relatedPosts
    : blogPosts.filter((candidate) => candidate.id !== post.id).slice(0, 3);

  return (
    <article className="blog-detail-section relative min-h-screen overflow-hidden bg-[#FBFAFC] pt-28 pb-20 dark:bg-gray-900 transition-colors duration-300">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        url={`https://umeshrajbanshi.com.np/blog/${post.id}`}
        type="article"
      />
      <div className="blog-detail-bg-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <AbstractBackground variant="both" opacity={0.02} colorClass="text-sky-500 dark:text-sky-500" flip />

      <div className="relative z-10 mx-auto w-full max-w-[1080px] px-4">
        <button
          onClick={() => navigate('/all-blogs')}
          className="group mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-white/70 px-4 py-2 text-sm font-semibold text-blue-700 shadow-lg shadow-blue-500/10 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/55 hover:bg-blue-500/10 dark:bg-slate-900/50 dark:text-blue-100"
        >
          <ArrowLeft size={17} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Blog
        </button>

        <header className="blog-hero-card rounded-[30px] p-5 sm:p-7 lg:p-8">
          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <ArticleVisual iconType={post.iconType} />
            <div>
              <div className="mb-5 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-700 dark:text-blue-100">
                  <Tag size={13} />
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/20 bg-white/55 px-3 py-1 text-xs font-semibold text-[#64748B] dark:bg-slate-950/35 dark:text-gray-300">
                  <Calendar size={13} />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/20 bg-white/55 px-3 py-1 text-xs font-semibold text-[#64748B] dark:bg-slate-950/35 dark:text-gray-300">
                  <Timer size={13} />
                  {post.readTime}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/20 bg-white/55 px-3 py-1 text-xs font-semibold text-[#64748B] dark:bg-slate-950/35 dark:text-gray-300">
                  <User size={13} />
                  {post.author}
                </span>
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-normal text-[#0F172A] dark:text-white md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#475569] dark:text-gray-300">
                {post.excerpt}
              </p>
            </div>
          </div>
        </header>

        <div className="mx-auto mt-8 max-w-[900px]">
          <div className="blog-article-card rounded-[28px] p-5 sm:p-8 md:p-10">
            <ReactMarkdown components={markdownComponents}>{post.content}</ReactMarkdown>

            <div className="mt-12 border-t border-blue-400/15 pt-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#64748B] dark:text-gray-400">Tags</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-between gap-4">
            <button
              onClick={() => navigate('/all-blogs')}
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-white/70 px-4 py-2 text-sm font-semibold text-blue-700 shadow-lg shadow-blue-500/10 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/55 hover:bg-blue-500/10 dark:bg-slate-900/50 dark:text-blue-100"
            >
              <ArrowLeft size={17} />
              Back to Blog
            </button>
          </div>
        </div>

        <section className="mt-14">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-sky-300">Keep Reading</p>
              <h2 className="mt-2 text-2xl font-bold text-[#0F172A] dark:text-white">Related Posts</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {fallbackRelatedPosts.map((relatedPost) => (
              <RelatedCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};

export default BlogPostDetail;
