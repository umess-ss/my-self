import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const BlurText = ({
  text,
  className = "",
  delay = 40,
  duration = 0.6,
  animateBy = "words", // "words" | "letters"
  direction = "top", // "top" | "bottom" | "left" | "right"
  threshold = 0.1,
  startAnimation, // external trigger
  tag: Tag = "span",
}) => {
  const ref = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

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
            observer.disconnect();
          }
        },
        { threshold }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [threshold, startAnimation]);

  const elements =
    animateBy === "words" ? text.split(" ") : text.split("");

  const directionMap = {
    top: { y: -20 },
    bottom: { y: 20 },
    left: { x: -20 },
    right: { x: 20 },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      ...directionMap[direction],
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      x: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <Tag ref={ref} className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
        style={{ display: "inline" }}
      >
        {elements.map((el, i) => (
          <motion.span
            key={i}
            variants={child}
            style={{
              display: "inline-block",
              willChange: "transform, opacity, filter",
            }}
          >
            {el === " " ? "\u00A0" : el}
            {animateBy === "words" && i < elements.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default BlurText;
