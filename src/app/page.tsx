import Link from "next/link";
import Image from "next/image";
import CompanyCardPremium from "@/components/CompanyCardPremium";
import QuickSearchPanel from "@/components/QuickSearchPanel";
import SectionHeading from "@/components/ui/SectionHeading";
import StatPills from "@/components/ui/StatPills";
import { companies, categories, cities } from "@/data/companies";
import { newArticles } from "@/data/new-articles";

type ArticlePreview = (typeof newArticles)[number] & { category?: string };

const featuredCompanies = companies
  .filter((c) => c.isPremium || c.isVerified)
  .slice(0, 6);

const quickFilters = [
  {
    label: "Case moderne",
    description: "Autorizare completă + structură în 90 de zile",
    href: "/directory?cat=rezidential",
  },
  {
    label: "Spații comerciale",
    description: "Birouri și retail cu livrare la cheie",
    href: "/directory?cat=comercial",
  },
  {
    label: "Reconversii industriale",
    description: "Echipe cu expertiză în monumente & PUZ",
    href: "/directory?cat=urbanism",
  },
];

const curatedPlaybooks = [
  {
    title: "Renovezi un spațiu comercial?",
    description: "Selectăm doar birourile care au livrat retail și hospitality în ultimele 12 luni.",
    actions: ["Due diligence rapid", "Vendor list verificat"],
  },
  {
    title: "Construiești o casă pe teren dificil?",
    description: "Găsești studiouri cu expertiză în fundații speciale, soluri umede și zone lacustre.",
    actions: ["Studiu geotehnic", "Coordonare autorizații"],
  },
  {
    title: "Upgrade pentru clădiri existente",
    description: "Birouri cu portofoliu în reconversii industriale și restaurare de patrimoniu.",
    actions: ["Audit energetic", "Plan etapizat"],
  },
];

const quickSearchCategoryOptions = categories.map((cat) => ({ label: cat.name, value: cat.slug }));
const quickSearchCityOptions = cities.map((city) => ({ label: city, value: city }));

