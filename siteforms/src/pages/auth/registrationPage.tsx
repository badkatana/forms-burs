import { Auth } from "../../components/forms/auth/auth";
import {
  BackgroundText,
  BlurredContainer,
  FlexBox,
} from "./StylesRegistration";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useCheckUser } from "hooks/useCheckUser";
import { LoadingPage } from "pages/loadingPage";

export const RegistrationPage = () => {
  const { statsLoading, usersStatistics } = useCheckUser();

  if (statsLoading) {
    return <LoadingPage />;
  }

  return (
    <Box>
      <BackgroundText>
        <BlurredContainer>
          <Auth />
          {/* FIXME: maybe this also must be a different place. TO NAVIGATION COMPONENTS  */}
          <FlexBox direction>
            <div>Already have an account?</div>
            <NavLink to={"/signin"}>Sign In</NavLink>
          </FlexBox>
          {/* FIXME: this must be a component */}
          <FlexBox marginTop={"1em"}>
            <Typography>
              There are already {usersStatistics.user_count} registered users
            </Typography>
            <Typography>
              And {usersStatistics.answered_users} replied to the questionnaire
            </Typography>
          </FlexBox>
          {/* FIXME: here also must be a custom snackbar */}
        </BlurredContainer>
      </BackgroundText>
    </Box>
  );
};
