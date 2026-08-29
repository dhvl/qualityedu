import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Award, Users, CheckCircle2, ShieldCheck, Target, Sparkles, ArrowRight, BookOpen, Star } from "lucide-react";

export const metadata = {
  title: "About Us | Quality Education & Deployment (QE&D)",
  description: "Empowering Skills, Enabling Future since 2019. Quality Education & Deployment Pvt Ltd provides premier corporate training and individual career mentoring in Six Sigma & Transaction Quality.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Expert Guidance",
      desc: "Mentorship directly from veteran Master Black Belts and Quality leaders with decades of hands-on industry experience."
    },
    {
      title: "Industry Veterans",
      desc: "Curriculum developed by senior professionals who have managed enterprise quality for Fortune 500 organizations."
    },
    {
      title: "Practical Training",
      desc: "Real dataset analysis, live case simulations, calibration labs, and root-cause problem solving rather than rote theory."
    },
    {
      title: "Proven Methodologies",
      desc: "Strict alignment with international ASQ, IASSC, and ISO quality management guidelines."
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white py-16 lg:py-24 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Welcome to QE&D — Quality Education & Deployment</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
            Empowering Skills, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Enabling Future</span> Since 2019
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Quality Education & Deployment Pvt. Ltd. is dedicated to empowering individuals through innovative training programs and skill development solutions tailored for modern industries. We bridge the gap between education and employment, creating long-term career momentum.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/courses"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-xl shadow-blue-600/30 transition"
            >
              Explore Certification Programs &rarr;
            </Link>
            <Link
              href="/contact-us"
              className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition"
            >
              Contact Admissions Team
            </Link>
          </div>
        </div>
      </section>

      {/* Main Story & Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* About Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why We Founded Quality Education & Deployment
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Since 2019, QE&D has trained thousands of professionals across India and internationally in Transaction Quality Management, Lean Six Sigma Green Belt, Six Sigma Black Belt, and essential career PowerUp skills.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Most certifications in the market stop at multiple-choice tests. We built QE&D on a different philosophy: quality is an active discipline that requires continuous coaching, calibration, and practical implementation drills.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
                <div className="text-3xl font-black text-blue-900">10,000+</div>
                <div className="text-xs font-bold text-slate-600 mt-1">Alumni Globally</div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                <div className="text-3xl font-black text-emerald-900">6+ Years</div>
                <div className="text-xs font-bold text-slate-600 mt-1">Of Track Record</div>
              </div>
              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 col-span-2 sm:col-span-1">
                <div className="text-3xl font-black text-purple-900">98.4%</div>
                <div className="text-xs font-bold text-slate-600 mt-1">Exam Pass Rate</div>
              </div>
            </div>
          </div>

          {/* Master Black Belt Spotlight */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-800 space-y-6">
            <div className="flex items-center gap-4 pb-6 border-b border-slate-800">
              <div className="relative w-16 h-16 shrink-0 flex items-center justify-center overflow-hidden rounded-[4px]">
                <Image
                  src="/logo.png"
                  alt="QE&D Logo"
                  width={64}
                  height={64}
                  className="object-contain rounded-[4px]"
                />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">Winston George Koola</h3>
                <p className="text-xs text-blue-300 font-medium">Founder & Principal Mentor</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed italic">
              “An investment in knowledge always pays the best interest. When professionals master data-driven problem solving, they not only transform their own career velocity, but elevate entire organizations.”
            </p>
            <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Certified Master Black Belt</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>20+ Years Global Quality & Operations Leadership</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Pillars */}
        <section className="space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Core Pillars of Excellence
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              How we ensure every single graduate is equipped for immediate operational impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-black text-sm">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-black text-slate-900">{v.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
