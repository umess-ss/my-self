import { motion, useReducedMotion } from 'framer-motion';
import { buttonHover, buttonTap } from './animations';

export default function AnimatedButton({
  as = 'button',
  children,
  className = '',
  disabled = false,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.button;

  return (
    <Component
      className={className}
      disabled={as === 'button' ? disabled : undefined}
      whileHover={!disabled && !shouldReduceMotion ? buttonHover : undefined}
      whileTap={!disabled && !shouldReduceMotion ? buttonTap : undefined}
      {...props}
    >
      {children}
    </Component>
  );
}
