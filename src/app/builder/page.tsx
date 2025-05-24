"use client";

import { useState } from "react";
import { ResumePreview } from "./components/ResumePreview";

const sections = ["Summary", "Experience", "Skills"] as const;
type Section = (typeof sections)[number];

export default function ResumeBuilderPage() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");

  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>("Summary");

  function clearForm() {
    setName("");
    setTitle("");
    setSummary("");
    setExperience("");
    setSkills("");
  }

  async function handleGenerateAI() {
    if (!name.trim() || !title.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setSummary(
        "AI-generated professional summary to highlight your strengths."
      );
      setExperience("• AI-generated experience 1\n• AI-generated experience 2");
      setSkills("React, Node.js, TypeScript, AI, Communication");
      setLoading(false);
    }, 2000);
  }

  const canGenerate = !!name.trim() && !!title.trim();

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 py-12 px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row gap-12">
      {/* FORM CARD */}
      <section className="lg:w-1/2 bg-white rounded-xl shadow-xl p-8 flex flex-col sticky top-24 h-[calc(100vh-6rem)] overflow-auto">
        <h1 className="text-3xl font-extrabold mb-8 text-teal-600 tracking-wide">
          Build Your Resume
        </h1>

        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-semibold mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-b-2 border-gray-300 focus:border-teal-500 outline-none py-2 text-lg font-medium transition"
            maxLength={50}
          />
          <p className="text-xs text-gray-400 mt-1">
            {name.length} / 50 characters
          </p>
        </div>

        <div className="mb-8">
          <label htmlFor="title" className="block text-sm font-semibold mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            type="text"
            placeholder="Frontend Developer"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border-b-2 border-gray-300 focus:border-teal-500 outline-none py-2 text-lg font-medium transition"
            maxLength={50}
          />
          <p className="text-xs text-gray-400 mt-1">
            {title.length} / 50 characters
          </p>
        </div>

        {/* Section tabs */}
        <nav className="flex space-x-6 border-b border-gray-200 mb-6">
          {sections.map((sec, idx) => (
            <button
              key={`${sec}-${idx}`}
              onClick={() => setActiveSection(sec)}
              className={`pb-2 font-semibold text-gray-700 ${
                activeSection === sec
                  ? "border-b-4 border-teal-600 text-teal-600"
                  : "hover:text-teal-500 transition"
              }`}
            >
              {sec}
            </button>
          ))}
        </nav>

        {/* Section content */}
        <div className="flex-grow">
          {activeSection === "Summary" && (
            <div>
              <textarea
                rows={5}
                placeholder="Write a brief summary about yourself..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 text-gray-900 font-medium resize-y focus:border-teal-500 outline-none transition"
                maxLength={500}
              />
              <p className="text-xs text-gray-400 mt-1">
                {summary.length} / 500 characters
              </p>
            </div>
          )}

          {activeSection === "Experience" && (
            <div>
              <textarea
                rows={6}
                placeholder="Describe your work experience..."
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 text-gray-900 font-medium resize-y focus:border-teal-500 outline-none transition"
                maxLength={1000}
              />
              <p className="text-xs text-gray-400 mt-1">
                {experience.length} / 1000 characters
              </p>
            </div>
          )}

          {activeSection === "Skills" && (
            <div>
              <input
                type="text"
                placeholder="List your skills separated by commas"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="w-full border-b-2 border-gray-300 focus:border-teal-500 outline-none py-2 text-lg font-medium transition"
                maxLength={250}
              />
              <p className="text-xs text-gray-400 mt-1">
                {skills.length} / 250 characters
              </p>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handleGenerateAI}
            disabled={!canGenerate || loading}
            title={
              !canGenerate ? "Please fill in Full Name and Title" : undefined
            }
            className={`rounded-md px-6 py-3 font-semibold text-white transition ${
              canGenerate && !loading
                ? "bg-teal-600 hover:bg-teal-700 shadow-lg"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            {loading ? "Generating AI..." : "Generate with AI"}
          </button>

          <button
            onClick={clearForm}
            disabled={loading}
            className="text-sm underline text-gray-500 hover:text-gray-700 disabled:text-gray-300"
          >
            Clear Form
          </button>
        </div>
      </section>

      {/* PREVIEW CARD */}
      <section
        aria-label="Resume preview"
        className="lg:w-1/2 bg-white rounded-xl shadow-xl p-6 sticky top-24 h-[calc(100vh-6rem)] overflow-auto"
      >
        <h2 className="text-2xl font-semibold text-teal-600 mb-6">
          Resume Preview
        </h2>
        <div className="border border-gray-200 rounded-md shadow-inner p-6 bg-gray-50">
          <ResumePreview
            name={name.trim() || "Your Name"}
            title={title.trim() || "Your Title"}
            summary={
              summary.trim() || "Summary will appear here after AI generation."
            }
            experience={
              experience.trim() || "Experience details will appear here."
            }
            skills={skills.trim() || "Skills will appear here."}
          />
        </div>
      </section>
    </main>
  );
}
