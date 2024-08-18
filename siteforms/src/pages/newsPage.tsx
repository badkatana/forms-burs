import { Box } from "@mui/material";
import { NavBar } from "components/navigation/Navbar";
import { NewsActions } from "components/news/NewsActions";
import { NewsContainer } from "components/news/NewsContainer";
import { useCheckUser } from "hooks/useCheckUser";
import { useNews } from "hooks/useNews";

export const NewsPage = () => {
  const { getUserInfo } = useCheckUser();
  const { news, setCountry } = useNews();

  if (news && news.length === 0) {
    return <Box>No news available</Box>;
  }
  return (
    <div>
      <NavBar />
      <div>Hi {getUserInfo().name}!</div>
      <NewsActions setCountry={setCountry} />
      {news && <NewsContainer currentNews={news} />}
    </div>
  );
};
