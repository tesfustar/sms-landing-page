import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { HomeProvider } from "./context/HomeContext";
import { AuthProvider } from "./context/auth";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <AuthProvider>
        <BrowserRouter>
          <HomeProvider>
            <App />
          </HomeProvider>
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  </QueryClientProvider>
);
