"use client";

import { Layout, theme } from 'antd';
import ChatContent from "./chat-content";
import ChatHeader from "./chat-header";
import ChatMenu from "./chat-menu";
import { useState } from "react";

const { Header, Content, Sider } = Layout;

const items = [
  {
    key: 1,
    label: "گروه یک"
  },
  {
    key: 2,
    label: "گروه دو"
  },
  {
    key: 3,
    label: "گروه سه"
  },
  {
    key: 4,
    label: "گروه چهار"
  },
  {
    key: 5,
    label: "گروه پنج"
  },
  {
    key: 6,
    label: "گروه پنج"
  },
  {
    key: 7,
    label: "گروه پنج"
  },
  {
    key: 8,
    label: "گروه پنج"
  },
  {
    key: 9,
    label: "گروه پنج"
  }, {
    key: 10,
    label: "گروه پنج"
  }, {
    key: 11,
    label: "گروه پنج"
  }, {
    key: 12,
    label: "گروه پنج"
  }, {
    key: 13,
    label: "گروه پنجreteruoooooooooooooooooooooooooooooooooooooo"
  }, {
    key: 14,
    label: "گروه پنج"
  }, {
    key: 15,
    label: "گروه پنج"
  }, {
    key: 16,
    label: "گروه پنج"
  }, {
    key: 17,
    label: "گروه پنج"
  }, {
    key: 18,
    label: "گروه پنج"
  }, {
    key: 19,
    label: "گروه پنج"
  }, {
    key: 20,
    label: "گروه پنج"
  }, {
    key: 21,
    label: "گروه پنج"
  }, {
    key: 22,
    label: "گروه پنج"
  }, {
    key: 23,
    label: "گروه پنج"
  }, {
    key: 24,
    label: "گروه پنج"
  }, {
    key: 25,
    label: "گروه پنج"
  }, {
    key: 26,
    label: "گروه پنج"
  }, {
    key: 27,
    label: "گروه پنج"
  }, {
    key: 28,
    label: "گروه پنج"
  }, {
    key: 29,
    label: "گروه پنج"
  }, {
    key: 30,
    label: "گروه پنج"
  }, {
    key: 31,
    label: "گروه پنج"
  }, {
    key: 32,
    label: "گروه پنج"
  }, {
    key: 33,
    label: "گروه پنج"
  },
];

const Dashboard = () => {
  const [selected, setSelected] = useState(1);

  const { token: { colorBgContainer } } = theme.useToken();

  return (
    <Layout style={{ height: '100dvh' }}>
      <Sider theme="light"><ChatMenu selected={selected} setSelected={setSelected} items={items} /></Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            height: 'inherit'
          }}
        ><ChatHeader selectedChat={items[selected]} /></Header>
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