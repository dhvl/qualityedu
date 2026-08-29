import Link from "next/link";
import { Award, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Certifying Your Skills | QE&D",
  description: "Knowledge assessments and skill verification for self-directed quality professionals.",
};

export default function CertifySkillsPage() {
  const assessments = [
    { title: "Six Sigma Foundations Assessment", questions: "25 Questions", time: "30 Mins", tag: "Process Knowledge" },
    { title: "Transaction Quality Auditor Proficiency", questions: "30 Questions", time: "45 Mins", tag: "QA & Monitoring" },
    { title: "Root Cause Analysis (RCA) Diagnostic", questions: "20 Questions", time: "25 Mins", tag: "Problem Solving" }
  ];

  return (
    <div className="space-y-16 pb-20">
      <section className="bg-gradient-to-b from-blue-900 to-slate-900 text-white py-16 text-center space-y-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/20">
            Assessment Hub
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Certifying Your Skills</h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Benchmark your domain knowledge with standardized skill evaluations created by QE&D Master Black Belts.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {assessments.map((a, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-50 text-blue-700">
                  {a.tag}
                </span>
                <h3 className="text-xl font-black text-slate-900">{a.title}</h3>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span>{a.questions}</span>
                  <span>•</span>
                  <span>{a.time}</span>
                </div>
              </div>
              <Link
                href="/contact-us"
                className="block text-center py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow transition"
              >
                Request Assessment Access &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
