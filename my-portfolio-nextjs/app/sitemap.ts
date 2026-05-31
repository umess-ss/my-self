import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://umeshrajbanshi.com.np";
  const routes = [
    { path: "", changeFrequency: "monthly", priority: 1 },
    { path: "/projects", changeFrequency: "yearly", priority: 0.8 },
    { path: "/experience", changeFrequency: "yearly", priority: 0.8 },
    { path: "/all-blogs", changeFrequency: "monthly", priority: 0.75 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.8 }
  ];

  const blogRoutes = blogPosts.map((post) => ({
    path: `/blog/${post.id}`,
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [...routes, ...blogRoutes].map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: route.priority
  }));
}
