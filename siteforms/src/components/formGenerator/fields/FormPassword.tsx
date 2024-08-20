import { InputAdornment, IconButton, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { IFormFields } from "interfaces/IFormFields";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";

export const FormPassword = (props: IFormFields) => {
  const [showPassword, setShowPassword] = useState(false);
  const { control } = useFormContext();
  const { name, label, validation } = props;

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div>
      <div>{label}</div>
      <Controller
        name={name}
        control={control}
        rules={validation}
        render={({ field: { onChange, value }, fieldState }) => (
          <TextField
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
    </div>
  );
};
