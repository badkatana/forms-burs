import { Box, Typography } from "@mui/material";
import { Questionnaire } from "components/forms/questionnaire/Questionnaire";
import { NavBar } from "components/navigation/Navbar";
import {
  StyledContainer,
  StyledFormContainer,
} from "./styles/StylesQuestionnairePage";
import { useCheckUser } from "hooks/user/useCheckUser";

export const QuestionnairePage = () => {
  return (
    <div>
      <NavBar />
      <StyledContainer>
        <Typography>Hi! This is our questionnaire</Typography>
        <Typography>Please be honest in your answers</Typography>
        <StyledFormContainer>
          <Questionnaire />
        </StyledFormContainer>
      </StyledContainer>
    </div>
  );
};
