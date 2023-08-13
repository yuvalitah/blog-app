import React, { createContext, useState, ReactNode, useCallback } from "react";
import { AlertProps } from "@mui/material";
import { Snackbar } from "../components";

interface ISnackbarContext {
  openSnackbar: (message: string, severity: AlertProps["severity"]) => void;
}

interface ISnackbarProviderProps {
  children: ReactNode;
}

export const SnackbarContext = createContext({} as ISnackbarContext);

export const SnackbarProvider = ({ children }: ISnackbarProviderProps) => {
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [severity, setSeverity] = useState<AlertProps["severity"]>();

  const handleOpenSnackbar = useCallback(
    (message: string, severity: AlertProps["severity"]): void => {
      setMessage(message);
      setSeverity(severity);
      setIsOpen(true);
    },
    []
  );

  const handleCloseSnackbar = (
    _?: React.SyntheticEvent,
    reason?: string
  ): void => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ openSnackbar: handleOpenSnackbar }}>
      <Snackbar
        isOpen={isOpen}
        message={message}
        severity={severity}
        handleCloseSnackbar={handleCloseSnackbar}
      />
      {children}
    </SnackbarContext.Provider>
  );
};
