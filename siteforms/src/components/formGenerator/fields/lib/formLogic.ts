import { FieldValues, UseFormSetValue } from "react-hook-form";

export function setFormValue(
  setValue: UseFormSetValue<FieldValues>,
  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  name: string
) {
  setValue!(`${name}`, e.target.value);
}
