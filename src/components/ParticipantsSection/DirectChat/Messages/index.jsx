import { useEffect, useRef } from "react";

import "./styles.css";
import { MessageItem } from "./MessageItem";

export const Messages = ({ messages }) => {
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="direct_messages_container">
      {messages.map((message) => {
        return (
          <MessageItem
            messageContent={message.messageContent}
            isAuthor={message.isAuthor}
            key={`${message.messageContent}-${message.identity}`}
          />
        );
      })}
      <div ref={scrollRef}></div>
    </div>
  );
};
