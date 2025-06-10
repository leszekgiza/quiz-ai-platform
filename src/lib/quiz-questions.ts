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
    correct: 1,
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
    definitionId: 2
  },
  {
    id: 6,
    question: "Technologia umożliwiająca maszynom wykonywanie zadań, które normalnie wymagają ludzkiej inteligencji, to:",
    options: [
      "Machine Learning (ML)",
      "Artificial Intelligence (AI)",
      "Generative AI",
      "Data-Driven Decisions"
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 7,
    question: "Co odróżnia 'Generative AI' od innych form AI?",
    options: [
      "Generuje nowe treści",
      "Działa wyłącznie na danych liczbowych",
      "Wymaga stałego połączenia z internetem",
      "Standardy programistyczne dla aplikacji AI"
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 8,
    question: "Gdy model AI generuje fałszywe, ale wiarygodnie brzmiące informacje, nazywamy to:",
    options: [
      "Hallucination",
      "Wchodzi w tryb uprzedzeń (Bias)",
      "Udaje mu się Prompt Hacking",
      "Pokazuje błąd systemowy"
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 9,
    question: "Czym jest 'Prompt Engineering'?",
    options: [
      "Sztuka, umiejętność tworzenia zapytań promptów do modeli AI (LLM), Generative AI.",
      "Pisanie kodu do modeli AI.",
      "Technika trenowania modeli na nowych danych.",
      "Manipulacja AI w celu obejścia zabezpieczeń."
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 10,
    question: "Tendencja modelu AI do odzwierciedlania i wzmacniania uprzedzeń z danych treningowych to:",
    options: [
      "Uprzedzenia / Stronniczość (Bias)",
      "Knowledge Cut-off Date",
      "Anomaly Detection",
      "AI Governance"
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 11,
    question: "Czym jest 'Knowledge Cut-off Date'?",
    options: [
      "Uprzedzenia / Stronniczość (Bias)",
      "Knowledge Cut-off Date",
      "Anomaly Detection",
      "AI Governance"
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 12,
    question: "Najmniejsza jednostka tekstu (słowo, część słowa lub znak), jaką przetwarza model językowy, to:",
    options: [
      "Token",
      "API",
      "Context Window",
      "Jednostka Obliczeniowa"
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 13,
    question: "Maksymalna ilość tekstu, jaką model AI może przetworzyć w ramach jednej konwersacji, to:",
    options: [
      "Token",
      "API",
      "Context Window (Okno Kontekstowe)",
      "Jednostka Obliczeniowa"
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 14,
    question: "Architektura sieci neuronowej, która stała się fundamentem nowoczesnych modeli językowych (LLM), to:", 
    options: [
      "Transformer",
      "Digital Twin",
      "Convolurional Neural Network (CNN)",
      "Recurrent Neural Network (RNN)"
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 15,
    question: "Proces doskonalenia modelu AI z wykorzystaniem ocen i opinii od ludzkich ekspertów to:",
    options: [
      "Reinforcement Learning from Human Feedback (RLHF)",
      "Deep Fake Modeling",
      "Na chłopski rozum" – edycja algorytmu przez wujka z forum",
      "Metoda „na chybił-trafił” – aż zacznie działać"
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 16,
    question: "Metoda uczenia komputerów poprzez analizę danych, bez bezpośredniego programowania każdej czynności, to:",
    options: [
      "Strategia „kopiuj–wklej aż zadziała",
      "Kurs komputerowy dla robotów: „Excel dla zaawansowanych",
      "Magia informatyczna – czyli „działa, ale nie wiadomo czemu",
      "Uczenie maszynowe (Machine Learning)"
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 17,
    question: "Zestaw zasad i regulacji mających na celu odpowiedzialne i bezpieczne wykorzystanie AI to:",
    options: [
      "Regulamin serwera Discorda dla robotów",
      "Etyka sztucznej inteligencji (AI Ethics)",
      "Tajny kodeks Jedi dla maszyn",
      "Instrukcja BHP przy rozmowie z ChatGPT-em"
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 18,
    question: "Proces podejmowania decyzji biznesowych w oparciu o analizę faktów i danych to:",
    options: [
      "Data-Driven Decisions",
      "Zgadywanie z użyciem Excela i kawy",
      "Konsultacja z wróżką Excela, arkuszem prorokiem",
      "Rzut monetą, ale w PowerPoincie"
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 19,
    question: "Spersonalizowane wersje chatbotów AI, dostosowane do konkretnych zadań lub branż, to:",
    options: [
      "Custom GPTs / Gems",
      "Cyfrowi koledzy po fachu z syndromem przepracowania",
      "Boty przebierane w stroje branżowe",
      "Asystenci z AIKEA – sam składasz, jak chcesz"
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 20,
    question: "Techniki manipulowania systemami AI poprzez specjalnie skonstruowane zapytania w celu obejścia zabezpieczeń to:",
    options: [
      "Prompt Hacking",
      "Szeptanie do AI słodkich kłamstw",
      "Hakerskie zaklęcia w stylu „Open Sesame, ChatGPT!",
      "Metoda „na wnuczka” dla botów"
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 21,
    question: "Technologia, która identyfikuje nietypowe wzorce lub odstępstwa w danych, to:",
    options: [
      "Prompt Hacking",
      "Wykrywanie anomalii (Anomaly detection)",
      "Algorytm: „To wygląda podejrzanie, szefie!”",
      "Tryb detektywa danych – wersja Sherlock 2.0"
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 22,
    question: "Dziedzina AI, która uczy komputery rozumienia, interpretacji i generowania ludzkiego języka, to:",
    options: [
      "Tłumacz Google na sterydach",
      "Kurs „Język ludzki dla początkujących botów”",
      "Przetwarzanie języka naturalnego (Natural Language Processing – NLP)",
      "Sztuka small talku z komputerem"
    ],
    correct: 1,
    definitionId: 1
  }
];
