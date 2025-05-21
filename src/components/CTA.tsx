export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-28 sm:py-36">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full blur-[120px]" />
      </div>
      <div className="text-center text-white max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold sm:text-5xl">
          Ready to Make Your Resume Shine?
        </h2>
        <p className="mt-6 text-lg text-indigo-100">
          With our AI builder, you’ll get a professional, polished resume in
          minutes.
        </p>
        <div className="mt-10">
          <a
            href="/builder"
            className="inline-block rounded-full bg-white px-8 py-4 text-indigo-700 font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Build for Free Now
          </a>
        </div>
      </div>
    </section>
  );
}
