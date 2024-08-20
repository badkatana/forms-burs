import { Controller, useFormContext } from "react-hook-form";
import { IFormFields } from "interfaces/IFormFields";
import { MenuItem, Select } from "@mui/material";

export const FormSelect = (props: IFormFields) => {
  const { options, name, label, validation, defaultValue } = props;
  const { control } = useFormContext();

  return (
    <div>
      <span>{label}</span>
      <Controller
        name={name}
        control={control}
        rules={validation}
        render={({ field: { onChange, value }, fieldState }) => (
          <div>
            <Select
              onChange={onChange}
              fullWidth
              defaultValue={defaultValue}
              value={value}
              error={!!fieldState.error}
            >
              {options?.map((option) => (
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
