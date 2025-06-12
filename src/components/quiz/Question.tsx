'use client';

import { QuizQuestion } from '@/lib/types';
import { motion } from 'framer-motion';

interface QuestionProps {
  question: QuizQuestion;
  onAnswer: (index: number) => void;
  onSubmit: () => void;
  questionNumber: number;
  isAnswered: boolean;
  isCorrect: boolean;
  wrongAnswers: Set<number>;
  selectedAnswers: Set<number>;
  showFeedback: boolean;
}

export default function Question({ 
  question, 
  onAnswer, 
  onSubmit,
  questionNumber,
  isAnswered,
  isCorrect,
  wrongAnswers,
  selectedAnswers,
  showFeedback 
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
            onClick={() => !isAnswered ? onAnswer(index) : null}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${
              // Show correct/incorrect answers only when feedback should be shown
              showFeedback && question.correct === index + 1
                ? 'bg-green-100 border-2 border-green-500'
                : showFeedback && wrongAnswers.has(index)
                ? 'bg-red-100 border-2 border-red-500 line-through'
                : selectedAnswers.has(index)
                ? 'bg-blue-100 border-2 border-blue-500'
                : isAnswered
                ? 'bg-gray-100 opacity-50 cursor-not-allowed'
                : 'bg-gray-100 hover:bg-blue-100'
            }`}
          >
            {String.fromCharCode(65 + index)}. {option}
            {showFeedback && question.correct === index + 1 && (
              <span className="ml-2 text-green-600">✓</span>
            )}
            {showFeedback && wrongAnswers.has(index) && (
              <span className="ml-2 text-red-600">✗</span>
            )}
          </button>
        ))}
        
        {selectedAnswers.size > 0 && !isAnswered && (
          <div className="mt-6">
            <button 
              onClick={onSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Dalej
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
