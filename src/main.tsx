import { ConfigProvider } from "antd";
import { Routes } from "generouted/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <ConfigProvider>
    <Routes />
  </ConfigProvider>
  // </React.StrictMode>
);
