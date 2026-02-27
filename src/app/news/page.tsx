'use client';

import Link from "next/link";
import Hero from '@/components/Hero';
import { articles } from "@/data/companies";

export default function NewsPage() {
  // Sort articles by date (newest first)
  const sortedArticles = [...articles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Hero
        subtitle="Blog"
        title="Știri & Articole"
        description="Ultimele noutăți, tendințe și inspirație din lumea arhitecturii românești"
        ctaText="Explorează Birourile"
        ctaHref="/directory"
        height="medium"
      />

      <section className="section-padding-lg bg-slate-50">
        <div className="container-premium">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sortedArticles.map((art) => (
              <div key={art.id}>
                <Link
                  href={`/article/${art.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full card-hover-lift"
                >
                  {/* Article Image Placeholder */}
                  <div className="relative h-56 bg-gradient-to-br from-blue-100 via-slate-100 to-slate-200 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-all duration-500" />
                  </div>

                  <div className="p-6">
                    {/* Date & Views */}
                    <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                      <time>
                        {new Date(art.date).toLocaleDateString("ro-RO", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                      <span>•</span>
                      <span>{art.views} vizualizări</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif font-semibold text-xl text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {art.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                      {art.excerpt}
                    </p>

                    {/* Author & Read More */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-slate-900 flex items-center justify-center text-white text-xs font-serif font-bold">
                          {art.author.charAt(0)}
                        </div>
                        <span className="text-sm text-slate-600">{art.author}</span>
                      </div>

                      <div className="flex items-center text-blue-600 font-medium text-sm group-hover:gap-1 transition-all">
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
