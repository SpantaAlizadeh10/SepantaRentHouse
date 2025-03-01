import React from "react";
import { BrowserRouter } from "react-router-dom"; // اضافه کردن این خط
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* اینجا مهم است */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
