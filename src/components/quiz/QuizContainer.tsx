'use client';

import { useState, useEffect } from 'react';
import { questions } from '@/lib/quiz-questions';
import { definitions } from '@/lib/quiz-definitions';
import { QuizState } from '@/lib/types';
import Question from './Question';
import Results from './Results';
import ProgressBar from './ProgressBar';

export default function QuizContainer() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    isCompleted: false,
    score: 0
  });

  const [shuffledQuestions, setShuffledQuestions] = useState(questions);

  useEffect(() => {
    // Shuffle questions on component mount
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...quizState.answers, answerIndex];
    const isCorrect = shuffledQuestions[quizState.currentQuestion].correct === answerIndex;
    const newScore = quizState.score + (isCorrect ? 1 : 0);

    if (quizState.currentQuestion + 1 < shuffledQuestions.length) {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion + 1,
        answers: newAnswers,
        score: newScore
      });
    } else {
      setQuizState({
        ...quizState,
        answers: newAnswers,
        score: newScore,
        isCompleted: true
      });
      
      // Save best score
      const bestScore = localStorage.getItem('quizBestScore');
      if (!bestScore || newScore > parseInt(bestScore)) {
        localStorage.setItem('quizBestScore', newScore.toString());
      }
    }
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      answers: [],
      isCompleted: false,
      score: 0
    });
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  };

  if (quizState.isCompleted) {
    return <Results score={quizState.score} total={shuffledQuestions.length} onReset={resetQuiz} />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Quiz: Generative AI</h1>
      <ProgressBar current={quizState.currentQuestion + 1} total={shuffledQuestions.length} />
      <Question 
        question={shuffledQuestions[quizState.currentQuestion]} 
        onAnswer={handleAnswer}
        questionNumber={quizState.currentQuestion + 1}
      />
    </div>
  );
}
