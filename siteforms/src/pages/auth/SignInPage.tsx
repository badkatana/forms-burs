import { Box, FormControl } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  BackgroundText,
  BlurredContainer,
  FlexBox,
} from "./StylesRegistration";
import { SignIn } from "../../components/forms/auth/signIn";

export const SingInPage = () => {
  return (
    <Box>
      <BackgroundText>
        <BlurredContainer>
          <FormControl>
            <SignIn />
          </FormControl>
          <FlexBox direction>
            <div>Want an account?</div>
            <NavLink to={"/registration"}>Create!</NavLink>
          </FlexBox>
        </BlurredContainer>
      </BackgroundText>
    </Box>
  );
};
