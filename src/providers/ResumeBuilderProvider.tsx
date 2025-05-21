import React, { createContext, useContext, useState, ReactNode } from "react";

interface ResumeBuilderContextType {
  activeTab: string;
  setActiveTab: (label: string) => void;

  generatedAIContent: string | null;
  setGeneratedAIContent: (content: string) => void;
}

const ResumeBuilderContext = createContext<
  ResumeBuilderContextType | undefined
>(undefined);

export const ResumeBuilderProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeTab, setActiveTab] = useState("Personal Information");
  const [generatedAIContent, setGeneratedAIContent] = useState<string | null>(
    null
  );

  return (
    <ResumeBuilderContext.Provider
      value={{
        activeTab,
        setActiveTab,
        generatedAIContent,
        setGeneratedAIContent,
      }}
    >
      {children}
    </ResumeBuilderContext.Provider>
  );
};

export const useResumeBuilder = () => {
  const context = useContext(ResumeBuilderContext);
  if (!context) {
    throw new Error(
      "useResumeBuilder must be used within a ResumeBuilderProvider"
    );
  }
  return context;
};

export default ResumeBuilderProvider;
