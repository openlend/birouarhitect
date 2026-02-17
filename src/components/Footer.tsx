import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">🏛️ BirouArhitect.ro</h4>
            <p className="text-sm leading-relaxed">Cel mai mare director de birouri de arhitectură din România. Conectăm clienții cu arhitecții potriviți.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Linkuri Utile</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/directory" className="text-sm hover:text-white transition-colors">Director</Link>
              <Link href="/news" className="text-sm hover:text-white transition-colors">Știri</Link>
              <Link href="/about" className="text-sm hover:text-white transition-colors">Despre Noi</Link>
              <Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Categorii</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/directory?cat=rezidential" className="text-sm hover:text-white transition-colors">🏠 Rezidențial</Link>
              <Link href="/directory?cat=comercial" className="text-sm hover:text-white transition-colors">🏢 Comercial</Link>
              <Link href="/directory?cat=industrial" className="text-sm hover:text-white transition-colors">🏭 Industrial</Link>
              <Link href="/directory?cat=design-interior" className="text-sm hover:text-white transition-colors">🎨 Design Interior</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <p>📧 contact@birouarhitect.ro</p>
              <p>📍 Cluj-Napoca, România</p>
              <p>🕐 Luni - Vineri: 9-18</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm">
          © {new Date().getFullYear()} BirouArhitect.ro — Toate drepturile rezervate
        </div>
      </div>
    </footer>
  );
}