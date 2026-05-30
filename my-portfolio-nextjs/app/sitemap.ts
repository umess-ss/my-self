import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://umeshrajbanshi.com.np";
  const routes = [
    { path: "", changeFrequency: "monthly", priority: 1 },
    { path: "/projects", changeFrequency: "yearly", priority: 0.8 },
    { path: "/experience", changeFrequency: "yearly", priority: 0.8 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.8 }
  ] as const;

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
