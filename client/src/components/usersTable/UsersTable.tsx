import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { UsersTableSkeleton } from "./UsersTableSkeleton";
import { useNavigate } from "react-router-dom";

export interface IUser {
  id: string;
  name: string;
  email: string;
  street: string;
  city: string;
  suite: string;
  zipcode: string;
}

interface IUsersTableProps {
  users: IUser[];
  sortByName?: string;
  loading: boolean;
  handleSortChange: (event: SelectChangeEvent) => void;
}

export const UsersTable = ({
  users,
  sortByName,
  handleSortChange,
  loading,
}: IUsersTableProps) => {
  const navigate = useNavigate();

  return (
    <TableContainer
      sx={{
        maxWidth: { xs: 300, sm: 500, md: 800, lg: 1200 },
        border: "solid 1px gray",
      }}
    >
      <Table>
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
        <TableBody>
          {loading ? (
            <UsersTableSkeleton />
          ) : (
            users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ cursor: "pointer" }}
                onClick={() =>
                  navigate({
                    pathname: "/posts",
                    search: `?userId=${user.id}`,
                  })
                }
              >
                <TableCell>
                  <Typography variant="body2">{user.name}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{user.email}</Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    // By request from the task, this cell needs to stay on width of 50px
                    sx={{
                      width: { xs: 50, md: "unset" },
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >{`${user.street} ${user.suite} ${user.city} ${user.zipcode}`}</Typography>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
