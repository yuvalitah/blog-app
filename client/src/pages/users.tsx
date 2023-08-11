import axios from "axios";
import React, { useState, useEffect } from "react";
import { UsersTable } from "../components/usersTable";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Pagination,
  PaginationItem,
  SelectChangeEvent,
} from "@mui/material";

export interface IUser {
  id: string;
  name: string;
  email: string;
  street: string;
  city: string;
  suite: string;
  zipcode: string;
}

export const UsersPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

  const [users, setUsers] = useState<IUser[]>([]);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [loading, setIsLoading] = useState<boolean>(false);
  const [sortByName, setSortByName] = useState<string>(
    query.get("sortByName") || ""
  );

  useEffect(() => {
    const fetchUsersFromApi = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `http://localhost:3000/users?page=${page}${
            sortByName && `&sortByName=${sortByName}`
          }`
        );
        setUsers(data.users);
        setTotalUsers(data.totalUsers);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    fetchUsersFromApi();
  }, [page, sortByName]);

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortByName(event.target.value);
    navigate({
      pathname: "/users",
      search: `?page=${page}&sortByName=${event.target.value}`,
    });
  };

  return (
    <>
      <UsersTable
        users={users}
        sortByName={sortByName}
        handleSortChange={handleSortChange}
        loading={loading}
      />
      <Box display="flex" justifyContent="center" marginTop={5}>
        <Pagination
          page={page}
          count={Math.ceil(totalUsers / 4)}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/users?page=${item.page}&sortByName=${sortByName}`}
              {...item}
            />
          )}
        />
      </Box>
    </>
  );
};
