/**
 * 本组件不要直接引用 generouted/react-router，会导致循环依赖
 */

import React, {
  FunctionComponent,
  lazy,
  Suspense,
  useEffect,
  useState,
} from "react";
import { Menu } from "antd";
import { Outlet, RouteObject, useLocation, useMatches } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { Link as TypeSafeLink } from "@/router";
import Breadcrumb from "../components/breadcrumb";
import { regularRoutes } from "@/routes/regular";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";

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
      <Breadcrumb />
      <Sider>
        <Menu
          selectedKeys={selectedKeys}
          onSelect={({ selectedKeys, keyPath }) => {
            console.log(keyPath);
          }}
          mode="inline"
          items={[
            {
              label: <TypeSafeLink to="/about">about</TypeSafeLink>,
              key: "about",
            },
            {
              label: <TypeSafeLink to="/login">login</TypeSafeLink>,
              key: "(auth)/login",
            },
            {
              label: <TypeSafeLink to="/posts">posts</TypeSafeLink>,
              key: "posts",
              children: [
                {
                  label: (
                    <TypeSafeLink to="/posts/:id" params={{ id: "1" }}>
                      posts:id
                    </TypeSafeLink>
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
