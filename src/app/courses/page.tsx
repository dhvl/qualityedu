import Link from "next/link";
import { BookOpen, Clock, Users, Award, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "All Courses & Certification Programs | QE&D",
  description: "Browse comprehensive certifications in Six Sigma Green/Black Belt, Transaction Quality, and Career PowerUp skills.",
};

export default function CoursesCatalogPage() {
  const courses = [
    {
      title: "Transaction Quality Management",
      slug: "transaction-quality-management",
      classes: "8-10 Classes",
      timing: "Flexible Timings",
      badge: "Best Seller",
      badgeColor: "bg-blue-100 text-blue-800",
      description: "Master QA frameworks, sampling, calibration, coaching models and quality governance for contact centers and operations.",
      highlights: [
        "Quality Audit Frameworks & Checksheets",
        "Sampling Techniques & Error Categorization",
        "Calibration, Coaching & Feedback Loops",
        "Live Case Studies & Implementation"
      ]
    },
    {
      title: "Six Sigma Green Belt Certification",
      slug: "six-sigma-green-belt",
      classes: "10-12 Classes",
      timing: "Flexible Timings",
      badge: "Industry Standard",
      badgeColor: "bg-emerald-100 text-emerald-800",
      description: "Drive data-backed process optimization, defect reduction, and operational excellence using the DMAIC framework and Minitab.",
      highlights: [
        "DMAIC Roadmap from Start to Finish",
        "Root Cause Analysis & Pareto 80/20",
        "Hypothesis Testing & Statistical Tools",
        "Globally Recognized Belt Certification"
      ]
    },
    {
      title: "Six Sigma Black Belt Certification",
      slug: "six-sigma-black-belt-certification",
      classes: "20-22 Classes",
      timing: "Flexible Timings",
      badge: "Advanced Leadership",
      badgeColor: "bg-purple-100 text-purple-800",
      description: "Master advanced statistical modeling, Design of Experiments (DOE), enterprise quality leadership, and strategic deployment.",
      highlights: [
        "Advanced Statistics & Regression Modeling",
        "Design of Experiments (DOE) & ANOVA",
        "Enterprise Quality Transformation",
        "Executive Mentorship & Real Project Review"
      ]
    },
    {
      title: "PowerUp Skills Training Program",
      slug: "powerup-skills",
      classes: "8-10 Classes",
      timing: "Flexible Timings",
      badge: "Career Booster",
      badgeColor: "bg-amber-100 text-amber-800",
      description: "Executive communication, emotional intelligence, data storytelling, and career leadership for ambitious professionals.",
      highlights: [
        "Executive Business Communication",
        "Conflict Resolution & Team Leadership",
        "Data Storytelling & Presentations",
        "Career Velocity Mindset"
      ]
    },
    {
      title: "Interview Preparation Online Training",
      slug: "interview-preparation-online-training",
      classes: "6 Classes",
      timing: "Flexible Timings",
      badge: "100% Practical",
      badgeColor: "bg-rose-100 text-rose-800",
      description: "Targeted 1-on-1 coaching, ATS-proof resume rebuilding, mock behavioral drills, and salary negotiation mastery.",
      highlights: [
        "ATS-Proof Resume & Profile Revamp",
        "Competency & STAR Technique Mastery",
        "Live Mock Interviews with Feedback",
        "Salary & Offer Negotiation Playbook"
      ]
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      <section className="bg-gradient-to-b from-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/20">
            Certification Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Our Quality & Six Sigma Programs</h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Practical, mentor-led programs designed by Master Black Belts to help you master operational excellence.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.slug}
              className="bg-white rounded-3xl border border-slate-200/80 p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${course.badgeColor}`}>
                    {course.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {course.classes}
                  </span>
                </div>

                <div>
                  <h2 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h2>
                  <p className="text-xs font-medium text-slate-500 mt-1">
                    Schedule: {course.timing}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {course.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Key Modules & Outcomes:
                  </span>
                  {course.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <Link
                  href={`/courses/${course.slug}`}
                  className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs text-center shadow-sm shadow-blue-600/20 transition"
                >
                  View Curriculum &rarr;
                </Link>
                <Link
                  href="/contact-us"
                  className="py-3 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs text-center transition"
                >
                  Enquire
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
