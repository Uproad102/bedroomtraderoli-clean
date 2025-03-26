'use client';
import { motion } from 'framer-motion';
import type { HTMLAttributes } from 'react';

type MotionSectionProps = HTMLAttributes<HTMLElement> & {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
};

const MotionSection = (props: MotionSectionProps) => (
  <motion.section {...props} />
);

export default function HomePage() {
  return (
    <MotionSection
      className="text-center py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold">Xin chào từ trang chủ!</h1>
    </MotionSection>
  );
}
