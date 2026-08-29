import React from "react";
import Link from "next/link";
import { CheckCircle2, Clock, Award, Users, BookOpen, ArrowRight, ShieldCheck, Star, Sparkles } from "lucide-react";

export const metadata = {
  title: "PowerUp Skills Training Program | QE&D",
  description: "PowerUp Skills are essential soft skills & employability competencies. 92% of hiring managers prioritize soft skills for leadership selection.",
};

export default function PowerUpSkillsPage() {
  const whyDoIt = [
    "92% of hiring managers say soft skills matter more or as much as hard skills",
    "89% of bad hires result from lack of soft skills & communication breakdown",
    "Enhance executive business presence and workplace articulation",
    "Learn data storytelling to present complex QA metrics persuasively to clients",
    "Master conflict resolution, negotiation, and cross-functional leadership",
    "Instructor-led online live training with flexible timings"
  ];

  const modules = [
    {
      title: "Module 1: Executive Business Communication",
      desc: "Assertive articulation, professional email etiquette, active listening, and cross-cultural communication in multinational workplaces."
    },
    {
      title: "Module 2: Data Storytelling & Presentations",
      desc: "Transforming dry numbers and quality metrics into compelling business narratives, building high-impact slides, and delivering confident executive pitches."
    },
    {
      title: "Module 3: Conflict Management & Stakeholder Influence",
      desc: "Navigating difficult conversations, handling performance disputes with agents/leads, and winning stakeholder alignment without formal authority."
    },
    {
      title: "Module 4: Strategic Thinking & Career Velocity",
      desc: "Personal branding on LinkedIn, career positioning for promotions, managing upward feedback, and establishing professional presence."
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Essential Employability & Soft Skills Program</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                PowerUp Skills Training Program
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
                Technical expertise opens the door; PowerUp soft skills get you promoted. Master assertive executive communication, data storytelling, and stakeholder leadership.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>8-10 Live Classes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>Flexible Timings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span>QE&D PowerUp Credential</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase text-amber-600">Next Cohort</span>
                  <div className="text-2xl font-black text-slate-900">Live Interactive</div>
                  <p className="text-xs text-slate-500">Instructor-Led Soft Skills Mastery</p>
                </div>
                <div className="space-y-2.5 text-xs text-slate-600 border-t border-b border-slate-100 py-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Real-world corporate situational roleplays</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Data storytelling slide templates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>1-on-1 personalized feedback</span>
                  </div>
                </div>
                <Link
                  href="/contact-us"
                  className="block w-full text-center py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm shadow-md transition"
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
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Modules */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Curriculum Outline</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">PowerUp Modules</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modules.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-black text-sm flex items-center justify-center">
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
