import { motion, useReducedMotion } from 'framer-motion';
import { easeOut } from './animations';

const offsets = {
  up: { y: 16 },
  down: { y: -16 },
  left: { x: 16 },
  right: { x: -16 },
  none: {},
};

export default function Reveal({
  children,
  as = 'div',
  className = '',
  delay = 0,
  duration = 0.48,
  direction = 'up',
  amount = 0.16,
  once = true,
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, ...(shouldReduceMotion ? {} : offsets[direction] || offsets.up) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration: shouldReduceMotion ? 0.18 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: easeOut,
      }}
    >
      {children}
    </Component>
  );
}
