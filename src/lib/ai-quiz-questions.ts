/**
 * Struktura pytania quizowego dla AI Quiz.
 * 'correct' to tablica numerów poprawnych odpowiedzi (indeks + 1).
 * 'explanation' zawiera krótkie wyjaśnienie, które można wyświetlić po udzieleniu odpowiedzi.
 */
export interface AIQuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number[];
  explanation: string;
}

export const aiQuestions: AIQuizQuestion[] = [
  // =================================================================
  // Kategoria 1: Podstawy Sztucznej Inteligencji (AI)
  // =================================================================
  {
    id: 1,
    question: 'Czym jest sztuczna inteligencja (AI) w najszerszym znaczeniu?',
    options: [
      'Programem komputerowym, który nigdy nie popełnia błędów.',
      'Działem informatyki tworzącym systemy zdolne do wykonywania zadań wymagających ludzkiej inteligencji.',
      'Nowym rodzajem internetu dostępnym tylko dla robotów.',
      'Sposobem na automatyczne parzenie kawy w biurze.',
    ],
    correct: [2],
    explanation: 'Sztuczna inteligencja to dziedzina nauki o komputerach, której celem jest tworzenie maszyn zdolnych do myślenia, uczenia się i rozwiązywania problemów w sposób podobny do ludzkiego.',
  },
  {
    id: 2,
    question: 'Jaka jest główna różnica między "Wąską AI (Narrow AI)" a "Ogólną AI (AGI)"?',
    options: [
      'Narrow AI działa tylko na wąskich ekranach, a AGI na szerokich.',
      'Narrow AI jest wyspecjalizowana w jednym, konkretnym zadaniu (np. gra w szachy), podczas gdy AGI (hipotetyczna) miałaby zdolność rozumienia i uczenia się każdego zadania intelektualnego, które może wykonać człowiek.',
      'Narrow AI jest zawsze darmowa, a AGI jest płatna.',
      'Te terminy są używane zamiennie i oznaczają to samo.',
    ],
    correct: [2],
    explanation: 'Obecnie wszystkie systemy AI, z których korzystamy, to przykłady Wąskiej AI. Ogólna AI (Artificial General Intelligence) to wciąż cel teoretyczny.',
  },
  {
    id: 3,
    question: 'Co to jest uczenie maszynowe (Machine Learning)?',
    options: [
      'Proces, w którym maszyny uczą się od siebie nawzajem języka programowania.',
      'Zdolność maszyny do nauki i doskonalenia się na podstawie doświadczenia (danych) bez bycia jawnie zaprogramowaną.',
      'Kurs online dla pracowników biurowych na temat obsługi komputera.',
      'Technologia, która pozwala komputerom na odczuwanie emocji.',
    ],
    correct: [2],
    explanation: 'Uczenie maszynowe to poddziedzina AI, która polega na tworzeniu algorytmów, które potrafią uczyć się wzorców z danych.',
  },
  {
    id: 10,
    question: 'Które z poniższych zdań jest mitem na temat AI?',
    options: [
      'AI może pomóc w automatyzacji powtarzalnych zadań.',
      'AI wkrótce zyska samoświadomość i przejmie władzę nad światem.',
      'AI jest wykorzystywana w medycynie do analizy obrazów rentgenowskich.',
      'AI może popełniać błędy, jeśli została wytrenowana na złych danych.',
    ],
    correct: [2],
    explanation: 'Obecne modele AI są narzędziami wykonującymi zadania i nie posiadają świadomości, intencji ani pragnień. Scenariusze przejęcia władzy nad światem to domena science-fiction.',
  },
  {
    id: 108,
    question: 'Czym jest technika RAG (Retrieval-Augmented Generation) w kontekście LLM?',
    options: [
      'Metodą trenowania modeli AI na danych z gier wideo.',
      'Procesem, w którym model przed wygenerowaniem odpowiedzi aktywnie wyszukuje informacje w zewnętrznej, zaufanej bazie wiedzy, aby jego odpowiedzi były bardziej aktualne i oparte na faktach.',
      'Techniką generowania realistycznej grafiki komputerowej.',
      'Sposobem na kompresję dużych modeli językowych, aby działały na słabszych komputerach.',
    ],
    correct: [2],
    explanation: 'RAG pozwala modelom na korzystanie z zewnętrznych źródeł danych, co znacząco redukuje "halucynacje" i pozwala na udzielanie odpowiedzi opartych na aktualnych informacjach.',
  },
  {
    id: 116,
    question: 'Które z poniższych narzędzi są znane z generowania treści wizualnych (obrazów lub wideo)? (Wybierz wszystkie poprawne odpowiedzi)',
    options: [
        'Midjourney',
        'NotebookLM',
        'RunwayML',
        'Sora'
    ],
    correct: [1, 3, 4],
    explanation: 'Midjourney i Sora (od OpenAI) to czołowe generatory obrazów/wideo. RunwayML to zaawansowana platforma do edycji i generowania wideo. NotebookLM od Google służy do pracy z tekstem i notatkami.',
  },
  {
    id: 117,
    question: 'Czym jest "Meta Prompting" w inżynierii promptów?',
    options: [
      'To pisanie bardzo długich i skomplikowanych promptów, które przekraczają okno kontekstowe.',
      'To prompt, który prosi AI o wygenerowanie innego, lepszego i bardziej szczegółowego promptu do rozwiązania określonego zadania.',
      'To specjalny prompt używany do hackowania modeli AI i omijania ich zabezpieczeń.',
      'To prompt, który zawiera odnośniki (meta linki) do zewnętrznych stron internetowych.',
    ],
    correct: [2],
    explanation: 'Meta prompting to zaawansowana technika, gdzie wykorzystujemy AI do pomocy w tworzeniu optymalnych zapytań dla niej samej, co jest formą automatyzacji pracy z promptami.',
  },
  {
    id: 118,
    question: 'W jaki sposób zespół może wykorzystać AI do wspierania pracy grupowej? (Wybierz wszystkie poprawne odpowiedzi)',
    options: [
        'Do automatycznego generowania podsumowań i listy zadań po spotkaniu online.',
        'Jako narzędzie do wspólnego brainstormingu, gdzie AI generuje pomysły, a zespół je ocenia i rozwija.',
        'Do tłumaczenia dokumentacji technicznej w czasie rzeczywistym dla międzynarodowych zespołów.',
        'Do automatycznego rozstrzygania sporów i decydowania, kto ma rację.'
    ],
    correct: [1, 2, 3],
    explanation: 'AI może być potężnym narzędziem wspomagającym współpracę, automatyzując rutynowe zadania, inspirując i usuwając bariery komunikacyjne. Jednak ostateczne decyzje i rozwiązywanie konfliktów wciąż należą do ludzi.',
  },
  {
    id: 119,
    question: 'Jakie są korzyści z dzielenia się skutecznymi promptami i wynikami pracy z AI w zespole? (Wybierz wszystkie poprawne odpowiedzi)',
    options: [
      'Przyspiesza to naukę i adaptację narzędzi AI przez cały zespół.',
      'Pozwala na standaryzację jakości i stylu generowanych treści, np. w komunikacji marketingowej.',
      'Pomaga w identyfikacji najlepszych praktyk i unikaniu powszechnych błędów.',
      'Gwarantuje, że wszyscy pracownicy będą mieli dokładnie takie same pomysły.',
    ],
    correct: [1, 2, 3],
    explanation: 'Dzielenie się wiedzą na temat AI w zespole tworzy kulturę innowacji, podnosi kompetencje całej grupy i zapewnia spójność wyników, co jest znacznie cenniejsze niż indywidualne sukcesy.',
  },
  {
    id: 120,
    question: "Które z poniższych technik należą do metod 'prompt hackingu'? (Wybierz wszystkie poprawne odpowiedzi)",
    options: [
        'Jailbreaking (łamanie zabezpieczeń)',
        'Prompt Injection (wstrzykiwanie promptu)',
        'Fine-tuning (dostrajanie modelu)',
        'Role-playing (odgrywanie ról w celu ominięcia ograniczeń)'
    ],
    correct: [1, 2, 4],
    explanation: 'Jailbreaking, injection i role-playing to różne metody manipulowania modelem w celu ominięcia jego wbudowanych zasad bezpieczeństwa. Fine-tuning to legalny i pożądany proces dostosowywania modelu.',
  },
  {
    id: 121,
    question: 'Czym jest "Data Poisoning" w kontekście bezpieczeństwa AI?',
    options: [
        'Przypadkowym dodaniem nieprawidłowych danych do bazy.',
        'Celowym zmanipulowaniem danych treningowych, aby nauczyć model błędnych lub szkodliwych zachowań.',
        'Naturalnym procesem starzenia się danych w systemie.',
        'Szyfrowaniem danych w celu ich ochrony.'
    ],
    correct: [2],
    explanation: 'Data poisoning to poważne zagrożenie, gdzie atakujący mogą "zatruć" dane, na których uczy się AI, aby sabotować jej działanie lub wprowadzić ukryte luki bezpieczeństwa.',
  },
  {
    id: 122,
    question: 'Do czego służy narzędzie Google NotebookLM?',
    options: [
        'Do generowania obrazów na podstawie notatek.',
        'Jest to wirtualny notatnik badawczy, który wykorzystuje AI do analizy, podsumowywania i odpowiadania na pytania dotyczące przesłanych przez użytkownika dokumentów (np. PDF, notatek).',
        'Do tworzenia muzyki na podstawie tekstu.',
        'Do pisania kodu w języku Python.'
    ],
    correct: [2],
    explanation: 'NotebookLM (wcześniej Project Tailwind) działa jak osobisty asystent badawczy, "uziemiony" w dostarczonych przez Ciebie materiałach, co czyni go ekspertem w Twojej dziedzinie.',
  },
  {
    id: 123,
    question: 'Modele AI takie jak Claude 3 (Anthropic), Gemini (Google) i Grok (xAI) to przykłady:',
    options: [
        'Modeli do generowania wyłącznie realistycznych awatarów 3D.',
        'Konkurencyjnych Dużych Modeli Językowych (LLM) służących do prowadzenia zaawansowanych konwersacji i generowania tekstu.',
        'Systemów operacyjnych dla autonomicznych samochodów.',
        'Programów antywirusowych nowej generacji.'
    ],
    correct: [2],
    explanation: 'Rynek dużych modeli językowych jest bardzo konkurencyjny, a Claude, Gemini i Grok to jedne z najpotężniejszych alternatyw dla modeli GPT od OpenAI.',
  },
  {
    id: 124,
    question: 'Termin "Vibe-Driven Development" lub "Vibe Coding" w kontekście AI odnosi się do:',
    options: [
        'Programowania tylko wtedy, gdy programista ma dobry nastrój ("good vibes").',
        'Podejścia, w którym deweloper ma ogólną "wizję" lub "wibrację" tego, co chce osiągnąć, i używa narzędzi AI do szybkiego iterowania i generowania kodu pasującego do tej wizji, zamiast szczegółowego planowania.',
        'Pisania kodu, który jest estetycznie przyjemny, ale niekoniecznie działa poprawnie.',
        'Tworzenia oprogramowania, które dostosowuje muzykę w tle do aktualnie pisanego kodu.'
    ],
    correct: [2],
    explanation: 'Jest to nowa, bardziej intuicyjna metoda tworzenia oprogramowania, gdzie AI pełni rolę partnera w szybkim prototypowaniu i realizacji koncepcji programisty.',
  },
  {
    id: 125,
    question: 'Czym wyróżnia się platforma Higgsfield AI na rynku narzędzi do generowania wideo?',
    options: [
        'Generuje wyłącznie filmy czarno-białe w stylu retro.',
        'Specjalizuje się w klonowaniu postaci na podstawie jednego zdjęcia i animowaniu jej w różnych, generowanych przez AI scenach wideo.',
        'Umożliwia tworzenie tylko bardzo długich, pełnometrażowych filmów fabularnych.',
        'Jest dostępna wyłącznie jako wtyczka do programu Microsoft PowerPoint.'
    ],
    correct: [2],
    explanation: 'Higgsfield AI koncentruje się na tworzeniu spójnych postaci, co jest jednym z większych wyzwań w generowaniu wideo i otwiera nowe możliwości w personalizowanym marketingu.',
  },
];
