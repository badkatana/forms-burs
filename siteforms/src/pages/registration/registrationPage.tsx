import { useQuery } from "@tanstack/react-query";
import { Auth } from "../../components/forms/auth/auth";
import { BackgroundText, BlurredContainer } from "./StylesRegistration";
import { getUsersStatistics } from "../../http/userAPI";
import { Box, FormControl } from "@mui/material";
import { NavLink } from "react-router-dom";

export const RegistrationPage = () => {
  const { data: UsersStatistics, error } = useQuery({
    queryKey: ["usersCount"],
    queryFn: getUsersStatistics,
  });

  return (
    <Box>
      <BackgroundText>
        <BlurredContainer>
          <FormControl>
            <Auth />
          </FormControl>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>Already have an account?</div>
            <NavLink to={"/news"}>Login</NavLink>
          </div>
        </BlurredContainer>
      </BackgroundText>
    </Box>
  );
};
