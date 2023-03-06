import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes } from "generouted/react-router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <ConfigProvider>
    <Routes />
  </ConfigProvider>
  // </React.StrictMode>
);
