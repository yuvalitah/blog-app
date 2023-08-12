import React from "react";
import { PostsPage, UsersPage } from "./pages";
import { Header } from "./components/Header/Header";
import { ThemeProvider } from "./context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersPage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/posts",
    element: <PostsPage />,
  },
]);

function App() {
  return (
    <ThemeProvider>
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
