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
}
