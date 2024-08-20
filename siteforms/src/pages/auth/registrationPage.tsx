import { Auth } from "../../components/forms/auth/auth";
import { BackgroundText, BlurredContainer } from "../styles/StylesRegistration";
import { Box } from "@mui/material";
import { AuthNav } from "components/navigation/authNav";
import useSnackbar from "hooks/notifications/useSnackbar";
import CustomSnackbar from "components/notifications/CustomSnackbar";
import { UsersStatsBox } from "components/user/usersStatsBox";

export const RegistrationPage = () => {
  const { open, message, severity, handleAuthError } = useSnackbar();

  return (
    <Box>
      <BackgroundText>
        <BlurredContainer>
          <Auth handleRegistrationError={handleAuthError} />
          <AuthNav
            linkNeeded="/signin"
            linkText="Sign In!"
            title="Already have an account?"
          />
          <UsersStatsBox />
          <CustomSnackbar open={open} message={message} severity={severity} />
        </BlurredContainer>
      </BackgroundText>
    </Box>
  );
};
