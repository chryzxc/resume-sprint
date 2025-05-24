import { useResumeStore } from "@/stores/resumeBuilderStore";
import { Input, Textarea } from "@heroui/react";
import FormContainer from "./FormContainer";

const PersonalInformationForm = () => {
  const { updateBasics, resume, updateContact } = useResumeStore();
  return (
    <FormContainer>
      <FormContainer.FieldWrapper>
        <Input
          isRequired
          errorMessage="Please enter a valid name"
          label="Full Name"
          labelPlacement="outside"
          name="name"
          placeholder="Enter your name"
          type="text"
          variant="bordered"
          value={resume.basics.name}
          onChange={(e) => updateBasics("name", e.currentTarget.value)}
        />
        <Input
          errorMessage="Please enter a valid label"
          label="Label"
          labelPlacement="outside"
          name="label"
          placeholder="Enter a label"
          type="text"
          variant="bordered"
          value={resume.basics.label}
          onChange={(e) => updateBasics("label", e.currentTarget.value)}
        />
        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
          variant="bordered"
          value={resume.basics.contact.email}
          onChange={(e) => updateContact("email", e.currentTarget.value)}
        />
        <Input
          errorMessage="Please enter a valid github account"
          label="Github"
          labelPlacement="outside"
          name="github"
          placeholder="Enter your Github"
          variant="bordered"
          value={resume.basics.contact.github}
          onChange={(e) => updateContact("github", e.currentTarget.value)}
        />
        <Input
          errorMessage="Please enter a valid LinkedIn account"
          label="LinkedIn"
          labelPlacement="outside"
          name="linkedin"
          placeholder="Enter your LinkedIn"
          variant="bordered"
          value={resume.basics.contact.linkedin}
          onChange={(e) => updateContact("linkedin", e.currentTarget.value)}
        />
        <Input
          errorMessage="Please enter a valid phone number"
          label="Phone Number"
          labelPlacement="outside"
          name="phone"
          placeholder="Enter your Phone number"
          type="phone"
          variant="bordered"
          value={resume.basics.contact.phone}
          onChange={(e) => updateContact("phone", e.currentTarget.value)}
        />
        <Input
          errorMessage="Please enter a portfolio url"
          label="Portfolio"
          labelPlacement="outside"
          name="portfolio"
          placeholder="Enter your portfolio url"
          variant="bordered"
          value={resume.basics.contact.portfolio}
          onChange={(e) => updateContact("portfolio", e.currentTarget.value)}
        />
        <Textarea
          label="Address"
          labelPlacement="outside"
          placeholder="Enter your address"
          variant="bordered"
          value={resume.basics.contact.address}
          onChange={(e) => updateContact("address", e.currentTarget.value)}
        />
      </FormContainer.FieldWrapper>
    </FormContainer>
  );
};

export default PersonalInformationForm;
