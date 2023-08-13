import React from "react";
import { PostsPage, UsersPage } from "./pages";
import { Header } from "./components";
import { ThemeProvider, SnackbarProvider } from "./context";
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
      <SnackbarProvider>
        <Header />
        <RouterProvider router={router} />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
