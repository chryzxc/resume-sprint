"use client";
import { useResumeStore } from "@/stores/resumeBuilderStore";
import { TTemplateKeys } from "@/type";
import { PDFViewer } from "@react-pdf/renderer";
import { useEffect, useMemo } from "react";
import { createRoot } from "react-dom/client";
import { EleganceBold } from "./templates/EleganceBold";
import { SlatePro } from "./templates/SlatePro";

const PdfView = () => {
  const { activeTemplate, isLoadingPdfView, setIsLoadingPdfView, resume } =
    useResumeStore();
  console.log("actuiveTemplate", activeTemplate);
  const pdfTemplate = useMemo(() => {
    const templateMapper: Record<TTemplateKeys, React.ReactNode> = {
      "Slate Pro": <SlatePro data={resume} />,
      "Elegance Bold": <EleganceBold data={resume} />,
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
        height={600}
        className="border rounded-lg shadow-lg"
      >
        {selectedTemplate}
      </PDFViewer>
    );
  }, [activeTemplate, resume]);

  useEffect(() => {
    if (isLoadingPdfView) {
      const container = document.getElementById("root");
      if (container) {
        const root = createRoot(container);
        root.render(<PdfView />);
      }
    }
    setIsLoadingPdfView(false);
  }, [isLoadingPdfView, setIsLoadingPdfView]);

  return (
    <div className="h-full w-full">{!isLoadingPdfView && pdfTemplate}</div>
  );
};

export default PdfView;
