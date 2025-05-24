"use client";

import { useResumeStore } from "@/stores/resumeBuilderStore";
import { IResume } from "@/type";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@heroui/react";
import axios from "axios";
import { useState } from "react";
import GeneratedResumeData from "./GeneratedResumeData";
import { SparklesIcon } from "@heroicons/react/24/outline";

const AiGenerateResumeButton = () => {
  const { setResume } = useResumeStore();
  const [loading, setIsLoading] = useState<boolean>(false);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [content, setContent] = useState("");
  const [generatedResumeData, setGeneratedResumeData] =
    useState<IResume | null>(null);

  const generateData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post("/api/generate-resume", {
        content: content,
      });
      setGeneratedResumeData(data);
    } catch (e) {
      console.log("error", e);
    } finally {
      setIsLoading(false);
    }
  };

  const applyGeneratedData = () => {
    if (generatedResumeData) {
      setResume(generatedResumeData);
    }
    onClose();
  };

  return (
    <div>
      <Button
        variant="flat"
        color="default"
        onPress={onOpen}
        className="transition-all text-background"
        startContent={
          <SparklesIcon height={20} className="animate-pulse text-background" />
        }
      >
        Generate with AI
      </Button>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Let AI Build Your Resume
              </ModalHeader>
              <ModalBody className="w-full">
                {generatedResumeData ? (
                  <div className="w-full">
                    <p className="italic font-bold mb-1 text-background">
                      Generated Data:
                    </p>
                    <GeneratedResumeData
                      generatedResumeData={generatedResumeData}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col gap-1">
                    <p>{`Enter your details in text box instead of filling out multiple fields. Just describe your work, education, and skills, and we'll format it for you.`}</p>
                    <Textarea
                      value={content}
                      variant="bordered"
                      onChange={(e) => setContent(e.currentTarget.value)}
                      minRows={5}
                      maxRows={10}
                      placeholder="Tell me about yourself! Include your name, work experience, education, and skills in one place, and I’ll structure it for you."
                    />
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                {!generatedResumeData ? (
                  <Button
                    isLoading={loading}
                    disabled={!content || loading}
                    color="primary"
                    onPress={generateData}
                    className="bg-background"
                  >
                    {loading ? "Generating" : "Generate"}
                  </Button>
                ) : (
                  <div className="flex flex-row space-x-2">
                    <Button
                      variant="bordered"
                      color="default"
                      onPress={() => setGeneratedResumeData(null)}
                    >
                      Back
                    </Button>
                    <Button
                      color="primary"
                      onPress={applyGeneratedData}
                      className="bg-background"
                    >
                      Apply generated data
                    </Button>
                  </div>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AiGenerateResumeButton;
