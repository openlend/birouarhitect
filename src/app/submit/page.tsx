'use client';

import Hero from '@/components/Hero';
import { categories, cities } from "@/data/companies";

export default function SubmitPage() {
  const benefits = [
    { icon: '👥', title: 'Acces la Clienți', description: 'Conectează-te cu mii de clienți potențiali' },
    { icon: '⭐', title: 'Credibilitate Sporită', description: 'Badge de verificare și recenzii autentice' },
    { icon: '📈', title: 'Vizibilitate Maximă', description: 'Apari în căutările relevante' },
    { icon: '💼', title: 'Profil Profesional', description: 'Prezintă-ți portofoliul și serviciile' },
  ];

  return (
    <>
      <Hero
        subtitle="Înregistrare Gratuită"
        title="Adaugă Biroul Tău pe Platformă"
        description="Înregistrează-te gratuit și devino vizibil pentru mii de clienți care caută servicii de arhitectură"
        height="medium"
      />

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <div className="max-w-5xl mx-auto">
            <div
              className="text-center mb-12"
            >
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-4">
                De Ce Să Te Alături?
              </h2>
              <p className="text-lg text-slate-600">
                Beneficiile de a fi parte din BirouArhitect.ro
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="text-center p-6 bg-slate-50 rounded-2xl"
                >
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding-lg bg-slate-50">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <div
              className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
            >
              <div className="mb-8">
                <h2 className="font-serif font-bold text-3xl text-slate-900 mb-3">
                  Formular de Înregistrare
                </h2>
                <p className="text-slate-600">
                  Completează formularul și echipa noastră va verifica informațiile în cel mai scurt timp
                </p>
              </div>

              <form className="space-y-6">
                {/* Company & Contact Name */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Numele Biroului *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Arhitect SRL"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Persoana de Contact *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Numele tău"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="office@firma.ro"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+40 7XX XXX XXX"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>

                {/* City & Category */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Oraș *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white transition-all"
                    >
                      <option value="">Selectează orașul</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Specialitate Principală *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white transition-all"
                    >
                      <option value="">Selectează categoria</option>
                      {categories.map((cat) => (
                        <option key={cat.slug} value={cat.name}>
                          {cat.icon} {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Adresă Completă
                  </label>
                  <input
                    type="text"
                    placeholder="Strada, nr., sector/județ"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                {/* Website */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    placeholder="https://www.firma.ro"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Descriere Birou *
                  </label>
                  <textarea
                    rows={6}
                    required
                    placeholder="Prezintă biroul tău: specializare, experiență, tipuri de proiecte, echipă, valori..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  />
                  <p className="text-xs text-slate-500 mt-2">
                    Minim 100 caractere. Descrie serviciile și punctele forte ale biroului tău.
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Servicii Oferite (Tags)
                  </label>
                  <input
                    type="text"
                    placeholder="proiectare case, design interior, autorizații, etc."
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                  <p className="text-xs text-slate-500 mt-2">
                    Separate prin virgulă. Ex: proiectare rezidențială, design interior, autorizații
                  </p>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                  <input
                    type="checkbox"
                    required
                    id="terms"
                    className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-100"
                  />
                  <label htmlFor="terms" className="text-sm text-slate-600">
                    Accept{' '}
                    <a href="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                      Termenii și Condițiile
                    </a>{' '}
                    și{' '}
                    <a href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                      Politica de Confidențialitate
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-premium btn-premium-primary text-lg"
                >
                  Trimite Cererea de Înregistrare
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <p className="text-center text-sm text-slate-500">
                  Cererea ta va fi verificată de echipa noastră în maxim 48 de ore
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <div
              className="text-center mb-12"
            >
              <h2 className="font-serif font-bold text-3xl text-slate-900 mb-4">
                Întrebări Frecvente
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'Este gratuit să mă înregistrez?',
                  a: 'Da, înregistrarea de bază este complet gratuită. Oferim și opțiuni premium pentru vizibilitate sporită.',
                },
                {
                  q: 'Cât durează verificarea?',
                  a: 'Verificăm toate cererile în maxim 48 de ore lucrătoare. Vei primi un email când profilul tău este activ.',
                },
                {
                  q: 'Pot modifica informațiile după înregistrare?',
                  a: 'Da, poți actualiza oricând informațiile din profil contactându-ne.',
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="bg-slate-50 rounded-2xl p-6"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
