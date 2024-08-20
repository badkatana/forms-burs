import styled from "@emotion/styled";
import { AppBar, Box, Button } from "@mui/material";

export const StyledLogoText = styled(Box)({
  fontSize: "2rem",
  cursor: "pointer",
  color: "transparent",
  WebkitTextStroke: "1px #783b38",
});

export const StyledAppBar = styled(AppBar)({
  backdropFilter: "blur(20px)",
  display: "flex",
  flexDirection: "row",
  paddingLeft: "1em",
  marginBottom: "1em",
});

export const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  columnGap: "1em",
  alignItems: "center",
  justifyContent: "flex-end",
});

export const StyledButton = styled(Button)({
  color: "#783b38",
  variant: "outlined",
  border: "1px solid #783b38",
});
