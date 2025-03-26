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
      <h1 className="text-4xl font-bold">Welcome to Bedroom Trader</h1>
      <p className="mt-4 text-lg text-gray-600">Powered by Next.js and Netlify</p>
    </motion.section>
  );
}
