'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { QuizResult, getTopResults } from '@/lib/supabase';

interface LeaderboardClientProps {
  initialTab: 'all' | 'simple' | 'AI';
}

export default function LeaderboardClient({ initialTab }: LeaderboardClientProps) {
  const [results, setResults] = useState<QuizResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'simple' | 'AI'>(initialTab);
  
  const router = useRouter();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Ustaw aktywną zakładkę na podstawie parametru URL
    const tabParam = searchParams.get('tab');
    if (tabParam === 'simple' || tabParam === 'AI') {
      setActiveTab(tabParam as 'simple' | 'AI');
    } else {
      setActiveTab('all');
    }
    
    async function fetchResults() {
      try {
        setLoading(true);
        let quizType: string | undefined;
        
        if (tabParam === 'simple') {
          quizType = 'simple';
        } else if (tabParam === 'AI') {
          quizType = 'AI';
        }
        
        const data = await getTopResults(10, quizType);
        setResults(data);
        setLoading(false);
      } catch (err) {
        console.error('Błąd podczas pobierania wyników:', err);
        setError('Nie udało się pobrać wyników. Spróbuj ponownie później.');
        setLoading(false);
      }
    }

    fetchResults();
  }, [searchParams]);
  
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

  // Funkcja do zmiany zakładki
  const handleTabChange = (tab: 'all' | 'simple' | 'AI') => {
    router.push(`/leaderboard?tab=${tab}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">🏆 Ranking najlepszych wyników</h1>
      
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <Link href="/leaderboard?tab=all" 
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'all' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-100'} 
              border border-gray-200 rounded-l-lg`}>
            Wszystkie
          </Link>
          <Link href="/leaderboard?tab=simple" 
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'simple' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-100'} 
              border-t border-b border-gray-200`}>
            Quiz Standardowy
          </Link>
          <Link href="/leaderboard?tab=AI" 
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'AI' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-100'} 
              border border-gray-200 rounded-r-lg`}>
            AI Quiz
          </Link>
        </div>
      </div>
      
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
                    {result.quiz_type && (
                      <span className={`ml-2 text-xs px-2 py-1 rounded ${result.quiz_type === 'AI' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                        {result.quiz_type === 'AI' ? 'AI Quiz' : 'Standard'}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          href="/quiz"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
        >
          Standardowy Quiz
        </Link>
        <Link
          href="/ai-quiz"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center"
        >
          AI Quiz
        </Link>
        <Link
          href="/"
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-center"
        >
          Strona główna
        </Link>
      </div>
    </div>
  );
}
