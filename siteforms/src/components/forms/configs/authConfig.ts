import { GENDER_OPTIONS, TEXT_REQUIRED } from "constants/formsConstant";
import { IFormFields } from "interfaces/IFormFields";
import { findValidationSequence } from "../lib/common";

export const authFields: IFormFields[] = [
  {
    name: "name",
    label: "Your name",
    type: "text",
    validation: {
      required: TEXT_REQUIRED,
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
      required: TEXT_REQUIRED,
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
  },
  {
    name: "password",
    label: "Enter a new password",
    type: "password",
    validation: {
      required: TEXT_REQUIRED,
      pattern: {
        value: findValidationSequence("password"),
        message: "Password should have 1 special character, 1 number",
      },
    },
  },
];
