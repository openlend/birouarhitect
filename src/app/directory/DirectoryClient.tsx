'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import CompanyCardPremium from '@/components/CompanyCardPremium';
import QuickSearchPanel from '@/components/QuickSearchPanel';
import Card from '@/components/ui/Card';
import StatPills from '@/components/ui/StatPills';
import { companies, categories, cities } from '@/data/companies';

const quickCombos = [
  { label: 'Case premium București', description: 'Autorizație completă + structură în 90 de zile', category: 'Rezidențial', city: 'București' },
  { label: 'Retail & hospitality Cluj', description: 'Spații comerciale și hoteluri cu livrare la cheie', category: 'Comercial', city: 'Cluj-Napoca' },
  { label: 'Reconversii Brașov', description: 'Industrial → mixed-use, echipe cu PUZ/PUD', category: 'Industrial', city: 'Brașov' },
];

const categoryOptions = categories.map((cat) => ({ label: cat.name, value: cat.slug }));
const cityOptions = cities.map((city) => ({ label: city, value: city }));

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
  const [isFilterDrawerOpen, setFilterDrawerOpen] = useState(false);

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

  const heroStats = [
    { label: 'Birouri active', value: `${companies.length}`, helper: 'verificate lunar' },
    { label: 'Orașe acoperite', value: `${new Set(companies.map((c) => c.city)).size}`, helper: 'din Cluj până la Constanța' },
    { label: 'Specialități', value: `${new Set(companies.map((c) => c.category)).size}`, helper: 'rezidențial · retail · urbanism' },
  ];

  const secondaryStats = [
    { label: 'Birouri premium', value: `${companies.filter((c) => c.isPremium).length}`, helper: 'audit trimestrial' },
    { label: 'Studii în lucru', value: '60+', helper: 'raportate în Q1 2026' },
    { label: 'Introduceri săptămânale', value: '20', helper: 'curate manual' },
    { label: 'Timp mediu răspuns', value: '48h', helper: 'până la ofertă preliminară' },
  ];

  const activeFiltersCount = [searchQuery, selectedCategory, selectedCity, premiumOnly ? 'premium' : null].filter(Boolean).length;

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedCity('');
    setPremiumOnly(false);
  };

  const renderViewToggle = (extraClasses = '') => (
    <div className={['inline-flex rounded-full border border-slate-200 bg-white p-1 text-sm font-medium text-slate-500', extraClasses].filter(Boolean).join(' ')}>
      {['grid', 'rows'].map((mode) => (
        <button
          key={mode}
          type="button"
          onClick={() => setViewMode(mode as 'grid' | 'rows')}
          className={[
            'rounded-full px-3 py-1.5 capitalize transition',
            viewMode === mode ? 'bg-slate-900 text-white shadow' : 'text-slate-500',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {mode === 'grid' ? 'Carduri' : 'Listă'}
        </button>
      ))}
    </div>
  );

  const filterControls = (
    <Card padding="lg" className="space-y-5">
      <div className="grid gap-4 lg:grid-cols-[1.4fr_0.85fr_0.85fr]">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Caută un birou</label>
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5">
            <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ex: casă lac Colibița, studio retail"
              className="input-premium border-none p-0"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Categorie</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-slate-900 focus:outline-none"
          >
            <option value="">Toate categoriile</option>
            {categories.map((cat) => (
              <option key={cat.slug} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Oraș</label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-slate-900 focus:outline-none"
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

      <div className="flex flex-wrap items-center gap-3">
        <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={premiumOnly}
            onChange={(e) => setPremiumOnly(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-blue-500"
          />
          Doar birouri premium
        </label>
        <button type="button" onClick={handleResetFilters} className="btn-premium-ghost text-sm font-medium">
          Resetează filtrele
        </button>
        <div className="flex flex-1 justify-end lg:hidden">{renderViewToggle()}</div>
      </div>

      <div className="hidden lg:flex justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
        <span>{filteredCompanies.length} birouri potrivite criteriilor tale</span>
        {renderViewToggle()}
      </div>
    </Card>
  );

  return (
    <section className="bg-white pb-20 pt-10">
      <div className="container-premium space-y-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="relative overflow-hidden rounded-[32px] bg-white p-8 text-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-200">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50" />
            <div className="relative space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Director premium · România</p>
              <h1 className="font-serif text-3xl leading-snug sm:text-4xl">
                Selectezi arhitecți real disponibili, cu proiecte livrate în ultimele 90 de zile.
              </h1>
              <p className="text-base text-slate-600">
                Filtrează instant după tip de proiect, oraș și statut premium. Echipa editorială verifică manual fiecare birou.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{stat.label}</p>
                    <p className="mt-1 text-3xl font-semibold">{stat.value}</p>
                    <p className="text-sm text-slate-600">{stat.helper}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <QuickSearchPanel categories={categoryOptions} cities={cityOptions} className="w-full" />
        </div>

        <StatPills stats={secondaryStats} columns={4} />

        <div className="grid gap-4 md:grid-cols-3">
          {quickCombos.map((combo) => (
            <Card
              as="button"
              type="button"
              key={combo.label}
              padding="lg"
              className="h-full text-left border-dashed hover:border-slate-300"
              onClick={() => {
                setSelectedCategory(combo.category);
                setSelectedCity(combo.city);
                setPremiumOnly(false);
                setFilterDrawerOpen(false);
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Scurtătură</p>
              <p className="mt-2 font-serif text-xl text-slate-900">{combo.label}</p>
              <p className="text-sm text-slate-600">{combo.description}</p>
              <span className="mt-3 inline-flex items-center text-sm font-semibold text-blue-600">
                Aplică filtrul
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Card>
          ))}
        </div>

        <div className="hidden lg:block">{filterControls}</div>
        <div className="lg:hidden text-sm text-slate-600">
          Folosește butonul „Filtre” pentru a rafina căutarea.
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">{filteredCompanies.length} rezultate</p>
              {selectedCategory && (
                <p className="text-xs text-slate-400">Categoria selectată: {selectedCategory}</p>
              )}
            </div>
            <div className="hidden lg:flex">{renderViewToggle()}</div>
          </div>

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
                    className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-slate-300 md:flex-row md:items-center md:justify-between"
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
            <Card padding="lg" className="text-center">
              <p className="text-4xl">🔍</p>
              <h3 className="mt-4 font-serif text-2xl text-slate-900">Niciun rezultat găsit</h3>
              <p className="mt-2 text-slate-600">Ajustează filtrele sau scrie-ne pentru o recomandare personalizată.</p>
              <Link href="/contact" className="mt-4 inline-flex btn-premium btn-premium-primary">
                Cere o recomandare
              </Link>
            </Card>
          )}
        </div>
      </div>

      {isFilterDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm lg:hidden" onClick={() => setFilterDrawerOpen(false)}>
          <div
            className="absolute inset-x-0 bottom-0 max-h-[85vh] rounded-t-3xl bg-white p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-base font-semibold text-slate-900">Filtre</p>
              <button className="btn-premium-ghost" onClick={() => setFilterDrawerOpen(false)}>
                Închide
              </button>
            </div>
            <div className="space-y-5 overflow-y-auto pb-4">{filterControls}</div>
            <button className="btn-premium btn-premium-primary mt-6 w-full" onClick={() => setFilterDrawerOpen(false)}>
              Vezi rezultatele
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        className="fixed bottom-4 left-4 right-4 z-40 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-2xl lg:hidden"
        onClick={() => setFilterDrawerOpen(true)}
      >
        Filtre {activeFiltersCount > 0 ? `(${activeFiltersCount})` : ''}
      </button>
    </section>
  );
}
