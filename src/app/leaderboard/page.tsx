'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getTopResults, QuizResult } from '@/lib/supabase';

export default function LeaderboardPage() {
  const [results, setResults] = useState<QuizResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchResults() {
      try {
        const data = await getTopResults(10);
        setResults(data);
        setLoading(false);
      } catch (err) {
        console.error('Błąd podczas pobierania wyników:', err);
        setError('Nie udało się pobrać wyników. Spróbuj ponownie później.');
        setLoading(false);
      }
    }

    fetchResults();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pl-PL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">🏆 Ranking najlepszych wyników</h1>
      
      {loading ? (
        <div className="flex justify-center my-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
          <p className="font-bold">Błąd</p>
          <p>{error}</p>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center my-12 text-gray-600">
          <p className="text-xl mb-4">Brak wyników do wyświetlenia</p>
          <p>Bądź pierwszy i zdobądź najlepszy wynik!</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Nickname</th>
                <th className="py-3 px-4 text-left">Wynik</th>
                <th className="py-3 px-4 text-left">Procent</th>
                <th className="py-3 px-4 text-left">Data</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {results.map((result, index) => (
                <tr key={result.id} className={index === 0 ? "bg-yellow-50" : ""}>
                  <td className="py-3 px-4">
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
                  </td>
                  <td className="py-3 px-4 font-medium">{result.nickname}</td>
                  <td className="py-3 px-4">
                    {result.score} / {result.total}
                  </td>
                  <td className="py-3 px-4">
                    {Math.round((result.score / result.total) * 100)}%
                  </td>
                  <td className="py-3 px-4 text-gray-500">
                    {formatDate(result.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <div className="mt-8 flex justify-center space-x-4">
        <Link
          href="/quiz"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Spróbuj swoich sił w quizie
        </Link>
        <Link
          href="/"
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Wróć do strony głównej
        </Link>
      </div>
    </div>
  );
}
