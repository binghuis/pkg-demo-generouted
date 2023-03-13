import { Link, matchPath, useLocation, useMatches } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { Path } from "@/router";
interface Item {
  icon?: React.ReactNode;
  label: string;
  path: Path | string;
  related?: (Path | string)[];
  children?: Item[];
}

interface IProps {
  items: Item[];
}

const SuperMenu: React.FunctionComponent<IProps> = (props) => {
  const { items } = props;
  const [selectedKey, setSelectedKey] = useState<string>("");
  const [openKeys, setOpenKeys] = useState<string[]>();
  const { pathname } = useLocation();

  const matches = useMatches();
  const findKey = (items: Item[]) => {
    const keys: string[] = [];
    const findItem = (items: Item[], isChild?: boolean) => {
      items.forEach((item) => {
        let match;
        match = matches.some((match) => matchPath(item.path, match.pathname));
        if (!match && !isChild && item.related) {
          match = item.related.some((path) => matchPath(path, pathname));
        }
        keys.push(item.path);

        if (match) {
          if (keys.length > 1) {
            setOpenKeys(keys.slice(0, -1));
          }
          setSelectedKey(keys[keys.length - 1]);
        }
        if (item.children) {
          findItem(item.children, true);
        }
      });
    };
    findItem(items);
  };

  useEffect(() => {
    findKey(items);
  }, [pathname]);

  const filteredItemsForMenu = (items: Item[]): NonNullable<ItemType>[] => {
    return items.map((item) => {
      const { path, label } = item;
      const menuItem: NonNullable<ItemType> & {
        children?: NonNullable<ItemType>[];
      } = {
        label: item.children ? label : <Link to={path}>{label}</Link>,
        key: path,
        title: label,
      };
      if (item.children) {
        menuItem.children = filteredItemsForMenu(item.children);
      }
      return menuItem;
    });
  };

  const menuItems = filteredItemsForMenu(items);

  return (
    <Menu
      selectedKeys={[selectedKey]}
      openKeys={openKeys}
      onOpenChange={(keys) => {
        setOpenKeys(keys);
      }}
      mode="inline"
      items={menuItems}
    />
  );
};

export default SuperMenu;
