"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { FileText, Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";


import { Manrope } from "next/font/google";

const logoFont = Manrope({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const navItems = [
  { label: "Home", id: "home", href: "/" },
  { label: "About", id: "about", href: "/#about" },
  { label: "Resume", id: "resume", href: "/experience" },
  { label: "Projects", id: "projects", href: "/projects" },
  { label: "Contact", id: "contact", href: "/contact" }
];

const routeActiveMap: Record<string, string> = {
  "/": "home",
  "/projects": "projects",
  "/experience": "resume",
  "/contact": "contact"
};

function ThemeToggle() {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("portfolio-theme", next ? "dark" : "light");
  };

  /* Render a placeholder icon until mounted to prevent hydration mismatch */
  return (
    <button
      type="button"
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
    >
      {!mounted ? (
        <Sun size={17} style={{ opacity: 0 }} />
      ) : dark ? (
        <Sun size={17} />
      ) : (
        <Moon size={17} />
      )}
    </button>
  );
}

function CVDialog({ triggerClassName, label = "View CV" }: { triggerClassName?: string; label?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={triggerClassName || "cv-navbar-btn"}>
          <FileText size={14} />
          {label}
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="sr-only">Umesh Rajbanshi CV</DialogTitle>
        <div className="border-b border-[var(--portfolio-border)] px-5 py-4">
          <h2 className="text-lg font-bold text-[var(--portfolio-text)]">Umesh Rajbanshi - CV</h2>
        </div>
        <iframe title="Umesh Rajbanshi CV" src="/myCV.pdf" className="h-[76vh] w-full bg-white" />
      </DialogContent>
    </Dialog>
  );
}


export function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const activeNavId = useMemo(() => activeSection, [activeSection]);

  useEffect(() => {
    setActiveSection(routeActiveMap[pathname] ?? "home");
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-100px 0px -66% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const activeBtn = navRef.current?.querySelector(`[data-nav-id="${activeNavId}"]`) as HTMLElement | null;
    if (!activeBtn || !navRef.current) {
      setIndicatorStyle((style) => ({ ...style, opacity: 0 }));
      return;
    }
    const navRect = navRef.current.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();
    setIndicatorStyle({ left: btnRect.left - navRect.left, width: btnRect.width, opacity: 1 });
  }, [activeNavId]);

  const navLinks = navItems.map((item) => (
    <Link
      key={item.id}
      href={item.href}
      data-nav-id={item.id}
      className={`nav-link ${activeNavId === item.id ? "nav-link-active" : ""}`}
    >
      {item.label}
    </Link>
  ));

  return (
    <nav aria-label="Main navigation" className="portfolio-nav fixed left-0 right-0 top-0 z-40 border-b backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link
              href="/"
              aria-label="Go to homepage"
              className={`${logoFont.className} brand-logo`}
            >
              <span className="brand-name brand-umesh">umesh</span>
              <span className="brand-x">x</span>
              <span className="brand-name brand-rajbanshi">rajbanshi</span>
              <span className="brand-dot" aria-hidden="true" />
            </Link>

          <div className="nav-links-wrapper hidden items-center gap-1.5 md:flex" ref={navRef}>
            <span className="nav-indicator" style={indicatorStyle} />
            {navLinks}
            <CVDialog />
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <CVDialog triggerClassName="cv-navbar-btn cv-navbar-btn--mobile" label="CV" />
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <button className="nav-menu-toggle group flex h-10 w-10 items-center justify-center rounded-full text-[var(--portfolio-muted)] transition duration-300 active:scale-95" aria-label="Open menu">
                  <Menu size={22} />
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle className="sr-only">Main navigation</SheetTitle>
                {navItems.map((item) => (
                  <SheetClose key={item.id} asChild>
                    <Link
                      href={item.href}
                      className={`mobile-nav-link block w-full rounded-xl px-4 py-2.5 text-left font-medium transition-all duration-300 ease-out ${
                        activeNavId === item.id
                          ? "mobile-nav-link-active bg-[rgba(255,219,187,0.08)] text-[var(--portfolio-warm)]"
                          : "text-[var(--portfolio-muted)] hover:bg-[rgba(255,219,187,0.045)] hover:text-[var(--portfolio-text)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
