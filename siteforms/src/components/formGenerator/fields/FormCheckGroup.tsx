import { Controller, useFormContext } from "react-hook-form";
import { FormCheckbox } from "./FormCheckbox";
import { IFormFields } from "interfaces/IFormFields";

// what should be: it must also have validation rules (at least one checked)
// checkboxes arranged in columns (like 3 columns by default)

export const FormCheckboxGroup = (props: IFormFields) => {
  const { name, options, label, validation } = props;
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      rules={validation}
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
