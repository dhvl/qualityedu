import React from "react";
import Link from "next/link";
import { CheckCircle2, Clock, Award, Users, BookOpen, ArrowRight, ShieldCheck, Star, Sparkles, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Transaction Quality Management | QE&D",
  description: "Extremely popular course for QAs who want to get promoted. Master QA frameworks, sampling, calibration, coaching models, and stakeholder governance.",
};

export default function TQMPage() {
  const whyDoIt = [
    "Learn to lead a Quality Team + Manage performance",
    "Learn to build and deploy a Quality Framework",
    "Learn how to continuously improve processes with Quality tools",
    "Learn the methodology to manage stakeholders and clients",
    "Learn how to Govern Quality operations with metrics (CSAT, NPS, FCR, QA Score)",
    "Instructor-led online live training with flexible timings"
  ];

  const modules = [
    {
      title: "Module 1: Introduction to Quality & Evolution",
      desc: "Quality fundamentals, history, the role of QA in operations, understanding Cost of Poor Quality (COPQ) and Customer Experience (CX)."
    },
    {
      title: "Module 2: Transaction Monitoring Frameworks",
      desc: "Checksheets, form design principles, behavioral vs transactional parameters, defect scoring mechanics, and fatal error definitions."
    },
    {
      title: "Module 3: Sampling Techniques & Error Categorization",
      desc: "Random vs stratified sampling, calculating statistical sample sizes, error tagging and categorization for deep-dive analysis."
    },
    {
      title: "Module 4: Calibration & Variance Reduction",
      desc: "Setting up calibration governance, conducting baseline and target calibrations, measuring auditor alignment, and Attribute Agreement concepts."
    },
    {
      title: "Module 5: Feedback Delivery & Coaching Models",
      desc: "GROW coaching framework, addressing bottom quartile performers, root-cause identification, and Corrective Action Plans (CAP)."
    },
    {
      title: "Module 6: Governance, Reporting & Client Reviews",
      desc: "Executive WBR/MBR reporting, trend analysis, Pareto 80/20 defect drill-downs, and presenting insights to C-suite and clients."
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Extremely Popular Course for QAs Who Want to Get Promoted!</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Transaction Quality Management
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
                Master the complete lifecycle of operational quality assurance. Learn to lead audit teams, standardize evaluation hygiene, eliminate auditor variance, and deploy high-impact coaching frameworks.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>8-10 Live Classes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>Flexible Timings (Weekend/Weekday)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span>Global QE&D Verified Credential</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase text-blue-600">Next Cohort</span>
                  <div className="text-2xl font-black text-slate-900">Live Mentor-Led</div>
                  <p className="text-xs text-slate-500">Instructor: Winston George Koola</p>
                </div>
                <div className="space-y-2.5 text-xs text-slate-600 border-t border-b border-slate-100 py-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Real-world contact center case studies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Hands-on checksheets & calibration labs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Interview & promotion preparation</span>
                  </div>
                </div>
                <Link
                  href="/contact-us"
                  className="block w-full text-center py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition"
                >
                  Enroll / Enquire for Batch &rarr;
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyDoIt.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Modules */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Curriculum Breakdown</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Detailed Course Outline</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modules.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-black text-sm flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <h4 className="text-base font-bold text-slate-900">{m.title}</h4>
                </div>
                <p className="text-xs text-slate-600 pl-11 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Instructor */}
        <section className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Principal Mentor</span>
            <h3 className="text-2xl font-black">Winston George Koola</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Master Black Belt who has led quality assurance transformations and trained thousands of quality analysts, coaches, and operations managers worldwide.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 shrink-0 transition"
          >
            Connect with Mentor &rarr;
          </Link>
        </section>
      </div>
    </div>
  );
}
