"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Option {
  label: string;
  value: string;
}

interface QuickSearchPanelProps {
  categories: Option[];
  cities: Option[];
  className?: string;
}

export default function QuickSearchPanel({ categories, cities, className = '' }: QuickSearchPanelProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (category) params.set("cat", category);
    if (city) params.set("city", city);

    const target = params.toString() ? `/directory?${params.toString()}` : "/directory";
    router.push(target);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={[
        'bg-white/90 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-xl space-y-5',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase mb-2">Căutare rapidă</p>
        <h3 className="font-serif text-2xl text-slate-900">Filtrează arhitecți după nevoile tale</h3>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-medium text-slate-600">Tip proiect sau nume birou</label>
        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 pr-12 text-base text-slate-900 focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            placeholder="ex: casă pasivă, studio, autorizații"
          />
          <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-3">
          <label className="text-sm font-medium text-slate-600">Categorie</label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 bg-white focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          >
            <option value="">Toate categoriile</option>
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-slate-600">Oraș</label>
          <select
            value={city}
            onChange={(event) => setCity(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 bg-white focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          >
            <option value="">Toate orașele</option>
            {cities.map((cityOption) => (
              <option key={cityOption.value} value={cityOption.value}>
                {cityOption.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit" className="btn-premium btn-premium-primary w-full justify-center text-base">
        Găsește arhitect
      </button>

      <a href="/adauga-birou" className="btn-premium btn-premium-outline w-full justify-center text-base">
        Adaugă biroul
      </a>

      <p className="text-xs text-slate-500 text-center">
        Gratuit pentru clienți • Birouri verificate editorial
      </p>
    </form>
  );
}
