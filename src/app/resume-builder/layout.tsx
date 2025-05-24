import type { Metadata } from "next";

import SideBar from "@/components/SideBar";
import Navigation from "./components/Navigation";
import SmallScreenAlert from "./components/SmallScreenAlert";
import TemplateSelector from "./components/TemplateSelector";

export const metadata: Metadata = {
  title: "Resume Sprint - Create Your Resume",
  description: "AI-powered free resume builder — no account needed",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SmallScreenAlert />
      <div className="hidden min-h-screen sm:flex flex-col bg-[#F9FAFB] text-gray-900">
        {/* Header */}

        <header className="max-w-8xl mx-auto w-full px-6 py-3 flex justify-between items-center border-b border-gray-200">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Resume Sprint
          </h1>
          <Navigation />

          {/* <div className="flex flex-row gap-2 flex-1 justify-center items-center"> */}
          {/* <AiGenerateButton /> */}
          <TemplateSelector />
          {/* </div> */}
        </header>

        {/* Main Content */}

        <div className="flex flex-col lg:flex-row lg:flex-1 max-w-8xl mx-auto w-full px-6 py-4 gap-10 ">
          {/* Sidebar */}
          <SideBar />

          {/* Content */}
          <main className="flex-1 bg-white rounded-2xl shadow-md px-6 py-4 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
