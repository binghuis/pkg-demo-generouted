/**
 * 本组件不要直接引用 generouted/react-router，会导致循环依赖
 */

import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { Outlet, useLocation, useMatches } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { Link } from "@/router";

const App: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>();
  const matches = useMatches();
  const location = useLocation();
  useEffect(() => {
    const match = matches.filter(
      ({ pathname }) => pathname === location.pathname
    );
    setSelectedKeys(match.map((v) => v.id));
  }, [location.pathname]);

  return (
    <div>
      2
      <Sider>
        <Menu
          selectedKeys={selectedKeys}
          onSelect={({ selectedKeys, keyPath }) => {
            console.log(keyPath);
          }}
          mode="inline"
          items={[
            { label: <Link to="/about">about</Link>, key: "about" },
            { label: <Link to="/login">login</Link>, key: "authlogin" },
            {
              label: <Link to="/posts">posts</Link>,
              key: "posts",
              children: [
                {
                  label: (
                    <Link to="/posts/:id" params={{ id: "1" }}>
                      posts:id
                    </Link>
                  ),
                  key: "postsid",
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
