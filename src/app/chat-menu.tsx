import { Avatar, Button, Flex, List, Typography } from "antd";

const items = [
  {
    key: 1,
    label: "گروه یک"
  },
  {
    key: 2,
    label: "گروه دو"
  },
  {
    key: 3,
    label: "گروه سه"
  },
  {
    key: 4,
    label: "گروه چهار"
  },
  {
    key: 5,
    label: "گروه پنج"
  },
  {
    key: 6,
    label: "گروه پنج"
  },
  {
    key: 7,
    label: "گروه پنج"
  },
  {
    key: 8,
    label: "گروه پنج"
  },
  {
    key: 9,
    label: "گروه پنج"
  }, {
    key: 10,
    label: "گروه پنج"
  }, {
    key: 11,
    label: "گروه پنج"
  }, {
    key: 12,
    label: "گروه پنج"
  }, {
    key: 13,
    label: "گروه پنجreteruoooooooooooooooooooooooooooooooooooooo"
  }, {
    key: 14,
    label: "گروه پنج"
  }, {
    key: 15,
    label: "گروه پنج"
  }, {
    key: 16,
    label: "گروه پنج"
  }, {
    key: 17,
    label: "گروه پنج"
  }, {
    key: 18,
    label: "گروه پنج"
  }, {
    key: 19,
    label: "گروه پنج"
  }, {
    key: 20,
    label: "گروه پنج"
  }, {
    key: 21,
    label: "گروه پنج"
  }, {
    key: 22,
    label: "گروه پنج"
  }, {
    key: 23,
    label: "گروه پنج"
  }, {
    key: 24,
    label: "گروه پنج"
  }, {
    key: 25,
    label: "گروه پنج"
  }, {
    key: 26,
    label: "گروه پنج"
  }, {
    key: 27,
    label: "گروه پنج"
  }, {
    key: 28,
    label: "گروه پنج"
  }, {
    key: 29,
    label: "گروه پنج"
  }, {
    key: 30,
    label: "گروه پنج"
  }, {
    key: 31,
    label: "گروه پنج"
  }, {
    key: 32,
    label: "گروه پنج"
  }, {
    key: 33,
    label: "گروه پنج"
  },

];

const ChatMenu = ({ selected, setSelected }) => {
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
            <Typography.Paragraph ellipsis={{
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