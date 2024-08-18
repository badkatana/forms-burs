import { FormGenerator } from "components/formGenerator/FormGenerator";
import { questionsGirlFields } from "../configs/questionsConfig";

export const Questionnaire = () => {
  const submit = (data: any) => {
    console.log(data);
  };
  return <FormGenerator fields={questionsGirlFields} submitFunction={submit} />;
};
