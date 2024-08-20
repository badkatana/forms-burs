import { Controller, useFormContext } from "react-hook-form";
import { FormCheckbox } from "./FormCheckbox";
import { IFormFields } from "interfaces/IFormFields";

// what should be: it must also have validation rules (at least one checked)
// checkboxes arranged in columns (like 3 columns by default)

export const FormCheckboxGroup = (props: IFormFields) => {
  const { name, options, label, validation } = props;
  const { control } = useFormContext();

  const getACheckBox = (check: { label: string; value: string }) => {
    return {
      name: check.label,
      label: check.value,
      type: "checkbox",
    } as IFormFields;
  };
  return (
    <div>
      <div>{label}</div>
      <Controller
        control={control}
        name={name}
        rules={validation}
        render={({ field: { onChange, value }, fieldState }) => (
          <div>
            {options?.map((check) => (
              <FormCheckbox {...getACheckBox(check)} />
            ))}
            {fieldState.error ? fieldState.error.message : ""}
          </div>
        )}
      />
    </div>
  );
};
