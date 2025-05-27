import { IResume, ISectionItem } from "@/type";
import crypto from "crypto";

export const cleanGeneratedResumeData = (rawFormat: IResume) => {
  return {
    basics: {
      contact: rawFormat.basics?.contact || "",
      label: rawFormat.basics?.label || "",
      name: rawFormat.basics?.name || "",
      summary: rawFormat.basics?.summary || "",
    },
    education: rawFormat.education?.map((edu) => ({
      area: edu?.area || "",
      endDate: edu?.endDate || "",
      id: edu?.id || "",
      institution: edu?.institution || "",
      startDate: edu?.startDate || "",
      studyType: edu?.studyType || "",
      courses: edu?.courses || "",
      gpa: edu?.gpa || "",
    })),
    skills: rawFormat.skills?.map((skill) => ({
      id: skill?.id || "",
      name: skill?.name || "",
      keywords: skill?.keywords || [],
      level: skill?.level || "",
    })),
    work: rawFormat?.work?.map((work) => ({
      id: work?.id || "",
      highlights: work?.highlights || [],
      name: work?.name || "",
      position: work?.position || "",
      startDate: work?.startDate || "",
      endDate: work?.endDate || "",
      keywords: work?.keywords || [],
      location: work?.location || "",
    })),
    sections: rawFormat?.sections?.map((section) => ({
      items:
        section?.items.map(
          (item) =>
            ({
              name: item?.name || "",
              date: item?.date || "",
              description: item?.description || "",
              details: item?.details || "",
              link: item?.link || "",
              tags: item?.tags || [],
            } as ISectionItem)
        ) || [],
    })),
  } as IResume;
};

// export const toDateValue = (raw: string): CalendarDate | undefined => {
//   if (!raw) {
//     return undefined;
//   }

//   return parseAbsoluteToLocal(new Date(raw).toISOString());
// };

export function generateHmacSignature(body: string, secret: string): string {
  return crypto.createHmac("sha256", secret).update(body).digest("hex");
}
