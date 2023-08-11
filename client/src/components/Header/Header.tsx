import React, { useState } from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { HeaderTitle } from "./HeaderTitle";
import { Drawer, DrawerIcon } from "../drawer";
import { ThemeToggle } from "../themeToggle";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () =>
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" flexGrow={1}>
          <DrawerIcon handleDrawerToggle={handleDrawerToggle} />
          <HeaderTitle />
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: { sm: 8 } }}>
            <ThemeToggle />
          </Box>
          <Drawer
            isOpen={isDrawerOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
