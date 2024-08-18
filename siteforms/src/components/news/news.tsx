import { Box, Link, Typography } from "@mui/material";
import { INews } from "interfaces/INews";
import { NewsHeadline } from "./styles/NewsStyles";

export const News = (props: { ne1: INews }) => {
  return (
    <Box>
      <NewsHeadline>{props.ne1.title}</NewsHeadline>
      <Typography>{props.ne1.author}</Typography>
      <Link href={props.ne1.url} underline="none">
        Read full
      </Link>
    </Box>
  );
};
