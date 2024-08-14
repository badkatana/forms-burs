import {
  TextField,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { IFormFields } from "../../interfaces/IFormFields";
import { FormTitle, SubmitButton } from "./formGeneratorStyles";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type FormGeneratorProps = {
  submitFunction: (data: any) => void; // здесь any, потому как генератор форм должен быть максимально абстрактным
  fields: IFormFields[];
  formTitle?: string;
};

export const FormGenerator = (props: FormGeneratorProps) => {
  const { control, handleSubmit } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <form onSubmit={handleSubmit(props.submitFunction)}>
      <FormTitle stroke>{props.formTitle}</FormTitle>
      {props.fields.map((field) => {
        switch (field.type) {
          case "text":
            return (
              <Controller
                key={field.name}
                name={field.name}
                control={control}
                rules={field.validation}
                render={({ field: { onChange, value }, fieldState }) => (
                  <TextField
                    label={field.label}
                    type={field.type}
                    onChange={onChange}
                    value={value}
                    error={!!fieldState.error}
                    helperText={
                      fieldState.error ? fieldState.error.message : ""
                    }
                    fullWidth
                    margin="normal"
                  />
                )}
              />
            );

          case "select":
            return (
              <div>
                <span>{field.label}</span>
                <Controller
                  name={field.name}
                  control={control}
                  rules={field.validation}
                  render={({ field: { onChange, value }, fieldState }) => (
                    <Select
                      onChange={onChange}
                      fullWidth
                      value={value}
                      error={!!fieldState.error}
                    >
                      {field.options?.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                ></Controller>
              </div>
            );

          case "checkbox":
            return (
              <Controller
                key={field.name}
                name={field.name}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={value}
                        onChange={(e) => onChange(e.target.checked)}
                      />
                    }
                    label={field.label}
                  />
                )}
              />
            );

          case "radio":
            return (
              <div key={field.name}>
                <span>{field.label}</span>
                <Controller
                  name={field.name}
                  control={control}
                  rules={field.validation}
                  render={({ field: { onChange, value } }) => (
                    <RadioGroup value={value} onChange={onChange}>
                      {field.options?.map((option) => (
                        <FormControlLabel
                          key={option.value}
                          value={option.value}
                          control={<Radio />}
                          label={option.label}
                        />
                      ))}
                    </RadioGroup>
                  )}
                />
              </div>
            );
          case "password":
            return (
              <Controller
                key={field.name}
                name={field.name}
                control={control}
                rules={field.validation}
                render={({ field: { onChange, value }, fieldState }) => (
                  <TextField
                    label={field.label}
                    onChange={onChange}
                    value={value}
                    type={showPassword ? "text" : "password"}
                    error={!!fieldState.error}
                    helperText={
                      fieldState.error ? fieldState.error.message : ""
                    }
                    fullWidth
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            );

          default:
            return null;
        }
      })}
      <SubmitButton type="submit">Submit</SubmitButton>
    </form>
  );
};
