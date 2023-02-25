import { Outlet } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link, useNavigate, useParams, Navigate } from "../routes.gen";

import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

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

  const breadcrumbs = useBreadcrumbs();

  return (
    <Layout  >
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
          items={[
            { key: "1", title: "Home", label: <Link to={"/"}>Home</Link> },
            {
              key: "/about",
              title: "About",
              label: <Link to={"/about"}>About</Link>,
            },
            {
              key: "/login",
              title: "Login",
              label: <Link to={"/login"}>Login</Link>,
            },
            { key: "/new", title: "New", label: <Link to={"/new"}>New</Link> },
            {
              key: "/posts",
              title: "Posts",
              label: <Link to={"/posts"}>Posts</Link>,
            },
            {
              key: "/posts/:id",
              title: "Posts by id",
              label: (
                <Link to="/posts/:id" params={{ id: "1" }}>
                  Posts by id
                </Link>
              ),
            },
            {
              key: "/posts/:id/:pid?",
              title: "Posts by id/pid",
              label: (
                <Link to="/posts/:id/:pid?" params={{ id: "1", pid: "2" }}>
                  Posts by id/pid
                </Link>
              ),
            },
          ]}
        />
      </Sider>
      <Layout style={{position:'relative'}}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Breadcrumb>
          {breadcrumbs.map(({ breadcrumb, key, match, location }) => {
            return <Breadcrumb.Item key={key}>{breadcrumb}</Breadcrumb.Item>;
          })}
        </Breadcrumb>
        <Content >
          {/* <button onClick={e}>navigate to</button> */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
