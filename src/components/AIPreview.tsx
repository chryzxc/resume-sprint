"use client";
import { Typewriter } from "react-simple-typewriter";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function AIPreview() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-900 via-indigo-900 to-indigo-800 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-500 opacity-20 blur-[100px] rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 opacity-10 blur-[90px] rounded-full z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <div className="inline-flex items-center gap-3 mb-6">
          <SparklesIcon className="h-8 w-8 text-yellow-300 animate-pulse" />
          <span className="text-yellow-300 font-semibold text-lg tracking-wide uppercase">
            See the AI in Action
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Instant Resume Generation
        </h2>

        <p className="max-w-2xl mx-auto text-indigo-100 text-lg mb-12">
          Our AI crafts personalized resume content live — based on your skills,
          experience, and role preferences.
        </p>

        {/* Fancy Glass Card */}
        <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 sm:p-12 shadow-xl max-w-3xl mx-auto text-left font-mono text-indigo-100 animate-fade-in">
          <p className="mb-4">
            <span className="text-yellow-300 font-semibold">Summary:</span>{" "}
            <Typewriter
              words={[
                "Experienced Software Engineer skilled in React, Node.js, and AI tools.",
                "Creative Product Designer focused on user-centered digital experiences.",
                "Detail-oriented Data Analyst with a background in machine learning and Python.",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2500}
            />
          </p>

          <p className="mt-6">
            <span className="text-yellow-300 font-semibold">Experience:</span>
            <br />
            • Lead Developer at Startup Inc. (2022 - Present)
            <br />
            • Frontend Engineer at CodeX (2020 - 2022)
            <br />• Intern at DevHub (2019 - 2020)
          </p>
        </div>
      </div>
    </section>
  );
}
