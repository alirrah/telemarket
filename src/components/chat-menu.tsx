import { Avatar, Button, Flex, List, Typography } from "antd";

const ChatMenu = ({
  selected,
  setSelected,
  items,
}: {
  selected: number;
  setSelected: (selected: number) => void;
  items: { id: number; image: string; name: string }[];
}) => {
  return (
    <List
      dataSource={items}
      renderItem={(item) => (
        <Button
          type="text"
          size="large"
          key={item.id}
          color={item.id === selected ? "primary" : "default"}
          variant={item.id === selected ? "filled" : "text"}
          style={{ width: "100%", margin: "0.2rem 0" }}
          onClick={() => {
            setSelected(item.id);
          }}
        >
          <Flex align="center" gap="small" style={{ width: "100%" }}>
            <Avatar
              shape="square"
              src={item.image}
              alt=""
              style={{ minWidth: "3.2rem" }}
            />
            <Typography.Paragraph
              className="display-none-in-mobile"
              ellipsis={{
                rows: 1,
              }}
              style={{ color: "inherit", marginBottom: 0 }}
            >
              {item.name}
            </Typography.Paragraph>
          </Flex>
        </Button>
      )}
      style={{ height: "100%", overflowX: "auto", padding: "0.2rem 0" }}
    />
  );
};

export default ChatMenu;
