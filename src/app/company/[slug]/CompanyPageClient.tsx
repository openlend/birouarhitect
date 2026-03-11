'use client';

import Link from "next/link";
import type { ReactNode } from "react";
import type { Company } from "@/data/companies";

export default function CompanyPageClient({ company }: { company: Company }) {
  const infoGrid = [
    { label: "Oraș", value: company.city },
    { label: "Categorie", value: company.category },
    company.foundedYear ? { label: "Fondat", value: company.foundedYear } : null,
    company.employeeCount ? { label: "Echipă", value: company.employeeCount } : null,
  ].filter(Boolean) as { label: string; value: string | number }[];

  const contactActions = [
    company.phone && {
      label: company.phone,
      href: `tel:${company.phone}`,
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    company.email && {
      label: company.email,
      href: `mailto:${company.email}`,
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    company.website && {
      label: 'Vizitează site-ul',
      href: company.website,
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
  ].filter(Boolean) as { label: string; href: string; icon: ReactNode }[];

  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 pt-24 pb-16 text-white">
        <div className="container-premium">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.4em] text-blue-200">
                {company.category}
                {company.isPremium && <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold">Premium</span>}
              </span>
              <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">{company.name}</h1>
              <p className="mt-4 text-lg text-slate-200">{company.shortDesc}</p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-blue-100">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {company.rating} · {company.reviewCount} recenzii
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {company.city}
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {infoGrid.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-blue-200">{item.label}</p>
                    <p className="mt-1 text-xl font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
              <p className="text-xs uppercase tracking-[0.4em] text-blue-200">Contact rapid</p>
              <div className="mt-4 space-y-3">
                {contactActions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-sm transition hover:bg-white/20"
                  >
                    <span className="flex items-center gap-3">
                      {action.icon}
                      {action.label}
                    </span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
              {company.address && (
                <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm text-slate-200">
                  <p className="text-xs uppercase tracking-[0.4em] text-blue-200">Adresă</p>
                  <p className="mt-2">{company.address}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-premium">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
            <div className="space-y-8">
              <div className="rounded-3xl border border-slate-100 bg-white p-8">
                <h2 className="font-serif text-3xl text-slate-900">Despre studio</h2>
                <div className="mt-4 ba-article">
                  <p className="whitespace-pre-line">{company.description}</p>
                </div>
              </div>

              {company.tags.length > 0 && (
                <div className="rounded-3xl border border-slate-100 bg-white p-8">
                  <h3 className="font-serif text-2xl text-slate-900">Servicii & competențe</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {company.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-slate-100 bg-white p-6">
                <h3 className="font-serif text-xl text-slate-900">Indicatori rapizi</h3>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <div className="flex items-center justify-between">
                    <span>Proiecte finalizate</span>
                    <span className="font-semibold text-slate-900">{company.projectCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Statut</span>
                    <span className="font-semibold text-slate-900">{company.isPremium ? 'Premium' : company.isVerified ? 'Verificat' : 'Listat'}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-white p-6">
                <h3 className="font-serif text-xl text-slate-900">Următorul pas</h3>
                <p className="mt-2 text-sm text-slate-600">Trimite detalii pentru a verifica disponibilitatea echipei și calendarul estimat.</p>
                <Link href="/contact" className="mt-4 inline-flex btn-premium btn-premium-primary">
                  Trimite un brief
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-premium">
          <div className="rounded-[32px] border border-slate-100 bg-slate-900 p-10 text-center text-white">
            <h3 className="font-serif text-3xl">Vrei opțiuni similare?</h3>
            <p className="mt-3 text-slate-200">Trimite-ne specificațiile proiectului iar noi pregătim un shortlist în 48h.</p>
            <Link href="/directory" className="mt-6 inline-flex btn-premium bg-white text-slate-900">
              Înapoi la director
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
