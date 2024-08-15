import {
  Control,
  Controller,
  FieldValues,
  UseFormSetValue,
} from "react-hook-form";
import { IFormFields } from "../../../interfaces/IFormFields";
import { TextField } from "@mui/material";

type FormTextProps = {
  field: IFormFields;
  control: Control<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
};

export const FormText = (props: FormTextProps) => {
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
              props.setValue(`${props.field.name}`, e.target.value);
            }}
            onBlur={onBlur}
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
