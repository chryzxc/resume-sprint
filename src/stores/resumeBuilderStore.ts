import { IResume, TTemplateKeys } from "@/type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TResumeSection =
  | "basics"
  | "work"
  | "education"
  | "skills"
  | "sections"
  | "preview"; // Add "preview" if you need a final output tab

interface IResumeStore {
  activeSection: TResumeSection;
  setActiveSection: (section: TResumeSection) => void;
  resume: IResume;
  updateBasics: (field: keyof IResume["basics"], value: string) => void;
  updateContact: (
    field: keyof IResume["basics"]["contact"],
    value: string
  ) => void;
  updateResume: (key: keyof IResume, value: string) => void;
  resetResume: () => void;
  activeTemplate: TTemplateKeys;
  setActiveTemplate: (key: TTemplateKeys) => void;
}

const initialState: IResume = {
  basics: {
    name: "",
    label: "",
    contact: {
      email: "",
      phone: "",
      address: "",
      website: "",
      linkedin: "",
      github: "",
      portfolio: "",
    },
    summary: "",
  },
  work: [],
  education: [],
  skills: [],
  sections: [],
};

export const useResumeStore = create(
  persist<IResumeStore>(
    (set) => ({
      activeSection: "basics",
      setActiveSection: (section) => set({ activeSection: section }),

      resume: initialState,

      updateBasics: (field, value) =>
        set((state) => ({
          resume: {
            ...state.resume,
            basics: {
              ...state.resume.basics,
              [field]: value,
            },
          },
        })),

      updateContact: (field, value) =>
        set((state) => ({
          resume: {
            ...state.resume,
            basics: {
              ...state.resume.basics,
              contact: {
                ...state.resume.basics.contact,
                [field]: value,
              },
            },
          },
        })),

      updateResume: (key, value) =>
        set((state) => ({
          resume: {
            ...state.resume,
            [key]: value,
          },
        })),

      resetResume: () =>
        set({
          resume: initialState,
          activeSection: "basics",
        }),
      activeTemplate: "Slate Pro",
      setActiveTemplate: (value) =>
        set({
          activeTemplate: value,
        }),
    }),
    {
      name: "resume-storage",
    }
  )
);
