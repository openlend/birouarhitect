import { Suspense } from 'react';
import DirectoryPage from '../directory/page';

export default function ArhitectiPage() {
  return (
    <Suspense fallback={<div className="container-premium py-16 text-center text-slate-500">Se încarcă directorul…</div>}>
      <DirectoryPage />
    </Suspense>
  );
}
