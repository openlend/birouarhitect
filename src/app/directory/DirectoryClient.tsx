'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import CompanyCardPremium from '@/components/CompanyCardPremium';
import { companies, categories, cities } from '@/data/companies';

const quickCombos = [
  { label: 'Case premium în București', category: 'Rezidențial', city: 'București' },
  { label: 'Retail & hospitality Cluj', category: 'Comercial', city: 'Cluj-Napoca' },
  { label: 'Reconversii industriale Brașov', category: 'Industrial', city: 'Brașov' },
];

export default function DirectoryClient() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') ?? '';
  const catParam = searchParams.get('cat') ?? searchParams.get('category') ?? '';
  const cityParam = searchParams.get('city') ?? searchParams.get('oras') ?? '';

  const categoryFromSlug = categories.find((cat) => cat.slug === catParam);
  const initialCategory = categoryFromSlug ? categoryFromSlug.name : catParam;

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedCity, setSelectedCity] = useState(cityParam);
  const [premiumOnly, setPremiumOnly] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'rows'>('grid');

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      const matchesPremium = premiumOnly ? company.isPremium : true;
      const matchesSearch =
        searchQuery === '' ||
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === '' || company.category === selectedCategory;
      const matchesCity = selectedCity === '' || company.city === selectedCity;
      return matchesPremium && matchesSearch && matchesCategory && matchesCity;
    });
  }, [premiumOnly, searchQuery, selectedCategory, selectedCity]);

  return (
    <section className="min-h-screen bg-slate-50 pb-16 pt-24">
      <div className="container-premium">
        <div className="rounded-[32px] bg-white px-6 py-10 shadow-sm md:px-10">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Director</p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-4xl text-slate-900 sm:text-5xl">Selectează biroul potrivit în câteva minute</h1>
              <p className="mt-4 text-lg text-slate-600">Filtrează după tip de proiect, oraș și statut premium. Verificăm disponibilitatea la fiecare 30 de zile.</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>Vizualizare:</span>
              <button
                className={`rounded-full px-4 py-2 ${viewMode === 'grid' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'}`}
                onClick={() => setViewMode('grid')}
              >
                Carduri
              </button>
              <button
                className={`rounded-full px-4 py-2 ${viewMode === 'rows' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'}`}
                onClick={() => setViewMode('rows')}
              >
                Listă
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-4 md:grid-cols-[1.5fr_0.75fr_0.75fr]">
            <div>
              <label className="text-sm font-medium text-slate-600">Caută birou</label>
              <div className="mt-2 flex items-center gap-2 rounded-2xl bg-white px-4 py-2">
                <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Lansare magazin Cluj, casă pe structură metalică, etc"
                  className="h-10 w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-600">Categorie</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Toate categoriile</option>
                {categories.map((cat) => (
                  <option key={cat.slug} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-600">Oraș</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Toate orașele</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={premiumOnly}
                onChange={(e) => setPremiumOnly(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-blue-500"
              />
              Doar birouri premium
            </label>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('');
                setSelectedCity('');
                setPremiumOnly(false);
              }}
              className="text-sm font-medium text-blue-600"
            >
              Resetează filtrele
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {quickCombos.map((combo) => (
            <button
              key={combo.label}
              onClick={() => {
                setSelectedCategory(combo.category);
                setSelectedCity(combo.city);
                setPremiumOnly(false);
              }}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-left transition hover:-translate-y-1 hover:border-slate-300"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Scurtătură</p>
              <p className="mt-2 font-serif text-xl text-slate-900">{combo.label}</p>
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Birouri disponibile acum', value: `${companies.length}`, detail: 'pe tot teritoriul țării' },
            { label: 'Orașe acoperite', value: `${new Set(companies.map((c) => c.city)).size}`, detail: 'verificate trimestrial' },
            { label: 'Specialități', value: `${new Set(companies.map((c) => c.category)).size}`, detail: 'de la urbanism la retail' },
            { label: 'Birouri premium', value: `${companies.filter((c) => c.isPremium).length}`, detail: 'audit complet + portofoliu' },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-100 bg-white p-5">
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900">{item.value}</p>
              <p className="text-sm text-slate-500">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          {filteredCompanies.length > 0 ? (
            viewMode === 'grid' ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredCompanies.map((company, index) => (
                  <CompanyCardPremium key={company.id} company={company} index={index} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCompanies.map((company) => (
                  <Link
                    key={company.id}
                    href={`/company/${company.slug}`}
                    className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 text-left transition hover:-translate-y-1 hover:border-slate-300 md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-slate-500">{company.category}</p>
                      <h3 className="mt-2 font-serif text-2xl text-slate-900">{company.name}</h3>
                      <p className="text-sm text-slate-600">{company.city}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                      <span className="rounded-full bg-slate-100 px-3 py-1">{company.projectCount} proiecte</span>
                      <span className="rounded-full bg-slate-100 px-3 py-1">⭐ {company.rating}</span>
                      {company.isPremium && <span className="rounded-full bg-slate-900 px-3 py-1 text-white">Premium</span>}
                    </div>
                  </Link>
                ))}
              </div>
            )
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-12 text-center">
              <p className="text-5xl">🔍</p>
              <h3 className="mt-4 font-serif text-2xl text-slate-900">Niciun rezultat găsit</h3>
              <p className="mt-2 text-slate-600">Ajustează filtrele sau trimite-ne detalii pentru o recomandare personalizată.</p>
              <Link href="/contact" className="mt-6 inline-flex btn-premium btn-premium-primary">
                Cere o recomandare
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
