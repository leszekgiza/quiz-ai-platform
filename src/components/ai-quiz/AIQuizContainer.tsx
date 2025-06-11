'use client';

import { useState, useEffect } from 'react';
import { aiQuestions } from '@/lib/ai-quiz-questions';
import { AIQuizState } from '@/lib/types';
import AIQuestion from './AIQuestion';
import AIResults from './AIResults';
import ProgressBar from '../quiz/ProgressBar';
import dynamic from 'next/dynamic';

const NicknameForm = dynamic(() => import('../quiz/NicknameForm'), { ssr: false });

export default function AIQuizContainer() {
  const [quizState, setQuizState] = useState<AIQuizState>({
    currentQuestion: 0,
    answers: [],
    isCompleted: false,
    score: 0,
    answeredQuestions: new Set<number>(),
    correctAnswers: new Set<number>(),
    wrongAnswers: new Map<number, Set<number>>(),
    showingCorrectAnswer: false,
    explanations: []
  });

  // Wybieramy losowo 10 pytań z pełnej puli
  const [selectedQuestions, setSelectedQuestions] = useState<typeof aiQuestions>([]);
  const [nickname, setNickname] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sprawdź, czy nickname istnieje w localStorage
    const savedNickname = localStorage.getItem('quizNickname');
    if (savedNickname) {
      setNickname(savedNickname);
    }
    setIsLoading(false);
    
    // Wybierz losowo 10 pytań
    const shuffled = [...aiQuestions].sort(() => Math.random() - 0.5);
    setSelectedQuestions(shuffled.slice(0, 10));
  }, []);
  
  const handleStartQuiz = (userNickname: string) => {
    setNickname(userNickname);
  };

  const handleAnswer = (answerIndex: number) => {
    const currentQIndex = quizState.currentQuestion;
    const currentQuestion = selectedQuestions[currentQIndex];
    const isCorrect = currentQuestion.correct.includes(answerIndex + 1);
    
    // Add to answered questions
    const newAnsweredQuestions = new Set(quizState.answeredQuestions);
    newAnsweredQuestions.add(currentQIndex);
    
    // Track correct answers
    const newCorrectAnswers = new Set(quizState.correctAnswers);
    const newWrongAnswers = new Map(quizState.wrongAnswers);
    
    // Dodaj wyjaśnienie do listy
    const newExplanations = [...quizState.explanations];
    newExplanations[currentQIndex] = currentQuestion.explanation;
    
    if (isCorrect) {
      newCorrectAnswers.add(currentQIndex);
      // Remove from wrong answers if it was there
      newWrongAnswers.delete(currentQIndex);
      
      // Update state immediately to show correct answer and increment score
      const newScore = quizState.score + 1;
      
      // Dodaj odpowiedź do historii
      const newAnswers = [...quizState.answers];
      if (!newAnswers[currentQIndex]) {
        newAnswers[currentQIndex] = [];
      }
      newAnswers[currentQIndex].push(answerIndex);
      
      setQuizState(prev => ({
        ...prev,
        answers: newAnswers,
        score: newScore,
        answeredQuestions: newAnsweredQuestions,
        correctAnswers: newCorrectAnswers,
        wrongAnswers: newWrongAnswers,
        explanations: newExplanations
      }));
      
      // Move to next question after a short delay
      setTimeout(() => {
        if (currentQIndex + 1 < selectedQuestions.length) {
          setQuizState(prev => ({
            ...prev,
            currentQuestion: currentQIndex + 1,
            showingCorrectAnswer: false
          }));
        } else {
          setQuizState(prev => ({
            ...prev,
            isCompleted: true
          }));
          
          // Save best score
          const bestScore = localStorage.getItem('aiQuizBestScore');
          if (!bestScore || newScore > parseInt(bestScore)) {
            localStorage.setItem('aiQuizBestScore', newScore.toString());
          }
        }
      }, 1000);
    } else {
      // Track wrong answer
      const currentWrongAnswers = new Set(newWrongAnswers.get(currentQIndex) || []);
      currentWrongAnswers.add(answerIndex);
      newWrongAnswers.set(currentQIndex, currentWrongAnswers);
      
      // Dodaj odpowiedź do historii
      const newAnswers = [...quizState.answers];
      if (!newAnswers[currentQIndex]) {
        newAnswers[currentQIndex] = [];
      }
      newAnswers[currentQIndex].push(answerIndex);
      
      // Pokaż poprawną odpowiedź przez 5 sekund
      setQuizState(prev => ({
        ...prev,
        answeredQuestions: newAnsweredQuestions,
        wrongAnswers: newWrongAnswers,
        showingCorrectAnswer: true,
        answers: newAnswers,
        explanations: newExplanations
      }));
      
      // Po 5 sekundach przejdź do następnego pytania
      setTimeout(() => {
        if (currentQIndex + 1 < selectedQuestions.length) {
          setQuizState(prev => ({
            ...prev,
            currentQuestion: currentQIndex + 1,
            showingCorrectAnswer: false
          }));
        } else {
          setQuizState(prev => ({
            ...prev,
            isCompleted: true
          }));
        }
      }, 5000);
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
      wrongAnswers: new Map<number, Set<number>>(),
      showingCorrectAnswer: false,
      explanations: []
    });
    
    // Wybierz nowy zestaw 10 pytań
    const shuffled = [...aiQuestions].sort(() => Math.random() - 0.5);
    setSelectedQuestions(shuffled.slice(0, 10));
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
      <AIResults 
        score={quizState.score} 
        total={selectedQuestions.length} 
        onReset={resetQuiz}
        nickname={nickname}
        explanations={quizState.explanations.filter(Boolean)}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-4 text-right text-gray-600">
        Gracz: <span className="font-semibold">{nickname}</span>
      </div>
      <h1 className="text-3xl font-bold mb-8">AI Quiz: Generative AI</h1>
      <ProgressBar current={quizState.currentQuestion + 1} total={selectedQuestions.length} />
      {selectedQuestions.length > 0 && (
        <AIQuestion 
          question={selectedQuestions[quizState.currentQuestion]} 
          onAnswer={handleAnswer}
          questionNumber={quizState.currentQuestion + 1}
          isAnswered={quizState.answeredQuestions.has(quizState.currentQuestion)}
          isCorrect={quizState.correctAnswers.has(quizState.currentQuestion)}
          wrongAnswers={quizState.wrongAnswers.get(quizState.currentQuestion) || new Set()}
          showingCorrectAnswer={quizState.showingCorrectAnswer}
        />
      )}
    </div>
  );
}
