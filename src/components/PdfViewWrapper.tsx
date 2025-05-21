import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import { createRoot } from "react-dom/client";

type TPdfViewWrapperProps = {
  children: React.ReactNode;
};

const PdfViewWrapper = ({ children }: TPdfViewWrapperProps) => {
  return <PDFViewer className="h-[600px] w-[400px]">{children}</PDFViewer>;
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<PdfViewWrapper />);
}

export default PdfViewWrapper;
