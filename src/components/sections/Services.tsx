"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Code2, Cloud } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive web applications built with cutting-edge technologies. From marketing sites to complex platforms.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Tailored software solutions designed to solve your unique business challenges and streamline operations.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Scalable cloud infrastructure and automated deployment pipelines to keep your applications running smoothly.",
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services" background="muted">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="font-mono text-sm uppercase tracking-widest text-accent mb-4">
          What We Do
        </p>
        <h2 className="font-mono text-4xl md:text-5xl font-bold text-primary">
          Our Services
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white p-8 relative overflow-hidden"
          >
            {/* Hover accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />

            <service.icon className="w-10 h-10 text-accent mb-6" strokeWidth={1.5} />

            <h3 className="font-mono text-xl font-bold text-primary mb-4">
              {service.title}
            </h3>

            <p className="text-primary/70 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
