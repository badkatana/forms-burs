import { Controller, useFormContext } from "react-hook-form";
import { IFormFields } from "interfaces/IFormFields";
import { TextField } from "@mui/material";

export const FormText = (props: IFormFields) => {
  const { control, setValue } = useFormContext();
  const { name, label, validation } = props;

  return (
    <div>
      <div>{label}</div>
      <Controller
        name={name}
        control={control}
        rules={validation}
        render={({ field: { onChange, value }, fieldState }) => (
          <TextField
            type="text"
            onChange={(e) => {
              onChange(e);
              setValue(name, e.target.value);
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
