export interface IFormFields {
  name: string;
  label: string;
  type: "text" | "email" | "select" | "checkbox" | "radio";
  options?: { label: string; value: string }[];
  validation?: ValidationRules;
}

export interface ValidationRules {
  required?: string;
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
}
