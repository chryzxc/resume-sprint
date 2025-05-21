"use client";

import React, { useState } from "react";
import EducationForm from "./forms/EducationForm";
import ExperienceForm from "./forms/ExperienceForm";
import PersonalInformationForm from "./forms/PersonalInformationForm";
import ProfessionalSummaryForm from "./forms/ProfessionalSummaryForm";
import SkillsForm from "./forms/SkillsForm";
import ProfileForm from "./forms/ProfileForm";

interface INavComponent {
  label: string;
  component: React.ReactNode;
}

const navComponents: INavComponent[] = [
  { label: "Personal Information", component: <PersonalInformationForm /> },
  { label: "Professional Summary", component: <ProfessionalSummaryForm /> },
  { label: "Experience", component: <ExperienceForm /> },
  { label: "Education", component: <EducationForm /> },
  { label: "Skills", component: <SkillsForm /> },
  { label: "Profile or Portfolio URL", component: <ProfileForm /> },
];

const SideBar = () => {
  const [activeComponent, setActiveComponent] = useState<INavComponent>(
    navComponents[0]
  );

  return (
    <aside
      className="flex rounded-2xl bg-[#1E3A8A] shadow-lg w-full max-w-[700px]"
      style={{ minHeight: "500px" }} // or your preferred height
    >
      {/* Left column - Categories */}
      <nav className="flex flex-col w-[250px] border-r border-yellow-400 p-6 space-y-3">
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
      <section className="flex-1 p-6 bg-white rounded-tr-2xl rounded-br-2xl overflow-auto">
        {activeComponent.component}
      </section>
    </aside>
  );
};

export default SideBar;
