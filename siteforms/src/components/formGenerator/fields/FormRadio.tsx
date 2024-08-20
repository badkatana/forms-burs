import { FormControlLabel, RadioGroup, Radio } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { IFormFields } from "interfaces/IFormFields";

export const FormRadio = (props: IFormFields) => {
  const { control } = useFormContext();
  const { options, name, label, validation } = props;
  return (
    <div>
      <span>{label}</span>
      <Controller
        name={name}
        control={control}
        rules={validation}
        render={({ field: { onChange, value }, fieldState }) => (
          <div>
            <RadioGroup value={value} onChange={onChange}>
              {options?.map((option) => (
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
