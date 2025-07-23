export default function Ebook() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Free E-book</h1>
      <p className="mb-6">
        Download our free guide on building a resilient community in Bozrah. This e-book is filled with practical advice, insights, and tools you can use right away.
      </p>
      <a
        href="/ebook.pdf"
        download
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download E-book (PDF)
      </a>
    </div>
  );
}