import {Avatar, Button, Flex, List, Typography} from "antd";
import React, {useState} from "react";

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
        key: 5,
        label: "گروه پنج"
    },
    {
        key: 5,
        label: "گروه پنج"
    },
    {
        key: 5,
        label: "گروه پنج"
    },
    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنجreteruoooooooooooooooooooooooooooooooooooooo"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },    {
        key: 5,
        label: "گروه پنج"
    },

];

const ChatMenu = () => {
    const [selected, setSelected] = useState(1);
    const row = 1;

    return(
        <List

            dataSource={items}
            renderItem={(item) => (
                <Button type="text" size="large" key={item.key} color={item.key === selected ? "primary" : "default"} variant={item.key === selected ? "filled" : "text"} style={{width: "100%", margin: "2px 0"}} onClick={() => {setSelected(item.key); console.log(selected)}}>
                    <Flex align="center" gap="small" style={{width: "100%"}}>
                        <Avatar shape="square" src="" style={{minWidth: "32px"}}/>
                        <Typography.Paragraph  ellipsis={{
                            row,
                        }} style={{color: "inherit", marginBottom: 0}}>{item.label}</Typography.Paragraph>
                    </Flex>
                </Button>
            )}
            style={{height: "100%", overflowX: "auto"}}
        />
    );
}

export default ChatMenu;