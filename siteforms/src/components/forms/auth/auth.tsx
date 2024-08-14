import { GENDER_OPTIONS } from "../../../constants/formsConstant";
import { FormGenerator } from "../../formGenerator/FormGenerator";
import { IFormFields } from "../../../interfaces/IFormFields";
import { findValidationSequence } from "../lib/common";
import { IUser } from "../../../interfaces/IUser";

export const Auth = () => {
  const textError = "This field is required";

  const fields: IFormFields[] = [
    {
      name: "name",
      label: "Your name",
      type: "text",
      validation: {
        required: textError,
        pattern: {
          value: findValidationSequence("name"),
          message: "This does not look like a persons's name",
        },
      },
    },
    {
      name: "phoneNumber",
      label: "phone number",
      type: "text",
      validation: {
        required: textError,
        pattern: {
          value: findValidationSequence("phoneNumber"),
          message: "phone number contains 11 digits",
        },
      },
    },
    {
      name: "gender",
      label: "choose your gender",
      type: "select",
      options: GENDER_OPTIONS,
      validation: {
        required: textError,
      },
    },
  ];

  const handleSubmit = (data: IUser) => {
    console.log(data);
  };

  return <FormGenerator fields={fields} submitFunction={handleSubmit} />;
};
