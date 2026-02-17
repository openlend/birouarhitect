'use client';

import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  overlay?: boolean;
  height?: 'full' | 'large' | 'medium';
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = 'Explorează',
  ctaHref = '/directory',
  backgroundImage,
  overlay = true,
  height = 'full',
}: HeroProps) {
  const heightClasses = {
    full: 'min-h-screen',
    large: 'min-h-[80vh]',
    medium: 'min-h-[60vh]',
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-blue-900/50" />
          )}
        </>
      )}
      
      {/* No Background - Gradient */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100" />
      )}

      {/* Content */}
      <div className="container-premium relative z-10 text-center px-4">
        <div>
          {subtitle && (
            <p
              className={`text-sm md:text-base font-medium tracking-wider uppercase mb-4 ${
                backgroundImage ? 'text-blue-300' : 'text-blue-600'
              }`}
            >
              {subtitle}
            </p>
          )}

          <h1
            className={`font-serif font-bold mb-6 ${
              backgroundImage ? 'text-white' : 'text-slate-900'
            } text-balance`}
          >
            {title}
          </h1>

          {description && (
            <p
              className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 ${
                backgroundImage ? 'text-slate-200' : 'text-slate-600'
              }`}
            >
              {description}
            </p>
          )}

          {ctaText && ctaHref && (
            <div>
              <Link
                href={ctaHref}
                className={`btn-premium ${
                  backgroundImage ? 'btn-premium-primary' : 'btn-premium-primary'
                } inline-flex items-center space-x-2`}
              >
                <span>{ctaText}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>

        {/* Scroll Indicator */}
        {height === 'full' && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <svg
              className={`w-6 h-6 ${backgroundImage ? 'text-white' : 'text-slate-900'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        )}
      </div>
    </section>
  );
}
