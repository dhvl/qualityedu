import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/resume-buddy-logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/resume-buddy-logo.png", type: "image/png" },
    ],
  },
};

export default function ResumeBuddyAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
