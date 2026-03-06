import Link from "next/link";
import CompanyCardPremium from "@/components/CompanyCardPremium";
import { companies, categories } from "@/data/companies";
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
                  Descoperă biroul de arhitectură potrivit înainte să înceapă licitația
                </h1>
                <p className="mt-6 text-lg text-slate-200 sm:text-xl">
                  Vezi capacitatea reală a echipelor, tipurile de proiecte livrate și disponibilitatea lor în următoarele 90 de zile.
                </p>

                <form action="/directory" className="mt-8 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_200px]">
                    <input
                      name="q"
                      type="text"
                      placeholder="Ex: casă lac Colibița, spațiu retail București"
                      className="h-12 rounded-xl border border-white/20 bg-white/80 px-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                    <button type="submit" className="btn-premium bg-white text-slate-900 hover:bg-blue-50">
                      Caută în director
                    </button>
                  </div>
                  <p className="mt-3 text-xs text-slate-200">
                    Filtrăm doar birourile care lucrează proiecte active în 2026.
                  </p>
                </form>

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

              <div className="relative">
                <div className="absolute inset-0 rounded-[32px] border border-white/5" />
                <div className="relative grid gap-6">
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
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="section-padding pb-10">
        <div className="container-premium">
          <div className="grid gap-6 rounded-3xl border border-slate-100 bg-white p-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Studii de fezabilitate",
                value: "+60", 
                detail: "în execuție acum",
              },
              {
                label: "Firme premium",
                value: `${premiumStudios}+`,
                detail: "abonate la audit trimestrial",
              },
              {
                label: "Proiecte listate",
                value: "1000+",
                detail: "documentate în ultimii 3 ani",
              },
              {
                label: "Timp mediu introducere",
                value: "4 zile",
                detail: "de la solicitare la call tehnic",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-1 text-3xl font-semibold text-slate-900">{item.value}</p>
                <p className="text-sm text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-slate-50">
        <div className="container-premium">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Categorii</p>
              <h2 className="mt-4 font-serif text-4xl text-slate-900">Scanează piața pe specialități reale</h2>
              <p className="mt-3 max-w-2xl text-lg text-slate-600">
                Fiecare categorie include doar birouri care au cel puțin 2 proiecte finalizate în ultimii 24 de luni.
              </p>
            </div>
            <Link href="/directory" className="btn-premium btn-premium-outline self-start">
              Toate serviciile
            </Link>
          </div>

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
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Selecție editorială</p>
              <h2 className="mt-3 font-serif text-4xl text-slate-900">Birouri premium înregistrate recent</h2>
            </div>
            <Link href="/directory" className="btn-premium btn-premium-primary">
              Vezi directorul complet
            </Link>
          </div>

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
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-blue-200">Playbooks</p>
              <h2 className="mt-3 font-serif text-4xl">Scenarii curate pentru proiectele critice</h2>
              <p className="mt-3 max-w-2xl text-slate-200">
                Pre-filtrăm echipele după buget, complexitate și experiența reală astfel încât să ajungi direct la discuții tehnice.
              </p>
            </div>
            <Link href="/contact" className="btn-premium bg-white text-slate-900 hover:bg-blue-50">
              Cere o recomandare
            </Link>
          </div>

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
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Field notes</p>
              <h2 className="mt-3 font-serif text-4xl text-slate-900">Analize și studii de caz proaspete</h2>
            </div>
            <Link href="/news" className="btn-premium btn-premium-outline">
              Toate articolele
            </Link>
          </div>

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
