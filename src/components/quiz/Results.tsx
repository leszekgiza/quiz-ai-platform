'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ResultsProps {
  score: number;
  total: number;
  onReset: () => void;
}

export default function Results({ score, total, onReset }: ResultsProps) {
  const [bestScore, setBestScore] = useState<number | null>(null);
  const percentage = Math.round((score / total) * 100);
  
  const level = percentage <= 40 ? 'Początkujący' : 
                percentage <= 70 ? 'Średniozaawansowany' : 
                'Ekspert';

  useEffect(() => {
    const saved = localStorage.getItem('quizBestScore');
    if (saved) setBestScore(parseInt(saved));
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-4">Quiz zakończony!</h2>
      <p className="text-xl mb-4">
        Twój wynik: {score} / {total} ({percentage}%)
      </p>
      <p className="text-lg mb-6">Poziom wiedzy: {level}</p>
      
      {bestScore !== null && (
        <p className="text-gray-600 mb-6">
          Najlepszy wynik: {bestScore} / {total}
        </p>
      )}
      
      <div className="space-x-4">
        <button
          onClick={onReset}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Spróbuj ponownie
        </button>
        <Link
          href="/glossary"
          className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
        >
          Zobacz definicje
        </Link>
      </div>
    </div>
  );
}
