import Link from "next/link";
import { ArrowLeft, Sparkles, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Resume Buddy for Freshers | QE&D",
  description: "Instant ATS Resume Optimization & Intake for Freshers and Early Career Candidates.",
};

export default function FreshersAppPage() {
  const scriptUrl = "https://script.google.com/macros/s/AKfycbytfggnVd7NmoFJcJh9bmeQtjCLAY4WhhwrQMnFXSglWPxzLe6N5bKESVOmxvPZ5VyLcQ/exec";

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
            <GraduationCap className="w-5 h-5 text-emerald-400" />
            <span className="font-black text-sm text-white">Resume Buddy — Freshers Portal</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hidden sm:inline">
            FREE ATS DIAGNOSTIC
          </span>
        </div>
      </div>

      {/* Embedded Iframe Container */}
      <div className="flex-1 w-full bg-white relative">
        <iframe
          src={scriptUrl}
          title="Resume Buddy Freshers Intake"
          className="w-full h-[850px] sm:h-[950px] border-0"
          allow="camera; microphone; autoplay; encrypted-media; fullscreen"
        />
      </div>
    </div>
  );
}
