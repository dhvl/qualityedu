import Link from "next/link";
import { CheckCircle2, Clock, Award, Users, BookOpen, ArrowRight, ShieldCheck, Star } from "lucide-react";

export const metadata = {
  title: "Six Sigma Green Belt Certification | QE&D",
  description: "Drive data-backed process optimization, defect reduction, and operational excellence using the DMAIC framework and Minitab.",
};

export default function CoursePage() {
  const modules = [
  {
    "title": "Define Phase",
    "desc": "Project Charter, Voice of Customer (VOC) to Critical to Quality (CTQ) flowdowns, SIPOC diagrams, stakeholder management."
  },
  {
    "title": "Measure Phase",
    "desc": "Data collection plan, Process Mapping, Measurement System Analysis (MSA) / Attribute Agreement Analysis, Process Capability (Cp, Cpk)."
  },
  {
    "title": "Analyze Phase",
    "desc": "Root Cause Analysis (Fishbone, 5 Why), Pareto Analysis 80/20, Hypothesis Testing (t-tests, ANOVA, Chi-Square), Scatter plots."
  },
  {
    "title": "Improve Phase",
    "desc": "Solution generation techniques, FMEA (Failure Mode and Effects Analysis), Pilot implementation, Cost Benefit Analysis."
  },
  {
    "title": "Control Phase",
    "desc": "Control Plans, Statistical Process Control (SPC), Control Charts (I-MR, Xbar-R, p, np, c, u charts), Standardization and Sign-off."
  }
];

  return (
    <div className="space-y-16 pb-20">
      <section className="bg-gradient-to-b from-blue-900 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/20">
                <span>Certification Program</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Six Sigma Green Belt Certification
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Drive data-backed process optimization, defect reduction, and operational excellence using the DMAIC framework and Minitab.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Duration: 10-12 Live Classes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>Level: Intermediate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span>Verified Belt / Course Credential</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Interactive Cohort</span>
                  <div className="text-2xl font-black text-slate-900">Live Mentor-Led</div>
                  <p className="text-xs text-slate-500">Weekend and weekday evening batches available.</p>
                </div>
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Real-world case studies & simulations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Direct mentorship with Master Black Belt</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Official Certification of Completion</span>
                  </div>
                </div>
                <Link
                  href="/contact-us"
                  className="block w-full text-center py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition"
                >
                  Enroll / Request Batch Details &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Detailed Syllabus</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">What You Will Learn in This Course</h2>
          <p className="text-sm text-slate-600 max-w-2xl">
            A comprehensive module breakdown structured for immediate real-world workplace application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((m, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-black text-sm flex items-center justify-center">
                  {idx + 1}
                </span>
                <h4 className="text-base font-bold text-slate-900">{m.title}</h4>
              </div>
              <p className="text-xs text-slate-600 pl-11">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Instructor & Mentor</span>
            <h3 className="text-2xl font-black">Winston George Koola</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Veteran Quality Leader & Master Black Belt with hands-on experience guiding thousands of professionals into rewarding QA, Process Champions, and Operational leadership roles.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 shrink-0 transition"
          >
            Connect with Winston &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
