import { Avatar, Button, Flex, Popover, Typography } from "antd";
import { LogoutOutlined, MoreOutlined, UserOutlined } from "@ant-design/icons";

const popoverContent = (
  <Flex vertical>
    <Button type="text" icon={<UserOutlined/>} style={{ justifyContent: 'flex-start' }}>ویرایش پروفایل</Button>
    <Button type="text" icon={<LogoutOutlined/>} style={{ justifyContent: "flex-start" }}>خروج</Button>
  </Flex>
);

const ChatHeader = ({ selectedChat }: { selectedChat: { key: number, label: string } }) => {
  return (
    <Flex align="center" justify="space-between" style={{ height: "100%", padding: "1rem 1.5rem" }}>
      <Flex align="center" gap="small">
        <Avatar shape="square" src="" alt="" style={{ minWidth: "3.2rem" }}/>
        <Typography.Paragraph ellipsis={{
          rows: 1,
        }} style={{ color: "inherit", marginBottom: 0 }}>{selectedChat.label}</Typography.Paragraph>
      </Flex>

      <Popover content={popoverContent} placement="bottomLeft" trigger="click">
        <Button type="text" icon={<MoreOutlined/>}></Button>
      </Popover>
    </Flex>
  );
}

export default ChatHeader;