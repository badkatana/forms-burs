import { Control, Controller, FieldValues } from "react-hook-form";
import { IFormFields } from "../../../interfaces/IFormFields";
import { TextField } from "@mui/material";

type FormTextProps = {
  field: IFormFields;
  control: Control<FieldValues>;
};

export const FormText = (props: FormTextProps) => {
  return (
    <Controller
      key={props.field.name}
      name={props.field.name}
      control={props.control}
      rules={props.field.validation}
      render={({ field: { onChange, value }, fieldState }) => (
        <TextField
          label={props.field.label}
          type={props.field.type}
          onChange={onChange}
          value={value}
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : ""}
          fullWidth
          margin="normal"
        />
      )}
    />
  );
};
