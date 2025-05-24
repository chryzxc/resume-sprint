import { IResume } from "@/type";
import { cleanGeneratedResumeData } from "@/utils";
import { Groq } from "groq-sdk";

const sampleData: IResume = {
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
  skills: [{ name: "", level: "Expert" }],
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

export async function POST(req: Request) {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  const { resumeData } = await req.json();

  console.log("Resume data", resumeData);
  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `Fill the resume data and respond using a json format only. The label field in basics is the role name and generate the data based on the role. Follow this format strictly. 
          Resume data: ${JSON.stringify(resumeData)}
          Output format: ${JSON.stringify(sampleData)}`,
        },
      ],
    });

    const rawFormat = response.choices[0].message.content as IResume;
    console.log("RAW FORMT", rawFormat);
    console.log("rawFormat.basics?.label ", JSON.parse(rawFormat).basics);
    return Response.json({
      resumeData: cleanGeneratedResumeData(JSON.parse(rawFormat)),
    });
  } catch (error) {
    return Response.json({ error: error.message });
  }
}
