interface IContact {
  email: string;
  phone: string;
  address?: string;
  website?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

interface IWork {
  id: string;
  name: string;
  position: string;
  location?: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
  keywords?: string[];
}

interface IEducation {
  id: string;
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  courses?: string[];
}

interface ISkill {
  name: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  keywords?: string[];
}

interface ISectionItem {
  name: string;
  details?: string;
  date?: string;
  description?: string;
  tags?: string[];
  link?: string;
}

interface ISection {
  title: string;
  items: ISectionItem[];
}

export interface IResume {
  basics: {
    name: string;
    label: string;
    contact: IContact;
    summary: string;
  };
  work: IWork[];
  education: IEducation[];
  skills: ISkill[];
  sections?: ISection[];
}

export type TTemplateKeys = "Slate Pro";

export interface ITemplate {
  label: TTemplateKeys;
  component: React.ReactNode;
}
