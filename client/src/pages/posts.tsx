import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IPost, Post } from "../components/Post";
import { Box, PaginationItem, Paper, styled } from "@mui/material";
import { Pagination } from "../components/pagination";

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

  const [posts, setPosts] = useState<IPost[]>([]);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const [loading, setIsLoading] = useState<boolean>(false);

  const fetchPostsFromApi = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `http://localhost:3000/posts?userId=${userId}&page=${page}`
      );
      setPosts(data.posts);
      setTotalPosts(data.totalPosts);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, [userId, page]);

  useEffect(() => {
    fetchPostsFromApi();
  }, [fetchPostsFromApi]);

  return (
    <StyledPaper>
      <Box display="flex" flexDirection="column">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            fetchPostsFromApi={fetchPostsFromApi}
          />
        ))}
        <Box display="flex" justifyContent="center" mt={5}>
          <Pagination
            page={page}
            totalItems={totalPosts}
            perPage={2}
            linkTo={`/posts?userId=${userId}`}
          />
        </Box>
      </Box>
    </StyledPaper>
  );
};
