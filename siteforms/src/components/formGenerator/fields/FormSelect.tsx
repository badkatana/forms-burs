import { Controller } from "react-hook-form";
import { FormFieldProps } from "../../../interfaces/IFormFields";
import { MenuItem, Select } from "@mui/material";

export const FormSelect = (props: FormFieldProps) => {
  return (
    <div>
      <span>{props.field.label}</span>
      <Controller
        name={props.field.name}
        control={props.control}
        rules={props.field.validation}
        render={({ field: { onChange, value }, fieldState }) => (
          <div>
            <Select
              onChange={onChange}
              fullWidth
              defaultValue={props.field.defaultValue}
              value={value}
              error={!!fieldState.error}
            >
              {props.field.options?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {fieldState.error ? fieldState.error.message : ""}
          </div>
        )}
      />
    </div>
  );
};
