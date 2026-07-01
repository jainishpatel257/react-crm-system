import { Layout, Typography, Button, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";

import { logout } from "../../features/auth/authSlice";

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Header
      style={{
        background: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <Title level={4} style={{ margin: 0 }}>
        CRM System
      </Title>

      <Space>
        <span>{user?.email}</span>

        <Button
          danger
          icon={<LogoutOutlined />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Space>
    </Header>
  );
};

export default AppHeader;