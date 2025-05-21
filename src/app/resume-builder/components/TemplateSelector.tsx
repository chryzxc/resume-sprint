"use client";
import { useResumeStore } from "@/stores/resumeBuilderStore";
import { TTemplateKeys } from "@/type";
import { Select, SelectItem } from "@heroui/react";

const TEMPLATES_KEY: TTemplateKeys[] = ["Slate Pro"];

const TemplateSelector = () => {
  const { activeTemplate } = useResumeStore();
  return (
    <Select
      className="max-w-xs"
      label="Select a template"
      variant="bordered"
      defaultSelectedKeys={[activeTemplate]}
      onSelectionChange={({ currentKey }) => selectTemplate(currentKey)}
    >
      {TEMPLATES_KEY.map((template) => (
        <SelectItem key={template} onClick={() => setActiveTemplate(template)}>
          {template.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default TemplateSelector;
