'use client';

import { useState } from 'react';

export default function SimpleQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: 'Co oznacza skrót AI?',
      options: [
        'Sztuczna inteligencja',
        'Automatyczna instalacja',
        'Analiza internetu',
        'Automatyczne indeksowanie'
      ],
      correct: 0
    },
    {
      question: 'Który z poniższych terminów odnosi się do uczenia maszynowego?',
      options: [
        'Machine Learning',
        'Data Mining',
        'Web Scraping',
        'Cloud Computing'
      ],
      correct: 0
    }
  ];

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  if (showScore) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6">Wynik quizu</h1>
          <p className="text-lg mb-6">
            Twój wynik: {score} z {questions.length}
          </p>
          <button
            onClick={resetQuiz}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Spróbuj ponownie
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Pytanie {currentQuestion + 1} z {questions.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-6">
          {questions[currentQuestion].question}
        </h2>
        
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full text-left p-4 rounded-lg bg-gray-100 hover:bg-blue-50 border border-gray-200"
            >
              {String.fromCharCode(65 + index)}. {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
