import React from "react";
import { Box, Typography } from "@mui/material";

export const DrawerTitle = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      {/* <CloudIcon fontSize="large" /> */}
      <Typography variant="h5" ml={2} my={2}>
        Blog App!
      </Typography>
    </Box>
  );
};
