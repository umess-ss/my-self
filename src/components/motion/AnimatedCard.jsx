import { motion, useReducedMotion } from 'framer-motion';
import { easeOut } from './animations';

export default function AnimatedCard({
  as = 'article',
  children,
  className = '',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.article;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: shouldReduceMotion ? 0.18 : 0.45, ease: easeOut }}
      {...props}
    >
      {children}
    </Component>
  );
}
