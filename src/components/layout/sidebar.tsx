import { useState } from "react";
import { Badge, Divider } from "antd";
import { CiShoppingCart } from "react-icons/ci";

import { Layout } from "antd";
const { Sider } = Layout;

const Sidebar: React.FC = (...props) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Sider
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
      theme={"light"}
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={200}
      collapsedWidth={40}
    >
            <Divider />

      <Badge showZero count={0}>
        <CiShoppingCart size={25} />
      </Badge>
    </Sider>
  );
};

export default Sidebar;
