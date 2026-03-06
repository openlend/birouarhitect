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
  imageUrl?: string;
}

interface ArticlePageClientProps {
  article: Article;
  relatedArticles: Article[];
}

export default function ArticlePageClient({ article, relatedArticles }: ArticlePageClientProps) {
  const words = article.content.replace(/<[^>]+>/g, '').split(/\s+/).length;
  const readingMinutes = Math.max(4, Math.round(words / 220));

  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-900 pt-24 text-white">
        {article.imageUrl && (
          <div
            className="absolute inset-0 opacity-30"
            style={{ backgroundImage: `url(${article.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950" />
        <div className="container-premium relative z-10 py-16">
          <p className="text-xs uppercase tracking-[0.4em] text-blue-200">
            {article.category ?? 'Insight'} · {new Date(article.date).toLocaleDateString('ro-RO', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">{article.title}</h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200">{article.excerpt}</p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-blue-100">
            <span>Autor: {article.author}</span>
            <span>•</span>
            <span>{readingMinutes} min de citit</span>
            <span>•</span>
            <span>{article.views ?? 0} vizualizări</span>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-premium">
          <div className="relative -mt-20 rounded-[32px] border border-slate-100 bg-white p-8 shadow-xl">
            <div className="prose prose-lg prose-slate max-w-none">
              <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            {article.tags && article.tags.length > 0 && (
              <div className="mt-12 border-t border-slate-100 pt-8">
                <h3 className="text-sm font-semibold text-slate-900">Taguri</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {article.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-4 text-sm">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Înapoi la articole
              </Link>
            </div>
          </div>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="section-padding bg-slate-50">
          <div className="container-premium">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-3xl text-slate-900">Articole similare</h2>
              <Link href="/news" className="text-sm font-semibold text-blue-600">
                Vezi toate
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  href={`/article/${related.slug}`}
                  className="group rounded-3xl border border-slate-100 bg-white p-6 transition hover:-translate-y-1 hover:border-slate-200"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                    {related.category ?? 'Insight'} · {new Date(related.date).toLocaleDateString('ro-RO', { month: 'short', day: 'numeric' })}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-slate-900 group-hover:text-blue-600">{related.title}</h3>
                  <p className="mt-2 text-slate-600">{related.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
