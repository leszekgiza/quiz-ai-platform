'use client';

import { useState } from 'react';

type NicknameFormProps = {
  onStartQuiz: (nickname: string) => void;
};

export default function NicknameForm({ onStartQuiz }: NicknameFormProps) {
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nickname.trim()) {
      setError('Proszę wprowadzić swój nick');
      return;
    }

    if (nickname.length > 20) {
      setError('Nick nie może być dłuższy niż 20 znaków');
      return;
    }

    // Save nickname to localStorage
    localStorage.setItem('quizNickname', nickname);
    onStartQuiz(nickname);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        🎮 Przed rozpoczęciem quizu...
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nickname" className="block text-sm font-medium text-gray-700 mb-1">
            Wprowadź swój nick:
          </label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
              if (error) setError('');
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Np. Ania123"
            maxLength={20}
            autoFocus
          />
          {error && (
            <p className="mt-1 text-sm text-red-600">{error}</p>
          )}
        </div>
        
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Rozpocznij quiz! 🚀
          </button>
        </div>
      </form>
    </div>
  );
}
