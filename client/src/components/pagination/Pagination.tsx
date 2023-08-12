import { PaginationItem, Pagination as MuiPagination } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface IPaginationProps {
  page: number;
  perPage: number;
  totalItems: number;
  linkTo: string;
}

export const Pagination = ({
  page,
  perPage,
  totalItems,
  linkTo,
}: IPaginationProps) => {
  return (
    <MuiPagination
      page={page}
      count={Math.ceil(totalItems / perPage)}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`${linkTo}&page=${item.page}`}
          {...item}
        />
      )}
    />
  );
};
