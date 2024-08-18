import { Box, FormControl } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  BackgroundText,
  BlurredContainer,
  FlexBox,
} from "./StylesRegistration";
import { SignIn } from "components/forms/auth/signIn";
import useSnackbar from "hooks/useSnackbar";
import CustomSnackbar from "components/notifications/CustomSnackbar";

export const SingInPage = () => {
  const { open, message, severity, handleAuthError } = useSnackbar();

  return (
    <Box>
      <BackgroundText>
        <BlurredContainer>
          <FormControl>
            <SignIn handleError={handleAuthError} />
          </FormControl>
          {/* FIXME: to a navigation components*/}
          <FlexBox direction>
            <div>Want an account?</div>
            <NavLink to={"/registration"}>Create!</NavLink>
          </FlexBox>
        </BlurredContainer>
        <CustomSnackbar open={open} message={message} severity={severity} />
      </BackgroundText>
    </Box>
  );
};
