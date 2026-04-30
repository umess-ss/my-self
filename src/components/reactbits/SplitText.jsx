import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const SplitText = ({
  text,
  className = "",
  delay = 30,
  duration = 0.5,
  splitBy = "chars", // "chars" | "words"
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  tag: Tag = "p",
  startAnimation, // external trigger (true = animate now)
  onAnimationComplete,
  gradientStyle = null, // optional gradient styles applied per character
  forceInline = false, // use display:inline (needed for bg-clip-text gradient)
}) => {
  const ref = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // If externally triggered
    if (startAnimation === true) {
      setShouldAnimate(true);
      return;
    }
    if (startAnimation === false) return; // wait for it

    // Otherwise use IntersectionObserver (for scroll-triggered usage)
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
    splitBy === "words" ? text.split(" ") : text.split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
      },
    },
  };

  const child = {
    hidden: from,
    visible: {
      ...to,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ overflow: "visible", perspective: "600px" }}
    >
      <motion.span
        variants={container}
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
        onAnimationComplete={onAnimationComplete}
        style={{ display: "inline-block" }}
        aria-label={text}
      >
        {elements.map((el, i) => (
          <motion.span
            key={i}
            variants={child}
            style={{
              display: forceInline ? "inline" : "inline-block",
              whiteSpace: el === " " ? "pre" : "normal",
              willChange: "transform, opacity",
            }}
          >
            {el === " " ? "\u00A0" : el}
            {splitBy === "words" && i < elements.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default SplitText;
