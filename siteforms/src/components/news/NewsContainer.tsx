import { News } from "./News";
import { StyledContainerNews } from "./styles/NewsContainerStyles";
import { INews } from "interfaces/INews";

export const NewsContainer = (props: { currentNews: INews[] }) => {
  return (
    <StyledContainerNews>
      {props.currentNews.map((article) => (
        <News key={article.title} ne1={article} />
      ))}
    </StyledContainerNews>
  );
};
