import { TEXT_REQUIRED } from "constants/formsConstant";
import { IFormFields } from "interfaces/IFormFields";
import { findValidationSequence } from "../lib/common";

export const SignInConfig: IFormFields[] = [
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
    name: "password",
    label: "Enter a new password",
    type: "password",
    validation: {
      required: TEXT_REQUIRED,
    },
  },
];
