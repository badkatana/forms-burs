import { Box, FormControl } from "@mui/material";
import { BackgroundText, BlurredContainer } from "../styles/StylesRegistration";
import { SignIn } from "components/forms/auth/signIn";
import useSnackbar from "hooks/notifications/useSnackbar";
import CustomSnackbar from "components/notifications/CustomSnackbar";
import { AuthNav } from "components/navigation/authNav";

export const SingInPage = () => {
  const { open, message, severity, handleAuthError } = useSnackbar();

  return (
    <Box>
      <BackgroundText>
        <BlurredContainer>
          <FormControl>
            <SignIn handleError={handleAuthError} />
          </FormControl>
          <AuthNav
            linkNeeded="/registration"
            linkText="Create!"
            title="Want an account?"
          />
        </BlurredContainer>
        <CustomSnackbar open={open} message={message} severity={severity} />
      </BackgroundText>
    </Box>
  );
};
