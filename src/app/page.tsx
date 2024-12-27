"use client";

import { Layout, theme, Watermark } from "antd";
import ChatContent from "@/components/chat-content";
import ChatHeader from "@/components/chat-header";
import ChatMenu from "@/components/chat-menu";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [items, setItems] = useState<
    { id: number; image: string; name: string }[]
  >([]);
  const router = useRouter();

  useEffect(() => {
    let token: string | null = null;
    if (window !== undefined) {
      token = window.localStorage.getItem("token");
    }
    if (
      !token ||
      !(
        JSON.parse(token).hasOwnProperty("access") &&
        JSON.parse(token).hasOwnProperty("refresh")
      )
    ) {
      window.localStorage.removeItem("token");
      router.replace("/login");
    } else {
      axios
        .get("https://alisadeqi.pythonanywhere.com/api/channel/detail", {
          headers: {
            Authorization: `Bearer ${JSON.parse(token).access}`,
            "Cache-Control": "no-cache",
          },
        })
        .then((res) => {
          setItems(res.data);
        });
    }
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
          <ChatHeader
            selectedChat={
              selected ? items.filter((item) => item.id === selected)[0] : null
            }
          />
        </Header>
        <Watermark
          content="Tele Market"
          style={{ flex: 1 }}
          gap={[50, 50]}
          zIndex={0}
        >
          <Content
            style={{
              padding: "1.6rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            <ChatContent id={selected} />
          </Content>
        </Watermark>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
