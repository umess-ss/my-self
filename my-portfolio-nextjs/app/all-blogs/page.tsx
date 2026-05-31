import { Blog } from "@/components/sections/Blog";

export const metadata = {
  title: "Blog | Umesh Rajbanshi",
  description: "Technical notes by Umesh Rajbanshi on backend, cloud, DevOps, AI, Python, Go, and system design."
};

export default function BlogPage() {
  return (
    <main className="page-shell">
      <Blog />
    </main>
  );
}
