import { REGEXP_VALIDATION } from "constants/formsConstant";

export function findValidationSequence(type: string) {
  return REGEXP_VALIDATION.find((item) => item.type === type)!.sequence;
}
