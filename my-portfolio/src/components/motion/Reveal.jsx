import { motion, useReducedMotion } from 'framer-motion';
import { easeOut, reducedFade, staggerContainer } from './animations';

const directionOffset = {
  up: { y: 18 },
  down: { y: -18 },
  left: { x: 18 },
  right: { x: -18 },
  none: {},
};

export default function Reveal({
  children,
  as = 'div',
  className = '',
  delay = 0,
  duration = 0.56,
  direction = 'up',
  distance = 18,
  amount = 0.18,
  once = true,
  stagger = false,
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;
  const offset = direction === 'none'
    ? {}
    : Object.fromEntries(
        Object.entries(directionOffset[direction] || directionOffset.up).map(([axis, value]) => [
          axis,
          Math.sign(value) * distance,
        ])
      );

  const variants = shouldReduceMotion
    ? reducedFade
    : {
        hidden: {
          opacity: 0,
          ...offset,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            delay,
            ease: easeOut,
            ...(stagger ? staggerContainer.visible.transition : {}),
          },
        },
      };

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      style={{ willChange: shouldReduceMotion ? 'opacity' : 'transform, opacity' }}
    >
      {children}
    </Component>
  );
}
