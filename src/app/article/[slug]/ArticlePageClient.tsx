'use client';

import Link from "next/link";

interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category?: string;
  views: number;
  tags?: string[];
}

interface ArticlePageClientProps {
  article: Article;
  relatedArticles: Article[];
}

export default function ArticlePageClient({ article, relatedArticles }: ArticlePageClientProps) {
  return (
    <>
      {/* Article Header */}
      <article className="pt-24 md:pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div>
            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 mb-6">
              {article.category && (
                <>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                    {article.category}
                  </span>
                  <span>•</span>
                </>
              )}
              <time>
                {new Date(article.date).toLocaleDateString("ro-RO", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{article.views} vizualizări</span>
            </div>

            {/* Title */}
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 leading-tight text-balance">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              {article.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pb-8 border-b border-slate-200">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-slate-900 flex items-center justify-center text-white font-serif font-bold text-xl">
                {article.author.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-slate-900">{article.author}</div>
                <div className="text-sm text-slate-600">Autor</div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Article Content */}
      <section className="pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div
            className="prose prose-lg prose-slate max-w-none"
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.8',
            }}
          >
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                color: '#475569',
              }}
            />
          </div>

          {/* Article Footer - Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">Taguri</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Back to Articles */}
          <div className="mt-12">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors group"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Înapoi la Articole
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section-padding bg-slate-50">
          <div className="container-premium">
            <div>
              <h2 className="font-serif font-bold text-3xl text-slate-900 mb-8 text-center">
                Articole Similare
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <div key={related.id}>
                    <Link
                      href={`/article/${related.slug}`}
                      className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full card-hover-lift"
                    >
                      <div className="relative h-48 bg-gradient-to-br from-blue-100 via-slate-100 to-slate-200 overflow-hidden">
                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-all duration-500" />
                      </div>

                      <div className="p-6">
                        <div className="text-sm text-slate-500 mb-2">
                          {new Date(related.date).toLocaleDateString("ro-RO", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </div>

                        <h3 className="font-serif font-semibold text-xl text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {related.title}
                        </h3>

                        <p className="text-slate-600 text-sm line-clamp-2">
                          {related.excerpt}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
