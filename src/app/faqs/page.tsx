import React from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "FAQs | Quality Education & Deployment (QE&D)",
  description: "Frequently Asked Questions about QE&D, ISO 29993:2017 accreditation, Six Sigma Green/Black Belt certification courses, batch schedules, and career mentorship.",
};

export default function FAQsPage() {
  const faqs = [
    {
      q: "What is QE&D?",
      a: "Quality Education and Deployment Pvt Ltd (QE&D) is an ISO 29993:2017 certified organization with internationally accredited courses and frameworks. Founded in 2019, QE&D has trained thousands of professionals across top tier MNCs in Six Sigma and Transaction Quality."
    },
    {
      q: "Who are the instructors and mentors?",
      a: "All courses are led by seasoned Master Black Belts and Quality Leaders, including Winston George Koola, who possess over two decades of hands-on operations, audit governance, and continuous improvement experience in multinational corporations."
    },
    {
      q: "Are the certifications recognized globally?",
      a: "Yes. Our Lean Six Sigma curriculum strictly adheres to ASQ (American Society for Quality) and IASSC bodies of knowledge. QE&D certificates carry verifiable credential identifiers recognized across BPO, IT, Manufacturing, Healthcare, and Financial services industries."
    },
    {
      q: "What are the batch timings and delivery format?",
      a: "Classes are conducted live over Zoom with flexible weekend and weekday evening batch options designed for working professionals. Full recording access and learning material are provided via the student LMS."
    },
    {
      q: "Do I need prior statistics or quality experience for Green Belt?",
      a: "No prior statistical background is required. The Six Sigma Green Belt curriculum starts from core foundational concepts, gradually building into Minitab analysis, hypothesis testing, and the DMAIC roadmap with easy-to-understand real-world examples."
    },
    {
      q: "How does Transaction Quality Management differ from Six Sigma?",
      a: "Transaction Quality Management focuses on transactional operations, call/chat/email audit checksheets, sampling mechanics, defect scoring, calibration variance reduction, and agent coaching (GROW model). Six Sigma is a broader data-driven methodology for defect reduction and process optimization."
    },
    {
      q: "What career support and interview guidance do you provide?",
      a: "We provide resume alignment, ATS keyword optimization, LinkedIn profile reviews, and mock interview coaching through our specialized Interview Preparation training and Resume Buddy platform."
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white py-16 text-center space-y-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Have Questions? We Are Here to Help</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Frequently Asked Questions</h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Everything you need to know about our certifications, accreditation, batch schedules, and career support.
          </p>
        </div>
      </section>

      {/* FAQs List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-start gap-3">
              <span className="text-blue-600 font-black shrink-0">Q:</span>
              <span>{faq.q}</span>
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed pl-7">
              {faq.a}
            </p>
          </div>
        ))}

        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 mt-12 shadow-xl">
          <h3 className="text-2xl font-black">Still have questions?</h3>
          <p className="text-slate-300 text-sm max-w-md mx-auto">
            Our mentor Winston George Koola and academic counseling team are happy to assist you directly.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow transition"
          >
            <span>Speak with our Mentor</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
