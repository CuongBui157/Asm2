import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const { Content, Footer } = Layout;

const LayoutWebsite: React.FC = () => {
  return (
    <Layout className="layout">
      <Header></Header>
      <Content style={{ padding: "0 50px" }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default LayoutWebsite;
