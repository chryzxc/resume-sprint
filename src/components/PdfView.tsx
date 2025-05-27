"use client";
import { useResumeStore } from "@/stores/resumeBuilderStore";
import { TTemplateKeys } from "@/type";
import { PDFViewer } from "@react-pdf/renderer";
import { useEffect, useMemo } from "react";
import { createRoot } from "react-dom/client";
import BoldGeometric from "./templates/BoldGeometric";
import ClassicProfessional from "./templates/ClassicProfessional";
import Clean from "./templates/Clean";
import ModernSidebar from "./templates/ModernSidebar";
import Timeline from "./templates/Timeline";
import AiGenerateResumeButton from "@/app/resume-builder/components/AiGenerateResumeButton";

export const PDF_HEIGHT = 800;

const PdfView = () => {
  const { activeTemplate, isLoadingPdfView, setIsLoadingPdfView, resume } =
    useResumeStore();

  const pdfTemplate = useMemo(() => {
    const templateMapper: Record<TTemplateKeys, React.ReactNode> = {
      "Classic Professional": <ClassicProfessional resume={resume} />,
      "Modern Sidebar": <ModernSidebar resume={resume} />,
      Timeline: <Timeline resume={resume} />,
      "Bold Geometric": <BoldGeometric resume={resume} />,
      Clean: <Clean resume={resume} />,
    };

    const selectedTemplate = templateMapper[activeTemplate];

    if (!selectedTemplate)
      return (
        <div>
          <p>Please select a template</p>
        </div>
      );

    return (
      <PDFViewer
        width="100%"
        // height={PDF_HEIGHT}
        className="border rounded-lg shadow-lg h-[800px] "
      >
        <div>{selectedTemplate}</div>
      </PDFViewer>
    );
  }, [activeTemplate, resume]);

  useEffect(() => {
    if (isLoadingPdfView && typeof window !== "undefined") {
      const container = document.getElementById("root");
      if (container) {
        const root = createRoot(container);
        root.render(<PdfView />);
      }
    }
    setIsLoadingPdfView(false);
  }, [isLoadingPdfView, setIsLoadingPdfView]);

  return (
    <div className="h-full w-full gap-4 flex flex-col">
      <div className="flex justify-end w-full ">
        <AiGenerateResumeButton />
      </div>
      {!isLoadingPdfView && pdfTemplate}
    </div>
  );
};

export default PdfView;
