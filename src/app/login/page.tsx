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
  theme
} from "antd";
import { useState } from "react";

const { Content } = Layout;
const { Title } = Typography;

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = (values: { username: string; password: string }) => {
    setLoading(true);
    console.log(values);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const { token: { colorBgLayout } } = theme.useToken();

  return (
    <Content style={{ height: "100dvh", backgroundColor: colorBgLayout }}>
      <Flex align="center" justify="center" style={{ height: "100%" }}>
        <Card>
          <Space size="large" direction="vertical">
            <Flex align="center" vertical gap="middle">
              <Avatar size={64} src="" alt="tele market logo" />
              <Title level={5}>تل مارکت</Title>
            </Flex>

            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="ایمیل"
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
                <Input />
              </Form.Item>

              <Form.Item
                label="رمز عبور"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "لطفا رمز عبور خود را وارد کنید!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item label={null} style={{ margin: 0 }}>
                <Button type="primary" htmlType="submit" loading={loading}>
                  ورورد
                </Button>
              </Form.Item>
            </Form>
          </Space>
        </Card>
      </Flex>
    </Content>
  );
};

export default Login;
