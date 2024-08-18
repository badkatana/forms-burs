import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const FlexBox = styled(Box)<{ direction?: boolean }>(
  ({ direction }) => ({
    display: "flex",
    flexDirection: direction ? "row" : "column",
    justifyContent: "center",
    alignItems: "center",
  })
);
