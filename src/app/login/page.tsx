"use client";

import {
  Layout,
  Card,
  Form,
  Input,
  Button,
  Flex,
  Avatar,
  Space,
  Typography,
  theme,
  Tabs,
} from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import type { TabsProps } from "antd";
import { useState } from "react";

const { Content } = Layout;
const { Title } = Typography;

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [tabKey, setTabKey] = useState("1");

  const onFinish = (values: { username: string; password: string }) => {
    setLoading(true);
    console.log({ tabKey: tabKey, ...values });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const {
    token: { colorBgLayout, colorTextDescription },
  } = theme.useToken();

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "ورورد",
    },
    {
      key: "2",
      label: "ثبت‌نام",
    },
  ];

  const onChange = (key: string) => {
    setTabKey(key);
  };

  return (
    <Content style={{ height: "100dvh", backgroundColor: colorBgLayout }}>
      <Flex align="center" justify="center" style={{ height: "100%" }}>
        <Card styles={{ body: { paddingInline: 0 } }}>
          <Space size="large" direction="vertical">
            <Flex align="center" vertical gap="middle">
              <Avatar size={64} src="" alt="tele market logo" />

              <Title level={5}>تل مارکت</Title>
            </Flex>

            <Tabs
              defaultActiveKey={tabKey}
              centered
              items={items}
              onChange={onChange}
            />

            <Form
              style={{
                paddingInline: 24,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "لطفا ایمیل خود را وارد کنید!",
                  },
                  {
                    type: "email",
                    message: "ایمیل وارد شده متعبر نمی باشد!",
                  },
                ]}
              >
                <Input
                  placeholder="ایمیل"
                  prefix={
                    <MailOutlined style={{ color: colorTextDescription }} />
                  }
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "لطفا رمز عبور خود را وارد کنید!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="رمز عبور"
                  prefix={
                    <LockOutlined style={{ color: colorTextDescription }} />
                  }
                />
              </Form.Item>

              <Form.Item style={{ margin: 0 }}>
                <Flex justify="center">
                  <Button type="primary" htmlType="submit" loading={loading}>
                    ورورد
                  </Button>
                </Flex>
              </Form.Item>
            </Form>
          </Space>
        </Card>
      </Flex>
    </Content>
  );
};

export default Login;
