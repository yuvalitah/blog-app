import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { IUser } from "../../pages";

interface IUsersTableProps {
  users: IUser[];
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#E7EBF0" : "#1A2027",
}));

export const UsersTable = ({ users }: IUsersTableProps) => {
  return (
    <TableContainer
      component={StyledPaper}
      sx={{
        maxWidth: { xs: 300, sm: 500, md: 800, lg: 1200 },
        margin: "auto",
        marginTop: 5,
        border: "solid 1px gray",
      }}
    >
      <Table>
        <TableHead>
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
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
