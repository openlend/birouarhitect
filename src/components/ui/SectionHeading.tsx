'use client';

import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  kicker?: ReactNode;
  className?: string;
}

const alignmentMap = {
  left: 'text-left items-start',
  center: 'text-center items-center',
  right: 'text-right items-end ml-auto',
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  kicker,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={[
      'flex flex-col gap-3',
      alignmentMap[align],
      className,
    ]
      .filter(Boolean)
      .join(' ')}>
      {eyebrow && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
          {eyebrow}
        </p>
      )}
      <div className="space-y-3">
        <h2 className="font-serif text-3xl leading-snug text-slate-900 sm:text-4xl">
          {title}
        </h2>
        {description && <p className="max-w-3xl text-base text-slate-600">{description}</p>}
      </div>
      {kicker}
    </div>
  );
}
