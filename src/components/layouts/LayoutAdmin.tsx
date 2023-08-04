import { useState } from "react";
import { Layout, Menu } from "antd";
import { Outlet, Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const LayoutAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={[
            {
              key: "1",
              label: <Link to={"/admin"}>Dashboard</Link>,
            },
            {
              key: "2",
              label: <Link to={"/admin/product"}>Product</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#FFF",
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
          }}>
          Trang quản trị
        </Header>
        <Content style={{ margin: "0 16px",padding:"20px" }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
