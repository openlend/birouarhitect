'use client';

import { useState } from 'react';
import Hero from "@/components/Hero";
import CompanyCardPremium from "@/components/CompanyCardPremium";
import { companies, categories, cities } from "@/data/companies";

export default function DirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // Simple client-side filtering
  const filteredCompanies = companies.filter((company) => {
    const matchesSearch = searchQuery === '' || 
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || company.category === selectedCategory;
    const matchesCity = selectedCity === '' || company.city === selectedCity;

    return matchesSearch && matchesCategory && matchesCity;
  });

  return (
    <>
      {/* Hero */}
      <Hero
        subtitle="Director"
        title="Explorează Birouri de Arhitectură"
        description="Găsește profesioniști verificați pentru proiectul tău"
        height="medium"
      />

      {/* Main Content */}
      <section className="section-padding-lg bg-slate-50">
        <div className="container-premium">
          <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-12">
            {/* Filters Sidebar */}
            <aside className="lg:sticky lg:top-24 h-fit">
              <div className="bg-white rounded-2xl shadow-md p-6 lg:p-8">
                <h3 className="font-serif font-semibold text-2xl text-slate-900 mb-6">
                  Filtrează
                </h3>

                <div className="space-y-6">
                  {/* Search */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Caută birou
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Nume birou..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 pl-10 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                      <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Categorie
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white transition-all"
                    >
                      <option value="">Toate categoriile</option>
                      {categories.map((cat) => (
                        <option key={cat.slug} value={cat.name}>
                          {cat.icon} {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Oraș
                    </label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white transition-all"
                    >
                      <option value="">Toate orașele</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Reset Button */}
                  {(searchQuery || selectedCategory || selectedCity) && (
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('');
                        setSelectedCity('');
                      }}
                      className="w-full py-2.5 text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors"
                    >
                      Resetează filtrele
                    </button>
                  )}
                </div>

                {/* Stats */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-slate-900">
                      {filteredCompanies.length}
                    </div>
                    <div className="text-sm text-slate-600 mt-1">
                      {filteredCompanies.length === 1 ? 'birou găsit' : 'birouri găsite'}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Company Grid */}
            <div>
              {filteredCompanies.length > 0 ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                  {filteredCompanies.map((company, index) => (
                    <CompanyCardPremium
                      key={company.id}
                      company={company}
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="font-serif font-semibold text-2xl text-slate-900 mb-2">
                    Niciun rezultat găsit
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Încearcă să modifici filtrele sau termenii de căutare
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('');
                      setSelectedCity('');
                    }}
                    className="btn-premium btn-premium-outline"
                  >
                    Resetează filtrele
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
