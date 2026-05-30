"use client";

import type { CSSProperties, ReactNode } from "react";

type LogoLoopItem = {
  node?: ReactNode;
  src?: string;
  title: string;
  alt?: string;
  href?: string;
};

type LogoLoopProps = {
  logos: LogoLoopItem[];
  speed?: number;
  logoHeight?: number;
  gap?: number;
  scaleOnHover?: boolean;
  ariaLabel?: string;
};

export function LogoLoop({
  logos,
  speed = 80,
  logoHeight = 38,
  gap = 42,
  scaleOnHover = true,
  ariaLabel = "Technology stack"
}: LogoLoopProps) {
  const loopItems = [...logos, ...logos];
  const duration = `${Math.max(6, Math.round((logos.length * 120) / speed))}s`;
  const trackStyle = {
    "--logo-loop-duration": duration,
    "--logo-loop-gap": `${gap}px`,
    "--logo-loop-height": `${logoHeight}px`
  } as CSSProperties & Record<`--${string}`, string>;

  return (
    <div className="logo-loop" aria-label={ariaLabel}>
      <div className="logo-loop-track" style={trackStyle}>
        {loopItems.map((item, index) => (
          <a
            className={`logo-loop-item ${scaleOnHover ? "logo-loop-item-scale" : ""}`}
            key={`${item.title}-${index}`}
            href={item.href}
            target={item.href ? "_blank" : undefined}
            rel={item.href ? "noreferrer" : undefined}
            aria-label={item.title}
            aria-hidden={index >= logos.length}
            tabIndex={index >= logos.length ? -1 : 0}
          >
            {item.node ? item.node : <img src={item.src} alt={item.alt ?? item.title} loading="lazy" />}
          </a>
        ))}
      </div>
    </div>
  );
}
