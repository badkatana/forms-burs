import { Button } from "@mui/material";
import { FormFieldProps } from "interfaces/IFormFields";
import { Controller } from "react-hook-form";
import { HiddenInput } from "./styles/FormUploadStyle";

export const FormUpload = (props: FormFieldProps) => {
  const { field, control } = props;
  return (
    <Controller
      name={field.name}
      control={control}
      rules={field.validation}
      render={({ field: { onChange }, fieldState }) => (
        <div>
          <Button component="label">
            {/* important */}
            {field.label}
            <HiddenInput
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  onChange(e.target.files[0]);
                }
              }}
            />
          </Button>
          {fieldState.error ? fieldState.error.message : ""}
        </div>
      )}
    />
  );
};
