# Dristix Labs

**We Build Digital Products That Matter**

Dristix Labs is a software development agency based in Navi Mumbai, specializing in custom software solutions, web applications, mobile apps, and cloud services. This repository contains our company portfolio website.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) with [React 19](https://react.dev)
- **Language:** [TypeScript 5](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com)
- **Animations:** [Framer Motion](https://www.framer.com/motion) + [Matter.js](https://brm.io/matter-js/) (physics-based logo)
- **Email:** [Resend](https://resend.com) + [React Email](https://react.email)
- **Icons:** [Lucide React](https://lucide.dev)

## Features

- Physics-based interactive logo animation powered by Matter.js
- Smooth scroll animations and transitions with Framer Motion
- Fully responsive, mobile-first design
- Contact form with email delivery via Resend
- Monospace typography with JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone https://github.com/Pradyumn-Patil/Dristix-Labs.git
cd Dristix-Labs
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx                # Main homepage
│   ├── layout.tsx              # Root layout and metadata
│   ├── globals.css             # Global styles
│   └── api/contact/route.ts    # Contact form API endpoint
├── components/
│   ├── layout/                 # Header, Footer
│   ├── sections/               # Hero, Services, Projects, Team, Partners, Clients, Contact
│   └── ui/                     # Button, Card, Input, PhysicsLogo, etc.
├── emails/                     # React Email templates
└── lib/                        # Utility modules (Resend client)
```

## Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start development server   |
| `npm run build` | Build for production       |
| `npm start`     | Start production server    |
| `npm run lint`  | Run ESLint                 |

## Contact

- **Email:** hello@dristixlabs.com
- **Location:** Kharghar, Navi Mumbai
