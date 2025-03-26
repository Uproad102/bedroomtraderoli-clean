import { motion } from "framer-motion";

const MotionSection = motion.section;

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
