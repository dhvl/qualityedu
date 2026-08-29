import React from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Contact Us | Quality Education & Deployment (QE&D)",
  description: "Reach out to Quality Education and Deployment Pvt Ltd. Call us or write to us for course admissions, batch schedules, corporate inquiries, or 1-on-1 counseling.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white py-16 text-center space-y-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/20">
            Reach Out to Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Contact Us</h1>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Call us or write to us. Our expert advisors and mentors will get back to you promptly.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Card with authentic details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <div>
                <h2 className="text-2xl font-black text-slate-900">Quality Education and Deployment Pvt Ltd</h2>
                <p className="text-xs font-semibold text-blue-600 mt-1">Your Career in Quality Assurance starts here</p>
              </div>

              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Our Phone</div>
                    <a href="tel:+918886991370" className="text-sm font-bold text-slate-900 hover:text-blue-600 transition">
                      +91 88869 91370
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Write to Us</div>
                    <a href="mailto:info@quality-education.net" className="text-sm font-bold text-slate-900 hover:text-blue-600 transition">
                      info@quality-education.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Our Address</div>
                    <div className="text-sm font-semibold text-slate-900">
                      Telangana, India 500050
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-amber-50 text-amber-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Office Hours</div>
                    <div className="text-sm font-semibold text-slate-900">
                      Monday - Saturday: 10:00 am - 6:00 pm
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-2xl font-black text-slate-900">Send an Enquiry</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 88869 91370"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Program of Interest</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white">
                      <option>Transaction Quality Management</option>
                      <option>Six Sigma Green Belt</option>
                      <option>Six Sigma Black Belt</option>
                      <option>PowerUp Skills Program</option>
                      <option>Interview Preparation Online Training</option>
                      <option>Certifying Your Skills Assessment</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Message / Goals</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your background, career targets, or questions you have..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition"
                >
                  Submit Enquiry &rarr;
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
