'use client';

interface Stat {
  label: string;
  value: string;
  helper?: string;
}

interface StatPillsProps {
  stats: Stat[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function StatPills({ stats, columns = 3, className = '' }: StatPillsProps) {
  const gridMap: Record<typeof columns, string> = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  };

  return (
    <div
      className={[
        'grid gap-3 sm:grid-cols-2',
        gridMap[columns],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-100 bg-white px-4 py-5 shadow-[0_12px_30px_-25px_rgba(15,23,42,0.65)]"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
            {stat.label}
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{stat.value}</p>
          {stat.helper && <p className="text-sm text-slate-500">{stat.helper}</p>}
        </div>
      ))}
    </div>
  );
}
