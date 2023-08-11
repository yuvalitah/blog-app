import { Skeleton, TableCell, TableRow } from "@mui/material";
import React from "react";

export const UsersTableSkeleton = () => {
  return (
    <>
      {[...Array(4)].map((_, index) => (
        <TableRow key={index}>
          <TableCell>
            <Skeleton animation="wave" variant="text" />
          </TableCell>
          <TableCell>
            <Skeleton animation="wave" variant="text" />
          </TableCell>
          <TableCell>
            <Skeleton animation="wave" variant="text" />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
