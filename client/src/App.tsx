import React from "react";
import { UsersPage } from "./pages";
import { Header } from "./components/Header/Header";
import { ThemeProvider } from "./context";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <UsersPage />
    </ThemeProvider>
  );
}

export default App;
