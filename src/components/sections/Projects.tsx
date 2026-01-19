"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

const projects = [
  {
    title: "AIM",
    description:
      "AI-powered football analysis software that evaluates player performance during training drills. Using computer vision and machine learning, AIM provides real-time feedback and detailed metrics to help players improve their technique.",
    tags: ["Python", "TensorFlow", "Computer Vision", "React"],
    color: "#3caceb",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=450&fit=crop",
  },
  {
    title: "FinFlow Dashboard",
    description:
      "A comprehensive financial management platform with real-time analytics and reporting capabilities.",
    tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    color: "#1a1a1a",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
  },
  {
    title: "HealthTrack Mobile",
    description:
      "Cross-platform health monitoring app with AI-powered insights and seamless wearable integration.",
    tags: ["React Native", "Node.js", "MongoDB", "TensorFlow"],
    color: "#3caceb",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" background="white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="font-mono text-sm uppercase tracking-widest text-accent mb-4">
          Our Work
        </p>
        <h2 className="font-mono text-4xl md:text-5xl font-bold text-primary">
          Featured Projects
        </h2>
      </motion.div>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Project Image */}
            <div
              className={`aspect-video bg-muted relative overflow-hidden ${
                index % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className={index % 2 === 1 ? "md:order-1" : ""}>
              <h3 className="font-mono text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center gap-2">
                {project.title}
                <ArrowUpRight className="w-6 h-6 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              <p className="text-primary/70 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs uppercase tracking-wider px-3 py-1 bg-muted text-primary/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
