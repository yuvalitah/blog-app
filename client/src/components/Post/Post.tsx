import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface IPostProps {
  post: IPost;
  fetchPostsFromApi: () => Promise<void>;
}

export const Post = ({ post, fetchPostsFromApi }: IPostProps) => {
  const deletePost = async () => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/posts/${post.id}`
      );
      fetchPostsFromApi();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card sx={{ mt: 3, mx: 5, maxWidth: 1500 }}>
      <CardHeader
        title={
          <Box display="flex" sx={{ mb: 1 }}>
            <Typography variant="h5" textAlign="center" flex={1}>
              {post.title}
            </Typography>
            <Box>
              <IconButton sx={{ ml: 3 }} onClick={deletePost}>
                <DeleteIcon fontSize="large" color="error" />
              </IconButton>
            </Box>
          </Box>
        }
      />
      <CardContent>
        <Typography variant="body2" textAlign="center">
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
};
