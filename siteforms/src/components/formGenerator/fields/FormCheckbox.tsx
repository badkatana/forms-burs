import { FormControlLabel, Checkbox } from "@mui/material";
import { Control, FieldValues, Controller } from "react-hook-form";
import { IFormFields } from "../../../interfaces/IFormFields";

type FormCheckboxProps = {
  field: IFormFields;
  control: Control<FieldValues>;
};

export const FormCheckbox = (props: FormCheckboxProps) => {
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
