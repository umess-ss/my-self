import { useEffect } from "react";

const SITE_NAME = "Umesh Rajbanshi";
const SITE_URL = "https://umeshrajbanshi.com.np";
const DEFAULT_IMAGE = `${SITE_URL}/apple-touch-icon.png`;

/**
 * Lightweight SEO component that updates document.title and meta tags
 * dynamically without requiring an external dependency like react-helmet.
 *
 * @param {{ title?: string, description?: string, image?: string, url?: string, type?: string }} props
 */
export default function SEOHead({
  title,
  description = "Portfolio of Umesh Rajbanshi — Electronics & Communication Engineer, AI/ML Enthusiast, and Backend Developer based in Kathmandu, Nepal.",
  image = DEFAULT_IMAGE,
  url = SITE_URL,
  type = "website",
}) {
  useEffect(() => {
    // ---- Document title ----
    const fullTitle = title
      ? `${title} — ${SITE_NAME}`
      : `${SITE_NAME} — Electronics & Communication Engineer | AI & ML Portfolio`;

    document.title = fullTitle;

    // ---- Helper to set / create a <meta> tag ----
    const setMeta = (attribute, key, value) => {
      let el = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attribute, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    // Standard meta
    setMeta("name", "description", description);

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", image);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", SITE_NAME);

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, image, url, type]);

  return null; // This component renders nothing — it only manages <head>
}
