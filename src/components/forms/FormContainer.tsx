import { Button, Form } from "@heroui/react";
import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PDF_HEIGHT } from "../PdfView";

type TFormContainerProps = {
  children: React.ReactNode;
};

const FormContainer = ({ children }: TFormContainerProps) => {
  return (
    <Form
      className="flex flex-col space-y-4 w-full overflow-auto pb-4"
      style={{ height: PDF_HEIGHT + 20 }}
    >
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
    <div className="border-2 px-4 py-2 rounded-xl border-default-200 w-full shadow-md">
      {!!onRemove && (
        <div className="flex flex-row-reverse mb-2 -mr-1">
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
  return (
    <div className="flex flex-col space-y-4 w-full h-full">{children}</div>
  );
};

const AddButton = ({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) => {
  return (
    <div className="flex justify-end w-full">
      <Button type="button" color="success" variant="light" onPress={onClick}>
        {label}
      </Button>
    </div>
  );
};

FormContainer.FieldContainerCard = FieldContainerCard;
FormContainer.FieldWrapper = FieldWrapper;
FormContainer.AddButton = AddButton;

export default FormContainer;
