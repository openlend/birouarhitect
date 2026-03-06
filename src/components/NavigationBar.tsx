"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navigationLinks = [
  { href: '/', label: 'Acasă' },
  { href: '/directory', label: 'Director' },
  { href: '/news', label: 'Articole' },
  { href: '/about', label: 'Despre' },
  { href: '/contact', label: 'Contact' },
];

export default function NavigationBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-white/40'
          : 'bg-white/60 backdrop-blur-lg'
      }`}
    >
      <div className="container-premium">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white font-serif font-bold text-xl">BA</span>
            </div>
            <span className="font-serif font-semibold text-xl text-slate-900 hidden sm:block">
              BirouArhitect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium transition-colors ${
                    isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {isActive && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-slate-900" />}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Consultanță Rapidă
            </Link>
            <Link href="/submit" className="btn-premium btn-premium-primary text-sm">
              Adaugă Biroul Tău
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="Deschide meniul"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden origin-top transition-all duration-200 ${
          isMobileOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-slate-200 bg-white shadow-xl">
          <div className="flex flex-col divide-y divide-slate-100">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`px-6 py-4 text-base font-medium transition-colors ${
                    isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="px-6 py-4 flex flex-col gap-3">
              <Link
                href="/submit"
                onClick={() => setIsMobileOpen(false)}
                className="btn-premium btn-premium-primary w-full justify-center"
              >
                Adaugă Biroul Tău
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="btn-premium btn-premium-outline w-full justify-center"
              >
                Consultanță Rapidă
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
