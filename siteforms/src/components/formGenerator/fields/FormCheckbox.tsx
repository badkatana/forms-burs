import { FormControlLabel, Checkbox } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormFieldProps } from "interfaces/IFormFields";

export const FormCheckbox = (props: FormFieldProps) => {
  return (
    <Controller
      key={props.field.name}
      name={props.field.name}
      control={props.control}
      render={({ field: { onChange, value } }) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={value}
              onChange={(e) => onChange(e.target.checked)}
            />
          }
          label={props.field.label}
        />
      )}
    />
  );
};
