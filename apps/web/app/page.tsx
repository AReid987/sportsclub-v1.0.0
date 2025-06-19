export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Sportsclub</h1>
        <p className="text-2xl mb-8">Play Smart. Win Big.</p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform">
          Get Started
        </button>
      </div>
    </div>
  );
}
