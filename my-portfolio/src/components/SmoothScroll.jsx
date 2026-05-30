import { useEffect, useRef } from "react";
import Lenis from "lenis";

// Global lenis instance so Navigation can use it for scrollTo
let lenisInstance = null;
export const getLenis = () => lenisInstance;

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.75,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    lenisRef.current = lenis;
    lenisInstance = lenis;
    let rafId;
    let isActive = true;

    function raf(time) {
      if (!isActive) return;
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      isActive = false;
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      lenisInstance = null;
    };
  }, []);

  return children;
};

export default SmoothScroll;
