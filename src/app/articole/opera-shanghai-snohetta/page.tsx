import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Opera din Shanghai by Snøhetta - Arhitectură Monumentală în China | BirouArhitect.ro',
  description: 'Descoperă Opera din Shanghai, proiectată de Snøhetta - o operă de arhitectură cu acoperiș helicoidal spiralat, 3 săli de spectacol și spații publice integrate. Deschidere în 2026.',
  keywords: 'Opera Shanghai, Snøhetta arhitectură, arhitectură culturală, proiecte internationale arhitectură, săli de spectacol, design monumental, arhitectură contemporană China',
  openGraph: {
    title: 'Opera din Shanghai by Snøhetta - Arhitectură Monumentală în China',
    description: 'Descoperă Opera din Shanghai, proiectată de Snøhetta - o operă de arhitectură cu acoperiș helicoidal spiralat',
    type: 'article',
    publishedTime: '2026-02-24T07:00:00Z',
    authors: ['BirouArhitect.ro'],
  }
}

export default function ShanghaiOperaArticle() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[600px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
          alt="Operă modernă cu arhitectură spiralată"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title & Meta */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Opera din Shanghai by Snøhetta: Arhitectură Monumentală Care Redefinește Spațiul Cultural
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <time dateTime="2026-02-24">24 februarie 2026</time>
          <span>•</span>
          <span>Arhitectură Culturală</span>
          <span>•</span>
          <span>5 min citire</span>
        </div>
      </header>

      {/* Introduction */}
      <div className="ba-article">
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          <strong>Pe malul râului Huangpu din Shanghai, arhitectura contemporană atinge noi culmi prin Opera din Shanghai</strong>, 
          proiectată de renumitul studio norvegian <Link href="https://snohetta.com" target="_blank" className="text-blue-600 hover:underline">Snøhetta</Link>. 
          Programată să se deschidă în semestrul al doilea al anului 2026, această operă de arhitectură monumentală transformă conceptul 
          tradițional al sălii de spectacol într-un spațiu public dinamic, accesibil și integrat în țesutul urban.
        </p>

        {/* Context Section */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Context și Viziune: Opera ca Infrastructură Civică
        </h2>
        
        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=80"
            alt="Zonă urbană riverside Shanghai"
            fill
            className="object-cover"
          />
        </div>

        <p>
          Situată în zona Houtan, un cartier aflat în plină transformare ecologică post-Expo 2010, Opera din Shanghai 
          funcționează ca <strong>ancoră civică principală</strong> într-un plan masterplan cultural mai amplu. Districtul 
          este repozițat cu o agendă low-carbon și ecologică, iar clădirea operei devine punct de referință în conectarea 
          infrastructurii culturale cu spațiul public.
        </p>

        <p>
          Amplasarea strategică pe marginea convexă a râului Huangpu permite crearea unor <strong>coridoare vizuale radiale</strong> 
          între faleză și țesutul urban interior. Arhitectura nu se limitează la funcția de sală de spectacol, ci devine 
          un generator de spațialitate urbană.
        </p>

        {/* Architecture Section */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Arhitectura: Acoperiș Helicoidal ca Platformă Publică
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Conceptul arhitectural cheie</h3>
          <p className="text-gray-700">
            Acopertișul spiralat nu este doar element estetic — este o <strong>suprafață publică accesibilă tot anul</strong>, 
            transformând clădirea într-o extensie a domeniului civic urban.
          </p>
        </div>

        <p>
          Elementul definitiv al proiectului este <strong>acoperișul helicoidal</strong> care înfășoară întregul sit într-un 
          gest continuu. Conceput atât ca închidere, cât și ca suprafață publică accesibilă, acoperișul se extinde dincolo de 
          volumele închise pentru a forma o platformă civică ridicată.
        </p>

        <p>
          O potecă spiralată conduce vizitatorii de la nivelul solului către un <strong>punct de observație panoramic</strong> cu 
          vederi asupra râului Huangpu și skyline-ului orașului. Designul permite accesul public pe tot parcursul anului, transformând 
          acoperișul într-o destinație urbană independentă, unde performanța devine o condiție spațială integrata în oraș.
        </p>

        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&q=80"
            alt="Interior sală de concert modernă"
            fill
            className="object-cover"
          />
        </div>

        {/* Program Section */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Program Funcțional: Trei Săli de Spectacol pentru Diversitate Culturală
        </h2>

        <p>
          Sub acoperiș, opera conține <strong>trei săli de spectacol organizate pentru a susține o gamă largă de programe</strong>:
        </p>

        <ul className="list-disc pl-6 my-6 space-y-3">
          <li>
            <strong>Sala principală (2.000 de locuri)</strong> — destinată operei și producțiilor de amploare, dezvoltată 
            în colaborare cu Nagata Acoustics pentru a îndeplini standardele acustice internaționale
          </li>
          <li>
            <strong>Sala secundară (1.200 de locuri)</strong> — oferă un cadru mai intim pentru spectacole mid-scale
          </li>
          <li>
            <strong>Teatru flexibil (1.000 de locuri)</strong> — permite configurații adaptabile de scenă și așezare a publicului
          </li>
        </ul>

        <p>
          Programul este conceput pentru a găzdui <strong>opera tradițională chineză, concerte simfonice și lucrări experimentale</strong>, 
          extinzând accesul la audiențe diverse și formate de performanță variate.
        </p>

        {/* Interior Design Section */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Design Interior: Materialitate și Experiență Spațială
        </h2>

        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1600&q=80"
            alt="Interior arhitectură curbilinie cu lumină naturală"
            fill
            className="object-cover"
          />
        </div>

        <p>
          Arhitectura interioară extinde limbajul formal stabilit de acoperiș, cu <strong>rute de circulație curbilinii</strong> 
          și volume sculpturale care modelează foyerele publice. Fațadele vitrate extinse introduc lumină naturală adânc în 
          spațiile de lobby, creând atmosfere spațiale în schimbare pe parcursul zilei.
        </p>

        <p>
          Contrastele de materiale definesc și mai mult experiența: <strong>anvelopa exterioară albă este plasată pe fondul 
          interioarelor cu tonuri calde</strong>, unde pardoseala din stejar și lemnul vopsit în nuanțe închise căptușesc 
          auditoriile pentru a susține performanța acustică.
        </p>

        <p>
          Facilitățile adiționale includ restaurante, spații de expoziție, facilități educaționale și săli de proiecție mai mici, 
          poziționând opera ca un <strong>sediu cultural multi-stratificat</strong> integrat în faleză în evoluție a Shanghaiului.
        </p>

        {/* Collaboration Section */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Colaborare Internațională: De la Competiție la Execuție
        </h2>

        <p>
          Opera a fost atribuită inițial lui Snøhetta după o <strong>competiție internațională în 2017</strong> și a fost 
          dezvoltată de atunci de un consorțiu care include:
        </p>

        <ul className="list-disc pl-6 my-6 space-y-2">
          <li><strong>East China Architectural Design & Research Institute (ECADI)</strong></li>
          <li><strong>Theatre Projects</strong> (consultanță spații de spectacol)</li>
          <li><strong>Nagata Acoustics</strong> (consultanță acustică)</li>
        </ul>

        <p>
          Comisionat în 2019, echipa a condus proiectul de la design concept prin execuție, integrând strategii arhitecturale, 
          de peisagistică, interioare și acustice într-un cadru unificat.
        </p>

        {/* Lessons Section */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Lecții pentru Arhitectura Culturală Contemporană
        </h2>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Principii cheie de design</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ <strong>Integrarea infrastructurii culturale cu spațiul public urban</strong></li>
            <li>✓ <strong>Acoperișul ca generator de spațialitate civică accesibilă</strong></li>
            <li>✓ <strong>Program flexibil pentru diversitate culturală</strong></li>
            <li>✓ <strong>Colaborare multidisciplinară pentru performanță integrată</strong></li>
            <li>✓ <strong>Arhitectură care răspunde contextului ecologic și urban</strong></li>
          </ul>
        </div>

        <p>
          Opera din Shanghai demonstrează cum <strong>arhitectura monumentală poate transcende funcția tradițională a sălii de 
          spectacol</strong> pentru a deveni un generator de viață urbană, spațiu public și experiență culturală democratizată. 
          Este o lecție valoroasă pentru orice arhitect care proiectează infrastructură culturală în contextul urban contemporan.
        </p>

        {/* Conclusion */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Concluzie: Arhitectură ca Performanță Urbană
        </h2>

        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1556139954-ec19cce61d61?w=1600&q=80"
            alt="Clădire culturală modernă noaptea"
            fill
            className="object-cover"
          />
        </div>

        <p>
          Cu deschiderea anticipată în a doua jumătate a anului 2026, <strong>Opera din Shanghai by Snøhetta</strong> se 
          poziționează nu doar ca o sală de spectacol, ci ca o <strong>platformă urbană pentru performanță culturală și 
          interacțiune civică</strong>. Arhitectura sa helicoidală, programul multi-funcțional și integrarea cu spațiul 
          public urban stabilesc un nou standard pentru infrastructura culturală contemporană.
        </p>

        <p className="text-lg font-semibold mt-8">
          Pentru arhitecți și pasionați de arhitectură din România, acest proiect oferă inspirație despre cum clădirile 
          culturale pot deveni <strong>catalizatori ai transformării urbane</strong>, nu doar recipiente pentru artă.
        </p>

        {/* Call to Action */}
        <div className="bg-gray-100 rounded-lg p-8 my-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Vrei să afli mai multe despre arhitectură culturală contemporană?
          </h3>
          <p className="text-gray-700 mb-6">
            Explorează proiectele noastre și află cum putem transforma viziunea ta în realitate arhitecturală.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Contactează-ne
          </Link>
        </div>

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Articole similare</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/articole" className="block group">
              <div className="relative h-48 mb-3 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80"
                  alt="Arhitectură modernă"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                Arhitectură Culturală în România
              </h4>
            </Link>
            <Link href="/articole" className="block group">
              <div className="relative h-48 mb-3 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80"
                  alt="Design interior modern"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                Tendințe în Arhitectura Contemporană
              </h4>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
          <p>
            <strong>Surse:</strong> ArchDaily, Snøhetta Official Website
          </p>
          <p className="mt-2">
            <strong>Imagini:</strong> Unsplash (licență liberă pentru uz comercial)
          </p>
          <p className="mt-4">
            Articol publicat pe BirouArhitect.ro | Ultimă actualizare: 24 februarie 2026
          </p>
        </div>
      </div>
    </article>
  )
}
