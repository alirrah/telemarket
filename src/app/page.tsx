"use client";

import { Layout, theme } from 'antd';
import ChatContent from "./chat-content";
import ChatHeader from "./chat-header";
import ChatMenu from "./chat-menu";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const { token: { colorBgContainer } } = theme.useToken();

  return (
    <Layout style={{ height: '100dvh' }}>
      <Sider theme="light" style={{ padding: "0.8rem 0" }}><ChatMenu /></Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        ><ChatHeader /></Header>
        <Content
          style={{
            margin: '1.6rem',
          }}
        >
          <ChatContent />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;