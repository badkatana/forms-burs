import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getNews } from "../http/newsAPI";
import { INews } from "../interfaces/INews";

export function useNews() {
  const [country, setCountry] = useState("us");
  const [news, setNews] = useState<INews[]>([]);

  // const {
  //   data: news1,
  //   error: newsError,
  //   isLoading: newsLoading,
  // } = useQuery<INews[]>({
  //   queryKey: ["news"],
  //   queryFn: () => getNews(country),
  //   refetchInterval: Infinity,
  // });

  // FIXME: так на время разработки
  useEffect(() => {
    try {
      getNews(country).then((data) => setNews(data));
    } catch (e) {
      console.log(e);
    }
  }, [country]);

  return { country, setCountry, news };
}
