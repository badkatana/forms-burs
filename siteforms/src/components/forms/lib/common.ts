import { FieldValues, UseFormSetValue } from "react-hook-form";
import { REGEXP_VALIDATION } from "../../../constants/formsConstant";

export function findValidationSequence(type: string) {
  return REGEXP_VALIDATION.find((item) => item.type === type)!.sequence;
}

export function setFormValue(
  setValue: UseFormSetValue<FieldValues>,
  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  name: string
) {
  setValue!(`${name}`, e.target.value);
}
