import { motion, MotionProps } from 'framer-motion';
import { HTMLAttributes } from 'react';

type MotionSectionProps = HTMLAttributes<HTMLElement> & MotionProps;

const MotionSection = ({ children, ...rest }: MotionSectionProps) => {
  return (
    <motion.section {...rest}>
      {children}
    </motion.section>
  );
};


export default MotionSection;