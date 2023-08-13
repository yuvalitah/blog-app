import { createTheme as createMuiTheme, PaletteMode } from "@mui/material";

const sharedOverrides = {
  MuiDrawer: {
    styleOverrides: {
      paper: {
        width: 240,
      },
    },
  },
};

export const createTheme = (mode: PaletteMode) =>
  createMuiTheme({
    palette: {
      mode,
    },
    components: {
      ...sharedOverrides,
    },
  });
