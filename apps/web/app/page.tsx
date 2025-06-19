export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center">
      <div className="text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Sportsclub</h1>
        <p className="text-xl md:text-2xl mb-8">Play Smart. Win Big.</p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-xl hover:shadow-2xl">
          Get Started
        </button>
        <div className="mt-8 flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-2 sm:space-y-0 text-sm">
          <div className="flex items-center justify-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Free trial included
          </div>
          <div className="flex items-center justify-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Real cash prizes
          </div>
          <div className="flex items-center justify-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Cancel anytime
          </div>
        </div>
      </div>
    </div>
  );
}
