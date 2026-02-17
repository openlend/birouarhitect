'use client';

import Link from 'next/link';
import type { Company } from '@/data/companies';

interface CompanyCardPremiumProps {
  company: Company;
  index?: number;
}

export default function CompanyCardPremium({ company, index = 0 }: CompanyCardPremiumProps) {
  return (
    <div>
      <Link href={`/company/${company.slug}`}>
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col card-hover-lift">
          {/* Image Section with Overlay */}
          <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
            {/* Placeholder gradient - în practică aici ar fi imaginea company */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-slate-100" />
            
            {/* Category Icon */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
              <span className="text-2xl">{company.categoryIcon}</span>
            </div>

            {/* Badges */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              {company.isPremium && (
                <div className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  Premium
                </div>
              )}
              {company.isVerified && (
                <div className="bg-slate-900 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verificat
                </div>
              )}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-500" />
          </div>

          {/* Content Section */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Company Name */}
            <h3 className="font-serif font-semibold text-xl text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
              {company.name}
            </h3>

            {/* Location & Category */}
            <div className="flex items-center gap-3 text-sm text-slate-600 mb-3">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {company.city}
              </span>
              <span className="text-slate-400">•</span>
              <span>{company.category}</span>
            </div>

            {/* Short Description */}
            <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-1">
              {company.shortDesc}
            </p>

            {/* Stats */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-4 text-sm">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-medium text-slate-900">{company.rating}</span>
                  <span className="text-slate-400">({company.reviewCount})</span>
                </div>

                {/* Projects */}
                <div className="flex items-center gap-1 text-slate-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>{company.projectCount} proiecte</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
