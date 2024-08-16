import { useState } from "react";

export const useSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<
    "success" | "error" | "warning" | "info"
  >("success");

  const showSnackbar = (
    msg: string,
    severity: "success" | "error" | "warning" | "info"
  ) => {
    setMessage(msg);
    setSeverity("error");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAuthError = (error: { response: { status: number } }) => {
    let message = "Error";

    if (error.response) {
      switch (error.response.status) {
        case 404:
          message = "User was not found";
          break;
        case 401:
          message = "Wrong password";
          break;
      }
    }

    showSnackbar(message, "error");
  };

  return {
    showSnackbar,
    open,
    message,
    severity,
    handleClose,
    handleAuthError,
  };
};

export default useSnackbar;
