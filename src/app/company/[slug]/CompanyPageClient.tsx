'use client';

import Link from "next/link";
import type { Company } from "@/data/companies";

export default function CompanyPageClient({ company }: { company: Company }) {
  return (
    <>
      {/* Hero Section with Company Info */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')]" />

        {/* Content */}
        <div className="container-premium relative z-10 py-16">
          <div
            className="max-w-4xl"
          >
            {/* Category Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl text-5xl mb-6">
              {company.categoryIcon}
            </div>

            {/* Company Name */}
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              {company.name}
            </h1>

            {/* Location & Category */}
            <div className="flex flex-wrap items-center gap-4 text-slate-200 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium">{company.city}</span>
              </div>
              <span className="text-slate-400">•</span>
              <span>{company.category}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < Math.round(company.rating) ? 'text-yellow-400' : 'text-slate-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-semibold">{company.rating}</span>
              <span className="text-slate-400">({company.reviewCount} recenzii)</span>
            </div>

            {/* Tags & Badges */}
            <div className="flex flex-wrap gap-2">
              {company.isPremium && (
                <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                  ⭐ Premium
                </span>
              )}
              {company.isVerified && (
                <span className="bg-white text-slate-900 text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verificat
                </span>
              )}
              {company.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding-lg bg-slate-50">
        <div className="container-premium">
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* About Section */}
              <div
                className="bg-white rounded-2xl shadow-md p-8 lg:p-10"
              >
                <h2 className="font-serif font-semibold text-3xl text-slate-900 mb-6 pb-4 border-b border-slate-100">
                  Despre {company.name}
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed whitespace-pre-line">
                  {company.description}
                </p>
              </div>

              {/* Services/Tags Section */}
              {company.tags.length > 0 && (
                <div
                  className="bg-white rounded-2xl shadow-md p-8 lg:p-10"
                >
                  <h2 className="font-serif font-semibold text-3xl text-slate-900 mb-6 pb-4 border-b border-slate-100">
                    Servicii
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {company.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Reviews Section */}
              <div
                className="bg-white rounded-2xl shadow-md p-8 lg:p-10"
              >
                <h2 className="font-serif font-semibold text-3xl text-slate-900 mb-6 pb-4 border-b border-slate-100">
                  Recenzii ({company.reviewCount})
                </h2>
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">⭐</div>
                  <p className="text-slate-600">
                    Recenziile vor fi disponibile în curând
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <aside className="space-y-6">
              {/* Contact Card */}
              <div
                className="bg-white rounded-2xl shadow-md p-6 lg:sticky lg:top-24"
              >
                <h3 className="font-serif font-semibold text-xl text-slate-900 mb-6">
                  Informații Contact
                </h3>
                <div className="space-y-4">
                  {company.phone && (
                    <a
                      href={`tel:${company.phone}`}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div className="flex-1">
                        <div className="text-xs text-slate-500 mb-0.5">Telefon</div>
                        <div className="text-slate-900 font-medium group-hover:text-blue-600">
                          {company.phone}
                        </div>
                      </div>
                    </a>
                  )}

                  {company.email && (
                    <a
                      href={`mailto:${company.email}`}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div className="flex-1">
                        <div className="text-xs text-slate-500 mb-0.5">Email</div>
                        <div className="text-slate-900 font-medium group-hover:text-blue-600 break-all">
                          {company.email}
                        </div>
                      </div>
                    </a>
                  )}

                  {company.website && (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <div className="flex-1">
                        <div className="text-xs text-slate-500 mb-0.5">Website</div>
                        <div className="text-slate-900 font-medium group-hover:text-blue-600 break-all">
                          Vizitează site-ul →
                        </div>
                      </div>
                    </a>
                  )}

                  {company.address && (
                    <div className="flex items-start gap-3 p-3">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div className="flex-1">
                        <div className="text-xs text-slate-500 mb-0.5">Adresă</div>
                        <div className="text-slate-900 font-medium">
                          {company.address}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Stats Card */}
              <div
                className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl shadow-md p-6 text-white"
              >
                <h3 className="font-serif font-semibold text-xl mb-6">
                  Statistici
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-white/10">
                    <span className="text-slate-300">Proiecte</span>
                    <span className="text-2xl font-bold">{company.projectCount}</span>
                  </div>
                  {company.employeeCount && (
                    <div className="flex items-center justify-between py-3 border-b border-white/10">
                      <span className="text-slate-300">Angajați</span>
                      <span className="text-2xl font-bold">{company.employeeCount}</span>
                    </div>
                  )}
                  {company.foundedYear && (
                    <div className="flex items-center justify-between py-3">
                      <span className="text-slate-300">Fondat în</span>
                      <span className="text-2xl font-bold">{company.foundedYear}</span>
                    </div>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <div
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              Explorează Mai Multe Birouri
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Descoperă și alți arhitecți profesioniști din România
            </p>
            <Link href="/directory" className="btn-premium btn-premium-primary">
              Vezi Directorul Complet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
