import { FormControlLabel, RadioGroup, Radio } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormFieldProps } from "interfaces/IFormFields";

export const FormRadio = (props: FormFieldProps) => {
  return (
    <div>
      <span>{props.field.label}</span>
      <Controller
        name={props.field.name}
        control={props.control}
        rules={props.field.validation}
        render={({ field: { onChange, value }, fieldState }) => (
          <div>
            <RadioGroup value={value} onChange={onChange}>
              {props.field.options?.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
            {fieldState.error ? fieldState.error.message : ""}
          </div>
        )}
      />
    </div>
  );
};
