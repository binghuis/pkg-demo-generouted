import { Outlet } from "react-router-dom";

import { Link, useNavigate, useParams, Navigate } from "../routes.gen";

import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const { id, pid } = useParams("/posts/:id/:pid?");

  const a = () => navigate("/posts/:id", { params: { id: "a" } });
  const b = () => navigate("/posts/:id", { params: { id: "" } });
  const c = () => navigate(-1);
  const d = () => navigate("/posts/:id/deep", { params: { id: "d" } });
  const e = () => navigate("/posts/:id/deep", { params: { id: "e" } });

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <header style={{ display: "flex", gap: 24 }}>
            <Link to="/">Home</Link>
            <Link to={{ pathname: "/about" }}>About</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/posts/:id/:pid?" params={{ id: "1", pid: "2" }}>
              Posts by id/pid
            </Link>
            <Link to="/posts/:id" params={{ id: "id" }}>
              Posts by id
            </Link>
            <button onClick={e}>navigate to</button>
          </header>

          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
