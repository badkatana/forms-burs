import { useEffect } from "react";
import { useNews } from "../../hooks/useNews";
import { News } from "./News";
import { StyledContainerNews } from "./styles/NewsContainerStyles";
import { INews } from "../../interfaces/INews";
import { FormGenerator } from "../formGenerator/FormGenerator";
import { NewsFromCountry } from "../forms/configs/newsCountryConfig";
import { NewsActions } from "./NewsActions";

export const NewsContainer = (props: {
  currentNews: INews[];
  setCountry: (value: any) => void;
}) => {
  useEffect(() => console.log(props.currentNews), [props.currentNews]);

  if (!props.currentNews || props.currentNews.length === 0) {
    return <div>No news available.</div>;
  }

  return (
    <StyledContainerNews>
      {/* <NewsActions key={"sdf"} setCountry={props.setCountry} /> */}
      {props.currentNews.map((article) => (
        <News key={article.title} ne1={article} />
      ))}
    </StyledContainerNews>
  );
};
