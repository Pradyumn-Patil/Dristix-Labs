import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dristix Labs | Software Development Agency",
  description:
    "We build high-quality web applications, mobile apps, and custom software solutions. Based in Navi Mumbai.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "custom software",
    "Navi Mumbai",
    "Dristix Labs",
  ],
  authors: [{ name: "Dristix Labs" }],
  openGraph: {
    title: "Dristix Labs | Software Development Agency",
    description:
      "We build digital products that matter. Custom software, web apps, mobile apps, and cloud solutions.",
    url: "https://dristixlabs.com",
    siteName: "Dristix Labs",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dristix Labs | Software Development Agency",
    description:
      "We build digital products that matter. Custom software, web apps, mobile apps, and cloud solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
