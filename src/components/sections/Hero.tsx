"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import PhysicsLogo from "@/components/ui/PhysicsLogo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Geometric Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1a1a1a 1px, transparent 1px),
              linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated Logo Mark with Physics */}
      <motion.div
        className="absolute right-10 lg:right-32 top-1/2 -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <PhysicsLogo size={320} rotationSpeed={0.005} />
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm uppercase tracking-widest text-accent mb-6"
          >
            Software Development Agency
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-8"
          >
            We Build
            <br />
            Digital Products
            <br />
            <span className="text-accent">That Matter.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-primary/70 mb-12 max-w-xl"
          >
            Transforming ideas into exceptional digital experiences through
            clean code, modern design, and relentless attention to detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="primary">
              <a href="#contact">Start a Project</a>
            </Button>
            <Button variant="outline">
              <a href="#projects">View Our Work</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
