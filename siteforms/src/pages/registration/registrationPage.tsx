import { useQuery } from "@tanstack/react-query";
import { Auth } from "../../components/forms/auth/auth";
import {
  BackgroundText,
  BlurredContainer,
  FlexBox,
} from "./StylesRegistration";
import { getUsersStatistics } from "../../http/userAPI";
import { Box, FormControl } from "@mui/material";
import { NavLink } from "react-router-dom";

export const RegistrationPage = () => {
  const {
    data: UsersStatistics,
    error,
    isLoading,
  } = useQuery({
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
          <FormControl>
            <Auth />
          </FormControl>
          <FlexBox>
            <div>Already have an account?</div>
            <NavLink to={"/news"}>Login</NavLink>
          </FlexBox>
        </BlurredContainer>
      </BackgroundText>
    </Box>
  );
};