export default function Home() {
  const totalCities = new Set(companies.map((c) => c.city)).size;
  const totalSpecialties = new Set(companies.map((c) => c.category)).size;
  const premiumStudios = companies.filter((c) => c.isPremium).length;
  const verifiedStudios = companies.filter((c) => c.isVerified).length;
  const latestArticles: ArticlePreview[] = newArticles.slice(0, 3).map((article) => ({
    ...article,
    category: (article as { category?: string }).category ?? 'Insight',
  }));


  const totalStudios = companies.length;

  // IMPORTANT: Keep metrics truthy (no fabricated counts).
  const metricsStats = [
    { label: 'Birouri în director', value: `${totalStudios}+`, helper: 'listate și curate' },
    { label: 'Birouri verificate', value: `${verifiedStudios}+`, helper: 'portofolii reale' },
    { label: 'Orașe', value: `${totalCities}+`, helper: 'acoperire națională' },
    { label: 'Specialități', value: `${totalSpecialties}+`, helper: 'rezidențial, comercial, urbanism' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative mt-6">
        <div className="container-premium">
          <div className="relative overflow-hidden rounded-[32px] bg-white px-6 py-10 md:px-12 md:py-14 border border-slate-200 shadow-sm">

            <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Director · România</p>
                <h1 className="mt-4 font-serif text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Găsește arhitectul potrivit pentru proiectul tău
                </h1>
                <p className="mt-6 text-lg text-slate-600 sm:text-xl">
                  Filtrează rapid după oraș și specializare, apoi compară portofolii, stiluri și modul de lucru.
                </p>

                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500">Cum funcționează</p>
                  <p className="mt-2">Alegi orașul și specializarea, iar apoi compari birouri după portofoliu și stil.</p>
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link href="/directory" className="btn-premium bg-white text-slate-900 justify-center">
                    Găsește arhitect
                  </Link>
                  <Link href="/submit" className="btn-premium btn-premium-outline justify-center">
                    Adaugă biroul
                  </Link>
                </div>
              </div>

              <div className="relative grid gap-6">
                <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-100">
                  <Image
                    src="/images/articles/lac-colibita-peisaj-munti-transilvania-arhitectura-lacustra-2025.jpg"
                    alt="BirouArhitect.ro"
                    width={1200}
                    height={800}
                    className="h-48 w-full object-cover sm:h-56"
                    priority
                  />
                </div>

                <QuickSearchPanel
                  categories={quickSearchCategoryOptions}
                  cities={quickSearchCityOptions}
                  className="bg-white shadow-sm border border-slate-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="section-padding pb-10">
        <div className="container-premium">
          <StatPills stats={metricsStats} columns={4} />
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-slate-50">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Categorii"
            title="Scanează piața pe specialități reale"
            description="Fiecare categorie include doar birouri care au cel puțin două proiecte finalizate în ultimele 24 de luni."
            kicker={(
              <Link href="/directory" className="btn-premium btn-premium-outline mt-2">Toate serviciile</Link>
            )}
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/directory?cat=${cat.slug}`}
                className="group rounded-3xl border border-slate-100 bg-white p-6 transition hover:-translate-y-1 hover:border-slate-200"
              >
                <div className="flex items-center justify-between">
                  <div className="text-4xl">{cat.icon}</div>
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500">
                    {companies.filter((c) => c.category === cat.name).length} birouri
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl text-slate-900">{cat.name}</h3>
                <p className="mt-2 text-slate-600">{cat.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600">
                  Deschide categoria
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Selecție editorială"
            title="Birouri premium înregistrate recent"
            kicker={(
              <Link href="/directory" className="btn-premium btn-premium-primary mt-2">Vezi directorul complet</Link>
            )}
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {featuredCompanies.map((company, index) => (
              <CompanyCardPremium key={company.id} company={company} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Playbooks */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Playbooks"
            title="Scenarii curate pentru proiectele critice"
            description="Pre-filtrăm echipele după buget, complexitate și experiență reală astfel încât să ajungi direct la discuții tehnice."
            kicker={(
              <Link href="/contact" className="btn-premium bg-white text-slate-900 hover:bg-blue-50 mt-2">Cere o recomandare</Link>
            )}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {curatedPlaybooks.map((playbook) => (
              <div key={playbook.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="font-serif text-2xl">{playbook.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{playbook.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-blue-100">
                  {playbook.actions.map((action) => (
                    <li key={action} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding bg-slate-50">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Field notes"
            title="Analize și studii de caz proaspete"
            kicker={(
              <Link href="/news" className="btn-premium btn-premium-outline mt-2">Toate articolele</Link>
            )}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {latestArticles.map((article, idx) => (
              <Link
                key={article.slug}
                href={`/article/${article.slug}`}
                className={`group rounded-3xl border border-slate-100 bg-white p-6 transition hover:-translate-y-1 hover:border-slate-200 ${
                  idx === 0 ? 'lg:col-span-2 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-center' : ''
                }`}
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                    {article.category ?? 'Insight'} · {new Date(article.date).toLocaleDateString('ro-RO', { month: 'short', day: 'numeric' })}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-slate-900 group-hover:text-blue-600">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{article.excerpt}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600">
                    Citește articolul
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                {idx === 0 && article.imageUrl && (
                  <div className="mt-6 overflow-hidden rounded-2xl lg:mt-0">
                    <div
                      className="h-56 rounded-2xl bg-cover bg-center"
                      style={{ backgroundImage: `url(${article.imageUrl})` }}
                    />
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="rounded-[32px] border border-slate-100 bg-white p-10 text-center shadow-2xl">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Ai un proiect urgent?</p>
            <h2 className="mt-4 font-serif text-4xl text-slate-900">Primești 3 recomandări de birouri în maximum 48 de ore</h2>
            <p className="mt-3 text-lg text-slate-600">
              Ne ocupăm de shortlist, introduceri și calendarul call-urilor tehnice. Tu te concentrezi pe decizii.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-premium btn-premium-primary">
                Trimite detalii proiect
              </Link>
              <Link href="/about" className="btn-premium btn-premium-outline">
                Află cum selectăm birourile
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
