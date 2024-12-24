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
} from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";

const { Content } = Layout;
const { Title } = Typography;

const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    token: { colorBgLayout, colorTextDescription },
  } = theme.useToken();

  const onFinish = async (values: { username: string; password: string }) => {
    setLoading(true);
    console.log(values);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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

              <Form.Item
                name="confirm"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "لطفاً رمز عبور خود را تأیید کنید!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("دو رمز عبوری که وارد کرده‌اید، مطابقت ندارند!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="تاییدیه رمز عبور"
                  prefix={
                    <LockOutlined style={{ color: colorTextDescription }} />
                  }
                />
              </Form.Item>

              <Form.Item style={{ margin: 0 }}>
                <Flex justify="center">
                  <Button type="primary" htmlType="submit" loading={loading}>
                    ثبت نام
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
                  از قبل حساب کاربری دارید؟
                </Typography.Paragraph>
                <Link href="/login">ورود</Link>
              </Flex>
            </Form>
          </Space>
        </Card>
      </Flex>
    </Content>
  );
};

export default Register;
