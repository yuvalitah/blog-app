import React, {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useEffect,
} from "react";
import { ThemeProvider as MuiThemeProvider, PaletteMode } from "@mui/material";
import { createTheme } from "../theme";
import CssBaseline from "@mui/material/CssBaseline";

interface IThemeModeContext {
  toggleTheme: () => void;
}

interface IThemeProviderProps {
  children?: ReactNode;
}

export const ThemeModeContext = createContext<IThemeModeContext>({
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [mode, setMode] = useState<PaletteMode>(
    (localStorage.getItem("mode") as PaletteMode) || "light"
  );

  useEffect(() => localStorage.setItem("mode", "light"), []);
  useEffect(() => localStorage.setItem("mode", mode), [mode]);

  const thmeMode = useMemo(
    () => ({
      toggleTheme: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(mode), [mode]);

  return (
    <ThemeModeContext.Provider value={thmeMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
};
