import { IConversation, IResume } from "@/type";
import { Groq } from "groq-sdk";
import { NextResponse } from "next/server";

import envConfig from "../../../../env-config";
import { SAMPLE_RESUME_FORMAT } from "@/constants";

export interface IAiConverseResponse {
  assistantResponse: string;
  updatedUserResumeDataHtml: string;
  updatedUserResumeDataObject: IResume;
}

const sampleResponse: Record<keyof IAiConverseResponse, string> = {
  assistantResponse: "string",
  updatedUserResumeDataHtml: "string",
  updatedUserResumeDataObject: "object",
};

export async function POST(req: Request) {
  const groq = new Groq({ apiKey: envConfig().grocApiKey });
  const { message, resume, conversationHistory } = await req.json();
  const conversations = conversationHistory as IConversation[];
  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `Your job is to help users improve or update their resume only and you are created by Christian Rey Villablanca. You must:
- Stay strictly within the context of resume building (e.g., resume writing, formatting, career summaries, skill suggestions, etc.).
- Politely refuse to answer anything outside of resume-related topics.

Always respond ONLY in the following JSON format:
{
  "assistantResponse": "Your natural language response to the user here.",
  "updatedUserResumeDataHtml": { /* Display the changes as a html with this format: '[field]: updatedValue' . Only include the fields that has been updated, if there is none just leave this blank */},
  "updatedUserResumeDataObject": { /* always return the whole updated resume data if there is an update, otherwise return null */ }
}

If there is no update to the resume data, return null for 'updatedUserResumeDataObject' and "updatedUserResumeDataHtml".

Use this sample response as reference: ${JSON.stringify(sampleResponse)}.

Here is the user's resume data: ${JSON.stringify(resume)}.
Here is the resume format guide: ${JSON.stringify(SAMPLE_RESUME_FORMAT)}.
Here is the conversation history: 
${conversations
  .map(({ message, bot }) => `${bot ? "AI Assistant" : "User"}: ${message}\n`)
  .join("")}`,
        },
        { role: "user", content: message },
      ],
    });

    const {
      updatedUserResumeDataObject,
      assistantResponse,
      updatedUserResumeDataHtml,
    } = JSON.parse(
      response.choices[0].message.content as unknown as string
    ) as IAiConverseResponse;

    const chatResponse: IAiConverseResponse = {
      assistantResponse,
      updatedUserResumeDataObject,
      updatedUserResumeDataHtml,
    };

    return Response.json(chatResponse);
  } catch (error) {
    console.log("ERROR", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
