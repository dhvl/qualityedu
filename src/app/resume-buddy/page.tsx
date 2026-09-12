import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, CheckCircle2, ArrowRight, Star, ShieldCheck, Zap, TrendingUp, Users, Award, Briefcase, GraduationCap, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Resume Buddy - Get Instant AI Feedback | QE&D",
  description: "Instant AI Powered Resumes. Get shortlisted, interviewed and hired 6x faster. Accurate, reliable, and 100% ATS friendly with free feedback.",
};

export default function ResumeBuddyLandingPage() {
  const steps = [
    {
      step: "01",
      title: "Choose Your Profile",
      desc: "Select whether you are a fresher or an experienced professional seeking career progression."
    },
    {
      step: "02",
      title: "Upload Resume & Job Details",
      desc: "Submit your existing resume and target job descriptions for instant deep-learning ATS parsing."
    },
    {
      step: "03",
      title: "Get Optimized Deliverables",
      desc: "Receive your quantifiable score, keyword gaps, customized rewrite bullets, and interview coaching cues."
    }
  ];

  const differentiators = [
    {
      title: "No Generic Templates",
      desc: "We tailor your bullet points using real industry metric formulas (X-Y-Z framework) rather than boilerplate fill-in blanks."
    },
    {
      title: "100% ATS Scanner Proof",
      desc: "Built to pass Taleo, Workday, Greenhouse, and modern AI screening algorithms with zero parsing bugs."
    },
    {
      title: "Curated by Quality Leaders",
      desc: "Designed and calibrated by Master Black Belts and seasoned operations directors with 20+ years of hiring experience."
    },
    {
      title: "Instant + Zero Sign-Up Barrier",
      desc: "No forced subscriptions or hidden paywalls for baseline diagnostics. Try free and benchmark your CV immediately."
    }
  ];

  const testimonials = [
    {
      quote: "Resume Buddy made the whole resume-building process so much easier. The AI suggestions were spot-on, and I loved how it tailored everything to my job profile. I landed more interviews within weeks—highly recommend it to anyone job hunting!",
      name: "Saurav C",
      role: "Manager"
    },
    {
      quote: "My resume wasn&apos;t working until Resume Buddy professionally structured it. I immediately started getting better calls and job offers. They made my experience stand out. Highly recommend!",
      name: "Esha Dhawan",
      role: "Returning to work"
    },
    {
      quote: "As a recruiter, the optimized resume made my job noticeably easier. The structure was clean, the achievements were clear and quantified, and the candidate’s strengths were highlighted so effectively that I could assess their fit within seconds.",
      name: "Garima Gupta",
      role: "HR Strategist and Leader"
    }
  ];

  const companies = ["Accenture", "Airbnb", "Amazon", "Cognizant", "HCL Tech", "Concentrix", "Genpact", "Wipro"];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant AI Powered Resumes — No Sign Up, No Subscription</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                Get Shortlisted, Interviewed & Hired <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">6x Faster</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                Accurate. Reliable & 100% ATS Friendly. Resume vs Job Description match, keywords to add, structural improvement tips, and personalized interview readiness.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/resume-buddy-app/freshers"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 hover:scale-102 transition flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Fix My Resume: Freshers</span>
                </Link>
                <Link
                  href="/resume-buddy-app/experienced"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-xl shadow-blue-600/30 hover:scale-102 transition flex items-center justify-center gap-2"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Fix My Resume: Experienced</span>
                </Link>
              </div>

              <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free Diagnostic Scan</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ATS Keyword Match</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant Results</span>
                </div>
              </div>
            </div>

            {/* Quick Hero Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl border border-slate-100 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-black uppercase text-emerald-600">ATS Diagnostic</span>
                    <h3 className="text-xl font-black text-slate-900">Resume Health Check</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800">
                    FREE
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <span className="font-bold text-slate-800">Average Recruiter Screen Time</span>
                    <span className="font-black text-rose-600">3.2 Seconds</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <span className="font-bold text-slate-800">Resumes Rejected by ATS</span>
                    <span className="font-black text-rose-600">75%+</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-between">
                    <span className="font-bold text-emerald-900">Resume Buddy Match Advantage</span>
                    <span className="font-black text-emerald-700">+400% Calls</span>
                  </div>
                </div>

                <Link
                  href="/resume-buddy-app"
                  className="block w-full text-center py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow transition"
                >
                  Explore Full Features & App &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Used by Candidates Hired Across Top Global Firms
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70 grayscale hover:grayscale-0 transition-all">
          {companies.map((c, i) => (
            <span key={i} className="text-lg font-black text-slate-800">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* 3 Step Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Fix Your Resume in <span className="text-emerald-600">3 Simple Steps</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Your resume is judged in 3.2 seconds. Ensure you pass ATS filters and stand out to human decision-makers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4 text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 font-black text-lg flex items-center justify-center mx-auto">
                {s.step}
              </div>
              <h3 className="text-xl font-black text-slate-900">{s.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/resume-buddy-app"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-sm shadow-md transition"
          >
            <span>Start Now For Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* How Are We Different */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              How Are We Different?
            </h2>
            <p className="text-slate-400 text-sm">
              We combine AI scanning speed with real Quality Assurance expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d, idx) => (
              <div key={idx} className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white">{d.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Success Stories & User Feedback
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            See how job seekers and hiring leaders rate Resume Buddy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Repeating CTA with Portal Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight max-w-2xl mx-auto">
            Ready to Transform Your Resume And Career?
          </h2>
          <p className="text-blue-200 text-sm max-w-xl mx-auto font-normal">
            Build Resumes that matter with the No 1. Resume reviewer and optimizer platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 max-w-md mx-auto">
            <Link
              href="/resume-buddy-app/freshers"
              className="w-full sm:w-1/2 py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-sm shadow-md transition text-center"
            >
              Freshers Track &rarr;
            </Link>
            <Link
              href="/resume-buddy-app/experienced"
              className="w-full sm:w-1/2 py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-md transition text-center"
            >
              Experienced Track &rarr;
            </Link>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Need Help? WhatsApp Mentor at: </span>
            <a href="https://wa.me/918886991370?text=Hi!%20I%20need%20help%20with%20my%20resume." target="_blank" rel="noopener noreferrer" className="text-white font-bold underline hover:text-emerald-400">
              +91 88869 91370
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
