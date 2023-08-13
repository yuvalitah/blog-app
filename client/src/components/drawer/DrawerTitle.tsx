import React from "react";
import { Box, Typography } from "@mui/material";

export const DrawerTitle = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Typography variant="h5" ml={2} my={2}>
        Blog App!
      </Typography>
    </Box>
  );
};
