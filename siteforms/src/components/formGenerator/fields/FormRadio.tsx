import { FormControlLabel, RadioGroup, Radio } from "@mui/material";
import { Control, FieldValues, Controller } from "react-hook-form";
import { IFormFields } from "../../../interfaces/IFormFields";

type FormRadioProps = {
  field: IFormFields;
  control: Control<FieldValues>;
};

export const FormRadio = (props: FormRadioProps) => {
  return (
    <div key={props.field.name}>
      <span>{props.field.label}</span>
      <Controller
        name={props.field.name}
        control={props.control}
        rules={props.field.validation}
        render={({ field: { onChange, value } }) => (
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
        )}
      />
    </div>
  );
};
