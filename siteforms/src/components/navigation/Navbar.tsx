import { Box, IconButton, Toolbar } from "@mui/material";
import { StyledAppBar, StyledBox, StyledLogoText } from "./styles/NavbarStyles";
import LogoutIcon from "@mui/icons-material/Logout";
import { useCheckUser } from "hooks/user/useCheckUser";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const { getUserInfo, logOutUser } = useCheckUser();
  const userName = getUserInfo().name;
  const navigate = useNavigate();

  const handleLogOutClick = () => {
    logOutUser();
    navigate("/registration");
  };

  return (
    <StyledAppBar color="transparent" position="sticky">
      <Toolbar style={{ width: "100%", justifyContent: "space-between" }}>
        <StyledLogoText onClick={() => navigate("/news")}>
          タスク
        </StyledLogoText>
        <StyledBox>
          <Box>{userName}</Box>
          <IconButton onClick={() => handleLogOutClick()}>
            <LogoutIcon />
          </IconButton>
        </StyledBox>
      </Toolbar>
    </StyledAppBar>
  );
};
