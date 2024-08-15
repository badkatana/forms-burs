import { InputAdornment, IconButton, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormFieldProps } from "../../../interfaces/IFormFields";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";

export const FormPassword = (props: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Controller
      key={props.field.name}
      name={props.field.name}
      control={props.control}
      rules={props.field.validation}
      render={({ field: { onChange, value }, fieldState }) => (
        <TextField
          label={props.field.label}
          onChange={onChange}
          value={value}
          type={showPassword ? "text" : "password"}
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : ""}
          fullWidth
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};
