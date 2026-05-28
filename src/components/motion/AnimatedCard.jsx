import { motion, useReducedMotion } from 'framer-motion';
import { cardHover, easeOut, reducedFade } from './animations';

export default function AnimatedCard({
  as = 'article',
  children,
  className = '',
  delay = 0,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.article;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={
        shouldReduceMotion
          ? reducedFade
          : {
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay,
                  ease: easeOut,
                },
              },
            }
      }
      whileHover={!shouldReduceMotion ? cardHover : undefined}
      style={{ willChange: shouldReduceMotion ? 'opacity' : 'transform, opacity' }}
      {...props}
    >
      {children}
    </Component>
  );
}
