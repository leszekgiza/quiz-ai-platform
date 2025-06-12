import { QuizQuestion } from './types';

export const questions: QuizQuestion[] = [
  {
    "id": 1,
    "question": "Czym jest token w modelu językowym?",
    "options": [
      "Całe zdanie wpisywane przez użytkownika i przetwarzane jako jedna całość",
      "Klucz do API używany do uwierzytelnienia przy dostępie do modelu AI",
      "Fragment tekstu (słowo, część słowa lub znak) przetwarzany przez model",
      "Wskaźnik temperatury modelu kontrolujący jego kreatywność i różnorodność odpowiedzi"
    ],
    "correct": 3,
    "definitionId": 1
  },
  {
    "id": 2,
    "question": "Co oznacza halucynacja w kontekście AI?",
    "options": [
      "Gdy AI cytuje źródła naukowe, lecz nie podaje ich poprawnie ani w kontekście",
      "Gdy AI generuje fałszywe, ale wiarygodnie brzmiące informacje",
      "Gdy model działa w trybie „kreatywnym\" i wymyśla nowe scenariusze",
      "Gdy użytkownik zmienia prompt w trakcie sesji konwersacyjnej"
    ],
    "correct": 2,
    "definitionId": 2
  },
  {
    "id": 3,
    "question": "Dlaczego należy być ostrożnym z danymi firmowymi w modelach AI?",
    "options": [
      "Bo wtedy model nie działa poprawnie i może zwracać błędne wyniki",
      "Bo dane są przesyłane do dostawcy modelu, a w dodatku mogą zostać użyte do trenowania modelu",
      "Bo spowalnia to działanie chatu, szczególnie przy dużych zbiorach danych",
      "Bo tracimy do nich dostęp po zakończeniu sesji i nie możemy ich odzyskać"
    ],
    "correct": 2,
    "definitionId": 3
  },
  {
    "id": 4,
    "question": "Jak najlepiej zabezpieczyć dane firmowe, używając AI?",
    "options": [
      "Zawsze pisać pełną nazwę firmy, aby ułatwić identyfikację",
      "Włączać tryb kreatywny, żeby model nie analizował danych zbyt literalnie",
      "Stosując anonimizację lub pseudoanonimizację danych, aby nie można było ich przypisać do konkretnej firmy lub osoby",
      "Wysyłać dane tylko w formacie PDF, który nie zawsze jest przeszukiwalny"
    ],
    "correct": 3,
    "definitionId": 4
  },
  {
    "id": 5,
    "question": "Który element ma najmniejszy wpływ na jakość odpowiedzi AI?",
    "options": [
      "Kontekst i szczegóły zadania zawartego w prompcie wejściowym",
      "Format oczekiwanej odpowiedzi, np. czy ma to być lista czy tabela",
      "Liczba emoji w prompcie",
      "Jasne określenie roli AI oraz jej specjalizacji w danym zadaniu"
    ],
    "correct": 3,
    "definitionId": 5
  },
  {
    "id": 6,
    "question": "Kiedy warto używać chain-of-thought prompting?",
    "options": [
      "Gdy pytanie dotyczy tylko prostych faktów i nie wymaga głębokiego rozumowania",
      "Gdy potrzebujemy krokowego rozumowania i analizy logicznej lub matematycznej",
      "Przy tworzeniu treści kreatywnych, takich jak opowiadania lub scenariusze",
      "Przy kodowaniu, aby ułatwić dekompozycję problemów programistycznych"
    ],
    "correct": 2,
    "definitionId": 6
  },
  {
    "id": 7,
    "question": "Co oznacza RAG (Retrieval-Augmented Generation)?",
    "options": [
      "Narzędzie do testowania promptów, służące do weryfikacji ich skuteczności",
      "Technika łącząca generowanie tekstu z wyszukiwaniem informacji w bazach danych lub dokumentach",
      "Tryb kreatywny modelu używany w aplikacjach rozrywkowych i edukacyjnych",
      "Algorytm do wykrywania halucynacji, bazujący na analizie spójności danych"
    ],
    "correct": 2,
    "definitionId": 7
  },
  {
    "id": 8,
    "question": "W jakim celu tworzy się customowego GPT-a lub Gema?",
    "options": [
      "Aby lepiej zarządzać czasem pracy w zespołach projektowych",
      "Aby dostosować model do specyficznej wiedzy i potrzeb organizacji",
      "Aby obejść płatną wersję i uzyskać dostęp do zaawansowanych funkcji",
      "Aby przyspieszyć działanie innych narzędzi wspierających AI"
    ],
    "correct": 2,
    "definitionId": 8
  },
  {
    "id": 9,
    "question": "Jakie są główne ryzyka nieświadomego użycia danych firmowych w AI?",
    "options": [
      "Wolniejsze działanie modelu, co może wpływać na komfort pracy",
      "Automatyczne usunięcie konta lub zablokowanie przez administratora",
      "Potencjalny wyciek danych i naruszenie poufności informacji firmowych",
      "Ograniczenie długości promptów i mniejsza dokładność odpowiedzi"
    ],
    "correct": 3,
    "definitionId": 9
  },
  {
    "id": 10,
    "question": "Które narzędzie AI służy głównie do generowania realistycznego głosu?",
    "options": [
      "Suno",
      "MidJourney",
      "ElevenLabs",
      "Runway ML"
    ],
    "correct": 3,
    "definitionId": 10
  },
  {
    "id": 11,
    "question": "Czym charakteryzuje się technika Least-to-Most Prompting?",
    "options": [
      "Ograniczaniem liczby tokenów w celu redukcji kosztów operacyjnych",
      "Rozbijaniem złożonego problemu na prostsze części, rozwiązywane krok po kroku",
      "Zwiększaniem halucynacji poprzez skrócenie odpowiedzi modelu",
      "Testowaniem modelu błędnymi danymi w celu wykrywania niezgodności"
    ],
    "correct": 2,
    "definitionId": 11
  },
  {
    "id": 12,
    "question": "Co to jest fine-tuning modelu językowego AI?",
    "options": [
      "Proces, w którym użytkownik wybiera najlepszy prompt spośród kilku dostępnych",
      "Technika umożliwiająca modelowi analizowanie obrazów i dźwięków w czasie rzeczywistym",
      "Dodatkowe trenowanie już istniejącego modelu AI na nowych, specyficznych danych",
      "Tryb działania, w którym model AI automatycznie optymalizuje czas odpowiedzi"
    ],
    "correct": 3,
    "definitionId": 12
  },
  {
    "id": 13,
    "question": "Jakie elementy powinien zawierać dobrze skonstruowany prompt?",
    "options": [
      "Pytanie sformułowane ogólnie, bez nadawania roli modelowi",
      "Jasno zdefiniowane zadanie, kontekst, rolę i przykład",
      "Krótkie polecenie z wykorzystaniem skrótów i symboli",
      "Swobodny styl wypowiedzi z językiem potocznym"
    ],
    "correct": 2,
    "definitionId": 13
  },
  {
    "id": 14,
    "question": "Kiedy warto używać modeli reasoning?",
    "options": [
      "Gdy priorytetem jest szybkość i niski koszt",
      "Gdy chcemy wygenerować obrazy o wysokiej rozdzielczości",
      "Gdy potrzebujemy głębokiej analizy i rozwiązywania problemów logicznych",
      "Gdy wystarczy krótka, szybka odpowiedź do prostych zadań"
    ],
    "correct": 3,
    "definitionId": 14
  },
  {
    "id": 15,
    "question": "Co to jest meta prompting?",
    "options": [
      "Prompt napisany przez innego użytkownika",
      "Prompt służący do trenowania modelu",
      "Prompt instruujący AI, jak tworzyć lub ulepszać inne prompty",
      "Prompt używany wyłącznie w aplikacjach Google"
    ],
    "correct": 3,
    "definitionId": 15
  },
  {
    "id": 16,
    "question": "Jak działa self-consistency w AI?",
    "options": [
      "Model sam sprawdza poprawność swojej odpowiedzi",
      "Model generuje kilka wersji odpowiedzi i wybiera najbardziej spójną",
      "Model analizuje tylko własne dane treningowe",
      "Model nigdy nie generuje halucynacji"
    ],
    "correct": 2,
    "definitionId": 16
  },
  {
    "id": 17,
    "question": "Co to jest okno kontekstowe modelu językowego?",
    "options": [
      "Całkowita liczba linii kodu analizowanych podczas sesji",
      "Maksymalna liczba tokenów, którą model może przetworzyć w ramach całej konwersacji",
      "Specjalny typ interfejsu użytkownika",
      "Liczba jednoczesnych odpowiedzi generowanych równolegle"
    ],
    "correct": 2,
    "definitionId": 17
  },
  {
    "id": 18,
    "question": "Które narzędzie służy głównie do generowania muzyki AI?",
    "options": [
      "Runway ML",
      "ElevenLabs",
      "Suno",
      "Midjourney"
    ],
    "correct": 3,
    "definitionId": 18
  }
];
