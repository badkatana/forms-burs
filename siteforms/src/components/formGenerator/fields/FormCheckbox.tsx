import { FormControlLabel, Checkbox } from "@mui/material";
import { IFormFields } from "interfaces/IFormFields";
import { Controller, useFormContext } from "react-hook-form";

export const FormCheckbox = (props: IFormFields) => {
  const { name, label, validation } = props;
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={validation}
      render={({ field: { onChange, value } }) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={value}
              onChange={(e) => onChange(e.target.checked)}
            />
          }
          label={label}
        />
      )}
    />
  );
};
