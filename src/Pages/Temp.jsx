export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="bg-[#f5f5f5] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Building Bozrah</h1>
          <p className="text-lg md:text-xl text-gray-600">
            Helping individuals and families become more self-sufficient, resilient, and prepared.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <p className="text-gray-700 leading-relaxed">
            We offer consulting, tools, and community resources designed to guide people toward a more sustainable and prepared lifestyle — no matter where you’re starting from.
          </p>
        </div>
      </section>
    </main>
  );
}