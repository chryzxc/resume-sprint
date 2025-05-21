import React from "react";
import { Form, Input, Button, Textarea } from "@heroui/react";

const PersonalInformationForm = () => {
  const [action, setAction] = React.useState(null);
  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-6"
      //   onReset={() => setAction("reset")}
      onSubmit={(e) => {
        // e.preventDefault();
        // let data = Object.fromEntries(new FormData(e.currentTarget));
        // setAction(`submit ${JSON.stringify(data)}`);
      }}
    >
      <Input
        isRequired
        errorMessage="Please enter a valid username"
        label="Full Name"
        labelPlacement="outside"
        name="username"
        placeholder="Enter your username"
        type="text"
        variant="bordered"
      />
      <Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Job Title"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
        variant="bordered"
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
      />
      <Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Mobile Number"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
        variant="bordered"
      />
      <Textarea
        className="max-w-xs"
        label="Address"
        labelPlacement="outside"
        placeholder="Enter your description"
        variant="bordered"
      />
    </Form>
  );
};

export default PersonalInformationForm;
