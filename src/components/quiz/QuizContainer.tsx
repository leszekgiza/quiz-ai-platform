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
    wrongAnswers: new Map<number, Set<number>>(),
    selectedAnswers: new Map<number, Set<number>>(),
    showFeedback: new Set<number>()
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
    
    // Track selected answers
    const newSelectedAnswers = new Map(quizState.selectedAnswers);
    const currentSelectedAnswers = new Set(newSelectedAnswers.get(currentQIndex) || []);
    
    // Toggle selection
    if (currentSelectedAnswers.has(answerIndex)) {
      currentSelectedAnswers.delete(answerIndex);
    } else {
      currentSelectedAnswers.add(answerIndex);
    }
    
    newSelectedAnswers.set(currentQIndex, currentSelectedAnswers);
    
    // Update state with selected answer
    setQuizState(prev => ({
      ...prev,
      selectedAnswers: newSelectedAnswers
    }));
  };
  
  const handleSubmit = () => {
    const currentQIndex = quizState.currentQuestion;
    const currentSelectedAnswers = quizState.selectedAnswers.get(currentQIndex) || new Set<number>();
    
    // If no answers selected, do nothing
    if (currentSelectedAnswers.size === 0) return;
    
    // Mark question as answered
    const newAnsweredQuestions = new Set(quizState.answeredQuestions);
    newAnsweredQuestions.add(currentQIndex);
    
    // Check if answer is correct (index + 1 because correct in questions is 1-indexed)
    const isCorrect = shuffledQuestions[currentQIndex].correct === Array.from(currentSelectedAnswers)[0] + 1;
    
    // Track correct answers and wrong answers
    const newCorrectAnswers = new Set(quizState.correctAnswers);
    const newWrongAnswers = new Map(quizState.wrongAnswers);
    const newShowFeedback = new Set(quizState.showFeedback);
    newShowFeedback.add(currentQIndex);
    
    if (isCorrect) {
      newCorrectAnswers.add(currentQIndex);
      // Remove from wrong answers if it was there
      newWrongAnswers.delete(currentQIndex);
      
      // Update score
      const newScore = quizState.score + 1;
      
      // Update state to show feedback
      setQuizState(prev => ({
        ...prev,
        answers: [...prev.answers, Array.from(currentSelectedAnswers)[0]],
        score: newScore,
        answeredQuestions: newAnsweredQuestions,
        correctAnswers: newCorrectAnswers,
        wrongAnswers: newWrongAnswers,
        showFeedback: newShowFeedback
      }));
    } else {
      // Track wrong answers
      const currentWrongAnswers = new Set(newWrongAnswers.get(currentQIndex) || []);
      currentSelectedAnswers.forEach(answerIndex => {
        currentWrongAnswers.add(answerIndex);
      });
      newWrongAnswers.set(currentQIndex, currentWrongAnswers);
      
      // Update state to show feedback
      setQuizState(prev => ({
        ...prev,
        answeredQuestions: newAnsweredQuestions,
        wrongAnswers: newWrongAnswers,
        showFeedback: newShowFeedback
      }));
    }
    
    // After showing feedback for 3 seconds, move to next question
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
        if (!bestScore || quizState.score > parseInt(bestScore)) {
          localStorage.setItem('quizBestScore', quizState.score.toString());
        }
      }
    }, 3000); // Show feedback for 3 seconds
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      answers: [],
      isCompleted: false,
      score: 0,
      answeredQuestions: new Set<number>(),
      correctAnswers: new Set<number>(),
      wrongAnswers: new Map<number, Set<number>>(),
      selectedAnswers: new Map<number, Set<number>>(),
      showFeedback: new Set<number>()
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
        onSubmit={handleSubmit}
        questionNumber={quizState.currentQuestion + 1}
        isAnswered={quizState.answeredQuestions.has(quizState.currentQuestion)}
        isCorrect={quizState.correctAnswers.has(quizState.currentQuestion)}
        wrongAnswers={quizState.wrongAnswers.get(quizState.currentQuestion) || new Set()}
        selectedAnswers={quizState.selectedAnswers.get(quizState.currentQuestion) || new Set()}
        showFeedback={quizState.showFeedback.has(quizState.currentQuestion)}
      />
    </div>
  );
}
