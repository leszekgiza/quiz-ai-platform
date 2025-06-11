'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { saveQuizResult } from '@/lib/supabase';

interface AIResultsProps {
  score: number;
  total: number;
  onReset: () => void;
  nickname: string;
  explanations: string[];
}

export default function AIResults({ score, total, onReset, nickname, explanations }: AIResultsProps) {
  const [bestScore, setBestScore] = useState<number | null>(null);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [saveError, setSaveError] = useState<string | null>(null);
  const resultSaved = useRef(false);

  useEffect(() => {
    // Pobierz najlepszy wynik z localStorage
    const storedBestScore = localStorage.getItem('aiQuizBestScore');
    if (storedBestScore) {
      setBestScore(parseInt(storedBestScore));
    }

    // Zapisz wynik do Supabase tylko raz
    if (!resultSaved.current) {
      resultSaved.current = true;
      const saveResult = async () => {
        try {
          setSaveStatus('saving');
          const { success, error } = await saveQuizResult({
            nickname,
            score,
            total,
            quiz_type: 'AI'
          });
          
          if (success) {
            setSaveStatus('success');
          } else {
            setSaveStatus('error');
            setSaveError(error || 'Nieznany błąd');
          }
        } catch (err) {
          setSaveStatus('error');
          setSaveError('Wystąpił błąd podczas zapisywania wyniku');
          console.error('Error saving result:', err);
        }
      };
      
      saveResult();
    }
  }, [score, total, nickname]);

  const percentage = Math.round((score / total) * 100);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Twój wynik</h1>
        
        <div className="text-center mb-8">
          <div className="text-5xl font-bold text-blue-600 mb-2">
            {score} / {total}
          </div>
          <div className="text-xl text-gray-700">
            ({percentage}%)
          </div>
        </div>
        
        {bestScore !== null && (
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-blue-800">
              Twój najlepszy wynik: <span className="font-semibold">{bestScore} / {total}</span> ({Math.round((bestScore / total) * 100)}%)
            </p>
          </div>
        )}
        
        {saveStatus === 'saving' && (
          <div className="flex items-center justify-center mb-6">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mr-2"></div>
            <p>Zapisywanie wyniku...</p>
          </div>
        )}
        
        {saveStatus === 'success' && (
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <p className="text-green-800">
              Twój wynik został zapisany w rankingu!
            </p>
          </div>
        )}
        
        {saveStatus === 'error' && (
          <div className="bg-red-50 p-4 rounded-lg mb-6">
            <p className="text-red-800">
              Błąd podczas zapisywania wyniku: {saveError}
            </p>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={onReset}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex-1"
          >
            Spróbuj ponownie
          </button>
          
          <Link 
            href="/leaderboard" 
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors text-center flex-1"
          >
            Zobacz ranking
          </Link>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Wyjaśnienia pojęć z quizu:</h2>
          <div className="space-y-4">
            {explanations.map((explanation, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">{explanation}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <Link 
              href="/glossary" 
              className="text-blue-600 hover:underline"
            >
              Zobacz pełny słownik AI →
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200">
          <Link 
            href="/" 
            className="text-blue-600 hover:underline"
          >
            ← Wróć do strony głównej
          </Link>
        </div>
      </div>
    </div>
  );
}
