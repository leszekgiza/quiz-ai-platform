'use client';

import Link from 'next/link';

interface ResultsProps {
  score: number;
  total: number;
  onReset: () => void;
}

export default function Results({ score, total, onReset }: ResultsProps) {
  const percentage = Math.round((score / total) * 100);
  
  const level = percentage <= 40 ? 'Początkujący' : 
                percentage <= 70 ? 'Średniozaawansowany' : 
                'Ekspert';

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-4">Quiz zakończony!</h2>
      <p className="text-xl mb-4">
        Twój wynik: {score} / {total} ({percentage}%)
      </p>
      <p className="text-lg mb-6">Poziom wiedzy: {level}</p>
      
      <div className="space-x-4 flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onReset}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Spróbuj ponownie
        </button>
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
