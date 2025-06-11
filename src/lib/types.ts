// Importy dla typów Set i Map
type Set<T> = globalThis.Set<T>;
type Map<K, V> = globalThis.Map<K, V>;

export interface QuizDefinition {
  id: number;
  term: string;
  definition: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  definitionId: number;
}

export interface QuizState {
  currentQuestion: number;
  answers: number[];
  isCompleted: boolean;
  score: number;
  answeredQuestions: Set<number>;
  correctAnswers: Set<number>;
  wrongAnswers: Map<number, Set<number>>;
}

export interface AIQuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number[];
  explanation: string;
}

export interface AIQuizState {
  currentQuestion: number;
  answers: number[][];
  isCompleted: boolean;
  score: number;
  answeredQuestions: Set<number>;
  correctAnswers: Set<number>;
  wrongAnswers: Map<number, Set<number>>;
  showingCorrectAnswer: boolean;
  explanations: string[];
}
