"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const courses = [
    {
      name: "Transaction Quality Management",
      href: "/courses/transaction-quality-management",
      desc: "Master QA frameworks, sampling, calibration & coaching",
      badge: "Popular"
    },
    {
      name: "Six Sigma Green Belt",
      href: "/courses/six-sigma-green-belt",
      desc: "DMAIC methodology, Minitab analysis & process optimization",
      badge: "Certified"
    },
    {
      name: "Six Sigma Black Belt",
      href: "/courses/six-sigma-black-belt-certification",
      desc: "Advanced statistics, enterprise deployment & project leadership",
      badge: "Advanced"
    },
    {
      name: "PowerUp Skills Program",
      href: "/courses/powerup-skills",
      desc: "Essential soft skills, executive communications & workplace power",
      badge: "New"
    },
    {
      name: "Interview Preparation Online Training",
      href: "/courses/interview-preparation-online-training",
      desc: "Mock interviews, resume transformation & high-impact positioning",
      badge: "Fast Track"
    }
  ];

  return (
    <header className={scrolled ? "sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all" : "sticky top-0 z-50 bg-white border-b border-slate-100 transition-all"}>
      {/* Top Banner Announcement */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-400 text-slate-950">NEW</span>
        <span>Admissions Open for 2026 Batches | Flexible Weekend & Weekday Timings</span>
        <Link href="/contact-us" className="underline hover:text-amber-300 font-semibold ml-1 hidden sm:inline">
          Enquire Now &rarr;
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="QE&D Logo"
                width={52}
                height={52}
                className="object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight text-slate-900 leading-none group-hover:text-blue-600 transition-colors">
                QE&D
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase mt-0.5">
                Quality Education & Deployment
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/"
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div className="relative group" onMouseEnter={() => setCoursesOpen(true)} onMouseLeave={() => setCoursesOpen(false)}>
              <button
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
                aria-expanded={coursesOpen}
              >
                <span>Courses</span>
                <ChevronDown className={coursesOpen ? "w-4 h-4 text-blue-600 rotate-180 transition-transform duration-200" : "w-4 h-4 text-slate-400 transition-transform duration-200"} />
              </button>

              {coursesOpen && (
                <div className="absolute top-full left-0 w-80 lg:w-96 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Specialized Programs
                  </div>
                  <div className="space-y-1">
                    {courses.map((course) => (
                      <Link
                        key={course.name}
                        href={course.href}
                        className="flex flex-col p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group/item"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors">
                            {course.name}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                            {course.badge}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {course.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-2 bg-slate-50 rounded-xl flex items-center justify-between">
                    <span className="text-xs text-slate-600 font-medium">Need course counseling?</span>
                    <Link href="/contact-us" className="text-xs font-bold text-blue-600 hover:underline">
                      Speak with Mentor &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about-us"
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
            >
              About Us
            </Link>

            <Link
              href="/certifying-your-skills"
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <span>Certify Skills</span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700">NEW</span>
            </Link>

            <Link
              href="/resume-buddy-app"
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Resume Buddy
            </Link>

            <Link
              href="/qed-alumni-case-studies"
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Case Studies
            </Link>

            <Link
              href="/blog"
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm shadow-blue-600/30 hover:shadow-md active:scale-98"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-900 hover:bg-blue-50 rounded-lg"
          >
            Home
          </Link>
          <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">Courses</div>
          {courses.map((course) => (
            <Link
              key={course.name}
              href={course.href}
              onClick={() => setIsOpen(false)}
              className="block pl-6 pr-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg"
            >
              {course.name}
            </Link>
          ))}
          <Link
            href="/about-us"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-900 hover:bg-blue-50 rounded-lg"
          >
            About Us
          </Link>
          <Link
            href="/certifying-your-skills"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-900 hover:bg-blue-50 rounded-lg"
          >
            Certifying Your Skills
          </Link>
          <Link
            href="/resume-buddy-app"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-900 hover:bg-blue-50 rounded-lg"
          >
            Resume Buddy App
          </Link>
          <Link
            href="/qed-alumni-case-studies"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-900 hover:bg-blue-50 rounded-lg"
          >
            Case Studies
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-900 hover:bg-blue-50 rounded-lg"
          >
            Blog
          </Link>
          <div className="pt-3">
            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-xl font-bold bg-blue-600 text-white shadow hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
