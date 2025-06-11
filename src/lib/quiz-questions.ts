import { QuizQuestion } from './types';

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Która z poniższych definicji najlepiej opisuje sztuczną inteligencję (AI)?',
    options: [
      'System operacyjny dla robotów',
      'Język programowania do tworzenia stron internetowych',
      'Technologia umożliwiająca maszynom wykonywanie zadań wymagających ludzkiej inteligencji',
      'Metoda przechowywania danych w chmurze'
    ],
    correct: 3,
    definitionId: 1
  },
  {
    id: 2,
    question: 'Co to jest Machine Learning?',
    options: [
      'Metoda uczenia komputerów poprzez analizę danych',
      'Proces naprawiania uszkodzonych komputerów',
      'Typ oprogramowania antywirusowego',
      'System operacyjny dla superkomputerów'
    ],
    correct: 1,
    definitionId: 2
  },
  {
    id: 3,
    question: 'Czym charakteryzuje się Generative AI?',
    options: [
      'Tylko analizuje istniejące dane',
      'Działa wyłącznie na danych liczbowych',
      'Wymaga stałego połączenia z internetem',
      'Jest zdolna do tworzenia nowych treści'
    ],
    correct: 4,
    definitionId: 3
  },
  {
    id: 4,
    question: 'Co oznacza termin AI Governance?',
    options: [
      'Rządowe regulacje dotyczące robotów',
      'Zestaw zasad odpowiedzialnego wykorzystania AI',
      'System operacyjny dla sztucznej inteligencji',
      'Metoda programowania AI'
    ],
    correct: 2,
    definitionId: 4
  },
  {
    id: 5,
    question: 'Co reguluje RODO w kontekście AI?',
    options: [
      'Ochronę danych osobowych użytkowników',
      'Szybkość przetwarzania danych przez AI',
      'Minimalne wymagania sprzętowe dla systemów AI',
      'Standardy programistyczne dla aplikacji AI'
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 6,
    question: 'Technologia umożliwiająca maszynom wykonywanie zadań, które normalnie wymagają ludzkiej inteligencji, to:',
    options: [
      'Generative AI',
      'Data-Driven Decisions',
      'Machine Learning (ML)',
      'Artificial Intelligence (AI)'
    ],
    correct: 4,
    definitionId: 4
  },
  {
    id: 7,
    question: "Co odróżnia 'Generative AI' od innych form AI?",
    options: [
      'Działa wyłącznie na danych liczbowych',
      'Generuje nowe treści',
      'Wymaga stałego połączenia z internetem',
      'Standardy programistyczne dla aplikacji AI'
    ],
    correct: 2,
    definitionId: 2
  },
  {
    id: 8,
    question: 'Gdy model AI generuje fałszywe, ale wiarygodnie brzmiące informacje, nazywamy to:',
    options: [
      'Udaje mu się Prompt Hacking',
      'Pokazuje błąd systemowy',
      'Hallucination',
      'Wchodzi w tryb uprzedzeń (Bias)'
    ],
    correct: 3,
    definitionId: 3
  },
  {
    id: 9,
    question: "Czym jest 'Prompt Engineering'?",
    options: [
      'Manipulacja AI w celu obejścia zabezpieczeń.',
      'Sztuka i umiejętność tworzenia zapytań (promptów) do modeli AI (LLM), Generative AI.',
      'Technika trenowania modeli na nowych danych.',
      'Pisanie kodu do modeli AI.'
    ],
    correct: 2,
    definitionId: 2
  },
  {
    id: 10,
    question: 'Tendencja modelu AI do odzwierciedlania i wzmacniania uprzedzeń z danych treningowych to:',
    options: [
      'Uprzedzenia / Stronniczość (Bias)',
      'AI Governance',
      'Knowledge Cut-off Date',
      'Anomaly Detection'
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 11,
    question: "Czym jest 'Knowledge Cut-off Date'?",
    options: [
      'Metoda ograniczania długości promptu',
      'Termin wygaśnięcia licencji na model',
      'Technika usuwania starych danych treningowych',
      'Data, po której model nie posiada informacji o nowszych wydarzeniach'
    ],
    correct: 4,
    definitionId: 4
  },
  {
    id: 12,
    question: 'Najmniejsza jednostka tekstu (słowo, część słowa lub znak), jaką przetwarza model językowy, to:',
    options: [
      'API',
      'Jednostka Obliczeniowa',
      'Token',
      'Context Window'
    ],
    correct: 3,
    definitionId: 3
  },
  {
    id: 13,
    question: 'Maksymalna ilość tekstu, jaką model AI może przetworzyć w ramach jednej konwersacji, to:',
    options: [
      'API',
      'Context Window (Okno Kontekstowe)',
      'Jednostka Obliczeniowa',
      'Token'
    ],
    correct: 2,
    definitionId: 2
  },
  {
    id: 14,
    question: 'Architektura sieci neuronowej, która stała się fundamentem nowoczesnych modeli językowych (LLM), to:',
    options: [
      'Transformer',
      'Recurrent Neural Network (RNN)',
      'Convolutional Neural Network (CNN)',
      'Digital Twin'
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 15,
    question: 'Proces doskonalenia modelu AI z wykorzystaniem ocen i opinii od ludzkich ekspertów to:',
    options: [
      "Metoda 'na chybił-trafił' – aż zacznie działać",
      "'Na chłopski rozum' – edycja algorytmu przez wujka z forum",
      'Deep Fake Modeling',
      'Reinforcement Learning from Human Feedback (RLHF)'
    ],
    correct: 4,
    definitionId: 4
  },
  {
    id: 16,
    question: 'Metoda uczenia komputerów poprzez analizę danych, bez bezpośredniego programowania każdej czynności, to:',
    options: [
      "Strategia 'kopiuj-wklej aż zadziała'",
      "Kurs komputerowy dla robotów: 'Excel dla zaawansowanych'",
      'Uczenie maszynowe (Machine Learning)',
      "Magia informatyczna – czyli 'działa, ale nie wiadomo czemu'"
    ],
    correct: 3,
    definitionId: 3
  },
  {
    id: 17,
    question: 'Zestaw zasad i regulacji mających na celu odpowiedzialne i bezpieczne wykorzystanie AI to:',
    options: [
      'Instrukcja BHP przy rozmowie z ChatGPT-em',
      'Etyka sztucznej inteligencji (AI Ethics)',
      'Regulamin serwera Discorda dla robotów',
      'Tajny kodeks Jedi dla maszyn'
    ],
    correct: 2,
    definitionId: 2
  },
  {
    id: 18,
    question: 'Proces podejmowania decyzji biznesowych w oparciu o analizę faktów i danych to:',
    options: [
      'Data-Driven Decisions',
      'Konsultacja z wróżką Excela, arkuszem prorokiem',
      'Rzut monetą, ale w PowerPoincie',
      'Zgadywanie z użyciem Excela i kawy'
    ],
    correct: 1,
    definitionId: 1
  },
  {
    id: 19,
    question: 'Spersonalizowane wersje chatbotów AI, dostosowane do konkretnych zadań lub branż, to:',
    options: [
      'Boty przebierane w stroje branżowe',
      'Asystenci z AIKEA – sam składasz, jak chcesz',
      'Custom GPTs / Gems',
      'Cyfrowi koledzy po fachu z syndromem przepracowania'
    ],
    correct: 3,
    definitionId: 3
  },
  {
    id: 20,
    question: 'Techniki manipulowania systemami AI poprzez specjalnie skonstruowane zapytania w celu obejścia zabezpieczeń to:',
    options: [
      'Metoda „na wnuczka” dla botów',
      'Prompt Hacking',
      'Hakerskie zaklęcia w stylu „Open Sesame, ChatGPT!”',
      'Szeptanie do AI słodkich kłamstw'
    ],
    correct: 2,
    definitionId: 2
  },
  {
    id: 21,
    question: 'Technologia, która identyfikuje nietypowe wzorce lub odstępstwa w danych, to:',
    options: [
      'Prompt Hacking',
      'Algorytm: „To wygląda podejrzanie, szefie!”',
      'Tryb detektywa danych – wersja Sherlock 2.0',
      'Wykrywanie anomalii (Anomaly detection)'
    ],
    correct: 4,
    definitionId: 4
  },
  {
    id: 22,
    question: 'Dziedzina AI, która uczy komputery rozumienia, interpretacji i generowania ludzkiego języka, to:',
    options: [
      'Przetwarzanie języka naturalnego (Natural Language Processing – NLP)',
      'Tłumacz Google na sterydach',
      'Sztuka small talku z komputerem',
      'Kurs „Język ludzki dla początkujących botów”'
    ],
    correct: 1,
    definitionId: 1
  }
];
