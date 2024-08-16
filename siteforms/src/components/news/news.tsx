import { Box, Link, Typography } from "@mui/material";
import { INews } from "interfaces/INews";

export const News = (props: { ne1: INews }) => {
  // FIXME : all styles should be separeted
  return (
    <Box>
      <Typography
        fontSize={"2rem"}
        color={"#783b38"}
        fontStyle={"italic"}
        fontWeight={"bold"}
      >
        {props.ne1.title}
      </Typography>
      <Typography>{props.ne1.author}</Typography>
      <Link href={props.ne1.url} underline="none">
        Read full
      </Link>
    </Box>
  );
};
