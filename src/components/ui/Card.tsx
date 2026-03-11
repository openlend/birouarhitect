'use client';

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type CardPadding = 'none' | 'sm' | 'md' | 'lg';
type CardVariant = 'default' | 'muted' | 'tinted';

type CardProps<T extends ElementType> = {
  as?: T;
  padding?: CardPadding;
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

const paddingClasses: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-white border-slate-100 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.45)]',
  muted: 'bg-slate-50 border-slate-100 shadow-none',
  tinted: 'bg-white/80 border-white/50 shadow-lg backdrop-blur',
};

export default function Card<T extends ElementType = 'div'>({
  as,
  padding = 'md',
  variant = 'default',
  children,
  className = '',
  ...rest
}: CardProps<T>) {
  const Component = (as ?? 'div') as ElementType;

  return (
    <Component
      className={[
        'rounded-3xl border transition-all duration-200',
        paddingClasses[padding],
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </Component>
  );
}
