'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300"
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
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-slate-900" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/submit"
            className="hidden md:block btn-premium btn-premium-primary text-sm"
          >
            Adaugă Biroul Tău
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
