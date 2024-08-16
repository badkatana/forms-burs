import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getNews } from "../http/newsAPI";
import { INews } from "../interfaces/INews";

export function useNews() {
  const [country, setCountry] = useState("us");
  const {
    data: news,
    isError: newsError,
    isLoading: newsLoading,
  } = useQuery<INews[]>({
    queryKey: ["news"],
    queryFn: () => getNews(country),
  });

  return { country, setCountry, news, newsError, newsLoading };
}
