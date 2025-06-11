'use client';

import { QuizQuestion } from '@/lib/types';
import { motion } from 'framer-motion';

interface QuestionProps {
  question: QuizQuestion;
  onAnswer: (index: number) => void;
  questionNumber: number;
  isAnswered: boolean;
  isCorrect: boolean;
  wrongAnswers: Set<number>;
}

export default function Question({ 
  question, 
  onAnswer, 
  questionNumber,
  isAnswered,
  isCorrect,
  wrongAnswers 
}: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-xl font-semibold mb-6">
        Pytanie {questionNumber}: {question.question}
      </h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !isAnswered || (!isCorrect && !wrongAnswers.has(index)) ? onAnswer(index) : null}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${
              // Zawsze podświetl prawidłową odpowiedź na zielono, jeśli pytanie zostało odpowiedziane
              // Poprawka: correct w pliku pytań jest indeksowane od 1, a index od 0
              isAnswered && question.correct === index + 1
                ? 'bg-green-100 border-2 border-green-500'
                : isAnswered && wrongAnswers.has(index)
                ? 'bg-red-100 border-2 border-red-500 line-through'
                : isAnswered
                ? 'bg-gray-100 opacity-50 cursor-not-allowed'
                : 'bg-gray-100 hover:bg-blue-100'
            }`}
          >
            {String.fromCharCode(65 + index)}. {option}
            {isCorrect && question.correct === index + 1 && (
              <span className="ml-2 text-green-600">✓</span>
            )}
            {isAnswered && wrongAnswers.has(index) && (
              <span className="ml-2 text-red-600">✗</span>
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
