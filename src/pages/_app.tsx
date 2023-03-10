/**
 * 本组件不要直接引用 generouted/react-router，会导致循环依赖
 */

import React from "react";
import { Outlet } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import SuperBreadcrumb from "../components/super-breadcrumb";
import SuperMenu from "@/components/super-menu";

const App: React.FC = () => {
  return (
    <div>
      <SuperBreadcrumb />
      <Sider>
        <SuperMenu
          items={[
            {
              label: "home",
              path: "/",
            },
            {
              label: "about",
              path: "/about",
              related: ["/about/:id"],
            },
            {
              label: "new",
              path: "/new",
            },
            {
              label: "posts",
              key: "ooo",
              children: [
                {
                  label: "posts",
                  path: "/posts",
                  related: ["/posts/:id", "/posts/:id/deep"],
                },
                {
                  label: "posts",
                  key: "iii",
                  children: [
                    { label: "postsintrotest", path: "/posts/intro/test" },
                  ],
                },
              ],
            },
          ]}
        />
      </Sider>
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};

export default App;
