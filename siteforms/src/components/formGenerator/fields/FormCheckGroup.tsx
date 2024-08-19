import { CheckBox } from "@mui/icons-material";
import { FormFieldProps } from "interfaces/IFormFields";
import { Controller } from "react-hook-form";
import { FormCheckbox } from "./FormCheckbox";

// what should be: it must also have validation rules (at least one checked)
// checkboxes arranged in columns (like 3 columns by default)
export const FormCheckboxGroup = (props: FormFieldProps) => {
  const { field, control } = props;
  return (
    <Controller
      control={control}
      name={field.name}
      rules={field.validation}
      render={({ field: { onChange, value }, fieldState }) => (
        <div>
          {/* {field.options?.map((check) => (
            <FormCheckbox control={control} field={undefined} />
          ))} */}

          {/* <Radio value={value} onChange={onChange}>
            {props.field.options?.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </>
          {fieldState.error ? fieldState.error.message : ""} */}
        </div>
      )}
    />
  );
};
