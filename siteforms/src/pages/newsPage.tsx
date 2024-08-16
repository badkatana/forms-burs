import { NavBar } from "components/navigation/Navbar";
import { NewsActions } from "components/news/NewsActions";
import { NewsContainer } from "components/news/NewsContainer";
import { useCheckUser } from "hooks/useCheckUser";
import { useNews } from "hooks/useNews";

// fixme: предусмотреть ошибку при загрузке новостей и выдавать в соотвествие с этим разные компоненты. Ок?
// на время разработки закомментировано
export const NewsPage = () => {
  const { getUserInfo } = useCheckUser();
  const { news, setCountry } = useNews();

  return (
    <div>
      <NavBar />
      <div>Hi {getUserInfo().name}!</div>
      <NewsActions setCountry={setCountry} />
      {/* все эти проверки не нужны здесь, они могут быть (и должны) в другом месте */}
      {/* {newsLoading && <div>Loading...</div>}
      {newsError && <div>{newsError.message}</div>} */}
      {news && <NewsContainer currentNews={news} />}
    </div>
  );
};
