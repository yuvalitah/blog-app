import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IPost, Post, Pagination } from "../components";
import { Box, Paper, TextField, Typography, styled } from "@mui/material";
import { PostSkeleton } from "../components/post/PostSkeleton";

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

  const fetchPostsFromApi = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `http://localhost:3000/posts?userId=${userId}&page=${page}&search=${debouncedSearch}`
      );
      setPosts(data.posts);
      setTotalPosts(data.totalPosts);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, [userId, page, debouncedSearch]);

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
        <TextField
          label="Search Post"
          sx={{ width: "40%", minWidth: 200, alignSelf: "center" }}
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
