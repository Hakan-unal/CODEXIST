
import { useState } from 'react';
import { MenuProps } from 'antd';
import { AiOutlineHome, AiTwotoneBuild} from "react-icons/ai";

import { Layout, Menu } from "antd"
import { Link } from 'react-router-dom';
const { Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="">Home</Link>, 'home', <AiOutlineHome />),
  // {
  //   type: 'divider',
  // },
  getItem(<Link to="/projects">Projects</Link>, 'projects', <AiTwotoneBuild />),


];


const Sidebar: React.FC = (...props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [current, setCurrent] = useState('home');


 

  const handleMenu: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  return (
    <Sider theme={"light"} trigger={null} collapsible collapsed={collapsed}>
     

      <Menu
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        selectedKeys={[current]}
        onClick={handleMenu}
        theme="light"
        mode="inline"
        items={items}
      />

    </Sider>
  )
}


export default Sidebar;