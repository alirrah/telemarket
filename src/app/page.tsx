"use client";

import { Layout, theme } from "antd";
import ChatContent from "@/components/chat-content";
import ChatHeader from "@/components/chat-header";
import ChatMenu from "@/components/chat-menu";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import axios from "axios";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const [selected, setSelected] = useState(1);
  const [items, setItems] = useState([]);
  const token = localStorage.getItem("token");
  if (
    !token ||
    !(
      JSON.parse(token).hasOwnProperty("access") &&
      JSON.parse(token).hasOwnProperty("refresh")
    )
  ) {
    localStorage.removeItem("token");
    redirect("/login");
  }

  useEffect(() => {
    axios
      .get("https://alisadeqi.pythonanywhere.com/api/channel/detail", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token).access}`,
        },
      })
      .then((res) => {
        setItems(res.data);
      });
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100dvh" }}>
      <Sider className="close-in-mobile" theme="light">
        <ChatMenu selected={selected} setSelected={setSelected} items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            height: "inherit",
          }}
        >
          <ChatHeader selectedChat={items[selected]} />
        </Header>
        <Content
          style={{
            padding: "1.6rem",
          }}
        >
          <ChatContent id={selected} />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
