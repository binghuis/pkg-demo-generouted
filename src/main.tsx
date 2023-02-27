import { ConfigProvider } from "antd";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes } from "./routes.gen";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
        <Routes />
    </ConfigProvider>
  </React.StrictMode>
);
