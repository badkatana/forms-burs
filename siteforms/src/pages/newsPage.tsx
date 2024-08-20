import { NavBar } from "components/navigation/Navbar";
import { NewsActions } from "components/forms/news/NewsActions";
import { NewsContainer } from "components/news/NewsContainer";
import { useCheckUser } from "hooks/user/useCheckUser";
import { useNews } from "hooks/news/useNews";
import { LoadingPage } from "./loadingPage";
import { UserSuggestion } from "components/user/UserSuggestion";
import {
  ContainerSt,
  SearchNews,
  SearchWrapper,
} from "./styles/NewsPageStyles";

export const NewsPage = () => {
  const { AnsweringLoading, isUserAnswered } = useCheckUser();
  const { news, setCountry } = useNews();

  if (AnsweringLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <NavBar />
      <ContainerSt>
        <UserSuggestion suggestion={isUserAnswered.exists} />
        <SearchNews>
          <SearchWrapper>
            <NewsActions setCountry={setCountry} />
          </SearchWrapper>
        </SearchNews>
        <NewsContainer currentNews={news} />
      </ContainerSt>
    </div>
  );
};
