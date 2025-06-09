export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Test Page</h1>
      <p className="text-lg">If you can see this, routing is working!</p>
      <a href="/" className="mt-4 inline-block text-blue-600 hover:underline">
        ← Back to Home
      </a>
    </div>
  );
}
