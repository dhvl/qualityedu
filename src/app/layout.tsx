import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Quality Education & Deployment (QE&D) | Six Sigma & Quality Certifications",
  description: "QE&D offers expert training & certification in Six Sigma Green/Black Belt, Transaction Quality Management & Soft Skills to power your career growth.",
  keywords: ["Six Sigma Certification", "Transaction Quality Management", "Lean Six Sigma", "Quality Analyst Training", "Interview Preparation", "Resume Buddy"],
  authors: [{ name: "QE&D Institute" }],
  openGraph: {
    title: "Quality Education & Deployment (QE&D)",
    description: "Industry-leading Six Sigma and Transaction Quality training and career transformation since 2019.",
    url: "https://www.quality-education.net",
    siteName: "QE&D",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
