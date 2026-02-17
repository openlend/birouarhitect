'use client';

import Hero from '@/components/Hero';

export default function AboutPage() {
  const features = [
    {
      icon: '🏢',
      title: 'Director Complet',
      description: 'Peste 500 de birouri de arhitectură verificate din toată România',
    },
    {
      icon: '⭐',
      title: 'Recenzii Verificate',
      description: 'Feedback autentic de la clienți reali pentru decizii informate',
    },
    {
      icon: '🔍',
      title: 'Filtrare Avansată',
      description: 'Caută după oraș, specialitate, rating și alte criterii',
    },
    {
      icon: '📰',
      title: 'Știri & Articole',
      description: 'Ultimele tendințe, sfaturi și inspirație din arhitectură',
    },
    {
      icon: '✅',
      title: 'Listare Gratuită',
      description: 'Arhitecții se pot înregistra gratuit și își pot promova serviciile',
    },
    {
      icon: '🤝',
      title: 'Conexiuni Directe',
      description: 'Facilitează comunicarea directă între clienți și arhitecți',
    },
  ];

  return (
    <>
      <Hero
        subtitle="Despre Noi"
        title="Conectăm Arhitecții cu Clienții"
        description="BirouArhitect.ro este cea mai mare platformă dedicată profesioniștilor în arhitectură din România"
        ctaText="Explorează Director"
        ctaHref="/directory"
        height="medium"
      />

      {/* Mission Section */}
      <section className="section-padding-lg bg-white">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-slate-900 mb-6">
                Cine Suntem
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                BirouArhitect.ro este cel mai mare director online de birouri de arhitectură din România. 
                Platforma noastră conectează clienții cu profesioniști verificați din domeniul arhitecturii, 
                designului interior și urbanismului, facilitând accesul la servicii de calitate pentru fiecare proiect.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
              <h3 className="font-serif font-bold text-3xl mb-4">Misiunea Noastră</h3>
              <p className="text-lg text-slate-200 leading-relaxed">
                Ne propunem să facilităm accesul la servicii de arhitectură de calitate pentru toți românii, 
                indiferent de orașul în care locuiesc. Credem că fiecare proiect merită un arhitect profesionist 
                care să transforme viziunea ta în realitate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding-lg bg-slate-50">
        <div className="container-premium">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-4xl text-slate-900 mb-4">
              Ce Oferim
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              O platformă completă pentru a găsi și contacta arhitecți profesioniști
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-serif font-semibold text-xl text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Birouri Listate' },
              { value: '40+', label: 'Orașe' },
              { value: '15+', label: 'Specialități' },
              { value: '1000+', label: 'Proiecte' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif font-bold text-5xl md:text-6xl text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />
        <div className="container-premium relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6">
              Ești Gata Să Începi?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Explorează directorul nostru și găsește arhitectul perfect pentru proiectul tău
            </p>
            <a href="/directory" className="btn-premium btn-premium-primary">
              Vezi Directorul
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
