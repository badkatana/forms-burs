import { useQuery } from "@tanstack/react-query";
import { Auth } from "../../components/forms/auth/auth";
import {
  BackgroundText,
  BlurredContainer,
  FlexBox,
} from "./StylesRegistration";
import { getUsersStatistics } from "../../http/userAPI";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export const RegistrationPage = () => {
  const { data: usersStatistics, isLoading } = useQuery({
    queryKey: ["usersStatistics"],
    queryFn: getUsersStatistics,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <BackgroundText>
        <BlurredContainer>
          <Auth />
          <FlexBox direction>
            <div>Already have an account?</div>
            <NavLink to={"/signin"}>Sign In</NavLink>
          </FlexBox>
          <FlexBox marginTop={"1em"}>
            <Typography>
              There are already {usersStatistics.user_count} registered users
            </Typography>
            <Typography>
              And {usersStatistics.answered_users} replied to the questionnaire
            </Typography>
          </FlexBox>
        </BlurredContainer>
      </BackgroundText>
    </Box>
  );
};
