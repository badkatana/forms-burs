import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const SubmitButton = styled(Button)({
  color: "#783b38",
  variant: "outlined",
  border: "1px solid #783b38",
});

export const FormTitle = styled("h1")<{ stroke: boolean }>(({ stroke }) => ({
  WebkitTextStroke: stroke ? "1px #783b38" : "none",
  textAlign: "center",
  color: stroke ? "transparent" : "#783b38",
}));

export const FormButtonsArea = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
});

export const FormStyled = styled("form")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  rowGap: "1em",
});
