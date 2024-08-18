import { Controller } from "react-hook-form";
import { FormFieldProps } from "interfaces/IFormFields";
import { TextField } from "@mui/material";
import { setFormValue } from "./lib/formLogic";

export const FormText = (props: FormFieldProps) => {
  return (
    <div>
      <div>{props.field.label}</div>
      <Controller
        name={props.field.name}
        control={props.control}
        rules={props.field.validation}
        render={({ field: { onChange, onBlur, value }, fieldState }) => (
          <TextField
            label={props.field.label}
            type="text"
            onChange={(e) => {
              onChange(e);
              setFormValue(props.setValue!, e, props.field.name);
            }}
            value={value !== undefined ? value : ""}
            error={!!fieldState.error}
            helperText={fieldState.error ? fieldState.error.message : ""}
            fullWidth
            margin="normal"
          />
        )}
      />
    </div>
  );
};
