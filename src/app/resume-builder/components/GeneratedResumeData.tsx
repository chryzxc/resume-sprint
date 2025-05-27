import { IResume } from "@/type";
import { Code } from "@heroui/react";
import React from "react";

type TGeneratedResumeDataProps = {
  generatedResumeData: Partial<IResume>;
  removeNullFields?: boolean;
};

const generateRow = (key: string, value: unknown, index: number) => {
  if (!value) return null;
  if (typeof value === "string") {
    return (
      <p key={`${key}-${index}`} className="capitalize">{`${key}: ${
        value || "None"
      }`}</p>
    );
  }
  return null;
};

const GeneratedResumeData = ({
  generatedResumeData,
}: TGeneratedResumeDataProps) => {
  return (
    <Code
      color="default"
      className="h-full overflow-auto p-4 flex flex-col gap-1"
    >
      {Object.entries(generatedResumeData.basics || {}).map(
        ([key, value], idx) => generateRow(key, value, idx)
      )}
      {Object.entries(generatedResumeData.basics?.contact || {}).map(
        ([key, value], idx) => generateRow(key, value, idx)
      )}
      {!!generatedResumeData.work?.length && (
        <div className="flex flex-col">
          <p>Work:</p>
          {generatedResumeData.work?.map((data, idx) => (
            <div key={`work-${idx}`} className="ml-4">
              {Object.entries(data || {}).map(([key, value], idx) =>
                generateRow(key, value, idx)
              )}
            </div>
          ))}
        </div>
      )}
      {!!generatedResumeData.education?.length && (
        <div className="flex flex-col">
          <p>Education:</p>
          <div className="flex flex-col gap-1">
            {generatedResumeData.education?.map((data, idx) => (
              <div key={`education-${idx}`} className="ml-4">
                {Object.entries(data || {}).map(([key, value], idx) =>
                  generateRow(key, value, idx)
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {!!generatedResumeData.skills?.length && (
        <div className="flex flex-col">
          <p>Skills:</p>
          <div className="flex flex-col gap-1">
            {generatedResumeData.skills?.map((data, idx) => (
              <div key={`skills-${idx}`} className="ml-4">
                {Object.entries(data || {}).map(([key, value], idx) =>
                  generateRow(key, value, idx)
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </Code>
  );
};

export default GeneratedResumeData;
