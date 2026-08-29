import Link from "next/link";
import {
  Award,
  CheckCircle2,
  TrendingUp,
  Users,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Star,
  Sparkles,
  Layers,
  GraduationCap,
  Briefcase
} from "lucide-react";

export default function Home() {
  const featuredCourses = [
    {
      title: "Transaction Quality Management",
      slug: "transaction-quality-management",
      classes: "8-10 Classes",
      timing: "Flexible Timings",
      badge: "Best Seller",
      badgeColor: "bg-blue-100 text-blue-800",
      description:
        "Comprehensive framework covering QA metrics, sample size determination, calibration methodologies, coaching models & quality governance.",
      highlights: [
        "Quality Audit Frameworks & Checksheets",
        "Sampling Techniques & Error Categorization",
        "Calibration, Coaching & Feedback Loops",
        "Live Case Studies & Implementation"
      ]
    },
    {
      title: "Six Sigma Green Belt",
      slug: "six-sigma-green-belt",
      classes: "10-12 Classes",
      timing: "Flexible Timings",
      badge: "Industry Standard",
      badgeColor: "bg-emerald-100 text-emerald-800",
      description:
        "Master DMAIC (Define, Measure, Analyze, Improve, Control) principles with hands-on statistical data analytics and process capability.",
      highlights: [
        "DMAIC Roadmap from Start to Finish",
        "Root Cause Analysis & Pareto 80/20",
        "Hypothesis Testing & Statistical Tools",
        "Globally Recognized Belt Certification"
      ]
    },
    {
      title: "Six Sigma Black Belt",
      slug: "six-sigma-black-belt-certification",
      classes: "20-22 Classes",
      timing: "Flexible Timings",
      badge: "Advanced Leadership",
      badgeColor: "bg-purple-100 text-purple-800",
      description:
        "Advanced statistical modeling, enterprise change management, Design of Experiments (DOE), and leadership deployment for senior professionals.",
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
      description:
        "Accelerate your professional trajectory with high-impact communication, stakeholder presentation, strategic thinking & workplace leadership.",
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
      description:
        "Targeted 1-on-1 interview coaching, resume optimization for ATS algorithms, behavioral situational drills, and salary negotiation techniques.",
      highlights: [
        "ATS-Proof Resume & Profile Revamp",
        "Competency & STAR Technique Mastery",
        "Live Mock Interviews with Feedback",
        "Salary & Offer Negotiation Playbook"
      ]
    }
  ];

  const testimonials = [
    {
      quote:
        "I am glad to announce that I have successfully completed my Six Sigma Green belt certification. Thank you QE&D. special thanks to Winston George Koola for Training and making the virtual classroom more engaging. I Am looking forward to implement my 6 Sigma skills in my workspace.",
      author: "Quality Team Lead and Sr. Sales Trainer",
      company: "Leading Enterprise",
      course: "Six Sigma Green Belt"
    },
    {
      quote:
        "I am happy to share that i have completed the six sigma green belt course from QE&D Thank you Winston George Koola for being a great instructor and explaining the concepts in detail. I would recommend this course to all mid level employees aspiring to reach the next level.",
      author: "Project Management Senior Analyst",
      company: "Accenture",
      course: "Six Sigma Green Belt"
    },
    {
      quote:
        "Excellent is the only word that comes to my mind regarding QE&D from where i have completed my Transaction Quality Training. My Mentor Winston is Superb, knowledgeable who taught me each concept related to it starting from definition till governance.",
      author: "Quality & Training Analyst",
      company: "Global Operations",
      course: "Transaction Quality Management"
    },
    {
      quote:
        "I attended the Lean 6 Sigma course offered by QE&D in June of 2021, the course was affordable and was easy to learn as lots of related examples were shared. The certificate helped boost my cv. I am currently working with Airbnb.",
      author: "Sj Lodh - Operations Analyst",
      company: "Airbnb",
      course: "Lean Six Sigma"
    },
    {
      quote:
        "I learnt from the industry experts, they guided and helped me learn at my pace. The learnings and expert guidance help you implement the concepts for long term transformation results.",
      author: "Deputy Manager",
      company: "HCL",
      course: "Quality Leadership"
    }
  ];

  const stats = [
    { number: "2019", label: "Established Since", sub: "Over 6 years of quality training excellence" },
    { number: "10,000+", label: "Professionals Trained", sub: "From Fortune 500s & top MNCs" },
    { number: "98.4%", label: "Certification Pass Rate", sub: "Rigorous interactive practical mentoring" },
    { number: "4.9 / 5", label: "Alumni Rating", sub: "Rated on mentor dedication & content depth" }
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-blue-50/60 via-white to-slate-50 border-b border-slate-100">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-bold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Empowering Skills, Enabling Future Since 2019</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Six Sigma, Transaction Quality & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Skills Certification</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
                Unlock career-defining credentials with practical, mentor-led programs designed by industry veterans. Learn root-cause analysis, statistical process control, and executive leadership.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/courses/six-sigma-green-belt"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact-us"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Book Free Consultation</span>
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Live Interactive Classes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Global Belt Certification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1-on-1 Mentor Guidance</span>
                </div>
              </div>
            </div>

            {/* Hero Quick Card Showcase */}
            <div className="lg:col-span-5">
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100/80">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-xs px-4 py-1.5 rounded-full shadow-lg">
                  ★ TOP RATED FACULTY
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 pb-5 border-b border-slate-100">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-2xl shadow-md">
                      QE
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-900">Winston George Koola</h3>
                      <p className="text-xs font-semibold text-slate-500">Master Black Belt & Principal Quality Coach</p>
                      <div className="flex items-center gap-1 mt-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                        <span className="text-xs font-bold text-slate-700 ml-1.5">5.0 (450+ Reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">Next Green Belt Batch</span>
                      <span className="font-bold text-blue-700 bg-white px-2.5 py-1 rounded-md shadow-xs">Filling Fast</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">Delivery Mode</span>
                      <span className="font-bold text-slate-900">Live Zoom + LMS Access</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">Tools Covered</span>
                      <span className="font-bold text-slate-900">Minitab, Excel, DMAIC</span>
                    </div>
                  </div>

                  <Link
                    href="/contact-us"
                    className="block w-full text-center py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow transition"
                  >
                    Enquire for Upcoming Batches &rarr;
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl shadow-blue-950/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2 border-r last:border-r-0 border-white/10 px-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-300 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base font-bold text-white">{stat.label}</div>
                <p className="text-xs text-blue-200/80 max-w-xs mx-auto hidden sm:block">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Placement & Recognition Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <p className="text-xs font-black uppercase tracking-widest text-slate-400">
          Our Alumni Work at Leading Global Organizations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-75 grayscale hover:grayscale-0 transition-all">
          <span className="text-lg sm:text-xl font-black text-slate-800">Accenture</span>
          <span className="text-lg sm:text-xl font-black text-slate-800">Airbnb</span>
          <span className="text-lg sm:text-xl font-black text-slate-800">HCL Tech</span>
          <span className="text-lg sm:text-xl font-black text-slate-800">Amazon</span>
          <span className="text-lg sm:text-xl font-black text-slate-800">Cognizant</span>
          <span className="text-lg sm:text-xl font-black text-slate-800">Genpact</span>
          <span className="text-lg sm:text-xl font-black text-slate-800">Wipro</span>
        </div>
      </section>

      {/* Courses Catalog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            Our Certification Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Transformative Learning for High-Growth Careers
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Choose from industry-vetted courses meticulously tailored for quality analysts, process champions, managers, and career switchers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <div
              key={course.slug}
              className="bg-white rounded-3xl border border-slate-200/80 p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
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
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
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

      {/* Why Choose Us */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/20">
              Why QE&D Stands Apart
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              We Don&apos;t Just Train — We Transform Careers
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Experience the perfect blend of theory, real-world case simulations, and direct mentorship that prepares you for high-responsibility quality roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Industry Veterans</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Learn directly from Master Black Belts and QA directors with decades of operational leadership in top-tier multinational corporations.
              </p>
            </div>

            <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Practical Hands-On</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Live case studies, root-cause simulations, data analytics exercises, and real project verification rather than rote textbook memorization.
              </p>
            </div>

            <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Proven Methodologies</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Strict alignment with global ASQ & IASSC Six Sigma frameworks, ISO audit principles, and cutting-edge QA metrics.
              </p>
            </div>

            <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Career Acceleration</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Resume coaching, mock interviews, LinkedIn algorithm optimization, and direct job interview readiness support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Success Stories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
            <Star className="w-3.5 h-3.5 fill-emerald-700 text-emerald-700" />
            Alumni Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Hear From Our Certified Graduates
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            See how QE&D certifications have empowered professionals to land promotions and excel in quality and operational roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-black text-slate-900 text-sm">{t.author}</div>
                <div className="text-xs font-medium text-blue-600 mt-0.5">{t.company}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Certified in {t.course}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Products / Special Tools Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifying Your Skills */}
          <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white/20 text-white w-fit block">
                ASSESSMENT PLATFORM
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Certifying Your Skills
              </h3>
              <p className="text-sm text-indigo-100 leading-relaxed">
                Evaluate and benchmark your expertise with structured knowledge assessments. Designed for self-directed learners who value both verifiable knowledge and recognized credentials.
              </p>
            </div>
            <div>
              <Link
                href="/certifying-your-skills"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-indigo-950 font-bold text-sm hover:bg-indigo-50 shadow-md transition"
              >
                <span>Take Skill Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Resume Buddy App */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-between space-y-6 shadow-xl border border-slate-700">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/20 w-fit block">
                CAREER AI TOOL
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Resume Buddy App
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Beat the Applicant Tracking Systems (ATS) with tailored resume reviews, LinkedIn optimization hacks, and personalized keyword matching for quality roles.
              </p>
            </div>
            <div>
              <Link
                href="/resume-buddy-app"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm shadow-md transition"
              >
                <span>Launch Resume Buddy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-xl shadow-blue-600/20">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight max-w-2xl mx-auto">
            Ready to Take Your Quality Career to the Next Level?
          </h2>
          <p className="text-blue-100 text-base max-w-xl mx-auto font-normal">
            Speak directly with our expert mentor Winston George Koola to choose the right certification for your background.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact-us"
              className="px-8 py-4 rounded-xl bg-white text-blue-900 font-bold text-base hover:bg-blue-50 shadow-md transition"
            >
              Get in Touch Today
            </Link>
            <Link
              href="/qed-alumni-case-studies"
              className="px-8 py-4 rounded-xl bg-blue-700/60 hover:bg-blue-700 text-white border border-blue-400/40 font-bold text-base transition"
            >
              View Alumni Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
