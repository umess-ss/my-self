import React, { useState, useEffect, useRef } from "react";
import rohanImage from "../assets/rohan.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import CVModal from "./CVModal";
import { getLenis } from "./SmoothScroll";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);

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
    if (location.pathname === "/") {
      updateIndicator(activeSection);
    } else {
      setIndicatorStyle({ opacity: 0 });
    }
  }, [activeSection, location.pathname]);

  // Re-measure on resize
  useEffect(() => {
    const handleResize = () => {
      if (location.pathname === "/") updateIndicator(activeSection);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeSection, location.pathname]);

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
      <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md z-40 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/">
              <img
                src={rohanImage}
                alt="Umesh Rajbanshi"
                className="w-12 h-12 rounded-full cursor-pointer hover:opacity-80 transition object-cover"
                onClick={() => handleNavClick("home")}
              />
            </Link>

            <div className="hidden md:flex items-center gap-1" ref={navRef} style={{ position: "relative" }}>
              {/* Sliding underline indicator */}
              <span
                className="nav-indicator"
                style={{
                  position: "absolute",
                  bottom: 0,
                  height: "2.5px",
                  borderRadius: "99px",
                  background: "linear-gradient(90deg, #e11d48, #ec4899)",
                  transition: "left 0.35s cubic-bezier(0.4, 0, 0.2, 1), width 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s",
                  pointerEvents: "none",
                  ...indicatorStyle,
                }}
              />

              {navItems.map((item) => (
                <button
                  key={item.id}
                  data-nav-id={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 font-medium transition-colors duration-200 cursor-pointer outline-none ${
                    activeSection === item.id
                      ? "text-pink-600 dark:text-pink-400"
                      : "text-gray-700 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400"
                  }`}
                >
                  {item.label}
                </button>
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
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden pb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-2 font-medium transition ${
                    activeSection === item.id
                      ? "text-pink-600 bg-pink-50 dark:text-pink-400 dark:bg-pink-900/20"
                      : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </>
  );
};

export default Navigation;
