import type { Metadata } from "next";
import "./globals.css";
import ConditionalLayout from "@/components/layout/ConditionalLayout";

export const metadata: Metadata = {
  title: "Quality Education & Deployment (QE&D) | Six Sigma & Quality Certifications",
  description: "QE&D offers expert training & certification in Six Sigma Green/Black Belt, Transaction Quality Management & Soft Skills to power your career growth.",
  keywords: ["Six Sigma Certification", "Transaction Quality Management", "Lean Six Sigma", "Quality Analyst Training", "Interview Preparation", "Resume Buddy"],
  authors: [{ name: "QE&D Institute" }],
  icons: {
    icon: [
      { url: "/uploads/2025/07/cropped-cropped-QED-logo-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/uploads/2025/07/cropped-cropped-QED-logo-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/uploads/2025/07/cropped-cropped-QED-logo-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
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
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
