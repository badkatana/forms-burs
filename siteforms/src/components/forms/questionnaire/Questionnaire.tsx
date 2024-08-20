import { FormGenerator } from "components/formGenerator/FormGenerator";
import { questionsGirlFields } from "../configs/questionsConfig";
import { IAnswersQuestionnaire } from "interfaces/IFormFields";
import { saveUserQuestionnaire } from "http/questionnaireApi";
import { useCheckUser } from "hooks/user/useCheckUser";
import { saveUserImages } from "http/userAPI";
import {
  getAllFieldsWithImages,
  getImagesAsFormData,
  replaceFilesWithNames,
} from "components/lib/imagesToServer";

export const Questionnaire = () => {
  const { getUserInfo, isUserAnswered } = useCheckUser();

  const submit = (data: any) => {
    saveImage(data);
    const userAnswers: IAnswersQuestionnaire = {
      phoneNumber: getUserInfo().phoneNumber,
      answers: replaceFilesWithNames(data),
    };
    saveUserQuestionnaire(userAnswers);
  };

  const saveImage = async (data: IAnswersQuestionnaire) => {
    const images = getAllFieldsWithImages(questionsGirlFields);
    const formData = getImagesAsFormData(images, "images", data);
    saveUserImages(formData);
  };

  if (isUserAnswered) {
    return <div>You already done that</div>;
  }

  return <FormGenerator fields={questionsGirlFields} submitFunction={submit} />;
};
