import { createClient } from '@supabase/supabase-js';

// Konfiguracja klienta Supabase
// W produkcji te wartości powinny być pobierane ze zmiennych środowiskowych
// Poniższe wartości są tymczasowe, tylko do celów testowych
const supabaseUrl = 'https://qzvpjpfxiqfuzhipqrjj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6dnBqcGZ4aXFmdXpoaXBxcmpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2Mjc0MzgsImV4cCI6MjA2NTIwMzQzOH0.8yO54rHVoiyCDZIcEbNrAKbIKAkY_awEF9IFdaBH7EA';

console.log('Inicjalizacja klienta Supabase z URL:', supabaseUrl);

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // Wyłączamy przechowywanie sesji
    autoRefreshToken: false,
    detectSessionInUrl: false,
    flowType: 'pkce',
  },
  global: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    },
  },
});

// Typy dla wyników quizu
export interface QuizResult {
  id: number;
  nickname: string;
  score: number;
  total: number;
  created_at: string;
};

// Funkcja do zapisywania wyniku
export async function saveQuizResult(result: Omit<QuizResult, 'id' | 'created_at'>) {
  console.log('Zapisywanie wyniku do Supabase:', result);
  try {
    const { data, error } = await supabase
      .from('quiz_results')
      .insert([{
        nickname: result.nickname,
        score: result.score,
        total: result.total
        // Nie musimy podawać created_at, Supabase automatycznie ustawi tę wartość
      }])
      .select();

    if (error) {
      console.error('Błąd z Supabase:', error);
      throw error;
    }

    console.log('Zapisano wynik:', data);
    return data?.[0];
  } catch (error) {
    console.error('Błąd w saveQuizResult:', error);
    throw error;
  }
}

// Funkcja do pobierania najlepszych wyników
export async function getTopResults(limit = 10): Promise<QuizResult[]> {
  console.log('Pobieranie najlepszych wyników...');
  try {
    const { data, error } = await supabase
      .from('quiz_results')
      .select('*')
      .order('score', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Błąd z Supabase przy pobieraniu wyników:', error);
      return [];
    }

    console.log('Pobrano wyniki:', data);
    return data || [];
  } catch (error) {
    console.error('Błąd w getTopResults:', error);
    return [];
  }
}
