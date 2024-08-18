import { Controller } from "react-hook-form";
import { FormFieldProps } from "interfaces/IFormFields";
import { Switch } from "@mui/material";

export const FormSwitch = (props: FormFieldProps) => {
  return (
    <div>
      <div>{props.field.label}</div>
      <Controller
        key={props.field.name}
        name={props.field.name}
        control={props.control}
        render={({ field: { onChange, value } }) => (
          <Switch
            aria-label={props.field.name}
            color="secondary"
            checked={value}
            onChange={onChange}
          />
        )}
      />
    </div>
  );
};
