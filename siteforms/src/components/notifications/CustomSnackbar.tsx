import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

type SnackbarProps = {
  open: boolean;
  message: string;
  severity: "success" | "error" | "warning" | "info";
};

const CustomSnackbar: React.FC<SnackbarProps> = ({
  open,
  message,
  severity,
}) => {
  return (
    <Snackbar open={open} autoHideDuration={2000}>
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
