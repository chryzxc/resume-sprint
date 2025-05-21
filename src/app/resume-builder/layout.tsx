import type { Metadata } from "next";

import SideBar from "@/components/SideBar";
import DownloadButton from "./components/DownloadButton";
import Navigation from "./components/Navigation";
import TemplateSelector from "./components/TemplateSelector";

export const metadata: Metadata = {
  title: "Resume Sprint - Create Your Resume",
  description: "AI-powered free resume builder — no account needed",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className="min-h-screen flex flex-col bg-[#F9FAFB] text-gray-900"
      style={{
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Header */}
      <header className="max-w-8xl mx-auto w-full px-6 py-6 flex justify-between items-center border-b border-gray-200">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Resume Sprint
        </h1>
        <Navigation />
        <TemplateSelector />
      </header>

      {/* Main Content */}
      <div className="flex flex-1 max-w-8xl mx-auto w-full px-6 py-4 gap-10">
        {/* Sidebar */}
        <SideBar />

        {/* Content */}
        <main className="flex-1 bg-white rounded-2xl shadow-md p-10 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
