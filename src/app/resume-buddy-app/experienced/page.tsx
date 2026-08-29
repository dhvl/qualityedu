import Link from "next/link";
import { ArrowLeft, Sparkles, Briefcase } from "lucide-react";

export const metadata = {
  title: "Resume Buddy for Experienced Professionals | QE&D",
  description: "Executive Resume & Career Optimization for Experienced Working Professionals.",
};

export default function ExperiencedAppPage() {
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzSG1IwhDd-X9bjHepoc-QqUEjJ87AJQHDhn0sGSsZv2kqWS1CaomApIpZ4S6A6U2yLng/exec";

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Top App Bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/resume-buddy-app"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition bg-slate-800 px-3 py-1.5 rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Overview</span>
          </Link>
          <div className="h-4 w-px bg-slate-800 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-blue-400" />
            <span className="font-black text-sm text-white">Resume Buddy — Experienced Portal</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 hidden sm:inline">
            PROFESSIONAL PORTAL
          </span>
        </div>
      </div>

      {/* Embedded Iframe Container */}
      <div className="flex-1 w-full bg-white relative">
        <iframe
          src={scriptUrl}
          title="Resume Buddy Experienced Intake"
          className="w-full h-[850px] sm:h-[950px] border-0"
          allow="camera; microphone; autoplay; encrypted-media; fullscreen"
        />
      </div>
    </div>
  );
}
