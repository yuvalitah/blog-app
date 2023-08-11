import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface IDrawerIconProps {
  handleDrawerToggle: () => void;
}

export const DrawerIcon = ({ handleDrawerToggle }: IDrawerIconProps) => {
  return (
    <IconButton
      onClick={handleDrawerToggle}
      sx={{
        mr: 2,
        display: { sm: "none" },
      }}
    >
      <MenuIcon fontSize="large" />
    </IconButton>
  );
};
