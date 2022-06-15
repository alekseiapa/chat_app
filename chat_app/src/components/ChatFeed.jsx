import React from "react";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import HisMessage from "./HisMessage";
export default function ChatFeed(props) {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];
  const renderMEssages = () => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = (userName = userName === message.sender.userName);
      return <div key={`msg_${index}`}></div>;
    });
  };
  return <div>ChatFeed</div>;
}
