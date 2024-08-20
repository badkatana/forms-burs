import { Controller, useFormContext } from "react-hook-form";
import { IFormFields } from "interfaces/IFormFields";
import { Switch } from "@mui/material";

export const FormSwitch = (props: IFormFields) => {
  const { control } = useFormContext();
  const { name, label } = props;

  return (
    <div>
      <div>{label}</div>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Switch
            aria-label={name}
            color="secondary"
            checked={value}
            onChange={onChange}
          />
        )}
      />
    </div>
  );
};
