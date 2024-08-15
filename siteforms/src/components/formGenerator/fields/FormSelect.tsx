import { Control, Controller, FieldValues } from "react-hook-form";
import { IFormFields } from "../../../interfaces/IFormFields";
import { MenuItem, Select } from "@mui/material";

type FormSelectProps = {
  field: IFormFields;
  control: Control<FieldValues>;
};

export const FormSelect = (props: FormSelectProps) => {
  return (
    <div>
      <span>{props.field.label}</span>
      <Controller
        name={props.field.name}
        control={props.control}
        rules={props.field.validation}
        render={({ field: { onChange, value }, fieldState }) => (
          <Select
            onChange={onChange}
            fullWidth
            value={value}
            error={!!fieldState.error}
          >
            {props.field.options?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </div>
  );
};
