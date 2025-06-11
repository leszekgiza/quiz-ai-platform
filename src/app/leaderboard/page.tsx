import { Suspense } from 'react';
import LeaderboardWrapper from '@/components/leaderboard/LeaderboardWrapper';

export default function LeaderboardPage() {
  return (
    <Suspense fallback={
      <div className="max-w-4xl mx-auto p-6 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Ładowanie rankingu...</p>
      </div>
    }>
      <LeaderboardWrapper />
    </Suspense>
  );
}
