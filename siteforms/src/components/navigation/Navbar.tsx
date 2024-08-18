import { Box, Toolbar } from "@mui/material";
import {
  StyledAppBar,
  StyledBox,
  StyledButton,
  StyledLogoText,
} from "./styles/NavbarStyles";
import { useCheckUser } from "hooks/user/useCheckUser";

export const NavBar = () => {
  const { getUserInfo } = useCheckUser();
  const userName = getUserInfo().name;
  // FIXME: more information in navbar (user name, logout)
  return (
    <StyledAppBar color="transparent" position="sticky">
      <Toolbar style={{ width: "100%", justifyContent: "space-between" }}>
        <StyledLogoText>タスク</StyledLogoText>
        <StyledBox>
          <Box>{userName}</Box>
          {/* FIXME: this shold not be here */}
          <StyledButton href="/questionnaire">Questionnaire</StyledButton>
        </StyledBox>
      </Toolbar>
    </StyledAppBar>
  );
};
