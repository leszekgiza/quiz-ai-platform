'use client';

import { QuizQuestion } from '@/lib/types';
import { motion } from 'framer-motion';

interface QuestionProps {
  question: QuizQuestion;
  onAnswer: (index: number) => void;
  questionNumber: number;
}

export default function Question({ question, onAnswer, questionNumber }: QuestionProps) {
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
            onClick={() => onAnswer(index)}
            className="w-full text-left p-4 rounded-lg bg-gray-100 hover:bg-blue-100 transition-colors duration-200"
          >
            {String.fromCharCode(65 + index)}. {option}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
