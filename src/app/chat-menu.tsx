import { Avatar, Button, Flex, List, Typography } from "antd";

const ChatMenu = ({ selected, setSelected, items }) => {
  return (
    <List
      dataSource={items}
      renderItem={(item) => (
        <Button type="text" size="large" key={item.key} color={item.key === selected ? "primary" : "default"}
                variant={item.key === selected ? "filled" : "text"} style={{ width: "100%", margin: "0.2rem 0" }}
                onClick={() => {
                  setSelected(item.key);
                }}>
          <Flex align="center" gap="small" style={{ width: "100%" }}>
            <Avatar shape="square" src="" alt="" style={{ minWidth: "3.2rem" }}/>
            <Typography.Paragraph className="display-none-in-mobile" ellipsis={{
              rows: 1,
            }} style={{ color: "inherit", marginBottom: 0 }}>{item.label}</Typography.Paragraph>
          </Flex>
        </Button>
      )}
      style={{ height: "100%", overflowX: "auto", padding: "0.2rem 0" }}
    />
  );
}

export default ChatMenu;