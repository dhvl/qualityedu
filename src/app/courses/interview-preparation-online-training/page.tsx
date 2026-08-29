import React from "react";
import Link from "next/link";
import { CheckCircle2, Clock, Award, Users, BookOpen, ArrowRight, ShieldCheck, Star, Sparkles } from "lucide-react";

export const metadata = {
  title: "Interview Preparation Online Training | QE&D",
  description: "Fast track 1-on-1 interview training for quality and operational candidates. Master the STAR technique, ATS-proof resume positioning, and mock drills.",
};

export default function InterviewPrepPage() {
  const outcomes = [
    "Master common and complex interview formats (one-on-one, panel, virtual)",
    "Structure high-impact competency answers using the proven STAR framework",
    "Overcome situational questions regarding workplace conflict and past mistakes",
    "Understand how recruiters and ATS algorithms screen candidates",
    "Live simulated technical interview drills with personalized mentor critique",
    "Salary and offer counter-negotiation strategies"
  ];

  const modules = [
    {
      title: "Module 1: Introduction & Setting Expectations",
      desc: "Overview of interview formats, decoding job descriptions (JDs), understanding what interviewers look for in Quality Analysts & Team Leads."
    },
    {
      title: "Module 2: Resume & ATS Profile Alignment",
      desc: "Eliminating resume red flags, re-framing tasks into quantifiable metric results, and aligning keywords for automatic ATS filtering."
    },
    {
      title: "Module 3: The STAR Technique & Behavioral Mastery",
      desc: "Structuring Situation, Task, Action, and Result for behavioral and competency questions without rambling or hesitation."
    },
    {
      title: "Module 4: Functional & Technical QA Drills",
      desc: "Targeted questions on sampling, audit calibration, root-cause methodology, DMAIC concepts, and handling real problem-solving prompts."
    },
    {
      title: "Module 5: Live Mock Interviews & Immediate Critique",
      desc: "Full simulated virtual interview round with recorded feedback on body language, tone, brevity, and persuasiveness."
    },
    {
      title: "Module 6: Offer Negotiation & Closing",
      desc: "Evaluation of compensation packages, phrasing counter-offers respectfully, and closing final round discussions with confidence."
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-400/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% Practical 1-on-1 Interview Readiness</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Interview Preparation Online Training
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
                Turn interviews into job offers. Master the STAR technique, rehearse live technical QA drills with Master Black Belts, and negotiate higher compensation with confidence.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>6 Live Classes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>Flexible Timings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span>Interview Readiness Certificate</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase text-rose-600">Fast Track Cohort</span>
                  <div className="text-2xl font-black text-slate-900">Personalized Coaching</div>
                  <p className="text-xs text-slate-500">Includes 1-on-1 Mock Interview</p>
                </div>
                <div className="space-y-2.5 text-xs text-slate-600 border-t border-b border-slate-100 py-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>STAR technique response library</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Live mock interview with recording</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Salary negotiation scripts</span>
                  </div>
                </div>
                <Link
                  href="/contact-us"
                  className="block w-full text-center py-3.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md transition"
                >
                  Enroll / Book Slot &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Outcomes */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Key Training Outcomes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Modules */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Course Syllabus</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Interview Training Modules</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modules.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 font-black text-sm flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <h4 className="text-base font-bold text-slate-900">{m.title}</h4>
                </div>
                <p className="text-xs text-slate-600 pl-11 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
