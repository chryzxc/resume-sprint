import { IResume } from "@/type";

import { Groq } from "groq-sdk";
import { NextResponse } from "next/server";
import envConfig from "../../../../env-config";
import { cleanGeneratedResumeData } from "@/utils/misc";
import { SAMPLE_RESUME_FORMAT } from "@/constants";

export interface IGenerateResumeDataResponse {
  resumeData: IResume;
}

export async function POST(req: Request) {
  const groq = new Groq({ apiKey: envConfig().grocApiKey });
  const { content } = await req.json();

  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `Create a resume data using the provided content and respond using a json format only. The label field in basics is the role name and generate the data based on the role. Only generate what is in the content and don't generate random values. Follow this format strictly. 
          Resume content: ${JSON.stringify(content)}
          Output format: ${JSON.stringify(SAMPLE_RESUME_FORMAT)}`,
        },
      ],
    });

    const rawFormat = response.choices[0].message.content as unknown as string;

    const responseData: IGenerateResumeDataResponse = {
      resumeData: cleanGeneratedResumeData(JSON.parse(rawFormat)),
    };

    return Response.json({ resumeData: responseData });
  } catch {
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
