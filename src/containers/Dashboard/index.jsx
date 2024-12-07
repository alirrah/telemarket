import {Layout, theme} from 'antd';
import ChatContent from "./ChatContent.jsx";
import ChatHeader from "./ChatHeader.jsx";
import ChatMenu from "./ChatMenu.jsx";


const {Header, Content, Footer, Sider} = Layout;


const Dashboard = () => {

    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Layout style={{height: '100dvh'}}>
            <Sider theme="light" style={{padding: "0.8rem 1.6rem"}}><ChatMenu/></Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                ><ChatHeader/></Header>
                <Content
                    style={{
                        margin: '16px',
                    }}
                >
                    <ChatContent/>
                </Content>
            </Layout>
        </Layout>
    );
};
export default Dashboard;