'use client'

import { motion, MotionProps } from 'framer-motion'
import { HTMLAttributes } from 'react'

type MotionSectionProps = HTMLAttributes<HTMLElement> & MotionProps

const MotionSection = motion.section as React.FC<MotionSectionProps>

export default function HomePage() {
  return (
    <MotionSection
      className="text-center py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold">Welcome to My Site</h1>
    </MotionSection>
  )
}
