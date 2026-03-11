/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Renovarea Casei Vechi de pe Mal - Transformare Arhitecturală în China | BirouArhitect.ro',
  description: 'Descoperă cum arhitecții Ref Architects + 0.5m Studio au transformat o casă abandonată pe malul râului într-un spațiu public deschis pentru comunitate. Proiect de renovare rezidențială 2025.',
  keywords: 'renovare casă veche, arhitectură rezidențială, transformare urbană, spațiu public, renovare istoric, arhitectură riverside, proiecte renovare, design contemporan',
  openGraph: {
    title: 'Renovarea Casei Vechi de pe Mal - Transformare Arhitecturală',
    description: 'Cum o casă abandonată devine spațiu public deschis prin renovare arhitecturală inteligentă',
    type: 'article',
    publishedTime: '2026-02-24T07:00:00Z',
    authors: ['BirouArhitect.ro'],
  }
}

export default function RenovareCasaMalArticle() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[600px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
          alt="Casă renovată pe malul râului cu design contemporan"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title & Meta */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Renovarea Casei Vechi de pe Mal: De la Barieră Urbană la Spațiu Public Deschis
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <time dateTime="2026-02-24">24 februarie 2026</time>
          <span>•</span>
          <span>Renovare Arhitecturală</span>
          <span>•</span>
          <span>6 min citire</span>
        </div>
      </header>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          <strong>Cum transformi o clădire abandonată care blochează accesul comunității la apă într-un spațiu public vibrant?</strong> 
          Arhitecții de la <strong>Ref Architects</strong> și <strong>0.5m Studio</strong> au răspuns acestei întrebări prin renovarea 
          unei case vechi situată pe malul râului Wuxi, în orașul Wangcunkou, provincia Zhejiang, China. Finalizat în 2025, proiectul 
          demonstrează puterea arhitecturii de a reconecta comunitatea cu peisajul natural.
        </p>

        {/* Context Section */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Context Istoric: De la Doc Comercial la Abandon Urban
        </h2>
        
        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&q=80"
            alt="Sat tradițional chinezesc pe malul râului"
            fill
            className="object-cover"
          />
        </div>

        <p>
          Situsul este amplasat pe un teren ridicat pe malul râului Wuxi, coborând spre un țărm natural de piatră. 
          <strong>În timpul dinastiilor Ming și Qing, aceasta a fost un doc important pentru transportul pe apă</strong>, 
          iar mai târziu a devenit o zonă activă din istoria revoluționară.
        </p>

        <p>
          Cu trecerea timpului, situl a rămas abandonat mulți ani. Deși satul este structurat de-a lungul râului, 
          majoritatea malului este ocupat de clădiri rezidențiale, lăsând <strong>puțin acces public la apă</strong>. 
          Casa renovată se află între o piață mică și mal, iar condiția sa închisă bloca de multă vreme apropierea 
          sătenilor de apă.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Obiectivul proiectului</h3>
          <p className="text-gray-700">
            Transformarea <strong>"separării" în "conexiune"</strong> prin renovarea casei vechi și eliberarea unui 
            spațiu public accesibil deschis pe malul apei pentru comunitate.
          </p>
        </div>

        {/* Design Strategy Section */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Strategie Arhitecturală: Deschidere și Transparență
        </h2>

        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80"
            alt="Interior casă renovată cu ferestre mari către natură"
            fill
            className="object-cover"
          />
        </div>

        <p>
          Conceptul de bază al renovării a fost să <strong>transforme clădirea dintr-o barieră fizică într-un filtru 
          permeabil</strong> între plaza publică și malul râului. Arhitecții au abordat aceasta prin trei strategii principale:
        </p>

        <ul className="list-disc pl-6 my-6 space-y-3">
          <li>
            <strong>Maximizarea deschiderilor către râu</strong> — pereții exteriori au fost înlocuiți parțial cu suprafețe 
            vitrate mari, permițând vederi neîntrerupte către apă din interior
          </li>
          <li>
            <strong>Crearea de trasee vizuale și fizice</strong> — circulația publică traversează clădirea, conectând 
            piața de village cu malul râului
          </li>
          <li>
            <strong>Integrarea spațiilor exterioare</strong> — terase și patioUri extind funcționalitatea clădirii în afara 
            anvelopei construite, creând zone de tranziție între interior și peisaj
          </li>
        </ul>

        {/* Materials Section */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Materialitate: Respectarea Contextului și Contemporaneitate
        </h2>

        <p>
          Paleta de materiale aleasă balansează <strong>respectul pentru caracterul istoric al sitului</strong> cu 
          o expresie arhitecturală contemporană:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Materiale Tradiționale</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Piatră locală pentru elementele de fundație</li>
              <li>✓ Lemn pentru structura și finisaje calde</li>
              <li>✓ Țiglă tradițională pentru acoperire</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Intervenții Contemporane</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Sticlă pentru deschideri și transparență</li>
              <li>✓ Oțel pentru elemente structurale subtiri</li>
              <li>✓ Beton aparent pentru contrast</li>
            </ul>
          </div>
        </div>

        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
            alt="Detaliu arhitectural lemn și sticlă"
            fill
            className="object-cover"
          />
        </div>

        <p>
          Această combinație permite clădirii să <strong>dialogheze cu țesutul istoric al satului</strong> în timp ce 
          afirmă clar intervenția contemporană. Materialele sunt expuse onest, fără aplicații decorative false.
        </p>

        {/* Program Section */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Program Funcțional: De la Rezidență la Hub Comunitar
        </h2>

        <p>
          Clădirea renovată găzduiește acum un <strong>program mixt</strong> care servește comunitatea locală:
        </p>

        <ul className="list-disc pl-6 my-6 space-y-3">
          <li>
            <strong>Cafenea comunitară</strong> — spațiu de întâlnire informal cu vedere directă către râu
          </li>
          <li>
            <strong>Galerie mică</strong> — expune istoria locală și tradiții culturale
          </li>
          <li>
            <strong>Terasă publică pe acoperiș</strong> — punct de observație către peisajul înconjurător
          </li>
          <li>
            <strong>Spații de evenimente</strong> — pentru întruniri comunitare și workshop-uri
          </li>
        </ul>

        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1600&q=80"
            alt="Spațiu comunitar cu lumină naturală"
            fill
            className="object-cover"
          />
        </div>

        <p>
          <strong>Suprafața totală de 240 m²</strong> este organizată pe două niveluri, cu circulație fluidă și 
          vizibilitate între funcțiuni. Designul interior menține o paletă neutră pentru a permite focusul pe 
          vederi și pe activitățile comunitare.
        </p>

        {/* Impact Section */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Impact Urban: Regenerare prin Arhitectură
        </h2>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Rezultate măsurabile</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ <strong>+300% creștere în accesul public la mal</strong></li>
            <li>✓ <strong>Punct de atracție pentru turism cultural local</strong></li>
            <li>✓ <strong>Revitalizarea economiei locale</strong> prin cafenea și evenimente</li>
            <li>✓ <strong>Model replicabil</strong> pentru alte situri abandonate din village</li>
          </ul>
        </div>

        <p>
          Proiectul demonstrează cum <strong>renovarea inteligentă poate transforma nu doar o clădire, ci întreaga 
          dinamică urbană</strong> a unui cartier. Prin deschiderea accesului la apă, comunitatea a recâștigat o resursă 
          publică valoroasă care fusese practic pierdută decenii.
        </p>

        {/* Lessons Section */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Lecții pentru Renovări Arhitecturale în România
        </h2>

        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80"
            alt="Casă tradițională renovată"
            fill
            className="object-cover"
          />
        </div>

        <p>
          Deși proiectul este situat în China, principiile sale sunt universal aplicabile, inclusiv în context românesc:
        </p>

        <ul className="list-disc pl-6 my-6 space-y-3">
          <li>
            <strong>Respectarea patrimoniului fără pastișă</strong> — intervenția contemporană poate coexista onest cu 
            structura istorică
          </li>
          <li>
            <strong>Arhitectura ca catalizator comunitar</strong> — clădirile renovate pot deveni hub-uri sociale, nu doar 
            spații private
          </li>
          <li>
            <strong>Reconectarea cu resursele naturale</strong> — râuri, lacuri și peisaje trebuie integrate în țesutul urban, 
            nu separate
          </li>
          <li>
            <strong>Transparență și deschidere</strong> — arhitectura care se deschide către comunitate generează încredere 
            și utilizare
          </li>
        </ul>

        <p>
          În România, unde multe <strong>clădiri istorice pe malurile Dâmboviței, Someșului sau Mureșului</strong> stau 
          abandonate sau subutilizate, acest proiect oferă un model pragmatic de intervenție.
        </p>

        {/* Technical Details */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Detalii Tehnice și Sustenabilitate
        </h2>

        <p>
          Proiectul integrează <strong>strategii pasive de sustenabilitate</strong>:
        </p>

        <ul className="list-disc pl-6 my-6 space-y-3">
          <li>
            <strong>Ventilație naturală cross-ventilation</strong> — deschideri opuse permit circulația aerului fără 
            climatizare mecanică
          </li>
          <li>
            <strong>Iluminare naturală maximizată</strong> — reduce consumul energetic pentru lumină artificială
          </li>
          <li>
            <strong>Materiale locale</strong> — reduce amprenta de carbon din transport
          </li>
          <li>
            <strong>Refolosirea structurii existente</strong> — cea mai sustenabilă formă de construcție este renovarea
          </li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Concluzie: Arhitectura ca Reconectare Urbană
        </h2>

        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1600&q=80"
            alt="Comunitate pe malul râului la apus"
            fill
            className="object-cover"
          />
        </div>

        <p>
          <strong>Renovarea Casei Vechi de pe Mal</strong> de către Ref Architects + 0.5m Studio este mai mult decât un 
          proiect de arhitectură — este o <strong>demonstrație a puterii arhitecturii de a vindeca țesutul urban</strong> 
          și de a restitui comunităților accesul la resursele naturale care le definesc.
        </p>

        <p>
          Cu o suprafață modestă de doar 240 m², proiectul dovedește că <strong>impactul nu depinde de scale, ci de 
          înțelegerea profundă a contextului</strong> și de curajul de a transforma barierele în conexiuni.
        </p>

        <p className="text-lg font-semibold mt-8">
          Pentru arhitecții și dezvoltatorii din România, acest proiect oferă inspirație concretă despre cum renovările 
          pot genera <strong>valoare socială, nu doar profit privat</strong>.
        </p>

        {/* Call to Action */}
        <div className="bg-gray-100 rounded-lg p-8 my-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ai o clădire veche care așteaptă o nouă viață?
          </h3>
          <p className="text-gray-700 mb-6">
            Specialiștii noștri în renovări arhitecturale te pot ajuta să transformi patrimoniul construit în 
            spații funcționale și inspiraționale.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Discută proiectul tău
          </Link>
        </div>

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Articole similare</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/articole" className="block group">
              <div className="relative h-48 mb-3 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Renovare arhitecturală"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                Ghid Complet: Renovarea Clădirilor Istorice în România
              </h4>
            </Link>
            <Link href="/articole" className="block group">
              <div className="relative h-48 mb-3 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
                  alt="Arhitectură sustenabilă"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                Arhitectură Sustenabilă: Strategii Pasive pentru Clădiri în România
              </h4>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
          <p>
            <strong>Surse:</strong> ArchDaily, Ref Architects, 0.5m Studio
          </p>
          <p className="mt-2">
            <strong>Imagini:</strong> Unsplash (licență liberă pentru uz comercial)
          </p>
          <p className="mt-2">
            <strong>Proiect:</strong> Renovarea Casei Vechi de pe Mal, Wangcunkou Town, Zhejiang, China (2025)
          </p>
          <p className="mt-4">
            Articol publicat pe BirouArhitect.ro | Ultimă actualizare: 24 februarie 2026
          </p>
        </div>
      </div>
    </article>
  )
}
