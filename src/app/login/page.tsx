"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { useState } from "react";

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
  notification,
} from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

import axios from "axios";

const { Content } = Layout;
const { Title } = Typography;

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [api, contextHolder] = notification.useNotification();
  const router = useRouter();

  const {
    token: { colorBgLayout, colorTextDescription },
  } = theme.useToken();

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true);
    axios
      .post(
        "https://alisadeqi.pythonanywhere.com/api/account/login/",
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((res) => {
        if (window !== undefined) {
          window.localStorage.setItem("token", JSON.stringify(res.data));
        }
        router.push("/");
      })
      .catch((err) => {
        api.error({
          message: "خطا در ارسال درخواست",
          description: err.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Content style={{ height: "100dvh", backgroundColor: colorBgLayout }}>
      {contextHolder}
      <Flex align="center" justify="center" style={{ height: "100%" }}>
        <Card styles={{ body: { paddingInline: 0 } }}>
          <Space size="large" direction="vertical">
            <Flex align="center" vertical gap="middle">
              <Avatar size={64} src="" alt="tele market logo" />

              <Title level={5}>تل مارکت</Title>
            </Flex>

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
                    ورود
                  </Button>
                </Flex>
              </Form.Item>

              <Flex
                justify="center"
                align="center"
                gap="small"
                style={{ paddingTop: "2rem" }}
              >
                <Typography.Paragraph style={{ margin: 0 }}>
                  حساب کاربری ندارید؟
                </Typography.Paragraph>
                <Link href="/register">ثبت نام</Link>
              </Flex>
            </Form>
          </Space>
        </Card>
      </Flex>
    </Content>
  );
};

export default Login;
