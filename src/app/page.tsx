'use client';

import Link from "next/link";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import CompanyCardPremium from "@/components/CompanyCardPremium";
import { companies, categories, articles } from "@/data/companies";

export default function Home() {
  const featured = companies.filter((c) => c.isPremium || c.isVerified).slice(0, 6);
  const topArticles = articles.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="BirouArhitect.ro"
        title="Găsește Arhitectul Perfect Pentru Proiectul Tău"
        description="Cel mai mare director premium de birouri de arhitectură din România. Conectăm clienții cu profesioniști verificați pentru proiecte excepționale."
        ctaText="Explorează Director"
        ctaHref="/directory"
        height="full"
      />

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "500+", label: "Birouri Verificate", icon: "🏢" },
              { value: "40+", label: "Orașe Acoperite", icon: "📍" },
              { value: "15+", label: "Specialități", icon: "🎯" },
              { value: "1000+", label: "Proiecte Realizate", icon: "✨" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding-lg bg-slate-50">
        <div className="container-premium">
          <SectionTitle
            subtitle="Explorează"
            title="Categorii de Servicii"
            align="center"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat) => (
              <div key={cat.slug}>
                <Link
                  href={`/directory?cat=${cat.slug}`}
                  className="group block text-center p-8 md:p-10 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full"
                >
                  <span className="text-5xl md:text-6xl block mb-4 transition-transform group-hover:scale-110">
                    {cat.icon}
                  </span>
                  <h3 className="font-serif font-semibold text-lg md:text-xl text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-slate-600">{cat.desc}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Companies Section */}
      <section className="section-padding-lg bg-white">
        <div className="container-premium">
          <SectionTitle
            subtitle="Recomandate"
            title="Birouri Premium Verificate"
            align="center"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featured.map((company, index) => (
              <CompanyCardPremium key={company.id} company={company} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/directory" className="btn-premium btn-premium-primary">
              Vezi Toate Birourile
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="section-padding-lg bg-slate-50">
        <div className="container-premium">
          <SectionTitle
            subtitle="Blog"
            title="Articole Recente & Inspirație"
            align="center"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {topArticles.map((art) => (
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
                    <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                      <time>
                        {new Date(art.date).toLocaleDateString("ro-RO", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </div>

                    <h3 className="font-serif font-semibold text-xl text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {art.title}
                    </h3>

                    <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                      {art.excerpt}
                    </p>

                    <div className="flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                      <span>Citește mai mult</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/news" className="btn-premium btn-premium-outline">
              Toate Articolele
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')]" />
        
        <div className="container-premium relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6">
              Ești Arhitect?<br />Adaugă Biroul Tău
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Înregistrează-te gratuit și fii vizibil pentru mii de clienți potențiali.
              Dezvoltă-ți afacerea cu BirouArhitect.ro
            </p>
            <Link
              href="/submit"
              className="btn-premium btn-premium-primary inline-flex items-center space-x-2"
            >
              <span>Înregistrează-te Gratuit</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
