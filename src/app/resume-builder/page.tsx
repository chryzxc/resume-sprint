"use client";
import AiChatButton from "./components/AiChatButton";
import dynamic from "next/dynamic";

const PdfView = dynamic(() => import("@/components/PdfView"), { ssr: false });
const CreateResumePage = () => {
  return (
    <main className="min-h-screen">
      <PdfView />

      <AiChatButton />
    </main>
  );
};

export default CreateResumePage;
