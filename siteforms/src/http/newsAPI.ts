import { $newsHost } from ".";
import { INewsRaw } from "interfaces/INews";

export const getNews = async (country: string) => {
  const params = new URLSearchParams();
  params.append("country", country);
  params.append("apiKey", process.env.REACT_APP_NEWS_API_KEY!);

  const { data } = await $newsHost.get<INewsRaw>("/v2/top-headlines", {
    params: params,
  });

  return data;
};
