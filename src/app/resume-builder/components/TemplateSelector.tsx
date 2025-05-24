"use client";
import { EleganceBold } from "@/components/templates/EleganceBold";
import { SlatePro } from "@/components/templates/SlatePro";
import { useResumeStore } from "@/stores/resumeBuilderStore";
import { ITemplate, TTemplateKeys } from "@/type";
import { Select, SelectItem } from "@heroui/react";
const designerResume: IResume = {
  basics: {
    name: "Samantha Cruz",
    label: "Visual Designer & Art Director",
    contact: {
      email: "hello@samcruz.design",
      phone: "(555) 234-5678",
      website: "samcruz.design",
      linkedin: "linkedin.com/in/samcruzdesign",
    },
    summary:
      "Award-winning designer specializing in brand identity systems for lifestyle brands.",
  },
  work: [
    {
      id: "design1",
      name: "Studio Nova Creative",
      position: "Lead Designer",
      startDate: "2019",
      highlights: [
        "Designed visual identity for 12+ national brands",
        "Led creative direction for LVMH campaign (2022)",
        "Mentored 3 junior designers",
      ],
    },
  ],
  education: [
    {
      id: "edu1",
      institution: "Rhode Island School of Design",
      area: "Graphic Design",
      studyType: "BFA",
      startDate: "2015",
      endDate: "2019",
    },
  ],
  skills: [
    { name: "Adobe Creative Suite", level: "Expert" },
    { name: "Typography" },
    { name: "Art Direction" },
  ],
  sections: [
    {
      title: "Exhibitions",
      items: [
        {
          name: "Type Directors Club Annual",
          details: "Featured Designer",
          date: "2023",
        },
      ],
    },
    {
      title: "Select Clients",
      items: [{ name: "Nike" }, { name: "Warner Music" }],
    },
  ],
};

export const TEMPLATES: ITemplate[] = [
  {
    label: "Slate Pro",
    component: SlatePro,
  },
  //   {
  //     label: "Minimalist",
  //     component: <Minimalist resumeData={designerResume} />,
  //   },
  // // {
  // //   label: "Modern Executive",
  // //   component: <ModernExecutive data={mockData} />,
  // // },
  // // {
  // //   label: "MetroGrid",
  // //   component: <MetroGrid data={mockData} />,
  // // },
  {
    label: "Elegance Bold",
    component: <EleganceBold data={designerResume} />,
  },
  // {
  //   label: "Elegant Split",
  //   component: <ElegantSplit data={resumeData} />,
  // },
  // {
  //   label: "Modern Clean",
  //   component: <ModernClean data={resumeData} />,
  // },
  // {
  //   label: "Modern Block",
  //   component: <ModernBlock data={resumeData} />,
  // },
  //   {
  //     label: "Modern Bold",
  //     component: <ModernBold data={designerResume} />,
  //   },
  //   {
  //     label: "Minimal Two Column",
  //     component: <MinimalTwoColumn data={designerResume} />,
  //   },
];
const TemplateSelector = () => {
  const { activeTemplate, setActiveTemplate } = useResumeStore();
  return (
    <Select
      className="max-w-xs"
      label="Select a template"
      variant="bordered"
      selectedKeys={[activeTemplate]}
      onSelectionChange={({ currentKey, anchorKey }) => {
        setActiveTemplate(currentKey as TTemplateKeys);
        console.log("currentKey", { currentKey, anchorKey });
      }}
    >
      {TEMPLATES.map((template) => (
        <SelectItem
          key={template.label}
          onClick={() => setActiveTemplate(template.label)}
        >
          {template.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default TemplateSelector;
