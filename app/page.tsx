import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { FC } from "react";

const MotionSection: FC<HTMLMotionProps<"section">> = motion.section;

export default function HomePage() {
  return (
    <MotionSection
      className="text-center py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Nội dung khác ở đây */}
    </MotionSection>
  );
}
