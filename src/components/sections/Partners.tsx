"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

const partners = [
  {
    name: "Partner Name",
    logo: "/partners/partner-logo.svg",
    description: "Brief description of partnership",
  },
  // Add more partners as needed
];

export default function Partners() {
  return (
    <SectionWrapper id="partners" background="white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="font-mono text-sm uppercase tracking-widest text-accent mb-4">
          Collaborations
        </p>
        <h2 className="font-mono text-4xl md:text-5xl font-bold text-primary">
          Our Partners
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-muted p-8 text-center"
          >
            {/* Logo container */}
            <div className="w-24 h-24 mx-auto mb-6 bg-white flex items-center justify-center p-4">
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="font-mono text-2xl font-bold text-primary/30">
                  {partner.name.split(" ").map(w => w[0]).join("")}
                </span>
              )}
            </div>

            <h3 className="font-mono text-lg font-bold text-primary mb-2">
              {partner.name}
            </h3>

            {partner.description && (
              <p className="text-sm text-primary/60">
                {partner.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
