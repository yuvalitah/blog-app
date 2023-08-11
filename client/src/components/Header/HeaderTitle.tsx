import React from "react";
import { Box, Typography } from "@mui/material";

export const HeaderTitle = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{ display: { xs: "none", sm: "flex" } }}
    >
      <Typography variant="h4" marginLeft={1} noWrap>
        Blog App!
      </Typography>
    </Box>
  );
};
