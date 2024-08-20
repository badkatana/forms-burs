import { FormProvider, useForm } from "react-hook-form";
import { IFormFields } from "interfaces/IFormFields";
import { FormTitle } from "./formGeneratorStyles";
import { FormText } from "./fields/FormText";
import { FormSelect } from "./fields/FormSelect";
import { FormCheckbox } from "./fields/FormCheckbox";
import { FormRadio } from "./fields/FormRadio";
import { FormPassword } from "./fields/FormPassword";
import { FormGeneratorButtons } from "./FormGeneratorButtons";
import { IButtonProps } from "interfaces/iButtonGroup";
import { FormSwitch } from "./fields/FormSwitch";
import { FormOrder } from "./fields/FormOrder";
import { FormUpload } from "./fields/FormUpload";

type FormGeneratorProps = {
  submitFunction: (data: any) => void; // здесь any, потому как генератор форм должен быть максимально абстрактным
  fields: IFormFields[];
  formTitle?: string;
  buttons?: IButtonProps[];
};

export const FormGenerator = (props: FormGeneratorProps) => {
  const methods = useForm({
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      <form
        key={props.formTitle}
        aria-label="form"
        onSubmit={methods.handleSubmit(props.submitFunction)}
      >
        <FormTitle stroke>{props.formTitle}</FormTitle>
        {props.fields.map((field) => {
          switch (field.type) {
            case "text":
              return <FormText key={field.name} {...field} />;

            case "select":
              return <FormSelect key={field.name} {...field} />;

            case "checkbox":
              return <FormCheckbox key={field.name} {...field} />;

            case "radio":
              return <FormRadio key={field.name} {...field} />;

            case "password":
              return <FormPassword key={field.name} {...field} />;

            case "switch":
              return <FormSwitch key={field.name} {...field} />;

            case "drag":
              return <FormOrder key={field.name} {...field} />;

            case "upload":
              return <FormUpload key={field.name} {...field} />;

            default:
              return null;
          }
        })}
        <FormGeneratorButtons key={"formButtons"} buttons={props.buttons} />
      </form>
    </FormProvider>
  );
};
