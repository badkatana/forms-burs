import { NavBar } from "components/navigation/Navbar";
import { NewsActions } from "components/news/NewsActions";
import { NewsContainer } from "components/news/NewsContainer";
import { useCheckUser } from "hooks/user/useCheckUser";
import { useNews } from "hooks/news/useNews";

export const NewsPage = () => {
  const { getUserInfo } = useCheckUser();
  const { news, setCountry } = useNews();

  return (
    <div>
      <NavBar />
      <div>Hi {getUserInfo().name}!</div>
      <NewsActions setCountry={setCountry} />
      <NewsContainer currentNews={news} />
    </div>
  );
};
