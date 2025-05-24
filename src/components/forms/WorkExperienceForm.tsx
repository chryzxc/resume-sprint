"use client";

import { useResumeStore } from "@/stores/resumeBuilderStore";
import { Input, Textarea } from "@heroui/react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import FormContainer from "./FormContainer";

const WorkExperienceForm = () => {
  const { resume, updateWork, addWork, removeWork } = useResumeStore();

  useEffect(() => {
    if (resume.work.length === 0) {
      addWork({
        id: uuidv4(),
        name: "",
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        highlights: [],
      });
    }
  }, [resume.work, addWork]);

  return (
    <FormContainer>
      {resume?.work?.map((item, index) => (
        <FormContainer.FieldContainerCard
          key={item.id}
          onRemove={() => removeWork(index)}
        >
          <FormContainer.FieldWrapper>
            <Input
              isRequired
              label="Company Name"
              labelPlacement="outside"
              placeholder="e.g. Google"
              variant="bordered"
              value={item.name}
              onChange={(e) => updateWork(index, "name", e.target.value)}
            />
            <Input
              label="Position"
              labelPlacement="outside"
              placeholder="e.g. Frontend Developer"
              variant="bordered"
              value={item.position}
              onChange={(e) => updateWork(index, "position", e.target.value)}
            />
            <Input
              label="Location"
              labelPlacement="outside"
              placeholder="e.g. San Francisco"
              variant="bordered"
              value={item.location}
              onChange={(e) => updateWork(index, "location", e.target.value)}
            />
            <div className="flex gap-4">
              <Input
                label="Start Date"
                type="date"
                variant="bordered"
                className="w-1/2"
                value={item.startDate}
                onChange={(e) => updateWork(index, "startDate", e.target.value)}
              />
              <Input
                label="End Date"
                type="date"
                variant="bordered"
                className="w-1/2"
                value={item.endDate || ""}
                onChange={(e) => updateWork(index, "endDate", e.target.value)}
              />
            </div>
            <Textarea
              label="Highlights"
              labelPlacement="outside"
              placeholder="e.g. Increased conversion by 20%"
              variant="bordered"
              value={item.highlights.join("\n")}
              onChange={(e) =>
                updateWork(index, "highlights", e.target.value.split("\n"))
              }
            />
          </FormContainer.FieldWrapper>
        </FormContainer.FieldContainerCard>
      ))}

      <FormContainer.AddButton
        label="Add Work Experience"
        onClick={() =>
          addWork({
            id: uuidv4(),
            name: "",
            position: "",
            location: "",
            startDate: "",
            endDate: "",
            highlights: [],
          })
        }
      />
    </FormContainer>
  );
};

export default WorkExperienceForm;
