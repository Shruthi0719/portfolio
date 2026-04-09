import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "R Shruthi Yadav — Software Engineer",
  description:
    "Portfolio of R Shruthi Yadav — CS undergrad building cloud security platforms, real-time systems, and robust software.",
  keywords: ["Software Engineer", "Full Stack", "React", "Next.js", "AWS", "Cloud Security"],
  authors: [{ name: "R Shruthi Yadav" }],
  openGraph: {
    title: "R Shruthi Yadav — Software Engineer",
    description: "CS undergrad building cloud security platforms, real-time systems, and robust software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}