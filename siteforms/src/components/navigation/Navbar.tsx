import { Box, IconButton, Toolbar } from "@mui/material";
import { StyledAppBar, StyledBox, StyledLogoText } from "./styles/NavbarStyles";
import LogoutIcon from "@mui/icons-material/Logout";
import { useCheckUser } from "hooks/user/useCheckUser";

export const NavBar = () => {
  const { getUserInfo, logOutUser } = useCheckUser();
  const userName = getUserInfo().name;
  // FIXME: more information in navbar (user name, logout)
  return (
    <StyledAppBar color="transparent" position="sticky">
      <Toolbar style={{ width: "100%", justifyContent: "space-between" }}>
        <StyledLogoText>タスク</StyledLogoText>
        <StyledBox>
          <Box>{userName}</Box>
          <IconButton onClick={() => logOutUser()}>
            <LogoutIcon />
          </IconButton>
        </StyledBox>
      </Toolbar>
    </StyledAppBar>
  );
};
