import { useQueries, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getNews } from "../http/newsAPI";
import { INews } from "../interfaces/INews";
import { count } from "console";

export function useNews() {
  const [country, setCountry] = useState<string>("us");
  const {
    data: news,
    isError: newsError,
    isLoading: newsLoading,
  } = useQuery<INews | Error>({
    queryKey: ["news"],
    queryFn: () => getNews(country),
    refetchInterval: Infinity,
  });

  // FIXME enable censorship in this page
  return { country, setCountry, news, newsError, newsLoading };
}
