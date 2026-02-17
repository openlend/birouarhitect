import Link from "next/link";
import { Company } from "@/data/companies";

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
      {company.isPremium && (
        <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Premium</span>
      )}
      {!company.isPremium && company.isVerified && (
        <span className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">Verificat</span>
      )}

      <div className="mb-3">
        <Link href={`/company/${company.slug}`}>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{company.name}</h3>
        </Link>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-amber-400 text-sm">{"★".repeat(Math.round(company.rating))}{"☆".repeat(5 - Math.round(company.rating))}</span>
          <span className="text-gray-500 text-sm">{company.rating}</span>
        </div>
      </div>

      <p className="text-gray-500 text-sm mb-2">📍 {company.city}</p>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{company.shortDesc}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {company.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
        <span className="text-gray-400 text-sm">{company.projectCount} proiecte</span>
        <Link href={`/company/${company.slug}`} className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors">
          Vezi Profil →
        </Link>
      </div>
    </div>
  );
}