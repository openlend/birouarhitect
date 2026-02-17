'use client';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  showLine?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'left',
  showLine = true,
}: SectionTitleProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const lineClasses = {
    left: 'mr-auto',
    center: 'mx-auto',
    right: 'ml-auto',
  };

  return (
    <div className={`max-w-3xl mb-12 ${alignClasses[align]}`}>
      {subtitle && (
        <p className="text-blue-600 font-medium uppercase tracking-wider text-sm mb-3">
          {subtitle}
        </p>
      )}
      
      <h2 className="font-serif font-bold text-slate-900 mb-4">
        {title}
      </h2>

      {showLine && (
        <div className={`w-20 h-1 bg-gradient-to-r from-blue-600 to-slate-900 ${lineClasses[align]}`} />
      )}
    </div>
  );
}
