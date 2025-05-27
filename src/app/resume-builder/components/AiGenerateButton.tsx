"use client";
import { generateResumeData } from "@/api-services/ai-service";
import { useResumeStore } from "@/stores/resumeBuilderStore";
import { addToast, Button } from "@heroui/react";

const AiGenerateButton = () => {
  const { resume, setResume } = useResumeStore();
  const generateData = async () => {
    try {
      const { resumeData } = await generateResumeData({ resumeData: resume });

      setResume(resumeData);
    } catch {
      addToast({
        color: "danger",
        title: "Error",
        description: "Failed to generate resume data",
      });
    }
  };
  return <Button onPress={generateData}>AI Generate</Button>;
};

export default AiGenerateButton;
