import { UseFormSetValue, FieldValues } from "react-hook-form";

export interface IFormFields {
  name: string;
  label: string;
  type:
    | "text"
    | "select"
    | "checkbox"
    | "checkbox group"
    | "radio"
    | "password"
    | "switch"
    | "drag"
    | "upload";
  options?: { label: string; value: string }[];
  defaultValue?: string;
  validation?: ValidationRules;
}

export interface ValidationRules {
  required?: string;
  pattern?: { value: RegExp; message: string };
}

export interface IAnswersQuestionnaire {
  phoneNumber: string;
  answers: any;
}
