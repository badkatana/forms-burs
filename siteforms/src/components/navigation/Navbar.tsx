import { Toolbar } from "@mui/material";
import {
  StyledAppBar,
  StyledBox,
  StyledButton,
  StyledLogoText,
} from "./styles/NavbarStyles";

export const NavBar = () => {
  // FIXME: more information in navbar (user name, logout)
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
