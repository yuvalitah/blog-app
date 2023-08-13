import { TableBody, TableCell, TableRow, Typography } from "@mui/material";
import React from "react";
import { UsersTableSkeleton } from "./UsersTableSkeleton";
import { IUser } from "./UsersTable";
import { useNavigate } from "react-router-dom";

interface IUsersTableBodyProps {
  users: IUser[];
  loading: boolean;
}

export const UsersTableBody = ({ users, loading }: IUsersTableBodyProps) => {
  const navigate = useNavigate();

  return (
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
  );
};
