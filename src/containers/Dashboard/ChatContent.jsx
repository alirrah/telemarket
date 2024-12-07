import React from "react";
import {theme} from "antd";

const ChatContent = () => {

    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <div
            style={{
                padding: 24,
                height: "100%",
                borderRadius: borderRadiusLG,
                background: colorBgContainer,
            }}
        >
        </div>
    );
}

export default ChatContent;