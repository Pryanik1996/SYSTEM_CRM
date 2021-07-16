import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import UserProvider from "./contexts/UserProvider";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
