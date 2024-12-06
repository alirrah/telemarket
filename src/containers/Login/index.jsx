import {Layout, Card, Form, Input, Checkbox, Button, Flex, Avatar, Space} from "antd";
import {useState} from "react";

const {Content} = Layout;

const Login = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        console.log(values);
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    return (
        <Content style={{height: "100dvh", backgroundColor: "#f5f5f5"}}>
            <Flex align="center" justify="center" style={{height: "100%"}}>
                <Card>
                    <Space size="large" direction="vertical">
                        <Flex justify="center">
                            <Avatar size={64} src="" alt="tele market logo"/>
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
                                label="نام کاربری"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'لطفا نام کاربری خود را وارد کنید!',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label="رمز عبور"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'لطفا رمز عبور خود را وارد کنید!',
                                    },
                                ]}
                            >
                                <Input.Password/>
                            </Form.Item>


                            <Form.Item label={null} style={{margin: 0}}>
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
}

export default Login;