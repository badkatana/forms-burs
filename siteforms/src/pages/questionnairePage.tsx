import { Questionnaire } from "components/forms/questionnaire/Questionnaire";
import { NavBar } from "components/navigation/Navbar";
import {
  StyledContainer,
  StyledFormContainer,
  TypographyHeader,
  TypographySmall,
} from "./styles/StylesQuestionnairePage";

export const QuestionnairePage = () => {
  return (
    <div>
      <NavBar />
      <StyledContainer>
        <TypographyHeader>This is our questionnaire</TypographyHeader>
        <TypographySmall>Please be honest in your answers</TypographySmall>
        <StyledFormContainer>
          <Questionnaire />
        </StyledFormContainer>
      </StyledContainer>
    </div>
  );
};
