'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { saveQuizResult } from '@/lib/supabase';

interface ResultsProps {
  score: number;
  total: number;
  onReset: () => void;
  nickname: string;
}

export default function Results({ score, total, onReset, nickname }: ResultsProps) {
  const [bestScore, setBestScore] = useState<number | null>(null);
  const percentage = Math.round((score / total) * 100);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [resultSaved, setResultSaved] = useState<boolean>(false);

  const level = percentage <= 40 ? 'Początkujący' : 
                percentage <= 70 ? 'Średniozaawansowany' : 
                'Ekspert';

  useEffect(() => {
    // Funkcja do zapisywania wyniku tylko raz
    const saveResult = async () => {
      // Jeśli wynik został już zapisany, nie zapisuj ponownie
      if (resultSaved) return;
      
      try {
        console.log('Próba zapisania wyniku dla:', { nickname, score, total });
        
        // Zapisz wynik do Supabase
        const result = await saveQuizResult({
          nickname,
          score,
          total
        });
        
        console.log('Wynik zapisany w Supabase:', result);
        setSaveError(null);
        setResultSaved(true); // Oznacz, że wynik został zapisany
        
        // Zapisz najlepszy wynik lokalnie
        const savedBest = localStorage.getItem('quizBestScore');
        if (!savedBest || score > parseInt(savedBest)) {
          localStorage.setItem('quizBestScore', score.toString());
          setBestScore(score);
        } else if (savedBest) {
          setBestScore(parseInt(savedBest));
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Nieznany błąd';
        console.error('Błąd podczas zapisywania wyniku:', error);
        setSaveError(`Nie udało się zapisać wyniku: ${errorMessage}`);
      }
    };

    saveResult();
  }, [nickname, score, total, resultSaved]);

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-4">Quiz zakończony!</h2>
      <p className="text-xl mb-4">
        Twój wynik: {score} / {total} ({percentage}%)
      </p>
      <p className="text-lg mb-6">Poziom wiedzy: {level}</p>
      
      {bestScore !== null && (
        <p className="text-gray-600 mb-4">
          Najlepszy wynik: {bestScore} / {total}
        </p>
      )}
      
      {saveError && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
          <p className="font-bold">Błąd</p>
          <p>{saveError}</p>
        </div>
      )}
      
      <div className="space-x-4 flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onReset}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Spróbuj ponownie
        </button>
        <Link
          href="/leaderboard"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-center"
        >
          Zobacz ranking
        </Link>
        <Link
          href="/glossary"
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-center"
        >
          Zobacz definicje
        </Link>
        <Link
          href="/"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 text-center"
        >
          Wróć do strony głównej
        </Link>
      </div>
    </div>
  );
}
