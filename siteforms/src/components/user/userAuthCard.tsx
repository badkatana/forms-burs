import { Box, IconButton, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

export const UserAuthCard = (props: { name: string; logOut: () => void }) => {
  return (
    <Box>
      <Typography>You already signed up as </Typography>
      <Typography fontWeight={"bold"} color={"#7853B3"}>
        {props.name}
      </Typography>
      <IconButton onClick={() => props.logOut()}>
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};
