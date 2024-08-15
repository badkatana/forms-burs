import { NavBar } from "../components/navigation/Navbar";
import { NewsContainer } from "../components/news/NewsContainer";
import { useCheckUser } from "../hooks/useCheckUser";

export const NewsPage = () => {
  const { getUserInfo } = useCheckUser();
  return (
    <div>
      <NavBar />
      <div>Hi {getUserInfo().name}!</div>
      <NewsContainer />
    </div>
  );
};
