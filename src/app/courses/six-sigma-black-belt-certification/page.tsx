import React from "react";
import Link from "next/link";
import { CheckCircle2, Clock, Award, Users, BookOpen, ArrowRight, ShieldCheck, Star, Sparkles } from "lucide-react";

export const metadata = {
  title: "Six Sigma Black Belt Certification | QE&D",
  description: "Advanced statistical modeling, Design of Experiments (DOE), enterprise leadership, and deployment for senior quality professionals.",
};

export default function BlackBeltPage() {
  const whyDoIt = [
    "Accelerate Career Growth into Quality Leadership, VP & Operations Director roles",
    "Master Data-Driven Decision Making & Advanced Statistical Modeling in Minitab",
    "Enhance Process Efficiency & lead multi-million dollar enterprise transformations",
    "Empower yourself with practical Design of Experiments (DOE) and DFSS expertise",
    "Increase your market value and command top-tier compensation packages",
    "Direct mentorship with industry Master Black Belts on live organizational problems"
  ];

  const modules = [
    {
      title: "Module 1: Enterprise Leadership & Strategy",
      desc: "Aligning Six Sigma with corporate strategy, project selection matrices, ROI estimation, and organizational change management."
    },
    {
      title: "Module 2: Advanced Measurement & Gage R&R",
      desc: "Continuous & attribute Gage R&R, non-normal distribution transformation, stability analysis, and complex process capability."
    },
    {
      title: "Module 3: Advanced Hypothesis Testing & ANOVA",
      desc: "Two-way ANOVA, MANOVA, Multiple Linear Regression, Stepwise regression, and Non-parametric tests (Moods Median, Kruskal-Wallis)."
    },
    {
      title: "Module 4: Design of Experiments (DOE)",
      desc: "Full Factorial, Fractional Factorial designs, Screening experiments, Main & Interaction effects, Response Surface Methodology (RSM)."
    },
    {
      title: "Module 5: Design for Six Sigma (DFSS) & Robustness",
      desc: "DMADV methodology, Quality Function Deployment (QFD / House of Quality), TRIZ, Poka-Yoke mistake proofing, and Tolerance design."
    },
    {
      title: "Module 6: Enterprise Project Mentorship & Sign-Off",
      desc: "Complete Black Belt project execution, financial savings validation, and executive presentation review."
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-400/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive & Senior Professional Certification</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Six Sigma Black Belt Certification
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
                Take complete ownership of organizational transformation. Master advanced statistics, Design of Experiments (DOE), multi-variate modeling, and executive project governance.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>20-22 Live Classes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>Flexible Weekend/Weekday Timings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span>Global Black Belt Credential</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase text-purple-600">Black Belt Cohort</span>
                  <div className="text-2xl font-black text-slate-900">Executive Masterclass</div>
                  <p className="text-xs text-slate-500">Instructor: Winston George Koola (Master Black Belt)</p>
                </div>
                <div className="space-y-2.5 text-xs text-slate-600 border-t border-b border-slate-100 py-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Advanced Minitab & statistical drills</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>DOE & Response Surface labs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>1-on-1 Black Belt project mentorship</span>
                  </div>
                </div>
                <Link
                  href="/contact-us"
                  className="block w-full text-center py-3.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md transition"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyDoIt.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Modules */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Curriculum Outline</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Advanced Black Belt Modules</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modules.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 font-black text-sm flex items-center justify-center">
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
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Instructor & Guide</span>
            <h3 className="text-2xl font-black">Winston George Koola</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Certified Master Black Belt with decades of operational leadership guiding senior managers and enterprise champions.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 shrink-0 transition"
          >
            Connect with Winston &rarr;
          </Link>
        </section>
      </div>
    </div>
  );
}
