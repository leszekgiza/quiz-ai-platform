'use client';

import { useState, useEffect } from 'react';
import { questions } from '@/lib/quiz-questions';
import { definitions } from '@/lib/quiz-definitions';
import { QuizState } from '@/lib/types';
import Question from './Question';
import Results from './Results';
import ProgressBar from './ProgressBar';
import dynamic from 'next/dynamic';

const NicknameForm = dynamic(() => import('./NicknameForm'), { ssr: false });

export default function QuizContainer() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    isCompleted: false,
    score: 0,
    answeredQuestions: new Set<number>(),
    correctAnswers: new Set<number>(),
    wrongAnswers: new Map<number, Set<number>>()
  });

  const [shuffledQuestions, setShuffledQuestions] = useState(questions);
  const [nickname, setNickname] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sprawdź, czy nickname istnieje w localStorage
    const savedNickname = localStorage.getItem('quizNickname');
    if (savedNickname) {
      setNickname(savedNickname);
    }
    setIsLoading(false);
    
    // Shuffle questions on component mount
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);
  
  const handleStartQuiz = (userNickname: string) => {
    setNickname(userNickname);
  };

  const handleAnswer = (answerIndex: number) => {
    const currentQIndex = quizState.currentQuestion;
    const isCorrect = shuffledQuestions[currentQIndex].correct === answerIndex;
    
    // Add to answered questions
    const newAnsweredQuestions = new Set(quizState.answeredQuestions);
    newAnsweredQuestions.add(currentQIndex);
    
    // Track correct answers
    const newCorrectAnswers = new Set(quizState.correctAnswers);
    const newWrongAnswers = new Map(quizState.wrongAnswers);
    
    if (isCorrect) {
      newCorrectAnswers.add(currentQIndex);
      // Remove from wrong answers if it was there
      newWrongAnswers.delete(currentQIndex);
      
      // Update state immediately to show correct answer and increment score
      const newScore = quizState.score + 1;
      setQuizState(prev => ({
        ...prev,
        answers: [...prev.answers, answerIndex],
        score: newScore,
        answeredQuestions: newAnsweredQuestions,
        correctAnswers: newCorrectAnswers,
        wrongAnswers: newWrongAnswers
      }));
      
      // Move to next question after a short delay
      setTimeout(() => {
        if (currentQIndex + 1 < shuffledQuestions.length) {
          setQuizState(prev => ({
            ...prev,
            currentQuestion: currentQIndex + 1
          }));
        } else {
          setQuizState(prev => ({
            ...prev,
            isCompleted: true
          }));
          
          // Save best score
          const bestScore = localStorage.getItem('quizBestScore');
          if (!bestScore || newScore > parseInt(bestScore)) {
            localStorage.setItem('quizBestScore', newScore.toString());
          }
        }
      }, 1000);
    } else {
      // Track wrong answer
      const currentWrongAnswers = new Set(newWrongAnswers.get(currentQIndex) || []);
      currentWrongAnswers.add(answerIndex);
      newWrongAnswers.set(currentQIndex, currentWrongAnswers);
      
      // Update state with wrong answer
      setQuizState(prev => ({
        ...prev,
        answeredQuestions: newAnsweredQuestions,
        wrongAnswers: newWrongAnswers
      }));
    }
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      answers: [],
      isCompleted: false,
      score: 0,
      answeredQuestions: new Set<number>(),
      correctAnswers: new Set<number>(),
      wrongAnswers: new Map<number, Set<number>>()
    });
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!nickname) {
    return <NicknameForm onStartQuiz={handleStartQuiz} />;
  }

  if (quizState.isCompleted) {
    return (
      <Results 
        score={quizState.score} 
        total={shuffledQuestions.length} 
        onReset={resetQuiz}
        nickname={nickname} 
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-4 text-right text-gray-600">
        Gracz: <span className="font-semibold">{nickname}</span>
      </div>
      <h1 className="text-3xl font-bold mb-8">Quiz: Generative AI</h1>
      <ProgressBar current={quizState.currentQuestion + 1} total={shuffledQuestions.length} />
      <Question 
        question={shuffledQuestions[quizState.currentQuestion]} 
        onAnswer={handleAnswer}
        questionNumber={quizState.currentQuestion + 1}
        isAnswered={quizState.answeredQuestions.has(quizState.currentQuestion)}
        isCorrect={quizState.correctAnswers.has(quizState.currentQuestion)}
        wrongAnswers={quizState.wrongAnswers.get(quizState.currentQuestion) || new Set()}
      />
    </div>
  );
}
