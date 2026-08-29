import Link from "next/link";
import { Award, Users, CheckCircle2, ShieldCheck, Target, Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | Quality Education & Deployment (QE&D)",
  description: "Learn about QE&D, our mission to empower professionals with practical Six Sigma and Quality certifications since 2019.",
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="bg-gradient-to-b from-blue-900 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/20">
            About QE&D
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight max-w-3xl mx-auto">
            Empowering Skills, Enabling Future Since 2019
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            QE&D was founded with a clear mission: to bridge the gap between theoretical certifications and practical corporate quality execution.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900">
              Who We Are & What We Stand For
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Quality Education & Deployment (QE&D) provides premier corporate training and individual career mentoring in Transaction Quality, Lean Six Sigma (Green Belt & Black Belt), and professional PowerUp skills.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Unlike generic recorded courses, every QE&D program is delivered live by seasoned Master Black Belts who bring real industrial case studies, calibration labs, and data-driven root cause drills.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                <div className="text-2xl font-black text-blue-900">10,000+</div>
                <div className="text-xs font-semibold text-slate-600">Alumni Worldwide</div>
              </div>
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                <div className="text-2xl font-black text-blue-900">6+ Years</div>
                <div className="text-xs font-semibold text-slate-600">Continuous Excellence</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-xl">
            <h3 className="text-xl font-bold text-amber-400">Our Guiding Philosophy</h3>
            <p className="text-slate-300 text-sm leading-relaxed italic">
              &ldquo;An investment in knowledge always pays the best interest.&rdquo; — Benjamin Franklin
            </p>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero fluff curriculum focused on real operational results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Global benchmark alignment (ASQ, IASSC, ISO guidelines)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Post-certification career guidance and resume alignment</span>
              </div>
            </div>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow transition"
            >
              <span>Get in Touch With Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
