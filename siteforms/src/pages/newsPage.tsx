import { useEffect } from "react";
import { NavBar } from "../components/navigation/Navbar";
import { NewsActions } from "../components/news/NewsActions";
import { NewsContainer } from "../components/news/NewsContainer";
import { useCheckUser } from "../hooks/useCheckUser";
import { useNews } from "../hooks/useNews";
import { FormGenerator } from "../components/formGenerator/FormGenerator";
import { NewsFromCountry } from "../components/forms/configs/newsCountryConfig";

// fixme: предусмотреть ошибку при загрузке новостей и выдавать в соотвествие с этим разные компоненты. Ок?
export const NewsPage = () => {
  const { getUserInfo } = useCheckUser();
  const { newsLoading, news, setCountry } = useNews();

  if (newsLoading) {
    return <div>nd</div>;
  }

  return (
    <div>
      <NavBar />
      <div>Hi {getUserInfo().name}!</div>
      <NewsActions setCountry={setCountry} />
      {newsLoading && <div>Loading...</div>}
      {news && <NewsContainer setCountry={setCountry} currentNews={news} />}
    </div>
  );
};
