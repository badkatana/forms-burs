import { $host } from "http/index";
import { IAnswersQuestionnaire } from "interfaces/IFormFields";

export const checkUserQuestionnaire = async (phoneNumber: string) => {
  const { data } = await $host.get(`/check/${phoneNumber}`);
  return data;
};

export const saveUserQuestionnaire = async (
  user_answers: IAnswersQuestionnaire
) => {
  const { data } = await $host.post("/save/", user_answers);
  return data;
};
