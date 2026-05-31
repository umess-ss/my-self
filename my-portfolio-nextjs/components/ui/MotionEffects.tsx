"use client";

import { useEffect, useRef, useState } from "react";
import type React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type MotionDivProps = HTMLMotionProps<"div">;

export function GsapScrollEffects() {
  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    async function initGsap() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-gsap-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 18 },
          {
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true
            }
          }
        );
      });
    });
    }

    initGsap();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return null;
}

export function FadeContent({ className, children, ...props }: MotionDivProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScrollReveal({ className, children, ...props }: MotionDivProps) {
  return (
    <FadeContent className={className} data-gsap-reveal {...props}>
      {children}
    </FadeContent>
  );
}

export function ScrollFloat({ className, children, ...props }: MotionDivProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        opacity: { duration: 0.65 },
        y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedList({ className, children, ...props }: MotionDivProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedListItem({ className, children, ...props }: MotionDivProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function BorderGlow({ as = "div", className, children, ...props }: MotionDivProps & { as?: "div" | "article" }) {
  const Comp = as === "article" ? motion.article : motion.div;

  return (
    <Comp
      className={cn("border-glow", className)}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function MagicRings({ className }: { className?: string }) {
  return (
    <div className={cn("magic-rings", className)} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

export function PixelTransition({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("pixel-transition", className)}>
      {children}
      <div className="pixel-transition-grid" aria-hidden="true">
        {Array.from({ length: 36 }).map((_, index) => (
          <span key={index} style={{ "--pixel-index": index } as React.CSSProperties} />
        ))}
      </div>
    </div>
  );
}

type Spark = {
  id: number;
  x: number;
  y: number;
};

export function ClickSpark({ children }: { children: React.ReactNode }) {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const id = idRef.current++;
      setSparks((current) => [...current.slice(-8), { id, x: event.clientX, y: event.clientY }]);
      window.setTimeout(() => {
        setSparks((current) => current.filter((spark) => spark.id !== id));
      }, 680);
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <>
      {children}
      <div className="click-spark-layer" aria-hidden="true">
        {sparks.map((spark) => (
          <span key={spark.id} className="click-spark" style={{ left: spark.x, top: spark.y }} />
        ))}
      </div>
    </>
  );
}
