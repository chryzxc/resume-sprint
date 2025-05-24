"use client";
import { useResumeStore } from "@/stores/resumeBuilderStore";
import { Input } from "@heroui/react";
import { v4 as uuidv4 } from "uuid";
import FormContainer from "./FormContainer";

const EducationForm = () => {
  const { resume, updateEducation, addEducation, removeEducation } =
    useResumeStore();

  return (
    <FormContainer>
      {resume.education.map((edu, index) => (
        <FormContainer.FieldContainerCard
          key={edu.id}
          onRemove={() => removeEducation(index)}
        >
          <FormContainer.FieldWrapper>
            <Input
              label="Institution"
              labelPlacement="outside"
              placeholder="e.g. Harvard University"
              variant="bordered"
              value={edu.institution}
              onChange={(e) =>
                updateEducation(index, "institution", e.target.value)
              }
            />
            <Input
              label="Area of Study"
              labelPlacement="outside"
              placeholder="e.g. Computer Science"
              variant="bordered"
              value={edu.area}
              onChange={(e) => updateEducation(index, "area", e.target.value)}
            />
            <Input
              label="Study Type"
              labelPlacement="outside"
              placeholder="e.g. Bachelor's"
              variant="bordered"
              value={edu.studyType}
              onChange={(e) =>
                updateEducation(index, "studyType", e.target.value)
              }
            />
            <Input
              label="Start Date"
              type="date"
              labelPlacement="outside"
              variant="bordered"
              value={edu.startDate}
              onChange={(e) =>
                updateEducation(index, "startDate", e.target.value)
              }
            />
            <Input
              label="End Date"
              type="date"
              labelPlacement="outside"
              variant="bordered"
              value={edu.endDate}
              onChange={(e) =>
                updateEducation(index, "endDate", e.target.value)
              }
            />
          </FormContainer.FieldWrapper>
        </FormContainer.FieldContainerCard>
      ))}

      <FormContainer.AddButton
        label="Add Education"
        onClick={() =>
          addEducation({
            id: uuidv4(),
            area: "",
            endDate: "",
            institution: "",
            startDate: "",
            studyType: "",
            courses: [],
            gpa: "",
          })
        }
      />
    </FormContainer>
  );
};

export default EducationForm;
