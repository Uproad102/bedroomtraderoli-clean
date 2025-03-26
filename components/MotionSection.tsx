import { motion, MotionProps } from 'framer-motion';
import { HTMLAttributes } from 'react';

type MotionSectionProps = HTMLAttributes<HTMLElement> & MotionProps;

const MotionSection = (props: MotionSectionProps) => {
  return <motion.section {...props} />;
};

export default MotionSection;