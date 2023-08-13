import { useContext } from "react";
import { SnackbarContext } from "../context";

export const useSnackbar = () => useContext(SnackbarContext);
