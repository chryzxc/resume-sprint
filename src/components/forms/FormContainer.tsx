import { Button, Form } from "@heroui/react";
import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

type TFormContainerProps = {
  children: React.ReactNode;
};

const FormContainer = ({ children }: TFormContainerProps) => {
  return (
    <Form className="flex flex-col space-y-4 w-full max-h-[400px]">
      {children}
    </Form>
  );
};

const FieldContainerCard = ({
  children,
  onRemove,
}: {
  children: React.ReactNode;
  onRemove?: () => void;
}) => {
  return (
    <div className="border-1 p-4 rounded-lg border-default-200 w-full">
      {!!onRemove && (
        <div className="flex flex-row-reverse mb-2">
          <Button isIconOnly color="danger" variant="light" onPress={onRemove}>
            <TrashIcon height={20} color="red" />
          </Button>
        </div>
      )}
      {children}
    </div>
  );
};

const FieldWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col space-y-4 w-full">{children}</div>;
};

const AddButton = ({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) => {
  return (
    <Button type="button" color="success" variant="light" onPress={onClick}>
      {label}
    </Button>
  );
};

FormContainer.FieldContainerCard = FieldContainerCard;
FormContainer.FieldWrapper = FieldWrapper;
FormContainer.AddButton = AddButton;

export default FormContainer;
