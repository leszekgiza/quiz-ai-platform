import { definitions } from '@/lib/quiz-definitions';
import Link from 'next/link';

export default function GlossaryPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Słownik pojęć Generative AI</h1>
        <Link 
          href="/quiz" 
          className="text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Wróć do quizu
        </Link>
        <div className="space-y-6">
          {definitions.map((def) => (
            <div key={def.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{def.term}</h2>
              <p className="text-gray-700">{def.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
