import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <Head>
        <title>Hello AI!</title>
        <meta name="description" content="Witaj w mojej pierwszej aplikacji Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-6">
          Hello AI!
        </h1>
        <p className="text-xl text-gray-600">
          Witaj w mojej pierwszej aplikacji Next.js na Vercel!
        </p>
      </main>
      
      <footer className="mt-12 text-gray-500 text-sm">
        <p>Strona stworzona z Next.js i ❤️</p>
      </footer>
    </div>
  );
}
