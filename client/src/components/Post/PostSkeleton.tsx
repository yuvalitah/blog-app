import { Box, Card, CardContent, CardHeader, Skeleton } from "@mui/material";
import React from "react";

export const PostSkeleton = () => {
  return (
    <>
      {[...Array(2)].map((_, index) => (
        <Card
          key={index}
          sx={{
            mt: 3,
            mx: 5,
            minWidth: { xs: 200, sm: 500, md: 800, lg: 1100, xl: 1400 },
          }}
        >
          <CardHeader
            title={
              <Box display="flex" sx={{ mb: 1 }}>
                <Skeleton variant="text" animation="wave" sx={{ flex: 1 }} />
              </Box>
            }
          />
          <CardContent>
            <Skeleton variant="text" animation="wave" />
          </CardContent>
        </Card>
      ))}
    </>
  );
};
