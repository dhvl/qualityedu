import React from "react";
import Link from "next/link";
import { CheckCircle2, Clock, Award, Users, BookOpen, ArrowRight, ShieldCheck, Star, Sparkles } from "lucide-react";

export const metadata = {
  title: "Six Sigma Green Belt Certification | QE&D",
  description: "Very high demand course! Master DMAIC methodology, Minitab analysis, root cause problem solving, and process capability.",
};

export default function GreenBeltPage() {
  const whyDoIt = [
    "Improve processes from the core with data-driven frameworks",
    "Added advantage that makes you a desired candidate in interviews",
    "Adds significant value & recognized belt credentials to your resume",
    "Increased chances of cracking senior analytical and management interviews",
    "Increased chances of getting higher pay packages",
    "Six Sigma professionals fit in any industry: Tech, Healthcare, BPO, Finance, Manufacturing",
    "Be a versatile professional with global problem-solving competence",
    "Instructor-led online live training with flexible timings"
  ];

  const phases = [
    {
      title: "Define Phase",
      desc: "Project Charter creation, Voice of Customer (VOC) to CTQ translation, SIPOC diagramming, business case valuation, and stakeholder management."
    },
    {
      title: "Measure Phase",
      desc: "Data collection plans, Process Mapping, Measurement System Analysis (MSA Gage R&R / Attribute Agreement), Process Capability (Cp, Cpk, DPMO, Sigma Level)."
    },
    {
      title: "Analyze Phase",
      desc: "Root Cause Analysis (Fishbone, 5 Why), Pareto 80/20, Hypothesis Testing (t-test, 2-Sample t, ANOVA, Chi-Square), Scatter Plots and Correlation in Minitab."
    },
    {
      title: "Improve Phase",
      desc: "Brainstorming, Solution selection matrix, Failure Mode & Effects Analysis (FMEA), Pilot deployment, and Cost-Benefit validation."
    },
    {
      title: "Control Phase",
      desc: "Statistical Process Control (SPC), Control Charts (I-MR, Xbar-R, p, np, c, u charts), Standard Operating Procedures (SOPs), Control Plans, and Project Handover."
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Very High Demand Course for Ambitious Professionals!</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Six Sigma Green Belt Certification
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
                Master the world-standard DMAIC problem-solving methodology. Learn to eliminate defects, optimize operational workflows, and execute statistical data analysis using Minitab.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>10-12 Live Classes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>Flexible Weekend/Weekday Timings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span>IASSC / ASQ Aligned Green Belt Certificate</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase text-emerald-600">Next Green Belt Cohort</span>
                  <div className="text-2xl font-black text-slate-900">Live Interactive</div>
                  <p className="text-xs text-slate-500">Instructor: Winston George Koola (Master Black Belt)</p>
                </div>
                <div className="space-y-2.5 text-xs text-slate-600 border-t border-b border-slate-100 py-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Complete Minitab statistical software drills</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Live project simulation & review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Official Green Belt Exam & Credential</span>
                  </div>
                </div>
                <Link
                  href="/contact-us"
                  className="block w-full text-center py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition"
                >
                  Enroll / Request Batch Details &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Why Do It */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Why Should You Do This Course?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyDoIt.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Phases */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">DMAIC Roadmap</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Five Phases of Six Sigma Green Belt</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phases.map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-black text-sm flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <h4 className="text-base font-bold text-slate-900">{p.title}</h4>
                </div>
                <p className="text-xs text-slate-600 pl-11 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Instructor */}
        <section className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Instructor & Guide</span>
            <h3 className="text-2xl font-black">Winston George Koola</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Certified Master Black Belt with decades of experience mentoring professionals to pass belt exams and apply Six Sigma directly in their jobs.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 shrink-0 transition"
          >
            Speak with Winston &rarr;
          </Link>
        </section>
      </div>
    </div>
  );
}
