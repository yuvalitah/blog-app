import { createTheme as createMuiTheme, PaletteMode } from "@mui/material";

const sharedOverrides = {
  // MuiAppBar: {
  //   styleOverrides: {
  //     root: {
  //       height: "10%",
  //     },
  //   },
  // },
  // MuiPaper: {
  //   styleOverrides: {
  //     root: {
  //       height: "90%",
  //     },
  //   },
  // },
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
