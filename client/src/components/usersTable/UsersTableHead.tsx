import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

interface IUsersTableHeadProps {
  sortByName?: string;
  handleSortChange: (event: SelectChangeEvent) => void;
}

export const UsersTableHead = ({
  sortByName,
  handleSortChange,
}: IUsersTableHeadProps) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left" colSpan={3}>
          <Box maxWidth={150}>
            <FormControl fullWidth>
              <InputLabel>Sort By Name</InputLabel>
              <Select
                value={sortByName}
                onChange={handleSortChange}
                label="Sort By Name"
              >
                <MenuItem value="ASC">Asc</MenuItem>
                <MenuItem value="DESC">Desc</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Typography variant="h5">Name</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="h5">Email</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="h5">Address</Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
