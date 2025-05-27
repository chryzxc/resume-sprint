import { IAiConverseResponse } from "@/app/api/ai-converse/route";
import { IGenerateResumeDataResponse } from "@/app/api/generate-resume/route";
import { IConversation, IResume } from "@/type";
import axiosClient from "@/utils/axios-client";

interface IAiConverseBody {
  message: string;
  resume: IResume;
  conversationHistory: IConversation[];
}

interface IGenerateResumeDataBody {
  resumeData: IResume;
}

export const aiConverse = async (
  data: IAiConverseBody
): Promise<IAiConverseResponse> => {
  const res = await axiosClient.post("/api/ai-converse", data);
  return res.data;
};

export const generateResumeData = async (
  data: IGenerateResumeDataBody
): Promise<IGenerateResumeDataResponse> => {
  const res = await axiosClient.post("api/generate-resume", data);
  return res.data;
};
