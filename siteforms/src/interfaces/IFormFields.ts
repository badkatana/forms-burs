export interface IFormFields {
  name: string;
  label: string;
  type:
    | "text"
    | "select"
    | "checkbox"
    | "radio"
    | "password"
    | "upload"
    | "switch"
    | "drag";
  options?: { label: string; value: string }[];
  validation?: ValidationRules;
}

export interface ValidationRules {
  required?: string;
  pattern?: { value: RegExp; message: string };
}
