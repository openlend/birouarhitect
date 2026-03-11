'use client';

import Link from 'next/link';
import type { Company } from '@/data/companies';

interface CompanyCardPremiumProps {
  company: Company;
  index?: number;
}

const accentGradients = [
  'from-blue-500 to-slate-900',
  'from-slate-900 to-slate-700',
  'from-emerald-500 to-teal-700',
  'from-amber-500 to-orange-600',
];

const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join('');

export default function CompanyCardPremium({ company, index = 0 }: CompanyCardPremiumProps) {
  const gradient = accentGradients[index % accentGradients.length];
  const initials = getInitials(company.name);

  return (
    <Link href={`/company/${company.slug}`} className="group block h-full focus:outline-none">
      <div className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-xl">
        <div className="flex items-center gap-4">
          <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-lg font-semibold text-white`}>
            {initials}
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-slate-400">{company.category}</span>
            <h3 className="font-serif text-xl text-slate-900 transition-colors group-hover:text-blue-600">{company.name}</h3>
            <p className="text-sm text-slate-500">{company.city}</p>
          </div>
        </div>

        <p className="mt-4 flex-1 text-sm text-slate-600 line-clamp-3">{company.shortDesc}</p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate-500">
          <span className="rounded-full bg-slate-100 px-3 py-1">{company.projectCount} proiecte</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">⭐ {company.rating} ({company.reviewCount})</span>
          {company.isPremium && <span className="rounded-full bg-slate-900 px-3 py-1 text-white">Premium</span>}
          {company.isVerified && <span className="rounded-full border border-slate-200 px-3 py-1">Verificat</span>}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-semibold text-blue-600">
          <span>Vezi profilul</span>
          <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
