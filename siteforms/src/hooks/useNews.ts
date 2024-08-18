import { useEffect, useState } from "react";
import { getNews } from "http/newsAPI";
import { INews, INewsRaw } from "interfaces/INews";

export function useNews() {
  const [country, setCountry] = useState("us");
  const [news, setNews] = useState<INews[]>([]);

  const preparingNews = (data: INewsRaw) => {
    const properNews: INews[] = data.articles.map((article: any) => ({
      title: article.title,
      author: article.author,
      url: article.url,
    }));
    setNews(properNews);
  };

  useEffect(() => {
    try {
      getNews(country).then((data) => preparingNews(data));
    } catch (e) {
      console.log(e);
    }
  }, [country]);

  return { country, setCountry, news };
}
