import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { IUser } from "../../../interfaces/IUser";
import {
  GENDER_OPTIONS,
  REGEXP_VALIDATION,
} from "../../../constants/formsConstant";
import { useId } from "react";
import { FormGenerator } from "../formGenerator/FormGenerator";
import { IFormFields } from "../../../interfaces/IFormFields";

export const Auth = () => {
  const textError = "This field is required";
  const id = useId();

  function findValidationSequence(type: string) {
    return REGEXP_VALIDATION.find((item) => item.type == "email")!.sequence;
  }
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

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return <FormGenerator fields={fields} submitFunction={handleSubmit} />;
};
