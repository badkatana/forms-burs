import { useForm } from "react-hook-form";
import { IFormFields } from "../../interfaces/IFormFields";
import { FormTitle } from "./formGeneratorStyles";
import { FormText } from "./fields/FormText";
import { FormSelect } from "./fields/FormSelect";
import { FormCheckbox } from "./fields/FormCheckbox";
import { FormRadio } from "./fields/FormRadio";
import { FormPassword } from "./fields/FormPassword";
import { FormGeneratorButtons } from "./FormGeneratorButtons";
import { IButtonProps } from "../../interfaces/iButtonGroup";
import { FormSwitch } from "./fields/FormSwitch";
import { FormOrder } from "./fields/FormOrder";

type FormGeneratorProps = {
  submitFunction: (data: any) => void; // здесь any, потому как генератор форм должен быть максимально абстрактным
  fields: IFormFields[];
  formTitle?: string;
  buttons?: IButtonProps[];
};

export const FormGenerator = (props: FormGeneratorProps) => {
  const { control, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(props.submitFunction)}>
      <FormTitle stroke>{props.formTitle}</FormTitle>
      {props.fields.map((field) => {
        switch (field.type) {
          case "text":
            return (
              <FormText setValue={setValue} field={field} control={control} />
            );

          case "select":
            return <FormSelect field={field} control={control} />;

          case "checkbox":
            return <FormCheckbox field={field} control={control} />;

          case "radio":
            return <FormRadio field={field} control={control} />;

          case "password":
            return <FormPassword field={field} control={control} />;

          case "switch":
            return <FormSwitch field={field} control={control} />;

          case "drag":
            return (
              <FormOrder field={field} control={control} setValue={setValue} />
            );

          default:
            return null;
        }
      })}
      <FormGeneratorButtons buttons={props.buttons} />
    </form>
  );
};
