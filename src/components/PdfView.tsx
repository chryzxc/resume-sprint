"use client";
import { Select, SelectItem } from "@heroui/react";
import { PDFViewer } from "@react-pdf/renderer";
import { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { EleganceBold } from "./templates/EleganceBold";
import { ElegantSplit } from "./templates/ElegantSplit";
import { ModernBlock } from "./templates/MetroBlock";
import { MinimalTwoColumn } from "./templates/MinimalTwoColumn";
import { ModernClean } from "./templates/ModernClean";
import { SlatePro } from "./templates/SlatePro";
import { ModernBold } from "./templates/ModernBold";
import Minimalist from "./templates/Minimalist";
import { IResume } from "@/type";

// Create styles

export const resumeData = {
  name: "John Doe",
  title: "Full Stack Developer",
  phone: "+1 234 567 890",
  email: "johndoe@example.com",
  location: "San Francisco, CA",
  linkedin: "linkedin.com/in/johndoe",
  github: "github.com/johndoe",
  website: "johndoe.dev",

  summary:
    "Creative and detail-oriented full stack developer with 5+ years of experience building scalable web applications and tools using modern technologies.",

  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "MongoDB",
    "GraphQL",
    "Tailwind CSS",
    "Docker",
    "Git",
    "Agile",
  ],

  experience: [
    {
      position: "Senior Software Engineer",
      company: "TechCorp Inc.",
      start: "Jan 2021",
      end: "Present",
      location: "Remote",
      description: `- Led a team of 4 developers to deliver enterprise-grade web platforms.
- Reduced page load time by 30% via frontend optimization.
- Integrated CI/CD pipelines and containerized deployments using Docker and GitHub Actions.`,
    },
    {
      position: "Frontend Developer",
      company: "Creative Solutions",
      start: "May 2018",
      end: "Dec 2020",
      location: "New York, NY",
      description: `- Built reusable component libraries in React.
- Collaborated with UI/UX designers to enhance user interfaces.
- Implemented SEO-friendly, accessible web pages.`,
    },
  ],

  education: [
    {
      degree: "B.S. in Computer Science",
      school: "University of California, Berkeley",
      year: "2018",
      location: "Berkeley, CA",
    },
  ],

  certifications: [
    {
      name: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      date: "2023",
    },
    {
      name: "Scrum Master Certified (SMC)",
      issuer: "Scrum Alliance",
      date: "2022",
    },
  ],

  projects: [
    {
      name: "MyPortfolio",
      description:
        "A personal portfolio site with blog, project showcase, and contact form.",
      tools: ["Next.js", "Tailwind CSS", "Vercel"],
      link: "https://johndoe.dev",
    },
    {
      name: "TaskHub",
      description:
        "A collaborative task management app for teams with drag-and-drop UI.",
      tools: ["React", "Firebase", "Redux"],
      link: "https://github.com/johndoe/taskhub",
    },
  ],

  languages: [
    { name: "English", level: "Native" },
    { name: "Spanish", level: "Professional" },
  ],
};

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

const templates: ITemplate[] = [
  {
    label: "SlatePro",
    component: <SlatePro data={designerResume} />,
  },
  {
    label: "Minimalist",
    component: <Minimalist resumeData={designerResume} />,
  },
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
  {
    label: "Modern Bold",
    component: <ModernBold data={designerResume} />,
  },
  {
    label: "Minimal Two Column",
    component: <MinimalTwoColumn data={designerResume} />,
  },
];

const PdfView = () => {
  const [activeTemplate, setActiveTemplate] = useState<ITemplate>(templates[0]);
  const [isLoadingPdfView, setIsLoadingPdfView] = useState<boolean>(true);

  const selectTemplate = (key: string) => {
    const selectedTemplate = templates.find(({ label }) => label === key);
    console.log("selectedTemplate", selectedTemplate);
    if (selectedTemplate) {
      setIsLoadingPdfView(true);
      setActiveTemplate(selectedTemplate);
    }
  };

  const pdfTemplate = useMemo(
    () => (
      <PDFViewer
        width="100%"
        height={600}
        className="border rounded-lg shadow-lg"
      >
        {activeTemplate.component}
      </PDFViewer>
    ),
    [activeTemplate]
  );

  useEffect(() => {
    if (isLoadingPdfView) {
      const container = document.getElementById("root");
      if (container) {
        const root = createRoot(container);
        root.render(<PdfView />);
      }
    }
    setIsLoadingPdfView(false);
  }, [isLoadingPdfView]);

  return (
    <div className="h-full w-full">
      <div className="flex flex-row gap-8">
        {/* <Select
          className="max-w-xs"
          label="Select a template"
          variant="bordered"
          defaultSelectedKeys={[activeTemplate.label]}
          onSelectionChange={({ currentKey }) => selectTemplate(currentKey)}
        >
          {templates.map((template) => (
            <SelectItem
              key={template.label}
              onClick={() => setActiveTemplate(template)}
            >
              {template.label}
            </SelectItem>
          ))}
        </Select> */}
        {!isLoadingPdfView && pdfTemplate}
      </div>
    </div>
  );
};

export default PdfView;
