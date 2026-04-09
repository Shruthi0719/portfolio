import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const heading = Syne({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-heading",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "R Shruthi Yadav — Full-Stack Developer",
  description: "Full-stack developer building scalable, real-time systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
