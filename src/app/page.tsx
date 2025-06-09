'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🧠 Quiz AI Platform
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Witaj na platformie quizów! Wybierz jeden z dostępnych quizów, aby przetestować swoją wiedzę.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Advanced Quiz Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Quiz Zaawansowany
            </h3>
            <p className="text-gray-600 mb-4">
              Bardziej zaawansowane pytania dla ekspertów AI.
            </p>
            <Link 
              href="/quiz"
              className="inline-block w-full text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Rozpocznij Quiz
            </Link>
          </div>

          {/* Glossary Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-4">📖</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Słownik AI
            </h3>
            <p className="text-gray-600 mb-4">
              Poznaj definicje kluczowych terminów z dziedziny AI.
            </p>
            <Link 
              href="/glossary"
              className="inline-block w-full text-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Przeglądaj Słownik
            </Link>
          </div>

          {/* AI Quiz Card - Coming Soon */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow opacity-75">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              AI Quiz (Wkrótce)
            </h3>
            <p className="text-gray-600 mb-4">
              Interaktywny quiz generowany przez AI - w przygotowaniu.
            </p>
            <div className="inline-block w-full text-center px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed">
              Wkrótce dostępne
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              💡 Wskazówka
            </h3>
            <p className="text-gray-600">
              Każdy quiz ma różny poziom trudności. Zacznij od prostego quizu, aby poznać format pytań!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
