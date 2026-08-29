import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, CheckCircle2, ArrowRight, Star, ShieldCheck, UserCheck, Briefcase, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Resume Buddy - Build Resumes That Matter | QE&D",
  description: "Resume Buddy — your ultimate Resume & Career Coach. Get optimized resumes, ATS-friendly scorecards, expert feedback, and interview preparation.",
};

export default function ResumeBuddyAppPage() {
  const fresherAppUrl = "/resume-buddy-app/freshers";
  const experiencedAppUrl = "/resume-buddy-app/experienced";

  const benefits = [
    {
      title: "100% ATS Compliant",
      desc: "Tailored structure and keyword optimization ensuring algorithms parse your profile seamlessly.",
      icon: "🎯"
    },
    {
      title: "Industry Specific Keywords",
      desc: "Action verbs and measurable achievement formulas mapped specifically to your target roles.",
      icon: "⚡"
    },
    {
      title: "Salary & Role Trends",
      desc: "Real-time market insights into compensation benchmarks and high-demand competencies.",
      icon: "📊"
    },
    {
      title: "Comprehensive Interview Prep",
      desc: "Behavioral questions and competency cues tailored to the exact bullets on your revamped CV.",
      icon: "💼"
    },
    {
      title: "Zero Guesswork",
      desc: "Clear before-and-after scoring diagnostics so you know exactly where your resume stands.",
      icon: "🔍"
    },
    {
      title: "Fast & Free Assessment",
      desc: "Instant intake for Freshers and Experienced professionals to get started immediately.",
      icon: "🚀"
    }
  ];

  const testimonials = [
    {
      quote: "Resume Buddy made the whole resume-building process so much easier. The AI suggestions were spot-on, and I loved how it tailored everything to my job profile. I landed more interviews within weeks—highly recommend it to anyone job hunting!",
      name: "Saurav C",
      role: "Manager",
      img: "/uploads/2025/11/Screenshot-2025-11-24-at-10.31.42-AM.png"
    },
    {
      quote: "My resume wasn&apos;t working until Resume Buddy professionally structured it. I immediately started getting better calls and job offers. They made my experience stand out. Highly recommend!",
      name: "Esha Dhawan",
      role: "Returning to work",
      img: "/uploads/2025/11/WhatsApp-Image-2025-11-26-at-13.30.10.jpeg"
    },
    {
      quote: "As a recruiter, the optimized resume made my job noticeably easier. The structure was clean, the achievements were clear and quantified, and the candidate’s strengths were highlighted so effectively that I could assess their fit within seconds. It turned the same information into a far more confident, compelling profile.",
      name: "Garima Gupta",
      role: "HR Strategist and Leader",
      img: "/uploads/2025/11/Screenshot-2025-11-26-at-9.44.56-PM.png"
    }
  ];

  const renderCTA = (label = "Ready to Transform Your Resume And Career?") => (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-10 text-white text-center space-y-6 shadow-xl border border-blue-800/40 my-8">
      <div className="space-y-2">
        <h3 className="text-2xl sm:text-3xl font-black tracking-tight">{label}</h3>
        <p className="text-sm text-blue-200">Click on your respective profile below to begin.</p>
        <div className="inline-block text-xs font-black tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 mt-1">
          TRY NOW FOR FREE!
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-2">
        <Link
          href={fresherAppUrl}
          className="w-full sm:w-1/2 py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-black text-sm text-center shadow-lg shadow-emerald-500/20 hover:scale-102 transition-all flex items-center justify-center gap-2"
        >
          <GraduationCap className="w-4 h-4" />
          <span>Freshers Portal</span>
        </Link>
        <Link
          href={experiencedAppUrl}
          className="w-full sm:w-1/2 py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm text-center shadow-lg shadow-blue-600/30 hover:scale-102 transition-all flex items-center justify-center gap-2"
        >
          <Briefcase className="w-4 h-4" />
          <span>Experienced Portal</span>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Resume Buddy — Your Ultimate Resume & Career Coach</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              Resumes That <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Get Noticed</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
              Stop guessing, start winning. Resume Buddy provides tailored resume optimization and review for all experience levels and industries. We give you expert feedback, a fully ATS-friendly resume, salary trends, and comprehensive interview prep. Get the advantage you need to secure your next role—let Resume Buddy do the work. Build Resumes that matter.
            </p>

            {/* Quick Action Buttons linking to in-app portal */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Link
                href={fresherAppUrl}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 hover:scale-102 transition flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Launch: Freshers Portal</span>
              </Link>
              <Link
                href={experiencedAppUrl}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-xl shadow-blue-600/30 hover:scale-102 transition flex items-center justify-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>Launch: Experienced Portal</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Benefits Section */}
        <section className="space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Resume Buddy <span className="text-cyan-600">Benefits</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Designed specifically to help candidates beat Applicant Tracking Systems and impress hiring managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition space-y-3">
                <div className="text-3xl">{b.icon}</div>
                <h3 className="text-lg font-black text-slate-900">{b.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {renderCTA("Ready to Transform Your Resume And Career?")}
        </section>

        {/* Services Comparison Section */}
        <section className="space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Resume Buddy <span className="text-cyan-600">Services</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Choose between our instant automated diagnostics and comprehensive mentor-led transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Service */}
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-700 w-fit block">
                  FREE SERVICE
                </span>
                <h3 className="text-2xl font-black text-slate-900">Instant ATS Audit & Diagnostics</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Quick automated scan of your resume against target job categories. Receive immediate ATS compatibility indicators and format checks.
                </p>
                <div className="space-y-2.5 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Instant parsing & readability check</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Section & formatting hygiene score</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% Free with zero credit card required</span>
                  </div>
                </div>
              </div>
              <Link
                href={fresherAppUrl}
                className="block text-center py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition"
              >
                Launch Free Portal &rarr;
              </Link>
            </div>

            {/* Paid / Full Service */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden border border-blue-700">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-amber-400 text-slate-950 w-fit block">
                  PREMIUM DELIVERABLES
                </span>
                <h3 className="text-2xl font-black text-white">Complete Resume & Profile Revamp</h3>
                <p className="text-xs text-blue-200 leading-relaxed">
                  Hands-on rewrite by Master Black Belts & Quality leaders. We re-quantify your accomplishments, rewrite bullet points, and prepare you for interviews.
                </p>
                <div className="space-y-2.5 pt-2 text-xs text-blue-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Word & PDF ATS-optimized final resumes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Tailored cover letter & LinkedIn profile rewrite</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Interview question banks & STAR technique guidance</span>
                  </div>
                </div>
              </div>
              <Link
                href={experiencedAppUrl}
                className="block text-center py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs shadow-lg transition"
              >
                Launch Experienced Portal &rarr;
              </Link>
            </div>
          </div>

          {renderCTA("Ready to Transform Your Resume And Career?")}
        </section>

        {/* Testimonials */}
        <section className="space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Testimonials & <span className="text-cyan-600">Success Stories</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              User feedback from job seekers and recruiters who rely on Resume Buddy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-xs text-blue-700 shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {renderCTA("Ready to Transform Your Resume And Career?")}
        </section>

        {/* Workflows / How It Works */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl font-black tracking-tight text-white">
              How Resume Buddy Works
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              A simple 3-step workflow to get your career moving forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center mx-auto text-sm">
                1
              </div>
              <h3 className="font-bold text-base text-white">Select Your Profile</h3>
              <p className="text-xs text-slate-400">Choose between Freshers or Experienced professional assessment tracks.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black flex items-center justify-center mx-auto text-sm">
                2
              </div>
              <h3 className="font-bold text-base text-white">Submit Your Details</h3>
              <p className="text-xs text-slate-400">Upload your current CV or fill in your target domains and metrics.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white font-black flex items-center justify-center mx-auto text-sm">
                3
              </div>
              <h3 className="font-bold text-base text-white">Receive Optimized Profile</h3>
              <p className="text-xs text-slate-400">Get your ATS diagnostics, rewritten resume, and interview question cues.</p>
            </div>
          </div>

          <div className="pt-4 text-center">
            <p className="text-xs text-slate-400 italic max-w-xl mx-auto">
              Build Resumes that matter with the No 1. Resume reviewer and optimizer platform. Resume Buddy is your one stop shop for career success.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
