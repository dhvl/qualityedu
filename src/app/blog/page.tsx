import Link from "next/link";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import blogsData from "@/data/blogs.json";

export const metadata = {
  title: "Blog & Insights | QE&D",
  description: "Latest insights on Six Sigma, Transaction Quality, QA metrics, and ATS resume strategies.",
};

export default function BlogListPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="bg-gradient-to-b from-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/20">
            Insights & Guides
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Quality & Career Articles</h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Practical strategies, interview techniques, and quality management frameworks curated by our Master Black Belts.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((post) => (
            <article key={post.slug} className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date ? post.date.split(" ")[0] : "Recent"}</span>
                </div>
                <h2 className="text-xl font-black text-slate-900 hover:text-blue-600 transition leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
