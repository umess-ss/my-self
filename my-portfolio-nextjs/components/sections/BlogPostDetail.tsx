import Link from "next/link";
import { ArrowLeft, ArrowRight, BrainCircuit, Calendar, Cloud, Code2, Database, Server, Tag, Timer, User } from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blog";

const iconMap = {
  ai: BrainCircuit,
  cloud: Cloud,
  devops: Cloud,
  python: Code2,
  go: Server,
  backend: Server,
  database: Database
};

function ArticleVisual({ iconType }: { iconType: BlogPost["iconType"] }) {
  const Icon = iconMap[iconType] || Server;

  return (
    <div className="blog-detail-visual relative flex h-56 items-center justify-center overflow-hidden rounded-[28px] md:h-72">
      <div className="blog-visual-grid absolute inset-0" aria-hidden="true" />
      <div className="blog-visual-icon relative flex h-20 w-20 items-center justify-center rounded-3xl">
        <Icon size={42} strokeWidth={1.8} />
      </div>
    </div>
  );
}

function renderInline(text: string) {
  return text.split(/(`[^`]+`)/g).map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }
    return part;
  });
}

function MarkdownContent({ content }: { content: string }) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const language = line.replace("```", "").trim();
      const codeLines: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }
      elements.push(
        <pre key={elements.length}>
          <code data-language={language}>{codeLines.join("\n")}</code>
        </pre>
      );
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(<h2 key={elements.length}>{renderInline(line.slice(3))}</h2>);
      index += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(<h3 key={elements.length}>{renderInline(line.slice(4))}</h3>);
      index += 1;
      continue;
    }

    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (index < lines.length && lines[index].startsWith("> ")) {
        quoteLines.push(lines[index].slice(2));
        index += 1;
      }
      elements.push(
        <blockquote key={elements.length}>
          {quoteLines.map((quote) => (
            <p key={quote}>{renderInline(quote)}</p>
          ))}
        </blockquote>
      );
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s/.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\.\s/, ""));
        index += 1;
      }
      elements.push(
        <ol key={elements.length}>
          {items.map((item) => (
            <li key={item}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].startsWith("- ")) {
        items.push(lines[index].slice(2));
        index += 1;
      }
      elements.push(
        <ul key={elements.length}>
          {items.map((item) => (
            <li key={item}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    const paragraph: string[] = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].startsWith("## ") &&
      !lines[index].startsWith("### ") &&
      !lines[index].startsWith("> ") &&
      !lines[index].startsWith("```") &&
      !lines[index].startsWith("- ") &&
      !/^\d+\.\s/.test(lines[index])
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    elements.push(<p key={elements.length}>{renderInline(paragraph.join(" "))}</p>);
  }

  return <div className="blog-markdown">{elements}</div>;
}

function RelatedCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.id}`} className="blog-related-card group rounded-[20px] p-5 transition-all duration-300">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--portfolio-warm)]">{post.category}</p>
      <h3 className="mt-3 text-lg font-semibold leading-snug text-[var(--portfolio-text)]">{post.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--portfolio-muted)]">{post.excerpt}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--portfolio-warm)]">
        Read Article
        <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function BlogPostDetail({ post }: { post: BlogPost }) {
  const relatedPosts = blogPosts
    .filter((candidate) => candidate.id !== post.id)
    .filter((candidate) => candidate.filters.some((filter) => post.filters.includes(filter)))
    .slice(0, 3);

  const fallbackRelatedPosts = relatedPosts.length > 0 ? relatedPosts : blogPosts.filter((candidate) => candidate.id !== post.id).slice(0, 3);

  return (
    <article className="blog-detail-section relative min-h-screen overflow-hidden pb-20 pt-28 transition-colors duration-300">
      <div className="blog-detail-bg-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-[1080px] px-4">
        <Link href="/all-blogs" className="blog-back-action group mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
          <ArrowLeft size={17} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Blog
        </Link>

        <header className="blog-hero-card rounded-[30px] p-5 sm:p-7 lg:p-8">
          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <ArticleVisual iconType={post.iconType} />
            <div>
              <div className="mb-5 flex flex-wrap gap-3">
                <span className="blog-meta-pill">
                  <Tag size={13} />
                  {post.category}
                </span>
                <span className="blog-meta-pill">
                  <Calendar size={13} />
                  {post.date}
                </span>
                <span className="blog-meta-pill">
                  <Timer size={13} />
                  {post.readTime}
                </span>
                <span className="blog-meta-pill">
                  <User size={13} />
                  {post.author}
                </span>
              </div>

              <h1 className="text-4xl font-semibold leading-tight tracking-normal text-[var(--portfolio-text)] md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[var(--portfolio-muted)]">
                {post.excerpt}
              </p>
            </div>
          </div>
        </header>

        <div className="mx-auto mt-8 max-w-[900px]">
          <div className="blog-article-card rounded-[28px] p-5 sm:p-8 md:p-10">
            <MarkdownContent content={post.content} />

            <div className="mt-12 border-t border-[var(--portfolio-border)] pt-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--portfolio-subtle)]">Tags</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag-chip rounded-full px-3 py-1 text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="mt-14">
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--portfolio-warm)]">Keep Reading</p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--portfolio-text)]">Related Posts</h2>
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
}
