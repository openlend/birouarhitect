import Link from "next/link";
import { notFound } from "next/navigation";
import CompanyCardPremium from "@/components/CompanyCardPremium";
import { companies, categories } from "@/data/companies";
import { slugify } from "@/lib/slugify";

const uniqueCities = Array.from(new Set(companies.map((company) => company.city)));

export function generateStaticParams() {
  return uniqueCities.map((city) => ({ citySlug: slugify(city) }));
}

export function generateMetadata({ params }: { params: { citySlug: string } }) {
  const cityName = uniqueCities.find((city) => slugify(city) === params.citySlug);
  if (!cityName) {
    return {
      title: "Oraș negăsit | BirouArhitect.ro",
    };
  }

  return {
    title: `Arhitecți în ${cityName} | BirouArhitect.ro`,
    description: `Descoperă birouri de arhitectură verificate în ${cityName}. Filtrează proiecte rezidențiale, comerciale și industriale și contactează direct biroul potrivit pentru proiectul tău.`,
    alternates: {
      canonical: `https://birouarhitect.ro/arhitecti/${params.citySlug}`,
    },
  };
}

export default function CityDirectoryPage({ params }: { params: { citySlug: string } }) {
  const cityName = uniqueCities.find((city) => slugify(city) === params.citySlug);

  if (!cityName) {
    notFound();
  }

  const cityCompanies = companies.filter((company) => slugify(company.city) === params.citySlug);

  const categoryCount = categories.map((category) => ({
    ...category,
    total: cityCompanies.filter((company) => company.category === category.name).length,
  })).filter((entry) => entry.total > 0);

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="container-premium py-24">
          <p className="uppercase tracking-[0.3em] text-xs text-white/70 mb-4">Oraș</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-6">
            Birouri de arhitectură în {cityName}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            {cityCompanies.length} birouri verificate cu expertiză în proiecte rezidențiale, comerciale și industriale din {cityName}.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <div>
              <p className="text-sm text-white/60">Birouri listate</p>
              <p className="text-3xl font-serif">{cityCompanies.length}</p>
            </div>
            <div>
              <p className="text-sm text-white/60">Categorii active</p>
              <p className="text-3xl font-serif">{categoryCount.length}</p>
            </div>
            <div>
              <p className="text-sm text-white/60">Medie rating</p>
              <p className="text-3xl font-serif">
                {cityCompanies.length > 0
                  ? (cityCompanies.reduce((sum, company) => sum + company.rating, 0) / cityCompanies.length).toFixed(1)
                  : "-"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-premium -mt-16 pb-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 space-y-10">
          {categoryCount.length > 0 && (
            <div>
              <h2 className="font-serif text-2xl text-slate-900 mb-4">Specializări disponibile</h2>
              <div className="flex flex-wrap gap-3">
                {categoryCount.map((category) => (
                  <span key={category.slug} className="px-4 py-2 rounded-full border border-slate-200 text-sm text-slate-600">
                    {category.icon} {category.name}
                    <span className="text-slate-400 ml-2">{category.total}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm text-slate-500">Toate rezultatele</p>
              <h2 className="font-serif text-3xl text-slate-900">{cityCompanies.length} birouri în {cityName}</h2>
            </div>
            <Link href="/directory" className="text-sm text-blue-600 font-medium">
              Vezi toți arhitecții →
            </Link>
          </div>

          {cityCompanies.length > 0 ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {cityCompanies.map((company, index) => (
                <CompanyCardPremium key={company.id} company={company} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-slate-500">
              Încă nu avem birouri listate pentru acest oraș. Revenim în curând!
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
