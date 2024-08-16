import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const BackgroundText = styled("div")({
  position: "relative",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  ":before": {
    content: `"タスク"`,
    position: "absolute",
    fontSize: "35rem",
    color: "transparent",
    WebkitTextStroke: "3px #783b38",
    zIndex: -1,
    whiteSpace: "nowrap",
  },
});

export const BlurredContainer = styled(Box)({
  width: "50vh",
  height: "70vh",
  padding: "1em",
  backgroundColor: "rgba(255, 255, 255, 0.4)",
  backdropFilter: "blur(10px)",
  variant: "outlined",
  justifyContent: "center",
  alignItems: "center",
});

export const FlexBox = styled(Box)<{ direction?: boolean }>(
  ({ direction }) => ({
    display: "flex",
    flexDirection: direction ? "row" : "column",
    justifyContent: "center",
    alignItems: "center",
  })
);
