import { Box } from "@mui/material";
import { News } from "./News";
import { StyledContainerNews } from "./styles/NewsContainerStyles";
import { INews } from "interfaces/INews";

export const NewsContainer = (props: { currentNews: INews[] }) => {
  if (props.currentNews && props.currentNews.length === 0) {
    return <Box>No news available</Box>;
  }
  return (
    <StyledContainerNews>
      {props.currentNews.map((article) => (
        <News key={article.title} ne1={article} />
      ))}
    </StyledContainerNews>
  );
};
