import { notFound } from "next/navigation";
import { BlogPostDetail } from "@/components/sections/BlogPostDetail";
import { blogPosts } from "@/data/blog";

type BlogPostPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: String(post.id) }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = blogPosts.find((candidate) => String(candidate.id) === id);

  if (!post) {
    return {
      title: "Blog Post | Umesh Rajbanshi"
    };
  }

  return {
    title: `${post.title} | Umesh Rajbanshi`,
    description: post.excerpt
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = blogPosts.find((candidate) => String(candidate.id) === id);

  if (!post) {
    notFound();
  }

  return <BlogPostDetail post={post} />;
}
