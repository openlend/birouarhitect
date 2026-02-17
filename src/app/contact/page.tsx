'use client';

import Hero from '@/components/Hero';

export default function ContactPage() {
  return (
    <>
      <Hero
        subtitle="Contact"
        title="Hai Să Discutăm"
        description="Trimite-ne un mesaj și îți vom răspunde în cel mai scurt timp"
        height="medium"
      />

      <section className="section-padding-lg bg-slate-50">
        <div className="container-premium">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12">
            {/* Contact Form */}
            <div
              className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
            >
              <h2 className="font-serif font-bold text-3xl text-slate-900 mb-8">
                Trimite-ne un Mesaj
              </h2>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Nume *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                      placeholder="Ion Popescu"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                      placeholder="ion@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    placeholder="+40 7XX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Subiect *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    placeholder="Despre ce vrei să vorbim?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    placeholder="Spune-ne mai multe despre nevoile tale..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-premium btn-premium-primary"
                >
                  Trimite Mesajul
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div
              className="space-y-6"
            >
              {/* Contact Info Card */}
              <div className="bg-white rounded-3xl shadow-md p-8">
                <h3 className="font-serif font-semibold text-2xl text-slate-900 mb-6">
                  Informații Contact
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Email</div>
                      <a href="mailto:contact@birouarhitect.ro" className="text-slate-900 font-medium hover:text-blue-600">
                        contact@birouarhitect.ro
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Locație</div>
                      <div className="text-slate-900 font-medium">
                        Cluj-Napoca, România
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Program</div>
                      <div className="text-slate-900 font-medium">
                        Luni - Vineri: 9:00 - 18:00
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Card */}
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl shadow-md p-8 text-white">
                <h3 className="font-serif font-semibold text-2xl mb-4">
                  Urmărește-ne
                </h3>
                <p className="text-slate-300 mb-6">
                  Rămâi la curent cu cele mai recente articole și proiecte de arhitectură
                </p>
                <div className="flex gap-3">
                  {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                      aria-label={social}
                    >
                      <span className="text-xl">
                        {social === 'Facebook' && '📘'}
                        {social === 'Instagram' && '📸'}
                        {social === 'LinkedIn' && '💼'}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ Hint */}
              <div className="bg-blue-50 rounded-3xl p-6 border-2 border-blue-100">
                <div className="text-3xl mb-3">💡</div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  Ai o întrebare rapidă?
                </h4>
                <p className="text-sm text-slate-600 mb-4">
                  Verifică secțiunea FAQ pentru răspunsuri la cele mai frecvente întrebări
                </p>
                <a href="/faq" className="text-blue-600 font-medium text-sm hover:text-blue-700">
                  Citește FAQ →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
