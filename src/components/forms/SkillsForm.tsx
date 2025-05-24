"use client";
import { useResumeStore } from "@/stores/resumeBuilderStore";
import { Input, Select, SelectItem } from "@heroui/react";
import { v4 as uuidv4 } from "uuid";
import FormContainer from "./FormContainer";

const SkillsForm = () => {
  const { resume, removeSkill, addSkill, updateSkill } = useResumeStore();

  const levels = ["Beginner", "Intermediate", "Advanced", "Expert"];

  return (
    <FormContainer>
      {resume.skills.map((skill, index) => (
        <FormContainer.FieldContainerCard
          key={index}
          onRemove={() => removeSkill(index)}
        >
          <FormContainer.FieldWrapper>
            <Input
              label="Skill Name"
              labelPlacement="outside"
              placeholder="e.g. TypeScript"
              variant="bordered"
              value={skill.name}
              onChange={(e) => updateSkill(index, "name", e.target.value)}
            />
            <Select
              label="Level"
              labelPlacement="outside"
              variant="bordered"
              selectedKeys={skill.level ? [skill.level] : []}
              onChange={(e) => updateSkill(index, "level", e.target.value)}
            >
              {levels.map((lvl) => (
                <SelectItem key={lvl} value={lvl}>
                  {lvl}
                </SelectItem>
              ))}
            </Select>
          </FormContainer.FieldWrapper>
        </FormContainer.FieldContainerCard>
      ))}

      <FormContainer.AddButton
        label={!resume.skills.length ? "Add Skill" : "Add Another Skill"}
        onClick={() =>
          addSkill({
            id: uuidv4(),
            name: "",
            keywords: [],
            level: undefined,
          })
        }
      />
    </FormContainer>
  );
};

export default SkillsForm;
