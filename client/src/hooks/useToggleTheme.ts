import { useContext } from "react";
import { ThemeModeContext } from "../context";

export const useToggleTheme = () => {
  return useContext(ThemeModeContext);
};
