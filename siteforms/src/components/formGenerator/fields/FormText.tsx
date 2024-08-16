import { Controller } from "react-hook-form";
import { FormFieldProps } from "interfaces/IFormFields";
import { TextField } from "@mui/material";
import { setFormValue } from "../../forms/lib/common";

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
