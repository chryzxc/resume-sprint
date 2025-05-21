export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-indigo-900 via-indigo-800 to-indigo-600 text-white py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 w-[60rem] h-[60rem] -translate-x-1/2 bg-indigo-500 opacity-30 rounded-full blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight drop-shadow-md">
          Create a Resume Instantly with AI
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto">
          No sign-up. No hassle. Just fast, intelligent, beautiful resumes for
          free.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/builder"
            className="rounded-full bg-white px-8 py-4 text-indigo-700 font-semibold shadow-xl hover:bg-gray-100 transition"
          >
            Start Building
          </a>
          <a
            href="#features"
            className="rounded-full border border-white/30 px-8 py-4 text-white hover:bg-white/10 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
