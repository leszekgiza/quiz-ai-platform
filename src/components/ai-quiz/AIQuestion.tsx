'use client';

import { AIQuizQuestion } from '@/lib/types';
import { motion } from 'framer-motion';

interface AIQuestionProps {
  question: AIQuizQuestion;
  onAnswer: (index: number) => void;
  questionNumber: number;
  isAnswered: boolean;
  isCorrect: boolean;
  wrongAnswers: Set<number>;
  showingCorrectAnswer: boolean;
}

export default function AIQuestion({ 
  question, 
  onAnswer, 
  questionNumber,
  isAnswered,
  isCorrect,
  wrongAnswers,
  showingCorrectAnswer
}: AIQuestionProps) {
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
        {question.options.map((option, index) => {
          const isOptionCorrect = question.correct.includes(index + 1);
          
          return (
            <button
              key={index}
              onClick={() => !isAnswered || (!isCorrect && !wrongAnswers.has(index)) ? onAnswer(index) : null}
              disabled={isAnswered && isCorrect}
              className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${
                (isCorrect && isOptionCorrect) || (showingCorrectAnswer && isOptionCorrect)
                  ? 'bg-green-100 border-2 border-green-500'
                  : isAnswered && wrongAnswers.has(index)
                  ? 'bg-red-100 border-2 border-red-500 line-through'
                  : isAnswered && isCorrect
                  ? 'bg-gray-100 opacity-50 cursor-not-allowed'
                  : 'bg-gray-100 hover:bg-blue-100'
              }`}
            >
              {String.fromCharCode(65 + index)}. {option}
              {(isCorrect && isOptionCorrect) && (
                <span className="ml-2 text-green-600">✓</span>
              )}
              {showingCorrectAnswer && isOptionCorrect && (
                <span className="ml-2 text-green-600">✓</span>
              )}
              {isAnswered && wrongAnswers.has(index) && (
                <span className="ml-2 text-red-600">✗</span>
              )}
            </button>
          );
        })}
      </div>
      
      {showingCorrectAnswer && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-blue-800 font-medium">Wyjaśnienie:</p>
          <p className="text-blue-700">{question.explanation}</p>
        </div>
      )}
    </motion.div>
  );
}
