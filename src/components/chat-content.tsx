import { Card, Image, List, Typography, Flex } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { redirect } from "next/navigation";

const time = (str: string) => {
  const utcDate = new Date(str);

  // منطقه زمانی کاربر
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // تبدیل به زمان محلی
  const localDate = utcDate.toLocaleString("fa-IR", { timeZone: userTimezone });

  // تقسیم تاریخ و زمان به بخش‌های جداگانه
  const [datePart, timePart] = localDate.split(", ");

  // فرمت کردن تاریخ
  const [year, month, day] = datePart
    .split("/")
    .map((part) => part.padStart(2, "0")); // اضافه کردن صفر در جلو اگر لازم باشد

  // فرمت کردن زمان
  const [hour, minutes, seconds] = timePart
    .split(":")
    .map((part) => part.padStart(2, "0"));

  // ساخت رشته با فرمت مورد نظر
  const formattedDate = `${year}/${month}/${day} - ${hour}:${minutes}:${seconds}`;

  return formattedDate;
};

const ChatContent = (id: { id: number }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (
      !token ||
      !(
        JSON.parse(token).hasOwnProperty("access") &&
        JSON.parse(token).hasOwnProperty("refresh")
      )
    ) {
      localStorage.removeItem("token");
      redirect("/login");
    }

    axios
      .get(
        `https://alisadeqi.pythonanywhere.com/api/channel/channels/${id.id}/posts/`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token).access}`,
          },
        },
      )
      .then((res) => {
        setItems(res.data);
      });
  }, []);

  return (
    <Flex vertical style={{ height: "100%" }} align="flex-end">
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
              <Typography.Paragraph style={{ textAlign: "justify" }}>
                {item.content}
              </Typography.Paragraph>
              <Image
                src={"https://alisadeqi.pythonanywhere.com" + item.file}
                alt=""
                style={{ marginBottom: 30 }}
              />
              <Typography.Paragraph
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "0.5rem",
                  marginTop: 0,
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
          maxWidth: "40rem",
        }}
      />
    </Flex>
  );
};

export default ChatContent;
