"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "white" | "muted";
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  background = "white",
}: SectionWrapperProps) {
  const bgColors = {
    white: "bg-white",
    muted: "bg-muted",
  };

  return (
    <section id={id} className={`py-24 lg:py-32 ${bgColors[background]} ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}
