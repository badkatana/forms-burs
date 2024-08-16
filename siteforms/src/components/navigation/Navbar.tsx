import { Toolbar } from "@mui/material";
import {
  StyledAppBar,
  StyledBox,
  StyledButton,
  StyledLogoText,
} from "./NavbarStyles";

export const NavBar = () => {
  return (
    <StyledAppBar color="transparent" position="sticky">
      <Toolbar style={{ width: "100%", justifyContent: "space-between" }}>
        <StyledLogoText>タスク</StyledLogoText>
        <StyledBox>
          <StyledButton href="/questionnaire">Questionnaire</StyledButton>
        </StyledBox>
      </Toolbar>
    </StyledAppBar>
  );
};
