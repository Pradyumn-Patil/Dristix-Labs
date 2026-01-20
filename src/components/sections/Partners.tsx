"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

const partners = [
  {
    name: "Jude Mingay",
    logo: "/team/jude-mingay.png",
    description: "Expert development partner providing strategic guidance and technical expertise when needed",
  },
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
          Development Partners
        </p>
        <h2 className="font-mono text-4xl md:text-5xl font-bold text-primary mb-4">
          Our Partners
        </h2>
        <p className="text-lg text-primary/70 max-w-2xl">
          Industry experts who provide necessary guidance and support for our projects
        </p>
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
