import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume Buddy - Get Instant AI Feedback | QE&D",
  description: "Instant AI Powered Resumes. Get shortlisted, interviewed and hired 6x faster. Accurate, reliable, and 100% ATS friendly with free feedback.",
  icons: {
    icon: [
      { url: "/resume-buddy-logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/resume-buddy-logo.png", type: "image/png" },
    ],
  },
};

export default function ResumeBuddyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
