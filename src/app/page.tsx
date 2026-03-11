import Link from "next/link";
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

  const heroStats = [
    {
      label: "Birouri verificate",
      value: `${verifiedStudios}+`,
      detail: "Audit editorial & portofolii reale",
    },
    {
      label: "Orașe acoperite",
      value: `${totalCities}+`,
      detail: "Rețea din Cluj până la Constanța",
    },
    {
      label: "Specialități",
      value: `${totalSpecialties}+`,
      detail: "Rezidențial, industrial, urbanism, retail",
    },
  ];

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
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 px-6 py-12 md:px-12 md:py-16">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at top, #38bdf8 0%, transparent 55%)" }} />
            <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Director premium · România</p>
                <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                  Găsește arhitectul potrivit pentru proiectul tău
                </h1>
                <p className="mt-6 text-lg text-slate-200 sm:text-xl">
                  Filtrează rapid după oraș și specializare, apoi compară portofolii, stiluri și modul de lucru.
                </p>

                <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-slate-200">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-100">Cum funcționează</p>
                  <p className="mt-2">Completezi căutarea rapidă din dreapta, iar noi filtrăm instant directorul și confirmăm disponibilitatea birourilor în maximum 48 de ore.</p>
                </div>

                <div className="mt-10 flex flex-col gap-4">
                  {quickFilters.map((filter) => (
                    <Link
                      key={filter.label}
                      href={filter.href}
                      className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/30"
                    >
                      <div className="flex items-center justify-between text-white">
                        <span className="font-medium">{filter.label}</span>
                        <span className="text-sm text-blue-200">Vezi studiouri →</span>
                      </div>
                      <p className="text-sm text-slate-200">{filter.description}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative grid gap-6">
                <QuickSearchPanel
                  categories={quickSearchCategoryOptions}
                  cities={quickSearchCityOptions}
                  className="bg-white shadow-2xl"
                />
                <div className="rounded-3xl bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl">
                  <p className="text-sm text-blue-200">Focus săptămânal</p>
                  <h3 className="mt-3 font-serif text-3xl">Birouri cu rezultate măsurabile</h3>
                  <p className="mt-3 text-sm text-slate-200">
                    Rulăm interviuri lunare cu echipele și verificăm stadiul proiectelor publicate.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-xs uppercase tracking-widest text-blue-200">Livrări Q1</p>
                      <p className="mt-2 text-3xl font-semibold">17</p>
                      <p className="text-xs text-slate-200">clădiri finalizate în ultimele 90 de zile</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-xs uppercase tracking-widest text-blue-200">Timp mediu estimări</p>
                      <p className="mt-2 text-3xl font-semibold">48h</p>
                      <p className="text-xs text-slate-200">până la răspuns cu ofertă preliminară</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.4em] text-blue-200">Indicatori</p>
                  <div className="mt-4 space-y-4">
                    {heroStats.map((stat) => (
                      <div key={stat.label} className="flex items-start justify-between">
                        <div>
                          <p className="text-sm text-slate-200">{stat.label}</p>
                          <p className="text-xs text-slate-300">{stat.detail}</p>
                        </div>
                        <p className="text-2xl font-semibold text-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
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
