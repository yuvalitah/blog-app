import { TextField } from "@mui/material";
import React, { ChangeEvent } from "react";

interface IPostSearchProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const PostSearch = ({ value, onChange }: IPostSearchProps) => {
  return (
    <TextField
      label="Search Post"
      sx={{ width: "40%", minWidth: 200, alignSelf: "center" }}
      value={value}
      onChange={onChange}
    />
  );
};
