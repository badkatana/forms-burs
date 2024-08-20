import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const StyledContainer = styled(Box)({
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  rowGap: "1em",
  alignItems: "center",
});

export const StyledFormContainer = styled(Box)({
  display: "flex",
  width: "50%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const TypographyHeader = styled(Typography)({
  color: "#783b38",
  fontWeight: "bolder",
  fontSize: "2em",
});

export const TypographySmall = styled(Typography)({
  fontSize: "0.8em",
  fontStyle: "italic",
});
