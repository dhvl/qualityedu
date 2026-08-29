import pagesData from "@/data/pages.json";

export const metadata = {
  title: "Frequently Asked Questions | QE&D",
  description: "Official Frequently Asked Questions for Quality Education & Deployment (QE&D).",
};

export default function LegalPage() {
  const data = (pagesData as Record<string, any>)["faqs"];
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
        Frequently Asked Questions
      </h1>
      <div
        className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4"
        dangerouslySetInnerHTML={{ __html: data?.content || "<p>Please contact us for more information.</p>" }}
      />
    </div>
  );
}
