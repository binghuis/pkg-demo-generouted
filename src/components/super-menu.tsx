import { Link, matchPath, useLocation, useMatches } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { Path } from "@/router";

interface ItemBase {
  icon?: React.ReactNode;
  label: string;
}

interface LeafItem extends ItemBase {
  path: Path;
  related?: Path[];
}

interface InternalItem extends ItemBase {
  key: string;
  children: Item[];
}

type Item = InternalItem | LeafItem;
interface IProps {
  items: Item[];
}

const SuperMenu: React.FunctionComponent<IProps> = (props) => {
  const INDEX = "/";
  const { items } = props;
  const [selectedKey, setSelectedKey] = useState<string>(INDEX);
  const [openKeys, setOpenKeys] = useState<string[]>();
  const { pathname } = useLocation();

  const findKey = (items: Item[]) => {
    const findItem = (item: Item, itemsTemp: Item[]) => {
      const { path, related } = item as LeafItem;
      const { children } = item as InternalItem;

      let match;

      if (path) {
        const paths = related ? [path, ...related] : [path];
        match = paths.some((path) => matchPath(path, pathname));
      }

      itemsTemp.push(item);

      if (match) {
        const lastItem = itemsTemp[itemsTemp.length - 1] as LeafItem;

        setSelectedKey(lastItem.path);

        if (itemsTemp.length > 1) {
          const openKeys = itemsTemp
            .slice(0, -1)
            .map((item) => (item as InternalItem).key);

          setOpenKeys(openKeys);
        }
      }

      if (children) {
        children.forEach((child) => findItem(child, itemsTemp));
      }
    };
    items.forEach((item) => findItem(item, []));
  };

  useEffect(() => {
    findKey(items);
  }, [pathname]);

  const filteredItemsForMenu = (items: Item[]): NonNullable<ItemType>[] => {
    return items.map((item) => {
      const { label } = item;
      const { path } = item as LeafItem;
      const { children, key } = item as InternalItem;

      const menuItem: NonNullable<ItemType> & {
        children?: NonNullable<ItemType>[];
      } = {
        label: children ? label : <Link to={path}>{label}</Link>,
        key: path ?? key,
        title: label,
      };

      if (children) {
        menuItem.children = filteredItemsForMenu(children);
      }

      return menuItem;
    });
  };

  const menuItems = filteredItemsForMenu(items);

  return (
    <Menu
      selectedKeys={[selectedKey]}
      openKeys={openKeys}
      onOpenChange={setOpenKeys}
      mode="inline"
      items={menuItems}
    />
  );
};

export default SuperMenu;
