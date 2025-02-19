import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BookAuthorProvider } from "./context/BookAuthorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BookAuthorProvider>
      <App />
    </BookAuthorProvider>
  </React.StrictMode>
);

