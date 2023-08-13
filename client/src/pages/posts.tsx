import { axiosInstance as axios } from "../axios";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  IPost,
  Post,
  Pagination,
  PostSkeleton,
  PostSearch,
} from "../components";
import { Box, Paper, Typography, styled } from "@mui/material";
import { useSnackbar } from "../hooks";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.mode === "light" ? "#E7EBF0" : "#1A2027",
  flex: 1,
}));

export const PostsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const userId = parseInt(query.get("userId") || "1");
  const page = parseInt(query.get("page") || "1", 10);
  const searchQuery = query.get("search") || "";

  const [posts, setPosts] = useState<IPost[]>([]);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const [loading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>(searchQuery || "");
  const [debouncedSearch, setDebouncedSearch] = useState<string>(search);
  const { openSnackbar } = useSnackbar();

  const fetchPostsFromApi = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data, status } = await axios.get(`/posts`, {
        params: {
          userId,
          page,
          search: debouncedSearch,
        },
      });
      setPosts(data.posts);
      setTotalPosts(data.totalPosts);

      if (status === 200) {
        openSnackbar("Posts has been loaded successfully!", "success");
      }

      setIsLoading(false);
    } catch (e) {
      openSnackbar(
        "There was a problem collecting the user posts data. Please try again",
        "error"
      );
    }
  }, [userId, page, debouncedSearch, openSnackbar]);

  useEffect(() => {
    fetchPostsFromApi();
  }, [fetchPostsFromApi]);

  useEffect(() => {
    const debounceTimeoutId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(debounceTimeoutId);
  }, [search]);

  return (
    <StyledPaper>
      <Box display="flex" flexDirection="column" mt={3}>
        <PostSearch
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        {loading ? (
          <PostSkeleton />
        ) : posts.length === 0 ? (
          <Box mt={5}>
            <Typography variant="h3" align="center">
              No Posts has been found!
            </Typography>
          </Box>
        ) : (
          posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              fetchPostsFromApi={fetchPostsFromApi}
            />
          ))
        )}
        {posts.length !== 0 && (
          <Box display="flex" justifyContent="center" mt={5} mb={2}>
            <Pagination
              page={page}
              totalItems={totalPosts}
              perPage={2}
              linkTo={`/posts?userId=${userId}`}
            />
          </Box>
        )}
      </Box>
    </StyledPaper>
  );
};
