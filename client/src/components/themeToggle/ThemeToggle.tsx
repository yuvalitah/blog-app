import React from "react";
import { useTheme, Box, Switch } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useToggleTheme } from "../../hooks";

export const ThemeToggle = () => {
  const { toggleTheme } = useToggleTheme();
  const theme = useTheme();

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        justifyContent: { xs: "center" },
        mb: { xs: 3, sm: 0 },
        mr: { xs: 2, sm: 0 },
      }}
    >
      <LightModeIcon fontSize="large" />
      <Switch
        checked={theme.palette.mode === "dark"}
        onChange={toggleTheme}
        color="secondary"
      />
      <DarkModeIcon fontSize="large" />
    </Box>
  );
};
