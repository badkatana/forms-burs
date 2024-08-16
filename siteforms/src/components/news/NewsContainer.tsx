import { News } from "./News";
import { StyledContainerNews } from "./styles/NewsContainerStyles";
import { INews } from "interfaces/INews";

export const NewsContainer = (props: { currentNews: INews[] }) => {
  if (!props.currentNews || props.currentNews.length === 0) {
    return <div>No news available.</div>;
  }

  return (
    <StyledContainerNews>
      {props.currentNews.map((article) => (
        <News key={article.title} ne1={article} />
      ))}
    </StyledContainerNews>
  );
};
