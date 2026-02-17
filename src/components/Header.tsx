"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="text-2xl">🏛️</span>
            <span className="text-xl font-bold text-gray-900">
              BirouArhitect<span className="text-blue-600">.ro</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all">Acasă</Link>
            <Link href="/directory" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all">Director</Link>
            <Link href="/news" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all">Știri</Link>
            <Link href="/about" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all">Despre</Link>
            <Link href="/contact" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all">Contact</Link>
            <Link href="/submit" className="ml-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md">Adaugă Birou</Link>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl p-2">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4 flex flex-col gap-2 animate-in slide-in-from-top">
            <Link href="/" className="px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 font-medium" onClick={() => setMenuOpen(false)}>Acasă</Link>
            <Link href="/directory" className="px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 font-medium" onClick={() => setMenuOpen(false)}>Director</Link>
            <Link href="/news" className="px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 font-medium" onClick={() => setMenuOpen(false)}>Știri</Link>
            <Link href="/about" className="px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 font-medium" onClick={() => setMenuOpen(false)}>Despre</Link>
            <Link href="/contact" className="px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 font-medium" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link href="/submit" className="px-4 py-3 bg-blue-600 text-white rounded-lg text-center font-semibold" onClick={() => setMenuOpen(false)}>Adaugă Birou</Link>
          </div>
        )}
      </div>
    </header>
  );
}