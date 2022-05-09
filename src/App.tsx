import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Theme from "./styles/theme";
import Users from "./mocks/users.json";

function App() {
  if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify(Users));
  }

  return (
    <ChakraProvider theme={Theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
