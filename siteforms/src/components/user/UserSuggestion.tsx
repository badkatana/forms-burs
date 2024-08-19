import {
  StyledBox,
  StyledButton,
  TypoStyle,
} from "./styles/UserSuggestionStyles";
export const UserSuggestion = (props: { suggestion: boolean }) => {
  if (props.suggestion) {
    return <div></div>;
  }
  return (
    <StyledBox>
      <TypoStyle>
        You haven't gone through our questionnaire yet. Please complete it, it
        will help us to select the right content
      </TypoStyle>
      <StyledButton size="small" href="/questionnaire">
        I will take a questionnaire
      </StyledButton>
    </StyledBox>
  );
};
