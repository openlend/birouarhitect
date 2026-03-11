/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Casă Monolitică din Beton by S-AR în Mexic - Arhitectură Rezidențială Minimalistă | BirouArhitect.ro',
  description: 'Explorează Casa în Santiago by S-AR - o rezidență de weekend monolitică din beton în Villa de Santiago, Mexic. Design minimalist, patioUri interioare și integrare cu peisajul muntos.',
  keywords: 'arhitectură beton, casă minimalistă, arhitectură Mexico, S-AR arhitecți, design rezidențial, arhitectură contemporană, casă beton, arhitectură monolitică, patio interior',
  openGraph: {
    title: 'Casă Monolitică din Beton by S-AR în Mexic - Arhitectură Minimalistă',
    description: 'Rezidență de weekend în beton și piatră locală în Villa de Santiago, Mexic',
    type: 'article',
    publishedTime: '2026-02-24T07:00:00Z',
    authors: ['BirouArhitect.ro'],
  }
}

export default function CasaBetonMexicArticle() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[600px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80"
          alt="Casă modernă din beton în peisaj muntos"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title & Meta */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Casa în Santiago by S-AR: Arhitectură Monolitică din Beton în Peisajul Muntos al Mexicului
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <time dateTime="2026-02-24">24 februarie 2026</time>
          <span>•</span>
          <span>Arhitectură Rezidențială</span>
          <span>•</span>
          <span>7 min citire</span>
        </div>
      </header>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          <strong>Cum creezi o rezidență de weekend care dialoghează cu peisajul muntos fără să îl domine?</strong> 
          Arhitecții de la <strong>S-AR (Stación Arquitectura)</strong> din Mexico City și Monterrey răspund prin 
          <strong>Casa în Santiago</strong> — o structură monolitică din beton armat învăluit în piatră locală, situată 
          în orașul colonial Villa de Santiago, la 37 km de Monterrey. Proiectul reinterpretează limbajul arhitectural 
          rural regional printr-o expresie contemporană minimalistă.
        </p>

        {/* Context Section */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Context: Villa de Santiago și Arhitectura Weekendului în Mexic
        </h2>
        
        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1626126525134-fbbc07afb32c?w=1600&q=80"
            alt="Peisaj muntos Sierra Madre Oriental"
            fill
            className="object-cover"
          />
        </div>

        <p>
          <strong>Villa de Santiago</strong> se află la poalele Sierra Madre Oriental, o zonă renumită pentru râuri, 
          cascade și păduri care atrag vizitatori pentru canyoning, escaladă și trekking. Orașul funcționează ca 
          <strong>portal către natura sălbatică</strong>, iar tradiția locală de cottages și case de weekend integrate 
          în peisaj este profund înrădăcinată.
        </p>

        <p>
          Situl ales are <strong>vederi directe către munții înconjurători</strong>, permițând proiectului să continue 
          tipologia rurală locală a caselor de vacanță încorporate în natură. Arhitectura regională este definită de 
          <strong>ziduri groase din piatră și fațade muete</strong> — un limbaj pe care S-AR îl extinde prin interpretare 
          contemporană.
        </p>

        {/* Concept Section */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Conceptul Arhitectural: Monolitul ca Protecție și Deschidere
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Principiul dual</h3>
          <p className="text-gray-700">
            <strong>Închidere către stradă, deschidere către peisaj și patio interior</strong> — casa funcționează ca 
            o fortăreață discretă care se revelează doar celor care intră.
          </p>
        </div>

        <p>
          De la stradă, casa se prezintă prin <strong>un zid mare din piatră locală care protejează ariile private</strong>. 
          Fațada frontală rămâne în mare parte închisă, cu doar ușile punctând suprafața. Această strategie urmează 
          tradiția zidurilor durabile din adobe și zidărie care încă definesc zona.
        </p>

        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=80"
            alt="Zid exterior din piatră minimalist"
            fill
            className="object-cover"
          />
        </div>

        <p>
          În spatele acestui exterior protector, <strong>S-AR organizează spațiul în jurul unui patio central generos</strong>. 
          O închidere din grilaj metalic separă ariile private de cele sociale, menținând în același timp continuitatea 
          vizuală către curtea interioară. Programul public se deschide către grădină prin intermediul unei terase acoperite 
          care extinde viața zilnică în aer liber.
        </p>

        {/* Structure & Materials Section */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Structură și Materialitate: Betonul ca Sistem Unificat
        </h2>

        <p>
          Casa este formată în principal din <strong>elemente de beton armat</strong>. Pereți, console, planșee și acoperiș 
          se contopesc într-un sistem structural și material singular. Finisajul relevă diferite explorări în execuția 
          betonului, permițând texturi și variații subtile să se înregistreze pe suprafețe.
        </p>

        <ul className="list-disc pl-6 my-6 space-y-3">
          <li>
            <strong>Beton turnat aparent</strong> — suprafețe brutale care arată procesul de construcție
          </li>
          <li>
            <strong>Variații de textură</strong> — diferite tehnici de cofraj creează relief subtil
          </li>
          <li>
            <strong>Un singur stâlp metalic</strong> — întrerupe masa monolitică, marcând o inflexiune structurală și 
            amintind subtil de oțelul înglobat în cadrul de beton
          </li>
          <li>
            <strong>Piatră locală</strong> — pentru anvelopa exterioară, echoul zidurilor tradiționale
          </li>
        </ul>

        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
            alt="Detaliu textură beton aparent"
            fill
            className="object-cover"
          />
        </div>

        <p>
          Pe măsură ce lumina zilei se schimbă, <strong>umbrele se deplasează peste linii, grid-uri, plane, piatră, lemn, 
          oțel și ceramică</strong> — creând o experiență spațială dinamică bazată pe temporalitate naturală.
        </p>

        {/* Spatial Organization */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Organizare Spațială: Axă de Servicii și Transparențe Stratificate
        </h2>

        <p>
          Intern, <strong>planul este împărțit de un nucleu de servicii care acționează ca axă</strong> între domeniile 
          publice și private. Pereții despărțitori din sticlă și patioUri deschise dizolvă granițele stricte, generând 
          transparențe stratificate.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Zona Publică</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Living deschis către patio central</li>
              <li>✓ Bucătărie integrată</li>
              <li>✓ Terasă acoperită extinsă</li>
              <li>✓ Zonă piscină + grill pentru întâlniri weekend</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Zona Privată</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Dormitoare cu deschideri controlate</li>
              <li>✓ Băi cu lumină zenitală</li>
              <li>✓ Spații de retragere individuală</li>
              <li>✓ Acces direct la terasă pe acoperiș</li>
            </ul>
          </div>
        </div>

        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1600&q=80"
            alt="Interior minimalist cu patio central"
            fill
            className="object-cover"
          />
        </div>

        <p>
          Spațiile se <strong>extind și contractă prin deschideri controlate</strong>, înrămând fragmente de cer, vegetație 
          și munți îndepărtați. Această strategie de "vederi înrămate" creează o relație selectivă cu peisajul, evitând 
          expunerea totală în favoarea unei experiențe mai curate.
        </p>

        {/* Circulation & Rooftop */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Circulație Verticală: Ascensiunea către Peisaj
        </h2>

        <p>
          Circulația este articulată prin <strong>o scară spiralată și o rampă</strong> care urcă din puncte diferite ale 
          casei către terasa de pe acoperiș. Această platformă superioară devine <strong>momentul spațial culminant</strong>.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Terasa de pe acoperiș</h3>
          <p className="text-gray-700">
            De aici, <strong>munții apropiate domină orizontul</strong>, încurajând pauza și observația. Ascensiunea 
            întărește o mișcare continuă între interior și exterior, casă și peisaj, utilizator și împrejurimi.
          </p>
        </div>

        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1600&q=80"
            alt="Vedere panoramică munți din terasă"
            fill
            className="object-cover"
          />
        </div>

        <p>
          Această <strong>strategie de ascensiune graduală</strong> transformă experiența arhitecturală într-o călătorie — 
          de la închiderea protectoare a străzii, prin intimitatea patioului central, până la deschiderea panoramică a 
          terasei de pe acoperiș.
        </p>

        {/* Lessons for Romanian Context */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Lecții pentru Arhitectura Rezidențială Românească
        </h2>

        <p>
          Deși proiectul este situat în context mexican, principiile sale sunt aplicabile în <strong>zone montane 
          românești</strong> (Carpați, Apuseni, Delta Dunării):
        </p>

        <ul className="list-disc pl-6 my-6 space-y-3">
          <li>
            <strong>Închidere strategică către stradă</strong> — protecție vizuală și termică fără a crea arhitectură 
            ostilă
          </li>
          <li>
            <strong>Patiourile ca nucleu termic</strong> — în climat românesc, patiourile interioare pot funcționa ca 
            zone tampon termic
          </li>
          <li>
            <strong>Materialitatea locală</strong> — piatră din cariere locale, beton turnat cu agregate regionale
          </li>
          <li>
            <strong>Relația selectivă cu peisajul</strong> — în loc de ferestre panoramice care pierd energie, vederi 
            înrămate strategice
          </li>
          <li>
            <strong>Arhitectură de weekend integrată</strong> — în zone precum Valea Prahovei sau Bran, modelul este 
            direct aplicabil
          </li>
        </ul>

        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1464146072230-91cabc968266?w=1600&q=80"
            alt="Peisaj muntos Carpați România"
            fill
            className="object-cover"
          />
        </div>

        {/* Technical Performance */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Performanță Tehnică și Climatică
        </h2>

        <p>
          Deși proiectul nu se promovează ca "verde" sau "sustenabil", <strong>strategiile pasive sunt integrate organic</strong>:
        </p>

        <ul className="list-disc pl-6 my-6 space-y-3">
          <li>
            <strong>Masa termică a betonului</strong> — stabilizează temperaturile interioare în variații zilnice mari
          </li>
          <li>
            <strong>Patiourile ca sistem de ventilație naturală</strong> — efectul coș de fum pentru circulație aer
          </li>
          <li>
            <strong>Terase acoperite</strong> — protecție solară fără a bloca complet lumina naturală
          </li>
          <li>
            <strong>Orientare strategică a deschiderilor</strong> — maximizare vederi, minimizare câștig solar excesiv
          </li>
        </ul>

        <p>
          Această abordare demonstrează că <strong>arhitectura bună este sustenabilă prin design, nu prin etichete</strong>.
        </p>

        {/* S-AR Studio Profile */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Despre S-AR (Stación Arquitectura)
        </h2>

        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"
            alt="Studio arhitectură modern"
            fill
            className="object-cover"
          />
        </div>

        <p>
          <strong>S-AR</strong> este un studio de arhitectură cu sedii în Mexico City și Monterrey, cunoscut pentru 
          abordarea sa minimalistă și atenția la materialitate. Proiectele lor explorează <strong>relația dintre masă, 
          vid și lumină</strong>, adesea în contexte rezidențiale și culturale.
        </p>

        <p>
          Filosofia studioului se bazează pe <strong>simplitatea expresiei și onestitatea materială</strong> — principii 
          clar evidente în Casa în Santiago. Arhitecții evită decorațiile false și se concentrează pe calități spațiale 
          esențiale.
        </p>

        {/* Conclusion */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Concluzie: Arhitectură Monolitică ca Meditație asupra Locuirii
        </h2>

        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1600&q=80"
            alt="Casă modernă beton în peisaj la apus"
            fill
            className="object-cover"
          />
        </div>

        <p>
          <strong>Casa în Santiago by S-AR</strong> nu este o declarație arhitecturală zgomotoasă, ci o <strong>meditație 
          liniștită asupra locuirii în peisaj</strong>. Prin închidere strategică și deschidere selectivă, prin materialitate 
          onestă și spațialitate stratificată, proiectul demonstrează că arhitectura rezidențială de calitate nu necesită 
          gesturi spectaculoase.
        </p>

        <p>
          Pentru arhitecți și clienți din România care caută <strong>inspirație pentru case de weekend în zone montane</strong>, 
          acest proiect oferă un model pragmatic: arhitectură care respectă contextul fără a copia stiluri tradiționale, 
          care se integrează fără a se șterge, care protejează fără a izola.
        </p>

        <p className="text-lg font-semibold mt-8">
          În era arhitecturii instagramabile, Casa în Santiago ne amintește că <strong>calitatea spațială autentică depășește 
          trendul vizual</strong>.
        </p>

        {/* Call to Action */}
        <div className="bg-gray-100 rounded-lg p-8 my-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Visezi o casă de weekend minimalistă în peisajul românesc?
          </h3>
          <p className="text-gray-700 mb-6">
            Echipa noastră de arhitecți poate transforma viziunea ta într-un proiect care dialoghează autentic cu natura 
            înconjurătoare, folosind materialitate locală și design sustenabil.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Începe proiectul tău
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
                  alt="Arhitectură minimalistă"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                Arhitectură Minimalistă: Principii și Aplicații în Context Românesc
              </h4>
            </Link>
            <Link href="/articole" className="block group">
              <div className="relative h-48 mb-3 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
                  alt="Materiale naturale arhitectură"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                Beton și Piatră: Ghid de Materiale pentru Case Contemporane
              </h4>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
          <p>
            <strong>Surse:</strong> Designboom, S-AR Official Website
          </p>
          <p className="mt-2">
            <strong>Imagini:</strong> Unsplash (licență liberă pentru uz comercial)
          </p>
          <p className="mt-2">
            <strong>Proiect:</strong> Casa în Santiago, Villa de Santiago, Nuevo León, Mexic | Arhitect: S-AR (Stación Arquitectura)
          </p>
          <p className="mt-4">
            Articol publicat pe BirouArhitect.ro | Ultimă actualizare: 24 februarie 2026
          </p>
        </div>
      </div>
    </article>
  )
}
