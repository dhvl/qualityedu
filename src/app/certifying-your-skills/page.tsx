import React from "react";
import Link from "next/link";
import { Award, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle, FileCheck, Target, Users } from "lucide-react";

export const metadata = {
  title: "Certifying Your Skills | QE&D Assessment Platform",
  description: "Certify your skills and stand out professionally. Data-driven assessments measuring employability and job-readiness for recent graduates and working professionals.",
};

export default function CertifySkillsPage() {
  const whyCertify = [
    {
      title: "Benchmark Your Capabilities",
      desc: "Assess where you stand against international industry standards with rigorous evaluation modules designed by Master Black Belts."
    },
    {
      title: "Resume & LinkedIn Credibility",
      desc: "Earn a verifiable credential and digital certificate that signals immediate job-readiness to recruiters and hiring managers."
    },
    {
      title: "Direct Interview Advantage",
      desc: "Get detailed diagnostic feedback on your strengths and skill gaps, giving you talking points and confidence in technical rounds."
    },
    {
      title: "Self-Directed & Efficient",
      desc: "Pure assessment format — prove what you already know without sitting through mandatory theoretical lecture hours."
    }
  ];

  const assessmentTracks = [
    {
      title: "Six Sigma Process Excellence & DMAIC Diagnostic",
      audience: "Quality Analysts, Process Champions & Engineers",
      duration: "45 Mins",
      questions: "35 Objective Scenarios",
      topics: ["DMAIC Methodology", "Root Cause Analysis Tools", "Process Capability (Cp/Cpk)", "Basic Statistical Hypotheses"]
    },
    {
      title: "Transaction Quality Auditor Proficiency (TQAP)",
      audience: "Contact Center QAs, Operations Leads & Audit Specialists",
      duration: "40 Mins",
      questions: "30 Practical Questions",
      topics: ["Sampling Techniques", "Fatal vs Non-Fatal Errors", "Gauge R&R Calibration", "GROW Coaching Scenarios"]
    },
    {
      title: "Employability & Workplace Soft Skills Index",
      audience: "Fresh Graduates & Early Career Professionals",
      duration: "30 Mins",
      questions: "25 Situational Judgement Items",
      topics: ["Executive Workplace Communication", "Problem Solving & Ownership", "Stakeholder Interaction", "Business Etiquette"]
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white py-16 lg:py-24 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/20">
            <Award className="w-3.5 h-3.5" />
            <span>Pure Assessment Platform — Benchmark Your Job Readiness</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
            Certify Your Skills and <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Stand Out Professionally</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            QE&D’s Certifying Your Skills platform is designed for recent graduates, first-time job seekers, and working professionals who want to validate their capabilities through industry-recognized assessments. Our data-driven evaluations measure key employability skills and job-readiness based on global benchmarks — helping you earn a credible certification that strengthens your resume and improves your chances of getting interview calls.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#request-access"
              className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 transition"
            >
              Request Assessment Access &rarr;
            </Link>
            <Link
              href="/courses"
              className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition"
            >
              Explore Training Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Why Certify */}
        <section className="space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why Certify Your Skills With QE&D?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Unlike traditional training programs, this is a pure assessment platform. We believe your existing competence deserves credible verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCertify.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-black text-sm">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Available Assessment Tracks */}
        <section className="space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Available Skill Evaluation Tracks
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Select your domain assessment to evaluate your knowledge against industry benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {assessmentTracks.map((track, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition">
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-700 w-fit block">
                    {track.duration} • {track.questions}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 leading-snug">{track.title}</h3>
                  <p className="text-xs font-semibold text-slate-500">Target: {track.audience}</p>
                  
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold text-slate-900 uppercase">Modules Evaluated:</span>
                    {track.topics.map((t, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="#request-access"
                  className="block text-center py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow transition"
                >
                  Request Assessment Access &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Request Access Form Section */}
        <section id="request-access" className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8 max-w-4xl mx-auto shadow-2xl">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-black tracking-tight text-white">Request Assessment Access</h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
              Fill out the form below to receive your assessment credentials and evaluation guidelines.
            </p>
          </div>

          <form className="space-y-4 max-w-2xl mx-auto text-slate-900">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name *"
                required
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone / WhatsApp Number *"
                required
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <select className="w-full px-4 py-3 rounded-xl bg-white border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Six Sigma Process Excellence & DMAIC Diagnostic</option>
                <option>Transaction Quality Auditor Proficiency (TQAP)</option>
                <option>Employability & Workplace Soft Skills Index</option>
              </select>
            </div>
            <textarea
              rows={3}
              placeholder="Tell us about your current role or target career goals..."
              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-sm shadow-lg transition"
            >
              Submit Assessment Request &rarr;
            </button>
          </form>
        </section>

      </div>
    </div>
  );
}
