'use client';

import { AIQuizQuestion } from '@/lib/types';
import { motion } from 'framer-motion';

interface AIQuestionProps {
  question: AIQuizQuestion;
  onAnswer: (index: number) => void;
  onSubmit: () => void;
  questionNumber: number;
  isAnswered: boolean;
  isCorrect: boolean;
  wrongAnswers: Set<number>;
  showingCorrectAnswer: boolean;
  selectedAnswers: Set<number>;
  showFeedback: boolean;
}

export default function AIQuestion({ 
  question, 
  onAnswer, 
  onSubmit,
  questionNumber,
  isAnswered,
  isCorrect,
  wrongAnswers,
  showingCorrectAnswer,
  selectedAnswers,
  showFeedback
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
          const isSelected = selectedAnswers.has(index);
          
          return (
            <button
              key={index}
              onClick={() => !isAnswered ? onAnswer(index) : null}
              disabled={isAnswered}
              className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${
                showFeedback && isOptionCorrect
                  ? 'bg-green-100 border-2 border-green-500'
                  : showFeedback && isSelected && !isOptionCorrect
                  ? 'bg-red-100 border-2 border-red-500 line-through'
                  : isSelected && !showFeedback
                  ? 'bg-blue-100 border-2 border-blue-500'
                  : isAnswered
                  ? 'bg-gray-100 opacity-50 cursor-not-allowed'
                  : 'bg-gray-100 hover:bg-blue-100'
              }`}
            >
              {String.fromCharCode(65 + index)}. {option}
              {showFeedback && isOptionCorrect && (
                <span className="ml-2 text-green-600">✓</span>
              )}
              {showFeedback && isSelected && !isOptionCorrect && (
                <span className="ml-2 text-red-600">✗</span>
              )}
            </button>
          );
        })}
      </div>
      
      {selectedAnswers.size > 0 && !isAnswered && (
        <div className="mt-6 flex justify-center">
          <button 
            onClick={onSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Dalej
          </button>
        </div>
      )}
      
      {showFeedback && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-blue-800 font-medium">Wyjaśnienie:</p>
          <p className="text-blue-700">{question.explanation}</p>
        </div>
      )}
    </motion.div>
  );
}
