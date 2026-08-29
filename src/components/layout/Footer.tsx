import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl p-1 shadow-md">
                <Image
                  src="/logo.png"
                  alt="QE&D Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-black text-xl text-white tracking-tight">QE&D</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Quality Education & Deployment (since 2019). Empowering professionals with industry-recognized certifications in Six Sigma, Transaction Quality, and Career PowerUp Skills.
            </p>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-400 italic">
              “An investment in knowledge always pays the best interest.” – Benjamin Franklin
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Featured Courses</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/courses/transaction-quality-management" className="hover:text-blue-400 transition">
                  Transaction Quality Management
                </Link>
              </li>
              <li>
                <Link href="/courses/six-sigma-green-belt" className="hover:text-blue-400 transition">
                  Six Sigma Green Belt
                </Link>
              </li>
              <li>
                <Link href="/courses/six-sigma-black-belt-certification" className="hover:text-blue-400 transition">
                  Six Sigma Black Belt
                </Link>
              </li>
              <li>
                <Link href="/courses/powerup-skills" className="hover:text-blue-400 transition">
                  PowerUp Skills Program
                </Link>
              </li>
              <li>
                <Link href="/courses/interview-preparation-online-training" className="hover:text-blue-400 transition">
                  Interview Preparation
                </Link>
              </li>
            </ul>
          </div>

          {/* Platforms & Resources */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/certifying-your-skills" className="hover:text-blue-400 transition">
                  Certifying Your Skills
                </Link>
              </li>
              <li>
                <Link href="/resume-buddy-app" className="hover:text-blue-400 transition">
                  Resume Buddy App
                </Link>
              </li>
              <li>
                <Link href="/qed-alumni-case-studies" className="hover:text-blue-400 transition">
                  Alumni Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition">
                  Quality & Career Insights
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-blue-400 transition">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:info@quality-education.net" className="hover:text-white transition">
                  info@quality-education.net
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Mentorship & Inquiries</span>
              </li>
            </ul>
            <div className="mt-5">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-lg transition"
              >
                <span>Request Free Counseling</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Quality Education & Deployment (QE&D). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-300 transition">
              Terms & Conditions
            </Link>
            <Link href="/refund-and-cancellation" className="hover:text-slate-300 transition">
              Refund & Cancellation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
