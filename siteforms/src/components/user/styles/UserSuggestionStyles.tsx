import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const StyledBox = styled(Box)({
  width: "80hv",
  display: "flex",
  rowGap: "1em",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const TypoStyle = styled(Typography)({
  color: "#76823",
});

export const StyledButton = styled(Button)({
  color: "#783b38",
  border: "1px solid #783b38",
});

export const StatContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1em",
});
