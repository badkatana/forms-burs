import { Typography } from "@mui/material";
import { useCheckUser } from "hooks/user/useCheckUser";
import { LoadingPage } from "pages/loadingPage";
import { StatContainer } from "./styles/UserSuggestionStyles";

export const UsersStatsBox = () => {
  const { statsLoading, usersStatistics } = useCheckUser();
  if (statsLoading) {
    return <LoadingPage />;
  }

  return (
    <StatContainer>
      <Typography>
        There are already {usersStatistics.user_count} registered users
      </Typography>
      <Typography>
        And {usersStatistics.answered_users} replied to the questionnaire
      </Typography>
    </StatContainer>
  );
};
