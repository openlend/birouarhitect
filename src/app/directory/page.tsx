import { Suspense } from 'react';
import DirectoryClient from './DirectoryClient';

export default function DirectoryPage() {
  return (
    <Suspense fallback={<div className="container-premium py-16 text-center text-slate-500">Se încarcă directorul…</div>}>
      <DirectoryClient />
    </Suspense>
  );
}
