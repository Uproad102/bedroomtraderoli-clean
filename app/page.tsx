'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <motion.section
      className="text-center py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to Bedroom Trader Oli</h1>
      <p className="text-lg text-gray-600">
        The ultimate platform to trade and explore interior bedroom setups.
      </p>
    </motion.section>
  );
}
