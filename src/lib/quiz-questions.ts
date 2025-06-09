import { QuizQuestion } from './types';

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Która z poniższych definicji najlepiej opisuje sztuczną inteligencję (AI)?",
    options: [
      "Technologia umożliwiająca maszynom wykonywanie zadań wymagających ludzkiej inteligencji",
      "System operacyjny dla robotów",
      "Język programowania do tworzenia stron internetowych",
      "Metoda przechowywania danych w chmurze"
    ],
    correct: 0,
    definitionId: 1
  },
  {
    id: 2,
    question: "Co to jest Machine Learning?",
    options: [
      "Proces naprawiania uszkodzonych komputerów",
      "Metoda uczenia komputerów poprzez analizę danych",
      "Typ oprogramowania antywirusowego",
      "System operacyjny dla superkomputerów"
    ],
    correct: 1,
    definitionId: 2
  },
  {
    id: 3,
    question: "Czym charakteryzuje się Generative AI?",
    options: [
      "Tylko analizuje istniejące dane",
      "Jest zdolna do tworzenia nowych treści",
      "Działa wyłącznie na danych liczbowych",
      "Wymaga stałego połączenia z internetem"
    ],
    correct: 1,
    definitionId: 3
  },
  {
    id: 4,
    question: "Co oznacza termin AI Governance?",
    options: [
      "Rządowe regulacje dotyczące robotów",
      "Zestaw zasad odpowiedzialnego wykorzystania AI",
      "System operacyjny dla sztucznej inteligencji",
      "Metoda programowania AI"
    ],
    correct: 1,
    definitionId: 4
  },
  {
    id: 5,
    question: "Co reguluje RODO w kontekście AI?",
    options: [
      "Szybkość przetwarzania danych przez AI",
      "Ochronę danych osobowych użytkowników",
      "Minimalne wymagania sprzętowe dla systemów AI",
      "Standardy programistyczne dla aplikacji AI"
    ],
    correct: 1,
    definitionId: 5
  }
  // More questions will be added in the next steps
];
