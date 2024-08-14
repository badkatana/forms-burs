import { REGEXP_VALIDATION } from "../../../constants/formsConstant";

export function findValidationSequence(type: string) {
  // to lib folder
  return REGEXP_VALIDATION.find((item) => item.type === "email")!.sequence;
}
