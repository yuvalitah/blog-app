import axios from "axios";
import React, { useState, useEffect } from "react";
import { UsersTable } from "../components/usersTable";

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
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsersFromApi = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/users");
      setUsers(data.users);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUsersFromApi();
  }, []);

  return users.length > 0 ? (
    <UsersTable users={users} />
  ) : (
    <div>Loading...</div>
  );
};
