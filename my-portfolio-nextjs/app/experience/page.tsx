import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";

export const metadata = {
  title: "Experience | Umesh Rajbanshi"
};

export default function ExperiencePage() {
  return (
    <main className="page-shell">
      <Experience />
      <Skills />
    </main>
  );
}
