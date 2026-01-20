"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

const clients = [
  {
    name: "Client Name",
    logo: "/clients/client-logo.svg",
    industry: "Technology",
  },
  // Add more clients as needed
];

export default function Clients() {
  return (
    <SectionWrapper id="clients" background="muted">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-mono text-sm uppercase tracking-widest text-accent mb-4">
          Trusted By
        </p>
        <h2 className="font-mono text-4xl md:text-5xl font-bold text-primary">
          Our Clients
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group bg-white p-6 flex flex-col items-center justify-center aspect-square"
          >
            {/* Logo */}
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <span className="font-mono text-xl font-bold text-primary/30 group-hover:text-accent transition-colors duration-300">
                  {client.name.split(" ").map(w => w[0]).join("")}
                </span>
              )}
            </div>

            <h3 className="font-mono text-sm font-bold text-primary text-center">
              {client.name}
            </h3>

            {client.industry && (
              <p className="font-mono text-xs uppercase tracking-wider text-primary/50 mt-1">
                {client.industry}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
