import { FormGenerator } from "components/formGenerator/FormGenerator";
import { questionsGirlFields } from "../configs/questionsConfig";
import { IAnswersQuestionnaire } from "interfaces/IFormFields";
import { saveUserQuestionnaire } from "http/userAPI";
import { useCheckUser } from "hooks/user/useCheckUser";

export const Questionnaire = () => {
  // fixme: send images to server

  const { getUserInfo } = useCheckUser();

  const submit = (data: any) => {
    const data1: IAnswersQuestionnaire = {
      phoneNumber: getUserInfo().phoneNumber,
      answers: data,
    };
    saveImage(data1.answers);
    saveUserQuestionnaire(data1);
  };

  const saveImage = (data: IAnswersQuestionnaire) => {
    Object.keys(data);
  };

  return <FormGenerator fields={questionsGirlFields} submitFunction={submit} />;
};
