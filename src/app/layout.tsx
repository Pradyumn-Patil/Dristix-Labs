import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* ===========================================
   OLD FONT CONFIG (Inter) - Uncomment to restore:

   import { Inter } from "next/font/google";

   const inter = Inter({
     variable: "--font-inter",
     subsets: ["latin"],
   });

   Then add ${inter.variable} back to body className
   and update globals.css --font-sans to var(--font-inter)
   =========================================== */

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dristix Labs | Software Development Agency",
  description: "We build high-quality web applications, mobile apps, and custom software solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
