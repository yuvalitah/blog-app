import { SelectChangeEvent, Table, TableContainer } from "@mui/material";
import React from "react";
import { UsersTableHead } from "./UsersTableHead";
import { UsersTableBody } from "./UsersTableBody";

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
  return (
    <TableContainer
      sx={{
        maxWidth: { xs: 300, sm: 500, md: 800, lg: 1200 },
        border: "solid 1px gray",
      }}
    >
      <Table>
        <UsersTableHead
          sortByName={sortByName}
          handleSortChange={handleSortChange}
        />
        <UsersTableBody users={users} loading={loading} />
      </Table>
    </TableContainer>
  );
};
