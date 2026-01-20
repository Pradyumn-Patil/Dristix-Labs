"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

const team = [
  {
    name: "Pradyumn Patil",
    role: "Founder & Lead Developer",
    initials: "PP",
    image: "/team/pradyumn-patil.jpg",
  },
  {
    name: "Aditya Patil",
    role: "Software Engineer",
    initials: "AP",
  },
  {
    name: "Narendra Patil",
    role: "Senior Advisor",
    initials: "NP",
  },
];

export default function Team() {
  return (
    <SectionWrapper id="team" background="muted">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm uppercase tracking-widest text-accent mb-4">
            About Us
          </p>
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-primary mb-8">
            The Team
          </h2>

          <p className="text-lg text-primary/70 leading-relaxed mb-6">
            We&apos;re a tight-knit team of engineers, designers, and problem
            solvers who believe that great software is built through
            collaboration, attention to detail, and a relentless focus on user
            experience.
          </p>

          <p className="text-lg text-primary/70 leading-relaxed">
            Founded with the mission to help businesses transform their ideas
            into reality, we bring together years of experience across web,
            mobile, and cloud technologies.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 text-center"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-4 bg-primary flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-mono text-xl font-bold text-white">
                    {member.initials}
                  </span>
                )}
              </div>

              <h3 className="font-mono text-lg font-bold text-primary mb-1">
                {member.name}
              </h3>

              <p className="font-mono text-xs uppercase tracking-wider text-primary/50">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
