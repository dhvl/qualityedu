import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, CheckCircle2, ArrowRight, Star, ShieldCheck, Zap, TrendingUp, Users, Award, Briefcase, GraduationCap, MessageCircle, Play } from "lucide-react";

export const metadata = {
  title: "Resume Buddy - Get Instant AI Feedback | QE&D",
  description: "Instant AI Powered Resumes. Get shortlisted, interviewed and hired 6x faster. Accurate, reliable, and 100% ATS friendly with free feedback.",
};

export default function ResumeBuddyDedicatedLandingPage() {
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
      quote: "My resume was not working until Resume Buddy professionally structured it. I immediately started getting better calls and job offers. They made my experience stand out. Highly recommend!",
      name: "Esha Dhawan",
      role: "Returning to work"
    },
    {
      quote: "As a recruiter, the optimized resume made my job noticeably easier. The structure was clean, the achievements were clear and quantified, and the candidate strengths were highlighted so effectively that I could assess their fit within seconds.",
      name: "Garima Gupta",
      role: "HR Strategist and Leader"
    }
  ];

  const companies = ["Accenture", "Airbnb", "Amazon", "Cognizant", "HCL Tech", "Concentrix", "Genpact", "Wipro"];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-slate-950">
      {/* Dedicated Resume Buddy Header */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <Link href="/resume-buddy" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center overflow-hidden rounded-xl bg-slate-900 border border-slate-800 shadow-md group-hover:scale-105 transition-transform">
            <Image
              src="/resume-buddy-logo.png"
              alt="Resume Buddy Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg sm:text-xl tracking-tight text-white leading-none">
              Resume Buddy
            </span>
            <span className="text-[10px] font-semibold text-cyan-400 tracking-wider uppercase mt-0.5">
              By QE&D Career Labs
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold">
          <Link href="#trynow" className="text-slate-300 hover:text-white transition">
            Try Now
          </Link>
          <Link href="/faqs" className="text-slate-300 hover:text-white transition hidden sm:inline">
            FAQs
          </Link>
          <Link
            href="/resume-buddy-app/freshers"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-black text-xs shadow-md shadow-emerald-500/20 transition"
          >
            Fix My Resume
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="space-y-20 pb-20">
        <section id="trynow" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(6,182,212,0.15),transparent)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Instant AI Powered Resumes — No Sign Up, No Subscription</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                  Get Shortlisted, Interviewed & Hired <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">6x Faster</span>
                </h1>

                <div className="text-sm sm:text-base text-amber-400 font-black uppercase tracking-wider">
                  Accurate. Reliable & 100% ATS Friendly
                </div>

                <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                  No sign up, No Subscription. Just Free Feedback. Resume Vs JD match, Keywords to add, Structural improvement tips, and personalized interview readiness.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <Link
                    href="/resume-buddy-app/freshers"
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 hover:scale-102 transition flex items-center justify-center gap-2"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Fix My Resume: Freshers</span>
                  </Link>
                  <Link
                    href="/resume-buddy-app/experienced"
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/20 hover:scale-102 transition flex items-center justify-center gap-2"
                  >
                    <Briefcase className="w-4 h-4" />
                    <span>Fix My Resume: Experienced</span>
                  </Link>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-medium">
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
                <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-slate-800 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-xs font-black uppercase text-cyan-400">ATS Diagnostic</span>
                      <h3 className="text-xl font-black text-white">Resume Health Check</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      FREE
                    </span>
                  </div>

                  <div className="space-y-3 text-xs text-slate-300">
                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                      <span className="font-bold">Average Recruiter Screen Time</span>
                      <span className="font-black text-rose-400">3.2 Seconds</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                      <span className="font-bold">Resumes Rejected by ATS</span>
                      <span className="font-black text-rose-400">75%+</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-between">
                      <span className="font-bold text-emerald-300">Resume Buddy Match Advantage</span>
                      <span className="font-black text-emerald-400">+400% Calls</span>
                    </div>
                  </div>

                  <Link
                    href="/resume-buddy-app"
                    className="block w-full text-center py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs shadow transition border border-slate-700"
                  >
                    Explore In-Depth Features &rarr;
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Used by Candidates Hired Across Top Global Firms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70 grayscale hover:grayscale-0 transition-all">
            {companies.map((c, i) => (
              <span key={i} className="text-lg font-black text-slate-300">
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* 3 Step Process */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Fix Your Resume in <span className="text-cyan-400">3 Simple Steps</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Your resume is judged in 3.2 seconds. As a result, most candidates never make it past ATS filters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, idx) => (
              <div key={idx} className="bg-slate-900/90 rounded-3xl p-8 border border-slate-800 shadow-sm space-y-4 text-center">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-300 font-black text-lg flex items-center justify-center mx-auto border border-cyan-500/30">
                  {s.step}
                </div>
                <h3 className="text-xl font-black text-white">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/resume-buddy-app/freshers"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-sm shadow-md transition"
            >
              <span>Start Now For Free: Freshers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resume-buddy-app/experienced"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-black text-sm shadow-md transition"
            >
              <span>Start Now For Free: Experienced</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* How Are We Different */}
        <section className="bg-slate-900/60 border-t border-b border-slate-800/80 py-16">
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
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-sm border border-cyan-500/30">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white">{d.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link
                href="/resume-buddy-app"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-950 font-black text-sm hover:bg-slate-100 transition shadow-lg"
              >
                <span>Try Now For Free</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Testimonials & Success Stories
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              See how job seekers and hiring leaders rate Resume Buddy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-7 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-cyan-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workflows */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Workflows
            </h2>
            <p className="text-slate-400 text-sm">
              Explore how Resume Buddy delivers career results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 font-bold flex items-center justify-center mx-auto border border-cyan-500/30">
                <Play className="w-4 h-4 fill-current" />
              </div>
              <h3 className="font-bold text-sm text-white">Resume Buddy Workflow</h3>
              <p className="text-xs text-slate-400">Fast automated intake & scoring pipeline</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center mx-auto border border-emerald-500/30">
                <Play className="w-4 h-4 fill-current" />
              </div>
              <h3 className="font-bold text-sm text-white">How to use your Premium Deliverables</h3>
              <p className="text-xs text-slate-400">Applying your rewritten resume to job portals</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 font-bold flex items-center justify-center mx-auto border border-purple-500/30">
                <Play className="w-4 h-4 fill-current" />
              </div>
              <h3 className="font-bold text-sm text-white">How Resume Buddy Works</h3>
              <p className="text-xs text-slate-400">Behind the scenes with QA coaching algorithms</p>
            </div>
          </div>
        </section>

        {/* Repeating CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-2xl border border-cyan-800/40">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight max-w-2xl mx-auto">
              Ready to Transform Your Resume And Career?
            </h2>
            <p className="text-cyan-200 text-sm max-w-xl mx-auto font-normal">
              Build Resumes that matter with the No 1. Resume reviewer and optimizer platform. Resume Buddy is your one stop shop for career success.
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
                className="w-full sm:w-1/2 py-4 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-black text-sm shadow-md transition text-center"
              >
                Experienced Track &rarr;
              </Link>
            </div>

            <div className="pt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Need Help? WhatsApp Mentor at: </span>
              <a href="https://wa.me/918886991370?text=Hi!%20I%20need%20help%20with%20my%20resume." target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold underline">
                +91 88869 91370
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Dedicated Resume Buddy Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-10 px-4 sm:px-8 text-slate-500 text-xs text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
            <Image
              src="/resume-buddy-logo.png"
              alt="Resume Buddy Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="font-black text-sm text-slate-300">Resume Buddy</span>
        </div>
        <p>© Quality Education And Deployment Pvt Ltd. All Rights Reserved.</p>
        <div className="flex items-center justify-center gap-6 text-slate-400 pt-1">
          <Link href="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-white transition">
            Terms and Conditions
          </Link>
          <Link href="/refund-and-cancellation" className="hover:text-white transition">
            Refund and Cancellation
          </Link>
        </div>
      </footer>

      {/* Floating WhatsApp Support Widget */}
      <aside className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
        <a
          href="https://wa.me/918886991370?text=Hi!%20I%20need%20help%20with%20my%20resume."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-full shadow-2xl hover:shadow-cyan-500/20 transition-all group-hover:scale-105"
        >
          <div className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
            <MessageCircle className="w-4 h-4 fill-current" />
          </div>
          <span className="text-xs font-bold hidden sm:inline text-slate-200">Need Help?</span>
        </a>
      </aside>
    </div>
  );
}
