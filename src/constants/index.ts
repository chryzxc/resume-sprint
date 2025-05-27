import { IResume } from "@/type";

export const SAMPLE_RESUME_FORMAT: IResume = {
  basics: {
    name: "",
    label: "",
    contact: {
      email: "",
      phone: "",
      website: "",
      linkedin: "",
    },
    summary: "",
  },
  work: [
    {
      id: "",
      name: "",
      position: "",
      startDate: "",
      highlights: ["", "", ""],
    },
  ],
  education: [
    {
      id: "",
      institution: "",
      area: "",
      studyType: "",
      startDate: "",
      endDate: "",
    },
  ],
  skills: [{ id: "", name: "", level: "Expert" }],
  sections: [
    {
      title: "",
      items: [
        {
          name: "",
          details: "",
          date: "",
        },
      ],
    },
    {
      title: "",
      items: [{ name: "" }, { name: "" }],
    },
  ],
};
