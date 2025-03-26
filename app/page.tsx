// app/page.tsx
"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.section
      className="text-center py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to BedroomTraderOLI</h1>
      <p className="text-lg text-gray-600">
        Your go-to platform for room trading and more!
      </p>
    </motion.section>
  );
}
