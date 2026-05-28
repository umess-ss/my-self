import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "../motion/animations";

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up", // "up" | "down" | "left" | "right" | "none"
  distance = 40,
  threshold = 0.1,
  scale = 1,
  once = true,
  startAnimation, // external trigger
}) => {
  const ref = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (startAnimation === true) {
      setShouldAnimate(true);
      return;
    }
    if (startAnimation === false) return;

    if (startAnimation === undefined) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShouldAnimate(true);
            if (once) observer.disconnect();
          }
        },
        { threshold }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [threshold, once, startAnimation]);

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...(shouldReduceMotion ? {} : {
        scale: scale !== 1 ? scale : undefined,
        ...directionMap[direction],
      }),
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : duration,
        delay,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      style={{ willChange: shouldReduceMotion ? "opacity" : "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
