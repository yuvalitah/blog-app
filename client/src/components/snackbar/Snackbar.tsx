import React from "react";
import { Snackbar as MuiSnackbar, Alert, AlertProps } from "@mui/material";

interface ISnackbarProps {
  isOpen: boolean;
  message: string;
  severity: AlertProps["severity"];
  handleCloseSnackbar: () => void;
}

export const Snackbar = ({
  isOpen,
  message,
  severity,
  handleCloseSnackbar,
}: ISnackbarProps) => (
  <MuiSnackbar
    open={isOpen}
    onClose={handleCloseSnackbar}
    anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
    autoHideDuration={3000}
  >
    <Alert severity={severity} variant="filled" onClose={handleCloseSnackbar}>
      {message}
    </Alert>
  </MuiSnackbar>
);
