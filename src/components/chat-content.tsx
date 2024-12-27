import { Card, Image, List, Typography, Flex } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { redirect } from "next/navigation";

const time = (str: string) => {
  const utcDate = new Date(str);
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localDate = utcDate.toLocaleString("fa-IR", { timeZone: userTimezone });
  const [datePart, timePart] = localDate.split(", ");
  const [year, month, day] = datePart
    .split("/")
    .map((part) => part.padStart(2, "0"));
  const [hour, minutes, seconds] = timePart
    .split(":")
    .map((part) => part.padStart(2, "0"));
  return `${hour}:${minutes}:${seconds} - ${year}/${month}/${day}`;
};

const ChatContent = ({ id }: { id: number | null }) => {
  const [items, setItems] = useState<
    { id: number; content: string; file: string; created_at: string }[]
  >([]);

  useEffect(() => {
    if (id) {
      const token = window.localStorage.getItem("token");
      if (
        !token ||
        !(
          JSON.parse(token).hasOwnProperty("access") &&
          JSON.parse(token).hasOwnProperty("refresh")
        )
      ) {
        window.localStorage.removeItem("token");
        redirect("/login");
      }

      axios
        .get(
          `https://alisadeqi.pythonanywhere.com/api/channel/channels/${id}/posts/`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(token).access}`,
              "Cache-Control": "no-cache",
            },
          },
        )
        .then((res) => {
          setItems(res.data);
        });
    }
  }, [id]);

  return (
    <Flex vertical style={{ height: "100%" }} align="flex-end">
      {id && items.length !== 0 ? (
        <List
          dataSource={items}
          renderItem={(item) => {
            return (
              <Card
                key={item.id}
                size="small"
                style={{
                  position: "relative",
                  marginBottom: "1rem",
                }}
              >
                <Image
                  src={"https://alisadeqi.pythonanywhere.com" + item.file}
                  alt=""
                />
                <div style={{ blockSize: "1rem" }}></div>
                <Typography.Paragraph
                  style={{ textAlign: "justify", whiteSpace: "pre-line" }}
                >
                  {item.content}
                </Typography.Paragraph>
                <div style={{ blockSize: "2rem" }}></div>
                <Typography.Paragraph
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "0.5rem",
                    margin: 0,
                  }}
                >
                  {time(item.created_at)}
                </Typography.Paragraph>
              </Card>
            );
          }}
          style={{
            width: "100%",
            overflowX: "auto",
            padding: "0.2rem 0",
            maxWidth: "60rem",
          }}
        />
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default ChatContent;
