import { ApolloProvider } from "@apollo/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { client } from "./services/apolloClient.js";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  </StrictMode>
);
