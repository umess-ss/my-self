import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import homeImage from "../assets/home.jpeg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import CVModal from "./CVModal";
import { getLenis } from "./SmoothScroll";
import { easeOut } from "./motion/animations";

const MotionSpan = motion.span;
const MotionButton = motion.button;

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Resume", id: "resume" },
    { label: "Projects", id: "projects" },
    { label: "Blog", id: "blog" },
    { label: "Contact", id: "contact" },
  ];

  const routeSection = location.pathname === "/"
    ? "home"
    : location.pathname.replace("/", "").split("/")[0];
  const activeNavId = location.pathname === "/"
    ? activeSection
    : navItems.some((item) => item.id === routeSection)
      ? routeSection
      : null;

  // Update sliding underline position
  const updateIndicator = (sectionId) => {
    if (!navRef.current) return;
    const activeBtn = navRef.current.querySelector(`[data-nav-id="${sectionId}"]`);
    if (activeBtn) {
      const navRect = navRef.current.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      setIndicatorStyle({
        left: btnRect.left - navRect.left,
        width: btnRect.width,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    if (activeNavId) {
      updateIndicator(activeNavId);
    } else {
      setIndicatorStyle({ opacity: 0 });
    }
  }, [activeNavId, location.pathname]);

  // Re-measure on resize
  useEffect(() => {
    const handleResize = () => {
      if (activeNavId) updateIndicator(activeNavId);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeNavId, location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -66% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [location.pathname]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(element, { offset: -80, duration: 1.2 });
      } else {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (id) => {
    setActiveSection(id);
    if (location.pathname !== "/") {
      navigate("/");
      if (id === "home") {
        window.scrollTo(0, 0);
        setActiveSection("home");
      } else {
        setTimeout(() => {
          scrollToSection(id);
        }, 200);
      }
    } else {
      scrollToSection(id);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav aria-label="Main navigation" className="portfolio-nav fixed top-0 left-0 right-0 z-40 border-b border-slate-200/70 bg-white/88 shadow-[0_10px_34px_rgba(15,23,42,0.06)] backdrop-blur-md transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-950/86 dark:shadow-[0_10px_34px_rgba(2,6,23,0.18)]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <Link to="/" aria-label="Go to homepage" className="nav-avatar-link">
              <img
                src={homeImage}
                alt="Umesh Rajbanshi"
                className="nav-avatar h-11 w-11 rounded-full object-cover object-[50%_38%]"
                onClick={() => handleNavClick("home")}
              />
            </Link>

            <div className="hidden md:flex items-center gap-1.5" ref={navRef} style={{ position: "relative" }}>
              {/* Sliding underline indicator */}
              <MotionSpan
                className="nav-indicator"
                animate={indicatorStyle}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.42, ease: easeOut }}
              />

              {navItems.map((item) => (
                <MotionButton
                  key={item.id}
                  data-nav-id={item.id}
                  onClick={() => handleNavClick(item.id)}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  className={`nav-link ${
                    activeNavId === item.id
                      ? "nav-link-active"
                      : ""
                  }`}
                >
                  {item.label}
                </MotionButton>
              ))}

              <button
                onClick={() => setIsCVOpen(true)}
                className="cv-navbar-btn ml-3"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                View CV
              </button>
              <ThemeToggle className="ml-2" />
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={() => setIsCVOpen(true)}
                className="cv-navbar-btn cv-navbar-btn--mobile"
              >
                CV
              </button>
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="nav-menu-toggle group flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition duration-300 active:scale-95 dark:text-slate-300"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <span className="relative block h-5 w-6">
                  <span className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
                  <span className={`absolute left-0 top-2 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"}`} />
                  <span className={`absolute left-0 top-4 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                </span>
              </button>
            </div>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "max-h-96 opacity-100 translate-y-0 pb-4 pointer-events-auto" : "max-h-0 opacity-0 -translate-y-2.5 pb-0 pointer-events-none"
            }`}
          >
            <div className="mobile-nav-panel rounded-2xl border border-slate-200/70 bg-white/88 p-2 shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/86 dark:shadow-[0_18px_55px_rgba(2,6,23,0.32)]">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{ transitionDelay: isMobileMenuOpen ? `${index * 35}ms` : "0ms" }}
                  className={`mobile-nav-link block w-full rounded-xl px-4 py-2.5 text-left font-medium transition-all duration-300 ease-out ${
                    activeNavId === item.id
                      ? "mobile-nav-link-active text-[#2563EB] bg-[#EFF6FF] dark:text-sky-300 dark:bg-sky-900/20"
                      : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900"
                  } ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-1.5 opacity-0"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </>
  );
};

export default Navigation;
