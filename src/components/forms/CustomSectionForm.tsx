"use client";
import React from "react";
import { ISection } from "@/types/resume";

interface Props {
  data: ISection[];
  onChange: (updatedData: ISection[]) => void;
}

export default function CustomSectionForm({ data, onChange }: Props) {
  return (
    <div>
      {data?.map((section, i) => (
        <div key={i} className="space-y-2 border-b pb-4 mb-4">
          <input
            placeholder="Section Title"
            value={section.title}
            onChange={(e) => {
              const updated = [...data];
              updated[i].title = e.target.value;
              onChange(updated);
            }}
          />
        </div>
      ))}
    </div>
  );
}
