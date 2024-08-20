import { Button } from "@mui/material";
import { IFormFields } from "interfaces/IFormFields";
import { Controller, useFormContext } from "react-hook-form";
import { HiddenInput } from "./styles/FormUploadStyle";

export const FormUpload = (props: IFormFields) => {
  const { control } = useFormContext();
  const { name, label, validation } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={validation}
      render={({ field: { onChange }, fieldState }) => (
        <div>
          <Button component="label">
            {/* important */}
            {label}
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
