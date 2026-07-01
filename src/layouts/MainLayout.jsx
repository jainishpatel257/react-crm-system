import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import AppHeader from "../components/common/AppHeader";
import AppSidebar from "../components/common/AppSidebar";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout
      style={{
        minHeight:"100vh",
      }}
    >
      <AppSidebar />

      <Layout>

        <AppHeader />

        <Content
          className="content"
        >
          <Outlet />
        </Content>

      </Layout>

    </Layout>
  );
};

export default MainLayout;