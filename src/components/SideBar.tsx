"use client";

import React, { useState } from "react";
import CustomSectionForm from "./forms/CustomSectionForm";
import EducationForm from "./forms/EducationForm";
import PersonalInformationForm from "./forms/PersonalInformationForm";
import SkillsForm from "./forms/SkillsForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";

interface INavComponent {
  label: string;
  component: React.ReactNode;
}

const navComponents: INavComponent[] = [
  { label: "Personal Information", component: <PersonalInformationForm /> },
  { label: "Education", component: <EducationForm /> },
  { label: "Work Experience", component: <WorkExperienceForm /> },
  { label: "Skills", component: <SkillsForm /> },
  { label: "Custom Section", component: <CustomSectionForm /> },
];

const SideBar = () => {
  const [activeComponent, setActiveComponent] = useState<INavComponent>(
    navComponents[0]
  );

  return (
    <aside className="flex rounded-2xl bg-[#1E3A8A] shadow-lg w-full lg:max-w-[50vw]">
      {/* Left column - Categories */}
      <nav className="flex flex-col w-[250px] border-r border-yellow-400 p-4 space-y-3">
        {navComponents.map((component, idx) => {
          const isActive = activeComponent.label === component.label;
          return (
            <button
              key={idx}
              onClick={() => setActiveComponent(component)}
              className={`text-white text-base font-medium px-4 py-3 rounded-lg transition-colors duration-200 text-left
                ${
                  isActive
                    ? "bg-yellow-400 text-gray-900 shadow-lg"
                    : "bg-transparent hover:bg-yellow-300 hover:text-gray-900"
                }
              `}
            >
              {component.label}
            </button>
          );
        })}
      </nav>

      {/* Right column - Active Form */}
      <section className="flex-1 p-6 bg-white rounded-tr-2xl rounded-br-2xl overflow-auto h-full">
        {activeComponent.component}
      </section>
    </aside>
  );
};

export default SideBar;
