'use client';

import { useSearchParams } from 'next/navigation';
import LeaderboardClient from './LeaderboardClient';

export default function LeaderboardWrapper() {
  const searchParams = useSearchParams();
  const tab = (searchParams?.get('tab') as 'all' | 'simple' | 'AI') || 'all';
  
  return <LeaderboardClient initialTab={tab} />;
}
