# Partners & Clients Sections Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add Partners and Clients sections below the Team section, following the existing design language.

**Architecture:** Two new section components using the established SectionWrapper pattern. Partners showcases collaboration relationships with logo grids. Clients displays previous client work with logo/name presentation. Both use framer-motion animations consistent with other sections.

**Tech Stack:** Next.js, React, TypeScript, Framer Motion, Tailwind CSS, Next/Image

---

## Design Patterns to Follow

From existing codebase:
- **Subheading**: `font-mono text-sm uppercase tracking-widest text-accent mb-4`
- **Heading**: `font-mono text-4xl md:text-5xl font-bold text-primary`
- **Body text**: `text-primary/70 leading-relaxed`
- **Cards**: `bg-white p-6` or `bg-white p-8` with hover effects
- **Animation**: `initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `transition={{ duration: 0.5, delay: index * 0.1 }}`, `viewport={{ once: true }}`
- **Backgrounds**: Alternate between `background="white"` and `background="muted"`

---

### Task 1: Create Partners Section Component

**Files:**
- Create: `src/components/sections/Partners.tsx`

**Step 1: Create the Partners component**

```tsx
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
```

**Step 2: Verify file created correctly**

Run: `cat src/components/sections/Partners.tsx | head -20`
Expected: First 20 lines of the Partners component

---

### Task 2: Create Clients Section Component

**Files:**
- Create: `src/components/sections/Clients.tsx`

**Step 1: Create the Clients component**

```tsx
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
```

**Step 2: Verify file created correctly**

Run: `cat src/components/sections/Clients.tsx | head -20`
Expected: First 20 lines of the Clients component

---

### Task 3: Add Sections to Page

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Update page.tsx to import and render new sections**

Add imports after existing imports:
```tsx
import Partners from "@/components/sections/Partners";
import Clients from "@/components/sections/Clients";
```

Add sections after Team in the main element:
```tsx
<Team />
<Partners />
<Clients />
<Contact />
```

**Step 2: Verify changes**

Run: `cat src/app/page.tsx`
Expected: File shows Partners and Clients imported and rendered between Team and Contact

---

### Task 4: Create Placeholder Directories for Assets

**Files:**
- Create: `public/partners/.gitkeep`
- Create: `public/clients/.gitkeep`

**Step 1: Create directories**

Run: `mkdir -p public/partners public/clients && touch public/partners/.gitkeep public/clients/.gitkeep`

**Step 2: Verify**

Run: `ls -la public/partners public/clients`
Expected: Both directories exist with .gitkeep files

---

### Task 5: Build and Verify

**Step 1: Run build to check for TypeScript errors**

Run: `npm run build`
Expected: Build succeeds with no errors

**Step 2: Run dev server and visually verify**

Run: `npm run dev`
Expected: Dev server starts, navigate to localhost:3000 and see new Partners and Clients sections

---

### Task 6: Commit Changes

**Step 1: Stage and commit**

```bash
git add -A
git commit -m "feat: add Partners and Clients sections

- Partners section showcasing collaboration relationships
- Clients section displaying previous client work
- Follows existing design patterns and animations

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

**Step 2: Push to GitHub**

Run: `git push`
Expected: Changes pushed, Vercel auto-deploys

---

## Placeholder Data Notes

The components are created with placeholder data. After implementation, the user should:

1. Add actual partner/client logos to `public/partners/` and `public/clients/`
2. Update the `partners` and `clients` arrays in each component with real data
3. Optionally link to partner/client websites

