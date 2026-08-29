import Link from "next/link";
import { Award, Briefcase, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Alumni Case Studies | QE&D",
  description: "Real-world transformation stories from QE&D Six Sigma & Quality graduates.",
};

export default function CaseStudiesPage() {
  const cases = [
    {
      title: "Optimizing BPO First Contact Resolution (FCR) by 24%",
      author: "Six Sigma Green Belt Alumni",
      company: "Top Multinational ITES Firm",
      summary: "Applied DMAIC methodology, Pareto 80/20 analysis, and agent calibration to eliminate repeat call drivers, resulting in annual cost savings of $180,000.",
      tools: ["DMAIC", "Fishbone Diagram", "Calibration Sessions", "Minitab Hypotheses Testing"]
    },
    {
      title: "Standardizing Quality Audit Sampling & Reducing Audit Variance",
      author: "Transaction Quality Management Graduate",
      company: "FinTech Customer Support Operations",
      summary: "Restructured the quality monitoring form and deployed Gauge R&R attribute agreements, dropping evaluation variance across 40 QA auditors from 32% down to 4.5%.",
      tools: ["Attribute Agreement Analysis", "Sampling Formulas", "GROW Coaching Framework"]
    },
    {
      title: "Enterprise Incident Resolution Cycle Time Reduction",
      author: "Six Sigma Black Belt Certified Leader",
      company: "Global Healthcare Services",
      summary: "Led cross-functional sprint applying ANOVA regression to pinpoint bottleneck escalation queues, reducing Sev-1 resolution time from 4.2 hours to 1.6 hours.",
      tools: ["DOE", "Multiple Regression", "Process Capability (Cpk)", "Control Charts"]
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      <section className="bg-gradient-to-b from-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/20">
            Real Impact
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Alumni Case Studies</h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Discover how QE&D students take classroom frameworks into their live jobs to solve million-dollar process problems.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-50 text-blue-700">
                  {c.company}
                </span>
                <h3 className="text-xl font-black text-slate-900 leading-snug">{c.title}</h3>
                <p className="text-xs font-semibold text-blue-600">{c.author}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{c.summary}</p>
                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Methodologies Used:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {c.tools.map((t, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                href="/contact-us"
                className="block text-center py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition"
              >
                Learn How to Apply This &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
