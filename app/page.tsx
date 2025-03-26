'use client';

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

const MotionSection = motion.section as unknown as React.FC<React.HTMLAttributes<HTMLElement>>;

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen p-6">
      <MotionSection 
        className="text-center py-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">BEDROOM TRADER OLI</h1>
        <p className="text-xl max-w-2xl mx-auto mb-6">
          Join the revolution of decentralized trading with Bedroom Trader OLI — a meme token with purpose and power.
        </p>
        <Button className="text-lg px-6 py-3">Get Started</Button>
      </MotionSection>
    </main>
  );
}
