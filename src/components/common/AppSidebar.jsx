import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;

const AppSidebar = () => {
  const location = useLocation();

  return (
    <Sider width={220}>
      <div
        style={{
          color: "#fff",
          textAlign: "center",
          padding: 20,
          fontWeight: "bold",
        }}
      >
        CRM
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        items={[
          {
            key: "/",
            icon: <DashboardOutlined />,
            label: <Link to="/">Dashboard</Link>,
          },
          {
            key: "/customers",
            icon: <TeamOutlined />,
            label: (
              <Link to="/customers">
                Customers
              </Link>
            ),
          },
        ]}
      />
    </Sider>
  );
};

export default AppSidebar;