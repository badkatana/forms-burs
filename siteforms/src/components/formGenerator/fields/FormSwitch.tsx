import { Control, Controller, FieldValues } from "react-hook-form";
import { IFormFields } from "../../../interfaces/IFormFields";
import { Switch } from "@mui/material";

type FormSwitchProps = {
  field: IFormFields;
  control: Control<FieldValues>;
};

export const FormSwitch = (props: FormSwitchProps) => {
  return (
    <div>
      <div>{props.field.label}</div>
      <Controller
        key={props.field.name}
        name={props.field.name}
        control={props.control}
        render={({ field: { onChange, value } }) => (
          <Switch
            defaultChecked
            color="secondary"
            value={value}
            onChange={onChange}
          />
        )}
      />
    </div>
  );
};
