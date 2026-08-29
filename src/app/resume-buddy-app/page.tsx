import Link from "next/link";
import { Sparkles, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Resume Buddy App | QE&D",
  description: "ATS Resume optimization and LinkedIn profile positioning for quality and operational candidates.",
};

export default function ResumeBuddyPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="bg-gradient-to-b from-slate-900 to-indigo-950 text-white py-16 text-center space-y-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/20">
            Career AI Tool
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Resume Buddy App</h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Ensure your CV gets shortlisted by Applicant Tracking Systems (ATS) with targeted keyword scoring and formatting designed for quality roles.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm max-w-3xl mx-auto space-y-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <FileText className="w-8 h-8" />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Get Your Resume Reviewed by Quality Mentors
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We analyze your bullet points, metrics impact, and Six Sigma keywords to ensure recruiters immediately recognize your value.
            </p>
          </div>
          <div className="pt-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition"
            >
              <span>Submit Resume for Mentor Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
