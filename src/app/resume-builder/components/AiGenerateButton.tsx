"use client";
import { useResumeStore } from "@/stores/resumeBuilderStore";
import { Button } from "@heroui/react";
import axios from "axios";
import React from "react";

const AiGenerateButton = () => {
  const { resume, setResume } = useResumeStore();
  const generateData = async () => {
    try {
      const { data } = await axios.post("api/generate-resume", {
        resumeData: resume,
      });
      console.log("Test", data.resumeData);
      setResume(data.resumeData);
    } catch (e) {
      console.log("error", e);
    }
  };
  return <Button onPress={generateData}>AI Generate</Button>;
};

export default AiGenerateButton;
