import { IEducation, IResume, ISkill, IWork, TTemplateKeys } from "@/type";
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
  setResume: (data: IResume) => void;
  updateBasics: (field: keyof IResume["basics"], value: string) => void;
  updateContact: (
    field: keyof IResume["basics"]["contact"],
    value: string
  ) => void;
  addWork: (data: IWork) => void;
  removeWork: (index: number) => void;
  updateWork: (index: number, field: keyof IWork, value: string) => void;
  addEducation: (data: IEducation) => void;
  removeEducation: (index: number) => void;
  updateEducation: (
    index: number,
    field: keyof IEducation,
    value: string
  ) => void;
  addSkill: (data: ISkill) => void;
  removeSkill: (index: number) => void;
  updateSkill: (index: number, field: keyof ISkill, value: string) => void;
  updateResume: (key: keyof IResume, value: string) => void;
  resetResume: () => void;
  activeTemplate: TTemplateKeys;
  setActiveTemplate: (key: TTemplateKeys) => void;
  isLoadingPdfView: boolean;
  setIsLoadingPdfView: (value: boolean) => void;
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
      setResume: (data) => {
        set((state) => ({ ...state, isLoadingPdfView: true }));
        set((state) => ({
          ...state,
          resume: data,
        }));
      },
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
      addWork: (data) =>
        set((state) => ({
          resume: { ...state.resume, work: [...state.resume.work, data] },
        })),
      removeWork: (index) => {
        set((state) => ({ ...state, isLoadingPdfView: true }));
        set((state) => {
          const updatedData = state.resume.work.filter(
            (_, idx) => idx !== index
          );
          return {
            resume: {
              ...state.resume,
              work: updatedData,
            },
          };
        });
      },
      updateWork: (index, field, value) =>
        set((state) => {
          const updated = [...state.resume.work];
          updated[index] = { ...updated[index], [field]: value };
          return { resume: { ...state.resume, work: updated } };
        }),
      addEducation: (data) =>
        set((state) => ({
          resume: {
            ...state.resume,
            education: [...state.resume.education, data],
          },
        })),
      removeEducation: (index) => {
        set((state) => ({ ...state, isLoadingPdfView: true }));
        set((state) => {
          const updatedData = state.resume.education.filter(
            (_, idx) => idx !== index
          );
          return {
            resume: {
              ...state.resume,
              education: updatedData,
            },
          };
        });
        // set((state) => ({ ...state, isLoadingPdfView: false }));
      },
      updateEducation: (index, field, value) =>
        set((state) => {
          const updated = [...state.resume.education];
          updated[index] = { ...updated[index], [field]: value };
          return { resume: { ...state.resume, education: updated } };
        }),
      addSkill: (data) =>
        set((state) => ({
          resume: {
            ...state.resume,
            skills: [...state.resume.skills, data],
          },
        })),
      removeSkill: (index) => {
        set((state) => ({ ...state, isLoadingPdfView: true }));
        set((state) => {
          const updatedData = state.resume.skills.filter(
            (_, idx) => idx !== index
          );
          return {
            resume: {
              ...state.resume,
              skills: updatedData,
            },
          };
        });
        // set((state) => ({ ...state, isLoadingPdfView: false }));
      },
      updateSkill: (index, field, value) =>
        set((state) => {
          const updated = [...state.resume.skills];
          updated[index] = { ...updated[index], [field]: value };
          return { resume: { ...state.resume, skills: updated } };
        }),
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
      setActiveTemplate: (value) => {
        set({
          isLoadingPdfView: true,
        });
        set({
          activeTemplate: value,
        });
      },
      isLoadingPdfView: true,
      setIsLoadingPdfView: (value) => set({ isLoadingPdfView: value }),
    }),
    {
      name: "resume-storage",
    }
  )
);
