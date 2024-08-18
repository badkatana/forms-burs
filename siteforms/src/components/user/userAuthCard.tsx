import { Box, IconButton, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useCheckUser } from "hooks/user/useCheckUser";

export const UserAuthCard = () => {
  const { getUserInfo, logOutUser } = useCheckUser();
  const userName = getUserInfo().name;

  return (
    <Box>
      <Typography>You already signed up as </Typography>
      <Typography fontWeight={"bold"} color={"#7853B3"}>
        {userName}
      </Typography>
      <IconButton onClick={() => logOutUser()}>
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};
