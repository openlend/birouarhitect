'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { newArticles } from '@/data/new-articles';

type ArticleTopic = (typeof newArticles)[number] & { category?: string };

const normalizedArticles: ArticleTopic[] = newArticles.map((article) => ({
  ...article,
  category: (article as { category?: string }).category,
}));

export default function NewsPage() {
  const [selectedTopic, setSelectedTopic] = useState<string>('tot');
  const [searchTerm, setSearchTerm] = useState('');

  const topics = useMemo(() => {
    const unique = new Set<string>();
    normalizedArticles.forEach((article) => {
      if (article.category) {
        unique.add(article.category);
      }
    });
    return ['tot', ...Array.from(unique)];
  }, []);

  const filteredArticles = useMemo(() => {
    return normalizedArticles.filter((article) => {
      const matchesTopic = selectedTopic === 'tot' || article.category === selectedTopic;
      const query = searchTerm.trim().toLowerCase();
      const matchesSearch = !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query);
      return matchesTopic && matchesSearch;
    });
  }, [selectedTopic, searchTerm]);

  const [featured, ...rest] = filteredArticles;

  return (
    <section className="pt-24 pb-16">
      <div className="container-premium">
        <div className="rounded-[32px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 px-6 py-12 md:px-12 md:py-16 text-white">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-200">Field Notes</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Știri, analize și studii de caz pentru decizii informate</h1>
          <p className="mt-4 text-lg text-slate-200">Redacția BirouArhitect.ro documentează cele mai relevante proiecte, tehnologii și reglementări care schimbă piața locală.</p>

          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="flex-1">
              <input
                type="search"
                placeholder="Caută după subiect, oraș sau tehnologie"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-12 w-full rounded-2xl border border-white/20 bg-white/90 px-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    selectedTopic === topic ? 'bg-white text-slate-900' : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {topic === 'tot' ? 'Toate subiectele' : topic}
                </button>
              ))}
            </div>
          </div>
        </div>

        {featured ? (
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <Link
              href={`/article/${featured.slug}`}
              className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-xl transition hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                {featured.category ?? 'Analiză'} · {new Date(featured.date).toLocaleDateString('ro-RO', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              <h2 className="mt-4 font-serif text-4xl text-slate-900 group-hover:text-blue-600">{featured.title}</h2>
              <p className="mt-4 text-lg text-slate-600">{featured.excerpt}</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500">
                <span>{featured.author}</span>
                <span>•</span>
                <span>{featured.views ?? 0} citiri</span>
              </div>
              {featured.imageUrl && (
                <div className="mt-6 rounded-2xl bg-slate-100">
                  <div
                    className="h-64 rounded-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${featured.imageUrl})` }}
                  />
                </div>
              )}
            </Link>

            <div className="space-y-4">
              {rest.slice(0, 3).map((article) => (
                <Link
                  key={article.slug}
                  href={`/article/${article.slug}`}
                  className="block rounded-3xl border border-slate-100 bg-white p-6 transition hover:-translate-y-1"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                    {article.category ?? 'Insight'} · {new Date(article.date).toLocaleDateString('ro-RO', { month: 'short', day: 'numeric' })}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-slate-900 group-hover:text-blue-600">{article.title}</h3>
                  <p className="mt-2 text-slate-600">{article.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-12 rounded-3xl border border-dashed border-slate-200 bg-white p-12 text-center text-slate-500">
            Nu am găsit articole pentru criteriile selectate.
          </div>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.slice(3).map((article) => (
            <Link
              key={article.slug}
              href={`/article/${article.slug}`}
              className="group rounded-3xl border border-slate-100 bg-white p-6 transition hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                {article.category ?? 'Analiză'} · {new Date(article.date).toLocaleDateString('ro-RO', { month: 'short', day: 'numeric', year: 'numeric' })}
              </p>
              <h3 className="mt-3 font-serif text-xl text-slate-900 group-hover:text-blue-600">{article.title}</h3>
              <p className="mt-2 text-slate-600">{article.excerpt}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600">
                Citește
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
