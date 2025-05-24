"use client";
import { useResumeStore } from "@/stores/resumeBuilderStore";
import { Alert, Input } from "@heroui/react";
import FormContainer from "./FormContainer";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export default function CustomSectionForm() {
  const {
    resume,
    addSection,
    removeSection,
    updateSection,
    addSectionItem,
    removeSectionItem,
    updateSectionItem,
  } = useResumeStore();
  return (
    <FormContainer>
      <div>
        <Alert
          icon={<InformationCircleIcon />}
          radius="md"
          color="warning"
          title="Custom sections might only be available on some templates"
        />
      </div>
      {resume.sections?.map((section, sectionIndex) => (
        <FormContainer.FieldContainerCard
          key={`section-${sectionIndex}`}
          onRemove={() => removeSection(sectionIndex)}
        >
          <FormContainer.FieldWrapper>
            <Input
              label="Section Title"
              labelPlacement="outside"
              placeholder="e.g. Certificates"
              variant="bordered"
              value={section.title}
              onChange={(e) =>
                updateSection(sectionIndex, "title", e.target.value)
              }
            />
            {section.items?.map((item, itemIndex) => (
              <FormContainer.FieldContainerCard
                key={`section-item-${itemIndex}`}
                onRemove={() => removeSectionItem(sectionIndex, itemIndex)}
              >
                <FormContainer.FieldWrapper>
                  <Input
                    label="Name"
                    labelPlacement="outside"
                    placeholder="Enter name"
                    variant="bordered"
                    value={item.name}
                    onChange={(e) =>
                      updateSectionItem(
                        sectionIndex,
                        itemIndex,
                        "name",
                        e.target.value
                      )
                    }
                  />

                  <Input
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter description"
                    variant="bordered"
                    value={item.description}
                    onChange={(e) =>
                      updateSectionItem(
                        sectionIndex,
                        itemIndex,
                        "description",
                        e.target.value
                      )
                    }
                  />

                  {/* <Input
                    label="Details"
                    labelPlacement="outside"
                    placeholder="Enter details"
                    variant="bordered"
                    value={item.details}
                    onChange={(e) =>
                      updateSectionItem(
                        sectionIndex,
                        itemIndex,
                        "details",
                        e.target.value
                      )
                    }
                  />
                  <Input
                    label="Link"
                    labelPlacement="outside"
                    placeholder="Enter link"
                    variant="bordered"
                    value={item.link}
                    onChange={(e) =>
                      updateSectionItem(
                        sectionIndex,
                        itemIndex,
                        "link",
                        e.target.value
                      )
                    }
                  /> */}

                  <Input
                    label="Date"
                    labelPlacement="outside"
                    variant="bordered"
                    value={item.date}
                    type="date"
                    onChange={(e) =>
                      updateSectionItem(
                        sectionIndex,
                        itemIndex,
                        "date",
                        e.target.value
                      )
                    }
                  />
                  {/* <Input
                    label="Tags (Comma separated)"
                    labelPlacement="outside"
                    placeholder="e.g. Tag1, Tag2"
                    variant="bordered"
                    value={item.tags?.join(", ")}
                    onChange={(e) =>
                      updateSectionItem(
                        sectionIndex,
                        itemIndex,
                        "tags",
                        e.target.value.split(", ")
                      )
                    }
                  /> */}
                </FormContainer.FieldWrapper>
              </FormContainer.FieldContainerCard>
            ))}
            <FormContainer.AddButton
              label={
                !section.items.length
                  ? "Add Section Item"
                  : "Add Another Section Item"
              }
              onClick={() =>
                addSectionItem(sectionIndex, {
                  name: "",
                  date: "",
                  description: "",
                  details: "",
                  link: "",
                  tags: [],
                })
              }
            />
            {/* <Input
              label="Institution"
              labelPlacement="outside"
              placeholder="e.g. Harvard University"
              variant="bordered"
              value={edu.institution}
              onChange={(e) =>
                updateEducation(index, "institution", e.target.value)
              }
            />
            <Input
              label="Area of Study"
              labelPlacement="outside"
              placeholder="e.g. Computer Science"
              variant="bordered"
              value={edu.area}
              onChange={(e) => updateEducation(index, "area", e.target.value)}
            />
            <Input
              label="Study Type"
              labelPlacement="outside"
              placeholder="e.g. Bachelor's"
              variant="bordered"
              value={edu.studyType}
              onChange={(e) =>
                updateEducation(index, "studyType", e.target.value)
              }
            />
            <DatePicker
              label="Start Date"
              variant="bordered"

              // value={toDateValue(edu.startDate)}
              // onChange={(e) => updateEducation(index, "startDate", e?.toDate())}
            /> */}

            {/* <DatePicker
              label="End Date"
              type="date"
              labelPlacement="outside"
              variant="bordered"
              value={parseDate(edu.endDate)}
              onChange={(e) => updateEducation(index, "endDate", e)}
            /> */}
          </FormContainer.FieldWrapper>
        </FormContainer.FieldContainerCard>
      ))}

      <FormContainer.AddButton
        label={!resume.sections?.length ? "Add Section" : "Add Another Section"}
        onClick={() => addSection({ items: [], title: "" })}
      />
    </FormContainer>
  );
}
